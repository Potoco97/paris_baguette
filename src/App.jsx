import './App.scss';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { useState } from 'react';
import data from './data';



function App() {
  const [products, setProducts] = useState(data)
  const today = products.filter(item => item.cate === "today")
  const bread = products.filter(item => item.cate === "bread")
  const cake = products.filter(item => item.cate === "cake")
  const salad = products.filter(item => item.cate === "salad")
  const gift = products.filter(item => item.cate === "gift")
  const dessert = products.filter(item => item.cate === "dessert")
  const cffe = products.filter(item => item.cate === "cffe")
  const brrl = products.filter(item => item.cate === "brrl")

  const bredl = products.filter(item => item.cate === "bredl")
  const caikl = products.filter(item => item.cate === "caikl")
  const sendwhicl = products.filter(item => item.cate === "sendwhicl")
  const cffee = products.filter(item => item.cate === "cffee")
  const degetl = products.filter(item => item.cate === "degetl")



  return (
    <div className="App">
      <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home"><a href="http://localhost:3000/#features">PARIS BAGUETTE</a></Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#features">창업안내</Nav.Link>
              <Nav.Link href="#pricing">파바 매거진</Nav.Link>
              <Nav.Link href="#peitirgs">파바 스토리</Nav.Link>
              <NavDropdown title="상품 안내" id="collapsible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">전체</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">브레드</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">케이크</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4">샌드위치/샐러드</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.5">선물</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.6">디저트/스낵</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.7">커피/음료</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.8">간편식</NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav>
              <Nav.Link href="#deets">회사 소개</Nav.Link>
              <Nav.Link eventKey={2} href="#memes">
                매장 정보
              </Nav.Link>
              <Nav.Link eventKey={3} href="#memes">
                주문 정보
              </Nav.Link>
              <Nav.Link eventKey={4} href="#memes">
                프로모션
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>



      <Swiper pagination={true} modules={[Pagination]} className="slider">
        <SwiperSlide><img src="/img/main_img1.png" alt="#" /></SwiperSlide>
        <SwiperSlide><img src="/img/main_img2.png" alt="#" /></SwiperSlide>
        <SwiperSlide><img src="/img/main_img3.png" alt="#" /></SwiperSlide>
        <SwiperSlide><img src="/img/main_img4.png" alt="#" /></SwiperSlide>
        <SwiperSlide><img src="/img/main_img5.png" alt="#" /></SwiperSlide>
        <SwiperSlide><img src="/img/main_img6.png" alt="#" /></SwiperSlide>
        <SwiperSlide><img src="/img/main_img7.png" alt="#" /></SwiperSlide>
        <SwiperSlide><img src="/img/main_img8.png" alt="#" /></SwiperSlide>
        <SwiperSlide><img src="/img/main_img9.png" alt="#" /></SwiperSlide>
      </Swiper>

      <Container>
        <Row>
          {
            today.map((item, i) =>
              <Col sm={3}>
                <img src={item.img} alt="" />
                <p>{item.name}</p>
              </Col>
            )
          }
        </Row>
      </Container>

      <Tabs
        defaultActiveKey="profile"
        id="uncontrolled-tab-example"
        className="mb-3"
      >
        <Tab eventKey="all" title="전체">
          <Container>
            <Row>
              <Col><h2>브레드</h2></Col>
            </Row>
            <Row>
              {
                bread.map((item, i) =>
                  <Col sm={4}>
                    <img src={item.img} alt="" />
                    <p>{item.name}</p>
                  </Col>
                )
              }
            </Row>

            <Row>
              <Col><h2>케이크</h2></Col>
            </Row>
            <Row>
              {
                cake.map((item, i) =>
                  <Col sm={4}>
                    <img src={item.img} alt="" />
                    <p>{item.name}</p>
                  </Col>
                )
              }
            </Row>

            <Row>
              <Col><h2>샌드위치/샐러드</h2></Col>
            </Row>
            <Row>
              {
                salad.map((item, i) =>
                  <Col sm={4}>
                    <img src={item.img} alt="" />
                    <p>{item.name}</p>
                  </Col>
                )
              }
            </Row>

            <Row>
              <Col><h2>선물</h2></Col>
            </Row>
            <Row>
              {
                gift.map((item, i) =>
                  <Col sm={4}>
                    <img src={item.img} alt="" />
                    <p>{item.name}</p>
                  </Col>
                )
              }
            </Row>

            <Row>
              <Col><h2>디저트/스낵</h2></Col>
            </Row>
            <Row>
              {
                dessert.map((item, i) =>
                  <Col sm={4}>
                    <img src={item.img} alt="" />
                    <p>{item.name}</p>
                  </Col>
                )
              }
            </Row>
            <Row>
              <Col><h2>커피/음료</h2></Col>
            </Row>
            <Row>
              {
                cffe.map((item, i) =>
                  <Col sm={4}>
                    <img src={item.img} alt="" />
                    <p>{item.name}</p>
                  </Col>
                )
              }
            </Row>

            <Row>
              <Col><h2>간편식</h2></Col>
            </Row>
            <Row>
              {
                brrl.map((item, i) =>
                  <Col sm={4}>
                    <img src={item.img} alt="" />
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
                bredl.map((item, i) =>
                  <Col sm={4}>
                    <img src={item.img} alt="" />
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
                caikl.map((item, i) =>
                  <Col sm={4}>
                    <img src={item.img} alt="" />
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
                sendwhicl.map((item, i) =>
                  <Col sm={4}>
                    <img src={item.img} alt="" />
                    <p>{item.name}</p>
                  </Col>
                )
              }
            </Row>
          </Container>
        </Tab>
        <Tab eventKey="cffe" title="커피/음료">
          <Container>
            <Row>
              <Col><h2>베스트 상품</h2></Col>
            </Row>
            <Row>
              <Col sm={3}><img src="/img/(HOT)아메리카노.jpg" alt="" />(HOT) 아메리카노</Col>
              <Col sm={3}><img src="/img/(ICE)아메리카노.jpg" alt="" />(ICE) 아메리카</Col>
              <Col sm={3}><img src="/img/카페라떼.JPG" alt="" />카페라떼</Col>
              <Col sm={3}><img src="/img/아이스카페라떼.jpg" alt="" />아이스 카페라떼</Col>
            </Row>
            <br /><hr />
            <Row>
              <Col sm={4}><img src="/img/카라멜팝콘빙수.PNG" alt="" />커피 카라멜 팝콘 빙수</Col>
              <Col sm={4}><img src="/img/애플망고빙수.png" alt="" />POP 애플망고 빙수</Col>
              <Col sm={4}><img src="/img/통단팥듬뿍우유팥빙수.jpg" alt="" />통단팥 듬뿍 우유 팥빙수</Col>
            </Row>
            <Row>
              <Col sm={4}><img src="/img/아이스녹차라떼.jpg" alt="" />아이스 제주녹차라떼</Col>
              <Col sm={4}><img src="/img/아이스초코포레누아.jpg" alt="" />아이스 초코포레누아</Col>
              <Col sm={4}><img src="/img/문경 오미자 에이드.jpg" alt="" />문경 오미자 에이드</Col>
            </Row>
          </Container>
        </Tab>
        <Tab eventKey="deget" title="디저트/스낵">
          <Container>
            <Row>
              <Col><h2>베스트 상품</h2></Col>
            </Row>
            <Row>
              <Col sm={3}><img src="/img/치즈가부드러운시간.png" alt="" />치즈가 부드러운 시간</Col>
              <Col sm={3}><img src="/img/초콜릿머핀.jpg" alt="" />초콜릿 머핀</Col>
              <Col sm={3}><img src="/img/미스베어.JPG" alt="" />미스베어</Col>
              <Col sm={3}><img src="/img/초코마카롱.png" alt="" />초코 마카롱</Col>
            </Row>
            <br /><hr />
            <Row>
              <Col sm={4}><img src="/img/생딸기레어치즈타르트(1호).jpg" alt="" />생딸기 레어치즈 타르트(1호)</Col>
              <Col sm={4}><img src="/img/토트넘유니폼쿠키.jpg" alt="" />토트넘 유니폼 쿠키</Col>
              <Col sm={4}><img src="/img/딸기돌돌크레이프.jpg" alt="" />딸기돌돌크레이프</Col>
            </Row>
            <Row>
              <Col sm={4}><img src="/img/무화과얼그레이스콘.jpg" alt="" />무화과 얼그레이 스콘</Col>
              <Col sm={4}><img src="/img/스모어마시멜로우타르트.jpg" alt="" />스모어 마시멜로우 타르트</Col>
              <Col sm={4}><img src="/img/슈크림슈.png" alt="" />바닐라빈 슈크림슈</Col>
            </Row>
          </Container>
        </Tab>
      </Tabs>
    </div>
  );
}


export default App;