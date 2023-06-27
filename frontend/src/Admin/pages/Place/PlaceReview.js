import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import DataAPI from '../../utils/DataAPI';

function PlaceReview() {
    const { search } = useLocation();
    const id = new URLSearchParams(search).get('id');
    const [place, setPlace] = useState({});
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        (async () => {
            try {
                const place = await DataAPI.getPlaceById(id);
                setReviews(place.reviews);
                setPlace(place);
            } catch (error) {
                throw error;
            }
        })()
    }, []);

    useEffect(() => {
        setPlace({ ...place, reviews: [...reviews] });
    }, [reviews]);

    console.log(place);

    return (
        <div>PlaceReview</div>
    )
}

export default PlaceReview