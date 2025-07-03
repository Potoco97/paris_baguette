import { Button, Col, Container, Row } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import { addItem } from "./../store.js";
import { useDispatch } from "react-redux";

  const Detail = (props) => {
    const dispatch=useDispatch()
    const navigate=useNavigate()
    const {id}=useParams()
    const { products } = props;

    const rel=products[id].cate;

    const relcate = products.filter(item => item.cate === rel)

    return(
        <Container className="detail">
            <Row>
                <Col md={6}>
                    <img src={process.env.PUBLIC_URL+products[id].img} alt="상품이미지" width="100%" />
                </Col>

                <Col md={6}>
                    <h4 className="pt-5">{products[id].name}</h4>
                    <p className="text-center">{products[id].contens}</p>
                    <p className="text-center price">{products[id].price.toLocaleString()}원</p>
                    <Button className="btn btn-danger" onClick={() => {
                        dispatch(addItem({ id: products[id].id, img:products[id].img, item: products[id].name, price:products[id].price, amount: 1 }));
                        if (window.confirm('장바구니로 이동하시겠습니까?')) {
                            navigate('/cart');
                        }
                    }}>주문하기</Button>
                    <h5>영양정보</h5>
                    <p>{products[id].info1}</p>
                    <p>{products[id].info2}</p>
                    <h5>추가정보</h5>
                    <p>{products[id].info3}</p>

                </Col>
            </Row>

            <Row className="mt-5">
                <h3 className="my-3">
                    YOU MAY ALSO LIKE
                </h3>
                {
                    relcate.slice(0,4).map((item, i) =>
                        <Col sm={3} key={i}>
                            <img src={process.env.PUBLIC_URL + item.img} alt="" />
                            <p className="text-center">{item.name}</p>
                        </Col>
                    )
                }
            </Row>
        </Container>
    )
}

 
export default Detail;