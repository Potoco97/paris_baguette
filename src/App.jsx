import './App.scss';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { useState } from 'react';
import data from './data';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Main from './components/Main';
import Detail from './components/Detail';
import Cart from './components/Cart';


function App() {
  const navigate=useNavigate()
  const [products] = useState(data)


  return (
    <div className="App">
      <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand onClick={()=>{navigate('/')}}>PARIS BAGUETTE</Navbar.Brand>
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

      <Routes>
        <Route path="/" element={<Main products={products}/>}></Route>
        <Route path="/detail/:id" element={<Detail products={products}/>} />
        <Route path="/cart" element={<Cart></Cart>}></Route>
      </Routes>



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

