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

      <Container>
        <Row>
          <Col sm={3}><img src="/img/프렌치크라상.jpg" alt="" /></Col>
          <Col sm={3}><img src="/img/블랙올리브치즈베이글_001-600x600.jpg" alt="" /></Col>
          <Col sm={3}><img src="/img/만월빵.png" alt="" /></Col>
          <Col sm={3}><img src="/img/런치샌드위치.jpg" alt="" /></Col>
        </Row>
        <Row>
          <Col sm={3}>프렌치 크라상</Col>
          <Col sm={3}>블랙올리브 치즈베이글</Col>
          <Col sm={3}>만월빵</Col>
          <Col sm={3}>런치 샌드위치</Col>
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
              <Col sm={4}><img src="/img/1발효버터소금빵.jpg" alt="" />발효버터소금빵</Col>
              <Col sm={4}><img src="/img/2굿모닝롤.jpg" alt="" />굿모닝롤</Col>
              <Col sm={4}><img src="/img/3롱롱소시지빵.jpg" alt="" />롱소시지빵</Col>
            </Row>
            <Row>
              <Col sm={4}><img src="/img/프렌치크라상.jpg" alt="" />프렌치크라상</Col>
              <Col sm={4}><img src="/img/런치샌드위치.jpg" alt="" />런치샌드위치</Col>
              <Col sm={4}><img src="/img/소보루빵.jpg" alt="" />소보루빵</Col>
            </Row>
            <Row>
              <br /><br /><br />
            </Row>
            <Row>
              <Col><h2>케이크</h2></Col>
            </Row>
            <Row>
              <Col sm={4}><img src="/img/별이빛나는밤에.jpg" alt="" />별이 빛나는 밤에</Col>
              <Col sm={4}><img src="/img/딸기 블라썸 케이크.jpg" alt="" />딸기 블라썸 케이크</Col>
              <Col sm={4}><img src="/img/마이넘버원3.png" alt="" />마이넘버원3</Col>
            </Row>
            <Row>
              <Col sm={4}><img src="/img/고구마반생크림반케이크.jpg" alt="" />고구마반생크림반케이크</Col>
              <Col sm={4}><img src="/img/초코반딸기반케이크.jpg" alt="" />초코반딸기반케이크</Col>
              <Col sm={4}><img src="/img/블라썸 러브.png" alt="" />블라썸 러브</Col>
            </Row>
            <Row>
              <br /><br /><br />
            </Row>

            <Row>
              <Col><h2>샌드위치/샐러드</h2></Col>
            </Row>
            <Row>
              <Col sm={4}><img src="/img/에그샐러드샌드위치.png" alt="" />에그샐러드샌드위치</Col>
              <Col sm={4}><img src="/img/단백질-듬뿍-에그-샐러드.jpg" alt="" />단백질 듬뿍 에그 샐러드</Col>
              <Col sm={4}><img src="/img/크리스피-치킨-샐러드.jpg" alt="" />크리스피 치킨 샐러드</Col>
            </Row>
            <Row>
              <Col sm={4}><img src="/img/치킨디럭스샌드위치.png" alt="" />치킨디럭스 샌드위치</Col>
              <Col sm={4}><img src="/img/런치-샌드위치.jpg" alt="" />런치 샌드위치</Col>
              <Col sm={4}><img src="/img/미니버거-샌드위치.jpg" alt="" />미니버거 샌드위치</Col>
            </Row>
            <Row>
              <br /><br /><br />
            </Row>

            <Row>
              <Col><h2>선물</h2></Col>
            </Row>
            <Row>
              <Col sm={4}><img src="/img/명가명품-우리벌꿀-카스테라.jpg" alt="" />명가명품 우리벌꿀 카스테라</Col>
              <Col sm={4}><img src="/img/호두.jpg" alt="" />로스팅 호두 듬뿍 호두파이</Col>
              <Col sm={4}><img src="/img/블루베리듬뿍-롤케익.jpg" alt="" />블루베리듬뿍 롤케익</Col>
            </Row>
            <Row>
              <br /><br /><br />
            </Row>

            <Row>
              <Col><h2>디저트/스낵</h2></Col>
            </Row>
            <Row>
              <Col sm={4}><img src="/img/치즈가-부드러운-시간.png" alt="" />치즈가 부드러운 시간</Col>
              <Col sm={4}><img src="/img/미스터베어.jpg" alt="" />미스터베어</Col>
              <Col sm={4}><img src="/img/초코마카롱.png" alt="" />초코마카롱</Col>
            </Row>
            <Row>
              <Col sm={4}><img src="/img/초콜릿머핀.jpg" alt="" />초콜릿 머핀</Col>
              <Col sm={4}><img src="/img/오리지널머핀.jpg" alt="" />오리지널 머핀</Col>
              <Col sm={4}><img src="/img/로스팅 호두로 더 고소한 조각호두파이.jpg" alt="" />로스팅 호두로 더 고소한 조각호두파이</Col>
            </Row>
            <Row>
              <br /><br /><br />
            </Row>
            <Row>
              <Col><h2>커피/음료</h2></Col>
            </Row>
            <Row>
              <Col sm={4}><img src="/img/(HOT)아메리카노.jpg" alt="" />(HOT) 아메리카노</Col>
              <Col sm={4}><img src="/img/(ICE)아메리카노.jpg" alt="" />(ICE) 아메리카노</Col>
              <Col sm={4}><img src="/img/치키제로티망고&캐모마일.jpg" alt="" />치키제로티 망고&캐모마일</Col>
            </Row>
            <Row>
              <Col sm={4}><img src="/img/아침엔딸기우유200ml.jpg" alt="" />아침엔딸기우유 200㎖</Col>
              <Col sm={4}><img src="/img/아침후레쉬우유-200㎖.jpg" alt="" />아침후레쉬우유 200㎖</Col>
              <Col sm={4}><img src="/img/아침초코-우유-200㎖.jpg" alt="" />아침초코우유 200㎖</Col>
            </Row>
            <Row>
              <br /><br /><br />
            </Row>

            <Row>
              <Col><h2>간편식</h2></Col>
            </Row>
            <Row>
              <Col sm={4}><img src="/img/치즈듬뿍볼로네제파스타.jpg" alt="" />치즈듬뿍 볼로네제 파스타</Col>
              <Col sm={4}><img src="/img/콘스프.jpg" alt="" />콘스프</Col>
              <Col sm={4}><img src="/img/매콤핫투움바파스타.jpg" alt="" />매콤 핫 투움바 파스타</Col>
            </Row>
          </Container>
        </Tab>
        <Tab eventKey="brad" title="브레드">
          <Container>
            <Row>
              <Col><h2>베스트 상품</h2></Col>
            </Row>
            <Row>
              <Col sm={3}><img src="/img/1발효버터소금빵.jpg" alt="" />발효버터소금빵</Col>
              <Col sm={3}><img src="/img/2굿모닝롤.jpg" alt="" />굿모닝롤</Col>
              <Col sm={3}><img src="/img/3롱롱소시지빵.jpg" alt="" />롱소시지빵</Col>
              <Col sm={3}><img src="/img/1블랙올리브치즈베이글.jpg" alt="" />블랙올리브치즈 베이글</Col>
            </Row>
              <br /><hr />
            <Row>
            <Col sm={4}><img src="/img/인생크림빵애플망고.jpg" alt="" />인생크림빵 애플망고</Col>
            <Col sm={4}><img src="/img/발효버터먹물소금빵.jpg" alt="" />발효버터 먹물소금빵</Col>
            <Col sm={4}><img src="/img/딸기롤.jpg" alt="" />딸기롤</Col>
            </Row>
            <Row>
            <Col sm={4}><img src="/img/파란라벨곡물롤.jpg" alt="" />[파란라벨]고단백 곡물롤</Col>
            <Col sm={4}><img src="/img/파란라벨오트식빵.jpg" alt="" />[파란라벨]홀그레인 오트 식빵</Col>
            <Col sm={4}><img src="/img/파란라벨로만밀식빵.jpg" alt="" />[파란라벨]단백질 로만밀 식빵</Col>
            </Row>
          </Container>
        </Tab>
        <Tab eventKey="caik" title="케이크">
          Tab content for Contact
        </Tab>
        <Tab eventKey="sendwhic" title="샌드위치/샐러드">
          Tab content for Contact
        </Tab>
        <Tab eventKey="cffe" title="커피/음료">
          Tab content for Contact
        </Tab>
        <Tab eventKey="deget" title="디저트/스낵">
          Tab content for Contact
        </Tab>
      </Tabs>
    </div>
  );
}



export default App;