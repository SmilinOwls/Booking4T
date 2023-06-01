import React, {useEffect} from 'react'
import "./HotelList.css";
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import {useDispatch, useSelector} from 'react-redux';
import {getHotelsFilter} from '../../../Actions/HotelsAction';
import HotelCard from '../../../Components/HotelCard/HotelCard';
import HotelsEmpty from './HotelsEmpty';

const HotelList = () => {
  const {hotelsFilter, isLoading} = useSelector((state) => state.getHotelsFilter);
  console.log(hotelsFilter)
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getHotelsFilter())
  }, []);

  if(isLoading){
    return (
      <div className='spinner'>
          <CircularProgressbar value={100} maxValue={1} text={`${100}%`}/>
        </div>
    )
  }
  return (
    <>
      {hotelsFilter.length <= 0 && <HotelsEmpty />}
      <div className='hotel-products'>
         {hotelsFilter && hotelsFilter.map((item) => (
                <HotelCard key={item._id} {...item}/>
          ))}
      </div>
    </>
   
  )
}

export default HotelList