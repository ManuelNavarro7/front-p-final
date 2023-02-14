import React, { useContext, useState } from "react";
import { Modal, Button, ButtonToolbar, Placeholder } from 'rsuite';
import './styles.css';
import axios from 'axios'
import { NavLink } from "react-router-dom";
import { customContext } from "../context/context.js";
import { Container, Col, Row } from "react-bootstrap";
// import Button from 'react-bootstrap/Button';


import "./styles.css";

export default function Login() {
  
  const { Resp,open,handleClose,handleOpen2,RespLogin } = useContext(customContext);



  return (
<>
   <div className="LoginContainer">
      <div className="LoginOut">
        <div className="CardLogin">
          <div>
            <h1>Welcome you can login now!</h1>
          </div>
          <form onSubmit={handleOpen2} className="Form1">
          <div> Username</div>
          <input id="username" name="username"></input>
          <div>Password</div>
          <input id="password" name="password"></input>
            <ButtonToolbar className="mt-3">
              <Button type="submit" color="violet" appearance="primary" /*onClick={handleOpen}*/> Login</Button>
            </ButtonToolbar>
          </form>
        </div>
      </div>
  </div>

    <div>
       {RespLogin !=0 ? <Modal open={open} onClose={handleClose}>
        <Modal.Header>
          <Modal.Title>We have some news</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          
        {RespLogin !=0 ?<h1 className="Msg">Welcome</h1> : <h1 className="Msg">Something went wrong please try again</h1>}
        </Modal.Body>
        <Modal.Footer>
        <NavLink to ={`/store`}> <Button onClick={handleClose} appearance="primary">
            Ok
          </Button></NavLink>
         
        
        </Modal.Footer>
      </Modal> 
      
      :
      
      <Modal open={open} onClose={handleClose}>
        <Modal.Header>
          <Modal.Title>We have some news</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          
        {RespLogin !=0?<h1 className="Msg">Welcome</h1> : <h1 className="Msg">Something went wrong please try again</h1>}
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={handleClose} appearance="primary">
            Ok
          </Button>
          
        </Modal.Footer>
      </Modal> }
    </div>
    </>
  );
}
