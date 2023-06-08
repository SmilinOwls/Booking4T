import React, {useEffect} from 'react';
import {Container, Row, Col} from 'reactstrap';
import {useDispatch, useSelector} from 'react-redux';
import {useParams} from 'react-router-dom';
import {getDetailHotel} from '../../Actions/HotelsAction'
import "./style.css";
import DetailImage from './DetailImage/DetailImage';
import DetailMain from './DetailMain/DetailMain';
import {AiOutlineCheck} from 'react-icons/ai'

const DetailHotel = () => {
    const {hotelId} = useParams();
    const {detailHotel, isLoading} = useSelector((state) => state.detailHotel);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getDetailHotel(hotelId))
    }, [hotelId]);
   const newArr = detailHotel.extraInfo.split('.');
   newArr.pop();
  return (
    <div className='Hotels'>
        <Container>
            <section className='detail__container'>
                <Row>
                    <Col lg={6} md={6} xs={12} style={{position: "relative"}}>
                    <DetailImage hotel={detailHotel}/>
                    </Col>
                    <Col lg={6} md={6} xs={12}>
                        <DetailMain hotel={detailHotel}/>
                    </Col>
                </Row>
            </section>
            <div className='my-5 border border-[#DDE6ED] px-3 py-2 rounded-lg'>
                <p className='text-[22px] font-semibold mb-3'>Facilities</p>
                <div className='lg:flex flex-wrap gap-3'>
                    {newArr.map((item)=> (
                        <div className='w-[calc(25% - 36px)] flex items-center'>
                            <AiOutlineCheck className='font-semibold'/>
                            <span className='text-md-semi-bold ml-2'> {item}</span>
                        </div>
                    ))}
                </div>
            </div>
            <p className='text-[22px] font-semibold mb-3'>Select your room</p>
            
        </Container>
    </div>
  )
}

export default DetailHotel