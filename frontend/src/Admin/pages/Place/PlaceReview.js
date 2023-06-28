import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import DataAPI from '../../utils/DataAPI';
import { DeleteOutlined } from '@ant-design/icons';
import { updatePlace } from '../../actions/PlaceAction';
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
                console.log(place);
                place.reviews.length !== 0 && await Promise.all(place.reviews.map(async (review) => {
                    const user = await DataAPI.getUserById(review.user);
                    newReviews.push({ ...review, userInfo: user });
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

                            extra={<Rate value={item.rating}></Rate>}

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