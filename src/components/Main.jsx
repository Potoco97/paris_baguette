import React from 'react'
import { Container, Row, Col, Tab, Tabs } from 'react-bootstrap';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { useNavigate } from 'react-router-dom';


const Main = (props) => {
  const navigate = useNavigate()
  const { products } = props
  const today = products.filter(item => item.cate === "today")
  const bread = products.filter(item => item.cate === "bread")
  const cake = products.filter(item => item.cate === "cake")
  const salad = products.filter(item => item.cate === "salad")
  const gift = products.filter(item => item.cate === "gift")
  const dessert = products.filter(item => item.cate === "dessert")
  const cffe = products.filter(item => item.cate === "cffe")
  const brrl = products.filter(item => item.cate === "brrl")

  const bredl = products.filter(item => item.cate === "bredl")
  const bred2 = products.filter(item => item.cate === "bred2")
  const caikl = products.filter(item => item.cate === "caikl")
  const caik2 = products.filter(item => item.cate === "caik2")
  const sendwhicl = products.filter(item => item.cate === "sendwhicl")
  const sendwhic2 = products.filter(item => item.cate === "sendwhic2")
  const cffee = products.filter(item => item.cate === "cffee")
  const cffe2 = products.filter(item => item.cate === "cffe2")
  const degetl = products.filter(item => item.cate === "degetl")
  const deget2 = products.filter(item => item.cate === "deget2")

  const maintab = products.filter(item => item.cate === "maintab")
  const footter = products.filter(item => item.cate === "footter")
  return (
    <>
      <Swiper pagination={true} modules={[Pagination]} className="slider">
        <SwiperSlide><img src={process.env.PUBLIC_URL + "/img/main_img1.png"} alt="#" /></SwiperSlide>
        <SwiperSlide><img src={process.env.PUBLIC_URL + "/img/main_img2.png"} alt="#" /></SwiperSlide>
        <SwiperSlide><img src={process.env.PUBLIC_URL + "/img/main_img3.png"} alt="#" /></SwiperSlide>
        <SwiperSlide><img src={process.env.PUBLIC_URL + "/img/main_img4.png"} alt="#" /></SwiperSlide>
        <SwiperSlide><img src={process.env.PUBLIC_URL + "/img/main_img5.png"} alt="#" /></SwiperSlide>
        <SwiperSlide><img src={process.env.PUBLIC_URL + "/img/main_img6.png"} alt="#" /></SwiperSlide>
        <SwiperSlide><img src={process.env.PUBLIC_URL + "/img/main_img7.png"} alt="#" /></SwiperSlide>
        <SwiperSlide><img src={process.env.PUBLIC_URL + "/img/main_img8.png"} alt="#" /></SwiperSlide>
        <SwiperSlide><img src={process.env.PUBLIC_URL + "/img/main_img9.png"} alt="#" /></SwiperSlide>
      </Swiper>

      <Container>
        <Row>
          {
            today.map((item, i) =>
              <Col sm={3} key={i} onClick={() => { navigate('/detail/' + item.id) }}>
                <img src={process.env.PUBLIC_URL + item.img} alt="" />
                <p>{item.name}</p>
              </Col>
            )
          }
        </Row>
      </Container>

      <Tabs
        defaultActiveKey="all"
        id="uncontrolled-tab-example"
        className="mb-3"
      >
        <Tab eventKey="all" title="전체">
          <Container>

            <Row>
              {
                bread.map((item, i) =>
                  <Col sm={4} key={i} onClick={() => { navigate('/detail/' + item.id) }}>
                    <img src={process.env.PUBLIC_URL + item.img} alt="" />
                    <p>{item.name}</p>
                  </Col>
                )
              }
            </Row>


            <Row>
              {
                cake.map((item, i) =>
                  <Col sm={4} key={i} onClick={() => { navigate('/detail/' + item.id) }}>
                    <img src={process.env.PUBLIC_URL + item.img} alt="" />
                    <p>{item.name}</p>
                  </Col>
                )
              }
            </Row>

            <Row>
              {
                salad.map((item, i) =>
                  <Col sm={4} key={i} onClick={() => { navigate('/detail/' + item.id) }}>
                    <img src={process.env.PUBLIC_URL + item.img} alt="" />
                    <p>{item.name}</p>
                  </Col>
                )
              }
            </Row>

            <Row>
              {
                gift.map((item, i) =>
                  <Col sm={4} key={i} onClick={() => { navigate('/detail/' + item.id) }}>
                    <img src={process.env.PUBLIC_URL + item.img} alt="" />
                    <p>{item.name}</p>
                  </Col>
                )
              }
            </Row>

            <Row>
              {
                dessert.map((item, i) =>
                  <Col sm={4} key={i} onClick={() => { navigate('/detail/' + item.id) }}>
                    <img src={process.env.PUBLIC_URL + item.img} alt="" />
                    <p>{item.name}</p>
                  </Col>
                )
              }
            </Row>

            <Row>
              {
                cffe.map((item, i) =>
                  <Col sm={4} key={i} onClick={() => { navigate('/detail/' + item.id) }}>
                    <img src={process.env.PUBLIC_URL + item.img} alt="" />
                    <p>{item.name}</p>
                  </Col>
                )
              }
            </Row>

            <Row>
              {
                brrl.map((item, i) =>
                  <Col sm={4} key={i} onClick={() => { navigate('/detail/' + item.id) }}>
                    <img src={process.env.PUBLIC_URL + item.img} alt="" />
                    <p>{item.name}</p>
                  </Col>
                )
              }
            </Row>
          </Container>
        </Tab>
        <Tab eventKey="bredl" title="브레드">
          <Container>
            <Row>
              <Col><h2>베스트 상품</h2></Col>
            </Row>
            <Row>
              {
                bred2.map((item, i) =>
                  <Col sm={3} key={i} onClick={() => { navigate('/detail/' + item.id) }}>
                    <img src={process.env.PUBLIC_URL + item.img} alt="" />
                    <p>{item.name}</p>
                  </Col>
                )
              }
            </Row>
            <Row>
              {
                bredl.map((item, i) =>
                  <Col sm={4} key={i} onClick={() => { navigate('/detail/' + item.id) }}>
                    <img src={process.env.PUBLIC_URL + item.img} alt="" />
                    <p>{item.name}</p>
                  </Col>
                )
              }
            </Row>
          </Container>
        </Tab>
        <Tab eventKey="caikl" title="케이크">
          <Container>
            <Row>
              <Col><h2>베스트 상품</h2></Col>
            </Row>
            <Row>
              {
                caik2.map((item, i) =>
                  <Col sm={3} key={i} onClick={() => { navigate('/detail/' + item.id) }}>
                    <img src={process.env.PUBLIC_URL + item.img} alt="" />
                    <p>{item.name}</p>
                  </Col>
                )
              }
            </Row>
            <Row>
              {
                caikl.map((item, i) =>
                  <Col sm={4} key={i} onClick={() => { navigate('/detail/' + item.id) }}>
                    <img src={process.env.PUBLIC_URL + item.img} alt="" />
                    <p>{item.name}</p>
                  </Col>
                )
              }
            </Row>
          </Container>
        </Tab>
        <Tab eventKey="sendwhicl" title="샌드위치/샐러드">
          <Container>
            <Row>
              <Col><h2>베스트 상품</h2></Col>
            </Row>
            <Row>
              {
                sendwhic2.map((item, i) =>
                  <Col sm={3} key={i} onClick={() => { navigate('/detail/' + item.id) }}>
                    <img src={process.env.PUBLIC_URL + item.img} alt="" />
                    <p>{item.name}</p>
                  </Col>
                )
              }
            </Row>
            <Row>
              {
                sendwhicl.map((item, i) =>
                  <Col sm={4} key={i} onClick={() => { navigate('/detail/' + item.id) }}>
                    <img src={process.env.PUBLIC_URL + item.img} alt="" />
                    <p>{item.name}</p>
                  </Col>
                )
              }
            </Row>
          </Container>
        </Tab>
        <Tab eventKey="cffee" title="커피/음료">
          <Container>
            <Row>
              <Col><h2>베스트 상품</h2></Col>
            </Row>
            <Row>
              {
                cffe2.map((item, i) =>
                  <Col sm={3} key={i} onClick={() => { navigate('/detail/' + item.id) }}>
                    <img src={process.env.PUBLIC_URL + item.img} alt="" />
                    <p>{item.name}</p>
                  </Col>
                )
              }
            </Row>
            <Row>
              {
                cffee.map((item, i) =>
                  <Col sm={4} key={i} onClick={() => { navigate('/detail/' + item.id) }}>
                    <img src={process.env.PUBLIC_URL + item.img} alt="" />
                    <p>{item.name}</p>
                  </Col>
                )
              }
            </Row>
          </Container>
        </Tab>
        <Tab eventKey="degetl" title="디저트/스낵">
          <Container>
            <Row>
              <Col><h2>베스트 상품</h2></Col>
            </Row>
            <Row>
              {
                deget2.map((item, i) =>
                  <Col sm={3} key={i} onClick={() => { navigate('/detail/' + item.id) }}>
                    <img src={process.env.PUBLIC_URL + item.img} alt="" />
                    <p>{item.name}</p>
                  </Col>
                )
              }
            </Row>
            <Row>
              {
                degetl.map((item, i) =>
                  <Col sm={4} key={i} onClick={() => { navigate('/detail/' + item.id) }}>
                    <img src={process.env.PUBLIC_URL + item.img} alt="" />
                    <p>{item.name}</p>
                  </Col>
                )
              }
            </Row>
          </Container>
        </Tab>
      </Tabs>


      <div className="maintab">
        <Row>
          {
            maintab.map((item, i) =>
              <Col md={4}>
                <h3>{item.name}</h3>
                <p>{item.serm}</p>
              </Col>
            )
          }
        </Row>
      </div>
    </>
  )
}

export default Main