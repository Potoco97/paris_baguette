import './App.scss';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';



function App() {
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
                <NavDropdown.Item href="#action/3.5">선믈</NavDropdown.Item>
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
    </div>
  );
}


export default App;