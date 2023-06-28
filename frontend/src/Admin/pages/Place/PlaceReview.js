import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import DataAPI from '../../utils/DataAPI';
import { DeleteOutlined } from '@ant-design/icons';
import { Row, Col, List, Card, Popconfirm, Avatar } from 'antd';

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
                await Promise.all(place.reviews.map(async (review) => {
                    const user = await DataAPI.getUserById(review.user);
                    newReviews.push({ ...review, userInfo: user });
                }));
                setReviews(newReviews);
            } catch (error) {
                throw error;
            }
        })();
    }, []);

    useEffect(() => {
        setPlace({ ...place, reviews: [...reviews] });
    }, [reviews]);

    return (
        <div className='mt-3'>
            <h3 className='my-2'>Reviews On Place</h3>
            <List
                className='mt-4'
                dataSource={reviews}
                grid={{ gutter: 16 }}
                renderItem={(item, index) => (
                    <List.Item
                        key={index}
                    >
                        <Card
                            style={{ width: 270 }}
                            hoverable
                            actions={
                                [<Popconfirm title="Sure to delete?">
                                    <span style={{ cursor: "pointer" }}><DeleteOutlined /></span>
                                </Popconfirm>]}
                        >
                            <List.Item.Meta
                                avatar={<Avatar src={item.userInfo.profilePic} />}
                                title={item.userInfo.username}
                                description={item.userInfo.email}
                            ></List.Item.Meta>
                            {item.comment}
                        </Card>
                    </List.Item>
                )}
            >

            </List>

        </div>
    )
}

export default PlaceReview