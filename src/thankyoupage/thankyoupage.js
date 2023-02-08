import React, { useContext, useState,useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import axios from 'axios'
import { NavLink } from "react-router-dom";
import { customContext } from "../context/context.js";
import { Container, Col, Row } from "react-bootstrap";
import CartShop from '../imgs/CartShop.png'
import Team from '../imgs/facturacionFinal.svg'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';




export default function Store() {


  const { userLog,logOut,IDFACTURACION} = useContext(customContext);
  

  
      

  return ( <>
   
    
   <Container fluid>
    <Row>
        <div className="OutContainer">
            <div className="InContainer">
                <div className="Outside">
                    <div className="ThnkBacground">
                        <div className="OutSvg">
                            <img className="Svg2" src={Team} alt="SVG as an image"></img>

                         </div>
                         <div>
                            <h1>Gracias por su compra {userLog}</h1>
                            <h2> Id de la compra {IDFACTURACION}</h2>
                        </div>
                        <div className="mt-3">
                            <NavLink to ={`/login`}> <Button  color="violet" appearance="primary" onClick={logOut}> 
                             Gracias!
                             </Button>
                             </NavLink>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </Row>
    
    
     
     
    </Container>
     
    
    </>
  );
}
