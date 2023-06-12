import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { addDays } from "date-fns";
import { getDetailRoom } from "../../Actions/RoomAction";
import { useDispatch, useSelector } from "react-redux";
import RoomGallery from "../../Components/RoomGallery/RoomGallery";
import { DateRangePicker } from "react-date-range";
import { AiOutlineCheck, AiFillStar } from "react-icons/ai";
import {BsStarHalf} from 'react-icons/bs'

const DetailRoom = () => {
  const { roomId } = useParams();
  const { detailRoom, isLoading } = useSelector((state) => state.detailRoom);
  const [numberOfGuests, setNumberOfGuests] = useState(0);
  const [days, setDays] = useState([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 7),
      key: "selection",
    },
  ]);
  console.log(days);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDetailRoom(roomId));
  }, [roomId, getDetailRoom]);

  return (
    <div className="mt-8 px-8 pt-8">
      <p className="text-[25px] font-semibold">{detailRoom.title}</p>
      <RoomGallery room={detailRoom} />
      <div className="lg:flex lg:gap-8 my-8 lg:my-4">
        <div className="px-4 lg:border-r lg:border-gray-300 lg:w-1/2">
          <h2 className="font-semibold text-[25px] mb-3">Description</h2>
          <p className="text-[20px] leading-tight">Type: {detailRoom.typeRoom}</p>
          <p className="text-[20px] leading-tight">{detailRoom.description}</p>
        </div>
        <div className="lg:w-1/2">
          <h2 className="font-semibold text-[25px] mb-3">Perks</h2>
          {detailRoom?.perks?.map((item, index) => (
            <div key={index}>
              <div className="flex">
                <AiOutlineCheck className="font-semibold" />
                <p className="ml-3 text-[20px] leading-tight">{item}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <h2 className="font-semibold py-3 text-[20px]">
        Select check in/check out:
      </h2>
      <div className="flex items-center justify-center">
        <DateRangePicker
          onChange={(item) => setDays([item.selection])}
          showSelectionPreview={true}
          moveRangeOnFirstSelection={false}
          months={2}
          ranges={days}
          direction="horizontal"
        />
      </div>
      <div className="py-3 px-4">
        <div className="font-semibold text-[20px] py-3">
          <label>Number of guests:</label>
        </div>
          <input 
              type="number"
              placeholder="Enter your number"
              value={numberOfGuests}
              onChange={ev => setNumberOfGuests(ev.target.value)}
              className="border border-gray-200 rounded-lg px-3 py-2"    
          />
          {numberOfGuests > detailRoom.maxGuests ? (<p className="text-red-400">The number of guests cannot exceed the allowed number</p>) : (<></>)}
        </div>
      <div>
        <div className="mt-8 lg:mt-6 lg:border-t lg:border-gray-300 lg:flex lg:gap-8">
          <div className="px-4 lg:border-r lg:border-gray-300 lg:w-1/2 my-6">
            <p className="text-[20px] leading-tight">
              Max of number guests: {detailRoom.maxGuests}
            </p>
            <p  className="text-[20px] leading-tight">Number of bed: {detailRoom.numOfBed}</p>
            <p className="text-[20px] leading-tight">In Stock: {detailRoom.countInStock} rooms</p>
          </div>
          <div className="lg:w-1/2 lg:my-6 lg:justify-end lg:items-center">
            <div className="flex text-[#F6FA70] text-[20px]">
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              {detailRoom.ratings === 5 ? <AiFillStar /> : <BsStarHalf />}
              <span style={{ margin: "0 7px", fontSize: "22px", color: 'black' }}>
                {detailRoom.ratings}/5 Ratings
              </span>
            </div>
            <div>
              <p className="font-semibold text-[22px] text-red-700">Price: ${detailRoom.price}</p>
              <button 
                className="w-full border bg-[#faa935] border-[#faa935] rounded-lg px-3 py-2 text-[#000]  font-semibold hover:text-red-700 transition-all"
                
              >
                Booking
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailRoom;
