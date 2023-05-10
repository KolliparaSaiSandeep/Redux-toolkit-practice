import 'bootstrap/dist/css/bootstrap.min.css'
import React from 'react';
import { useEffect,useState} from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import {useDispatch} from 'react-redux';
import {  add } from '../store/cartSlice';

const Product = () => {

  const dispatch=useDispatch();
  const [products,getproducts]=useState([]);
  useEffect(()=>{
    fetch('https://fakestoreapi.com/products')
    .then(data=>data.json())
    .then(result=>getproducts(result))
  },[]);

  const addToCart=(product)=>{
    dispatch(add(product))
  }

  const cards=products.map(product=>(
  <div className='e-card e-card-horizontal' style={{marginBottom:'10px'}} >
   <Card key={product.id} className="h-100">
    <div className='text-center'>
      <Card.Img variant="top" src={product.image} style={{width:'100px',height:'130px'}} />
    </div>
    <Card.Body>
      <Card.Title>{product.title}</Card.Title>
      <Card.Text>
       INR:{product.price}
      </Card.Text>
    </Card.Body>
    <Card.Footer className='text-center'>
    <Button variant="primary" onClick={()=>addToCart(product)}>ADD TO CART</Button>
    </Card.Footer>
   </Card>
  </div>
  ))


  return (
    <>
    <h1>Products Dashboard</h1>
    <div>{cards}</div>
      
    </>
  )
}

export default Product;