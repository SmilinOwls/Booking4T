import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import DataAPI from '../../utils/DataAPI';
import { DeleteOutlined, ArrowLeftOutlined } from '@ant-design/icons';
import { Row, Col, List, Card, Popconfirm, Avatar, Rate } from 'antd';

function PlaceReview() {
    const { search } = useLocation();
    const id = new URLSearchParams(search).get('id');
    const [place, setPlace] = useState({});
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        (async () => {
            try {
                const newReviews = [];
                const place = await DataAPI.getPlaceById(id);
                place.reviews.length !== 0 && await Promise.all(place.reviews.map(async (review) => {
                    try {
                        const user = await DataAPI.getUserById(review.user);
                        newReviews.push({ ...review, userInfo: user });
                    } catch (error) {

                    }

                }));
                setPlace({ ...place, reviews: [...newReviews] });
                setReviews(newReviews);
            } catch (error) {
                throw error;
            }
        })();
    }, []);

    useEffect(() => {
        setPlace({ ...place, reviews: [...reviews] });
    }, [reviews]);

    const deleteReview = async (reviewId) => {
        const newReviews = reviews.filter((review) => review._id !== reviewId);
        try {
            await DataAPI.deleteReview(place._id, reviewId);
        } catch (error) {
            return Promise.reject(new Error(error));
        }
        setReviews(newReviews);
    };

    return (
        <div className='mt-3'>
            <div
                className='text-primary mb-3'
                style={{ cursor: "pointer" }}
            >
                <Link to="/admin/place" className='d-flex align-items-center text-decoration-none'><ArrowLeftOutlined /><span className='ms-2'>Back to Place List</span></Link>
            </div>
            <h3 className='my-2'>Reviews On Place</h3>
            <List
                className='mt-4'
                dataSource={reviews}
                grid={{ gutter: 16 }}
                pagination={{
                    onChange: (page) => {
                        console.log(page);
                    },
                    pageSize: 3,
                }}
                renderItem={(item) => (
                    <List.Item
                        key={item._id}

                    >
                        <Card
                            style={{ width: 270 }}
                            hoverable
                            actions={
                                [<Popconfirm title="Sure to delete?" onConfirm={() => deleteReview(item._id)}>
                                    <span style={{ cursor: "pointer" }}><DeleteOutlined /></span>
                                </Popconfirm>]}

                            extra={<div className='fw-bold'><Rate value={item.rating} className="me-3" />{item.rating}</div>}

                        >
                            <List.Item.Meta
                                avatar={<Avatar src={item.userInfo.profilePic} />}
                                title={item.userInfo.username}
                                description={item.userInfo.email}
                            ></List.Item.Meta>
                            <div className='mt-2'>
                                {item.comment}
                            </div>
                        </Card>
                    </List.Item>
                )}
            >

            </List>

        </div>
    )
}

export default PlaceReview