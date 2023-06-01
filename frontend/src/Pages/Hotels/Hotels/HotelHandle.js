import React, {useEffect, useState, useRef} from 'react';
import './HotelHandle.css'
import {FiSearch} from 'react-icons/fi';
import {MdOutlineExpandMore} from 'react-icons/md';

const dataFake = [
  {
    value: 'Rate: Low to High',
    sort: 'rate_lth',
  },
  {
    value: 'Rate: High to Low',
    sort: 'rate_htl',
  },
];
const HotelHandle = () => {
  const [isDrop, setIsDrop] = useState(false);
  const [isShow, setIsShow] = useState(false)
  return (
    <div className='shop-handle'>
        <form className="shop-handle__search">
             <input 
                value={""}
                
                placeholder="Search your products"
                name='keyword'
             />
             <button className='shop-handle__search-btn'>
                 <FiSearch />
             </button>
        </form>
        <div className='shop-hanlde__drop'>
            <div className="shop-handle__drop-current">
                <span></span>
                <MdOutlineExpandMore />
            </div>
            <ul
                 className={
                    isDrop ? 'shop-handle__drop-list drop' : 'shop-handle__drop-list'
                  }
                  style={{listStyleType: "none"}}
            >
                {dataFake.map((item, index) =>(
                    <li
                       key={index}
                      
                       className='shop-handle__drop-item'
                    >
                      {item.value}
                    </li>
                ))}
            </ul>
        </div>
       
  </div>
  )
}

export default HotelHandle