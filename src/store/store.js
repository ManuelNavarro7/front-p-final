import React, { useContext, useState,useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import axios from 'axios'
import { NavLink } from "react-router-dom";
import { customContext } from "../context/context.js";
import { Container, Col, Row } from "react-bootstrap";
import CartShop from '../imgs/CartShop.png'
import Chat from '../imgs/chat.png'

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';




export default function Store() {


  const { userLog,getProducts,Productos,AddToCart,Resp,setTotalParaCart ,TotalParaCart,statusfact} = useContext(customContext);
  let [prod,setprod]=useState('hola')


  useEffect(() => {
     async function TestAsyn(){
      await  getProducts()
     setprod(Productos)
     }
   
    // console.log(`Productos en el front ${Productos }`)
    // console.log(Resp[0].productos)
    TestAsyn()
  },[]);
  
  useEffect(() => {
    getProducts()

  
    // if(Resp.data.message=="ki"){
    //   setTotalParaCart(0)
    // }
    if (Resp.length==0){
      setTotalParaCart(0)
    }else{
      const getTotal = () =>{
          const res = Resp[0].productos.reduce((prev, item) =>{
            return prev + (item.cantidadPedida)
          },0)
          setTotalParaCart(res)
        }
        getTotal()

    }
    // console.log(`Productos en el front ${Productos }`)
    // console.log(Resp[0].productos)

    
  },[Resp,statusfact]);
  

  // console.log(Productos)

  
      

  return ( <>
   
    
   <Container>
    <Row className="d-flex justify-content-center align-items-center">
      <Col >
      <h1 className="m-0 p-0">hola {userLog} </h1>
      </Col>
      <Col>
      <div className="d-flex flex-row justify-content-end align-items-center">
      <NavLink target="_blank" to ={`/chat`}>  <img className="chat" src={Chat}></img>
          
          </NavLink>
      <NavLink to ={`/cart`}>  <img className="CartShop" src={CartShop}></img>
          
        </NavLink>
     
      <h2 className="m-0 p-0">{TotalParaCart}</h2>
      </div>
     
      </Col>
      
     
     
    </Row>
    <Row>
      <div className="mt-4 ">
        {prod==='hola'?<div></div >:<div className="d-flex flex-row flex-wrap"> {
        prod.map((val)=>{

          return(<>
               
                  <div  className="ms-5 d-flex flex-column justify-content-center align-items-center">
                 
                    <Card style={{ width: '18rem' }}className="ms-5 d-flex flex-column justify-content-center align-items-center">
                      <Card.Img className="CardImg" variant="top" src={val.thumbnail} alt={val._id} />
                      <Card.Body>
                        <Card.Title>{val.title}</Card.Title>
                        <Card.Text>
                        ${val.price}
                        </Card.Text>
                        <Button id={val._id} variant="primary" onClick={AddToCart}>Add to cart</Button>
                      </Card.Body>
                     </Card>
                  
                  </div>
                </>)
        })
      }</div> }
   
      </div>
    </Row>
    
      {/* <div>
      {Resp.length===0?<h1>Debe crear carritos</h1>:<h1>Tiene carritos creados </h1>  }
      </div>
      <div>
      {
      
      Resp.map((val)=>{
         return (
         
          
        <div>
               
               <p >{val.title}</p>
               <p >{val.productos.map((val1)=>{
               return(
                  <p>{val1.title}</p>
               )}
               )}</p>
              
             
               
        </div>
         
        
         )
         
       })
      }
      </div> */}
      {/* //   <div className="d-flex flex-column justify-content-center align-items-center">
      //  <h1>{ User} debe crear su carrito </h1>
      //  <Button variant="success" onClick={CrearCarrito}>Success</Button>
      //  </div>
      
      // :
      // <h1>Tiene carritos creados</h1> */}
    
     
     
    </Container>
     
    
    </>
  );
}
