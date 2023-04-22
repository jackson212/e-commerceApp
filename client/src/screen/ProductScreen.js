import React from 'react'
import { Link,useParams  } from 'react-router-dom'
import {Row,Col,Image,ListGroup,Card,Button}  from 'react-bootstrap'
import products from '../products'

const ProductScreen = () => {
    const { id } = useParams();
    const product = products.find((p) => String(p._id) === id);
  
    if (!product) return null; // or fallback UI
    return (

   <>
     <Link className='btn  btn-dark my-3' to="/">
        Go back
     
     </Link>

     <Row>
         <Col md={6} >   
                                                                          {/* //FLUID will keep it inside the the Container */}
          <Image src={product.image}  alt={product.name} fluid/>                                                           


         </Col>
         <Col md={3}>                                  
                                                                {/* // flush will remove backspaces */}
                <ListGroup variant='flush'>                     
                   <ListGroup.Item>{product.name}</ListGroup.Item>    
                   <ListGroup.Item>{product.price}</ListGroup.Item>   
                   <ListGroup.Item>{product.description}</ListGroup.Item>     
             </ListGroup>
         </Col>
         <Col md={3}>
        <Card>
          <ListGroup variant="flush">
            <ListGroup.Item>
               <Row>
                 <Col>price :</Col>
                 <Col>{product.price} $</Col>
               </Row>
                
            </ListGroup.Item>
            <ListGroup.Item>
              <Row>
                <Col>Status:</Col>
                <Col>{product.countInStock>=1?'InStock':'OutofStock'}</Col>
              </Row>
              </ListGroup.Item>
            
          
          <ListGroup.Item>
               <Button className='btn-block' type='button' disabled={product.countInStock===0}>
                add to cart
               </Button>
              </ListGroup.Item>
            
          </ListGroup>



        </Card>
      
      
      </Col>
              
     </Row>

   
   
   </>
   
    


  )
}

export default ProductScreen