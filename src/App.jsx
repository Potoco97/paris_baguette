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
                bred2.map((item, i) =>
                  <Col sm={3}>
                    <img src={item.img} alt="" />
                    <p>{item.name}</p>
                  </Col>
                )
              }
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
                caik2.map((item, i) =>
                  <Col sm={3}>
                    <img src={item.img} alt="" />
                    <p>{item.name}</p>
                  </Col>
                )
              }
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
                sendwhic2.map((item, i) =>
                  <Col sm={3}>
                    <img src={item.img} alt="" />
                    <p>{item.name}</p>
                  </Col>
                )
              }
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
        <Tab eventKey="cffee" title="커피/음료">
          <Container>
            <Row>
              <Col><h2>베스트 상품</h2></Col>
            </Row>
            <Row>
              {
                cffe2.map((item, i) =>
                  <Col sm={3}>
                    <img src={item.img} alt="" />
                    <p>{item.name}</p>
                  </Col>
                )
              }
            </Row>
            <Row>
              {
                cffee.map((item, i) =>
                  <Col sm={4}>
                    <img src={item.img} alt="" />
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
                  <Col sm={3}>
                    <img src={item.img} alt="" />
                    <p>{item.name}</p>
                  </Col>
                )
              }
            </Row>
            <Row>
              {
                degetl.map((item, i) =>
                  <Col sm={4}>
                    <img src={item.img} alt="" />
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

      <Container className='footer'>
        <Row className="justify-content-md-center">
          <Col xs lg="2">
            <h2>Info</h2>
            <p>브랜드 소개<br />회사 소개<br />창업안내<br />거래희망사전등록<br />채용</p>
          </Col>
          <Col md="auto"></Col>
          <Col xs lg="2">
            <h2>Contact Us</h2>
            <p>고객센터<br />080-***-****<br />평일 09:00 - 17:00(점심 12:00 - 13:00)<br />고객칭찬</p>
          </Col>
        </Row>
        <Row className='justify-content-lg-center'>
          <Col>
          <img src="/img/footer-logo-img-01.png" alt="#" />
          </Col>
          <Col md="auto"></Col>
          <Col xs lg="2">
            <h2>Follow Us</h2>
          </Col>
        </Row>
      </Container>

    </div>
  );
}



export default App;

