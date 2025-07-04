import React from 'react'
import { Button, Container, Table } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { addCount, desCount, removeItem, sortName } from '../store';

<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&icon_names=add" />

const Cart = () => {

    let cart = useSelector(state => state.cart);
    let dispatch = useDispatch()

    return (
        <Container className='cart'>
            <Table>
                <thead>
                    <tr>
                        <th>상품번호</th>
                        <th>상품이미지</th>
                        <th>상품명</th>
                        <th>가격</th>
                        <th>수량</th>
                        <th>삭제</th>
                    </tr>
                </thead>

                <tbody>
                    {
                        cart.map((v, i) =>
                            <tr key={i}>
                                <td>{v.id}</td>
                                <td><img src={process.env.PUBLIC_URL + v.img} alt="" /></td>
                                <td>{v.item}</td>
                                <td>{v.price.toLocaleString()}원</td>
                                <td>
                                    <button onClick={() => { dispatch(desCount(i)); }}>-</button>
                                    <span className='px-2'>{v.amount}</span>
                                    <button onClick={() => { dispatch(addCount(i)); }}>+</button>
                                </td>
                                <td>
                                    <button onClick={() => { dispatch(removeItem(v.id)); }}>x</button>
                                </td>
                            </tr>
                        )
                    }

                </tbody>

            </Table>
            <Button variant="outline-primary" onClick={() => {
                dispatch(sortName())
            }}>이름순정렬</Button>{''}
        </Container>
    )
}

export default Cart