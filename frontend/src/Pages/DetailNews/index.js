import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDetailBlog, getBlogs } from "../../Actions/BlogsAction";
import { useParams, Link } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";
import "./style.css";
import { quoteNewsData } from "../../utils/fakeData";

const DetailNews = () => {
  const { blogId } = useParams();
  const { detailBlog, isLoading } = useSelector((state) => state.detailBlog);
  const { blogs } = useSelector((state) => state.blogs);
  const dispatch = useDispatch();

  useEffect(() => {
      dispatch(getBlogs())
  }, [])

  useEffect(() => {
    dispatch(getDetailBlog(blogId));
  }, [blogId]);

  console.log(blogs)
  console.log(detailBlog);
  return (
    <>
        {
          isLoading && <div>Loading ...</div>
        }
         <section>
      <section className="common_detailnews">
        <Container>
          <Row>
            <Col lg="12">
              <h2>Lastest News</h2>
            </Col>
          </Row>
        </Container>
      </section>
      <Container>
        <Row>
          <Col lg={8} md={6} sm={12}>
            <div className="mx-4">
              <p className="text-[16px] text-gray-500 font-normal leading-3">
                Published: {detailBlog && detailBlog.createdAt?.substr(0, 10)}
              </p>
              <h2 className="text-display-lg-semi-bold mt-3 text-center">
                {detailBlog.title}
              </h2>
              <div className="mt-4 flex flex-col items-center justify-center">
                <img
                  src={detailBlog.image}
                  alt="news"
                  width="100%"
                  className="h-[350px] mb-4"
                />
                <p>
                    {detailBlog.fullText?.slice(0, detailBlog.fullText.indexOf('.'))}
                </p>
                {detailBlog.detailPhotos.length !== 0 && <img src={detailBlog.detailPhotos[1]} alt="news" width="100%"
                  className="h-[350px] mb-4"/>}
                <p>
                  {detailBlog.fullText?.slice(detailBlog.fullText.indexOf('.'))}
                </p>
              </div>
              <div className="mt-4">
                  <Row>
                    <Col lg='12'>
                    <div className='section__quote'>{quoteNewsData[Math.floor(Math.random() * 20)]}</div>
                    </Col>
                  </Row>
              </div>
            </div>
          </Col>
          <Col lg={4} md={6} sm={12}>
              <p className="text-[25px] font-medium leading-3">Popular Blogs</p>
              {
                blogs.slice(0, 7).map((item, index) => (
                  <div>
                      <Link to={`/news/${item._id}`} key={item._id} className="mt-3 no-underline">{index + 1}. {item.title}</Link>
                  </div>
                  
                ))
              }
          </Col>
        </Row>
      </Container>
    </section>
    </>
   
  );
};

export default DetailNews;
