import React, { useContext, useState,useEffect } from "react";
import { Modal, Button, ButtonToolbar, Placeholder } from 'rsuite';
import './styles.css';
import axios from 'axios'
import { NavLink } from "react-router-dom";
import { customContext } from "../context/context.js";
import { Container, Col, Row } from "react-bootstrap";
// import Button from 'react-bootstrap/Button';
import CartShop from '../imgs/CartShop.png'


import Card from 'react-bootstrap/Card';


import "./styles.css";

export default function Login() {
  
    const { userLog,getProducts,Productos,AddToCart,Resp,AddToProductToCartFromCart,RemoveProductFromCartFromCart,TotalParaFacturacion,getTotal,Facturacion } = useContext(customContext);
   
   
    
    useEffect(() => {
      getProducts()
      // console.log(`Productos en el front ${Productos }`)
      // console.log(Resp[0].productos)
      getTotal()
     

    },[]);

    useEffect(() => {
      
      // console.log(`Productos en el front ${Productos }`)
      getTotal()
      // console.log(Resp)
     
     

    },[Resp]);
    
    


  return (
    <>
     <Container fluid>
              <Row>
              <Col xl="12">
                <div className="mt-3 ms-5 me-5 d-flex flex-row justify-content-between">
                <NavLink to ={`/store`}> <Button appearance="primary">
                      Add more products
                    </Button>
                  </NavLink>
                  <div className="d-flex flex-column justify-content-center align-items-center">

                
                  <NavLink to ={`/thankyoupage`}> <Button  color="violet" appearance="primary" onClick={Facturacion}>
                      Aceptar Compra
                    </Button>
                  </NavLink>
                  <h3>{TotalParaFacturacion ==0? <>0</>:<>${TotalParaFacturacion}</>}</h3>
                  </div>
                  </div>
                </Col>
                <Row>
                  <Col xl="12">
                    <div className="d-flex flex-row mt-5">
                  {
                     Resp[0].productos.map((val)=>{

          return(<div className="ms-5 d-flex flex-column justify-content-center align-items-center">
                 
                 <Card style={{ width: '18rem' }}>
                   <Card.Img className="CardImg" variant="top" src={val.thumbnail} alt={val._id} />
                   <Card.Body>
                     <Card.Title>{val.title}</Card.Title>
                     
                     <Card.Text>
                     ${val.price}
                     </Card.Text>
                     <Card.Text>
                     cantidad:{val.cantidadPedida}
                     </Card.Text>
                     <div className="d-flex flex-row justify-content-between align-items-center">
                     <Button id={val._id} color="green" appearance="primary" onClick={AddToProductToCartFromCart}>Add to cart</Button>
                     <Button id={val._id} color="red" appearance="primary" onClick={RemoveProductFromCartFromCart}>Remove</Button>
                     </div>
                   </Card.Body>
                  </Card>
               
               </div>
            

              
               
                 
                 
                )
        })
      }
      </div>
                  </Col>
                  </Row>
               
                </Row>
              

             
      </Container>
   
    </>
)}
