import { Button, Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";

  const Detail = (props) => {
    const {id}=useParams()
    const { products } = props;
    console.log(id)

    return(
        <Container>
            <Row>
                <Col md={6}>
                    <img src={process.env.PUBLIC_URL+products[id].img} width="100%" />
                </Col>

                <Col md={6}>
                    <h4 className="pt-5">{products[id].name}</h4>
                    <p>{products[id].price}</p>
                    <Button variant="danger">주문하기</Button>
                </Col>
            </Row>
        </Container>
    )
}

 
export default Detail;