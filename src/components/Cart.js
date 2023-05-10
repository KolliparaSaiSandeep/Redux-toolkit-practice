import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect,useState} from 'react';
import { useSelector } from 'react-redux';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { useDispatch } from 'react-redux';
import { remove } from '../store/cartSlice';

const  Cart=()=> {
  const dispatch=useDispatch();
  const products=useSelector(state=>state.cart)
  const removetocart=(id)=>{
    dispatch(remove(id))
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
         <Card.Footer>
           <Button variant="danger" onClick={()=>removetocart(product.id)}>Remove Item</Button>
         </Card.Footer>
      </Card>
    </div>
  ))

  return (
    <div>{cards}</div>
  )
}

export default Cart