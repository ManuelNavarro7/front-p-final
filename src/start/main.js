import React, { useContext, useState } from "react";
import { Modal, Button, ButtonToolbar, Placeholder } from 'rsuite';
import './styles.css';

import { NavLink } from "react-router-dom";
import Team from '../imgs/team.svg'
import { customContext } from "../context/context.js";
import { Container, Col, Row } from "react-bootstrap";
// import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import "./main.css";


export default function Main() {

  const { Resp,open,handleOpen,handleClose,RespGetUser } = useContext(customContext);

  


  return (
    <>
     <div className="LoginContainer">
      <div className="LoginOut1">
        <div className="CardLogin1">
          <div className="TitleRegistration ms-4">
            <h1>Welcome you can Register!</h1>
          </div>
          <div className="OutSideBanner">
              <div>
              <img className="SVGIMG" src={Team} alt="SVG as an image"></img>
             
              </div>
              <div className="d-flex flex-column justify-content-center align-itmes-center">
              <form onSubmit={handleOpen} className="Form1">
                <div> Username</div>
                <input id="username" name="username"></input>
                <div>Password</div>
                <input id="password" name="password"></input>
                <div> Email</div>
                <input id="email" name="email"></input>
                <div>First Name</div>
                <input id="firstName" name="firstName"></input>
                <div>Last Name</div>
                <input id="lastName" name="lastName"></input>
                <ButtonToolbar className="mt-3">
                <Button type="submit" color="violet" appearance="primary" /*onClick={handleOpen}*/> Sign-Up</Button>
                </ButtonToolbar>
              </form>
              <NavLink className="d-flex flex-column justify-content-center align-itmes-center mt-3" to ={`/login`}> <Button appearance="primary">
                      Login
                    </Button>
              </NavLink>
              </div>
           </div>
        </div>
      </div>
  </div>
   
    <div>
       {RespGetUser.data.message=="You have sign up"? <Modal open={open} onClose={handleClose}>
        <Modal.Header>
          <Modal.Title>We have some news!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          
        {RespGetUser.data.message=="You have sign up"? <h1 className="Msg">Welcome</h1> : <h1 className="Msg">Something went wrong please try again</h1>}
        </Modal.Body>
        <Modal.Footer>
        <NavLink to ={`/login`}> <Button onClick={handleClose} appearance="primary">
            Ok
          </Button>
        </NavLink>
        </Modal.Footer>
      </Modal> 
      
      :
      
      <Modal open={open} onClose={handleClose}>
        <Modal.Header>
          <Modal.Title>We have some news!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          
        {RespGetUser.data.message=="You have sign up"? <h1 className="Msg">Welcome</h1> : <h1 className="Msg">Something went wrong please try again</h1>}
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
