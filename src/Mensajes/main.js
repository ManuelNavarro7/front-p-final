import React, { useContext, useState,useEffect } from "react";
import { Modal, Button, ButtonToolbar, Placeholder } from 'rsuite';
import './styles.css';
// import axios from 'axios'
// import { NavLink } from "react-router-dom";
// import { customContext } from "../context/context.js";
import { Container, Col, Row } from "react-bootstrap";
// import Button from 'react-bootstrap/Button';
// import CartShop from '../imgs/CartShop.png'
// import socketio from "socket.io-client";
// import io from 'socket.io-client'





// import Card from 'react-bootstrap/Card';


import "./styles.css";

// const socket = socketio.connect("http://localhost:3000");

export default function Mensajes({socket}) {
  
    // const { userLog,getProducts,Productos,AddToCart,Resp,AddToProductToCartFromCart,RemoveProductFromCartFromCart,TotalParaFacturacion,getTotal,Facturacion } = useContext(customContext);
    

    let [messagesFBack,setmessagesFBack ]=useState("hola")



      socket.on("messages", async (data)=>{

        let mensajesDelBack = data
        setmessagesFBack(mensajesDelBack)
        
      })
    
        
    
    
     



    const EnviarMensaje= async(event) => {
      try{ 
        event.preventDefault();
        const formData = new FormData(event.target);
        const dataObj = Object.fromEntries(formData);
        // console.log(dataObj)
        // setcount(count+1)
        socket.emit("miMensaje",dataObj)
        socket.on("todosLosMsgs", async (data)=>{

          let mensajesDelBack = data
          setmessagesFBack(mensajesDelBack)
        })
        // const response = await axios.get('http://localhost:8080/api/session/logout',{withCredentials:true});
     
      }catch (error) {
        console.error(error);
      }
    };
    // useEffect(() => {
       

        
    //   );
    // })
   
    
    
    


  return (
    <>
      <Container fluid>
              
              <Col xl="12">
              <div className="MessagesContainer">
      <div className="LoginOut">
        <div className="CardLogin">
          <div>
            <h1>Manda mensajes</h1>
          </div>
          <form onSubmit={EnviarMensaje} className="Form1">
          <div> Username</div>
          <input id="user" name="user"></input>
          <div>Mensaje</div>
          <input id="mensaje" name="mensaje"></input>
            <ButtonToolbar className="mt-3">
              <Button type="submit" color="violet" appearance="primary" /*onClick={handleOpen}*/> Enviar</Button>
            </ButtonToolbar>
          </form>
        </div>
      </div>
  </div>

                
                
                </Col>
                <Col>
                <h1 style={{color:"blue"}}> Mensajes </h1>
                <div>
                  {console.log(messagesFBack)}
                  {messagesFBack === "hola"?<div></div>: <div> { messagesFBack.map((item)=>{
                      return(<div className="mt-3 d-flex flex-column " >
                                   <h1>user: {item.user}</h1>
                                     <h1>message: {item.mensaje}</h1>
                                     <hr></hr>
                          </div>
                          
                     )
                     }
                     )}</div>
                  
                  
                  
                  
                  
                  }
                  </div>
                 
                </Col>
                
                    
    </Container>
                
              

             
    
   
    </>
)}
