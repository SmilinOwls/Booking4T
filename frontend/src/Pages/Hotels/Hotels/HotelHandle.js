import React, { useEffect, useState, useRef, useContext } from "react";
import "./HotelHandle.css";
import { AiOutlineSearch } from "react-icons/ai";
import { MdOutlineExpandMore } from "react-icons/md";
import { PrevFilterContext } from "../../../context/PrevFilterContext";
import { useDispatch } from "react-redux";
import {filterHotelBySort} from '../../../Actions/HotelsAction'
const dataFake = [
  {
    value: "Rate: Low to High",
    sort: "rate_lth",
  },
  {
    value: "Rate: High to Low",
    sort: "rate_htl",
  },
];
const HotelHandle = () => {
  const [isDrop, setIsDrop] = useState(false);
  const [isShow, setIsShow] = useState(false);
  const { handlePrevious } = useContext(PrevFilterContext);
  const ref = useRef();
  const { selectedDrop, setSelectedDrop } = handlePrevious();
  const dispatch = useDispatch();

  const handleClickDrop = (e) => {
    const el = ref.current;

    if (el && el.contains(e.target)) {
      setIsDrop(!isDrop);
    } else {
      setIsDrop(false);
    }
  };

  const onFilterBySort = (sort, value) => {
    handlePrevious("sort");
    const action = filterHotelBySort(sort);
    dispatch(action);
    setSelectedDrop(value);
  };

  return (
    <div className="shop-handle">
      <form className="shop-handle__search">
        <input  placeholder="Search your products" name="keyword" />
        <button className="shop-handle__search-btn">
          <AiOutlineSearch />
        </button>
      </form>
      <div className="shop-hanlde__drop">
        <div ref={ref} className="shop-handle__drop-current">
          <span>{selectedDrop}</span>
          <MdOutlineExpandMore onClick={handleClickDrop} />
        </div>
        <ul
          className={
            isDrop ? "shop-handle__drop-list drop" : "shop-handle__drop-list"
          }
          style={{ listStyleType: "none" }}
        >
          {dataFake.map((item, index) => (
            <li key={index} className="shop-handle__drop-item"  onClick={() => onFilterBySort(item.sort, item.value)}>
              {item.value}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default HotelHandle;
