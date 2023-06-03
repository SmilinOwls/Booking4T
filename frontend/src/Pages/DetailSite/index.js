import React, {useEffect} from 'react';
import {useParams} from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux'
import {getDetailSite} from '../../Actions/SitesAction'

const DetailSite = () => {
  const {id} = useParams();
  const {detailSite, isLoading} = useSelector((state) => state.detailSite);
  const dispatch = useDispatch();

  useEffect(() =>{
      dispatch(getDetailSite(id))
  }, [getDetailSite, id]);

  console.log(detailSite)

  return (
    <div>DetailSite</div>
  )
}

export default DetailSite