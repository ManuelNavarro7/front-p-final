import React, { createContext, useState, useEffect } from "react";
import axios from 'axios'
// import io from 'socket.io-client';

// const socket = io();



export const customContext = createContext();

const { Provider } = customContext;

const CustomProvider = ({ children }) => {
  // const [Data, setData] = useState("hola");

  //---------------------------------Main-----------------------------//
  const [open, setOpen] = React.useState(false);
  let [Resp,setResp]= useState({data:{message:"ki"}})
  let [RespGetUser,setRespGetUser]= useState({data:{message:"ki"}})
  let [RespLogin,setRespLogin]= useState({data:{message:"ki"}})
  let [userLog,setUserLog]= useState("")
  let [Productos, setProductos]=useState(0)
  let [ CarritoId,setCarritoId]=useState()
  let [Cart,setCart]=useState()
  let [countPedido,setCountPedido]=useState(0)
  let [TotalParaCart,setTotalParaCart]=useState(0)
  const [TotalParaFacturacion, setTotalParaFacturacion]=useState(0)
  let [ResponseTest, setResponseTest]=useState(0)
  let [statusfact, setstatusfact]=useState(0)
  let [IDFACTURACION,setIDFACTURACION]=useState(0)

  let URLAPI ='https://api-entrega-final-production.up.railway.app/'

 
  
  const getTotal = () =>{
    const res = Resp[0].productos.reduce((prev, item) =>{
      return prev + (item.cantidadPedida * item.price)
    },0)
    setTotalParaFacturacion(res)
  }

  useEffect(()=>{

    
    if(ResponseTest==0){
     return  console.log("cool")
    }else{
      setCarritoId(ResponseTest.data.carrito[0]._id)
    }
  
  },[ResponseTest])

  // useEffect(() => {
  //   socket.on('connect', () => {
  //    console.log("Connected IO");
  //   })},[])
  
  let cart={
    tittle: "carrito"
}

  async function getUser(dataObj) {
    try {
      
      
      const response = await axios.post('https://api-entrega-final-production.up.railway.app/api/session/signup',dataObj);
      console.log(`2 ${JSON.stringify(response)}`)
      
      await setRespGetUser(response)
      
    } catch (error) {
      console.error(error);
      
    }
  }
  async function getCarrito() {
    try {
      const response = await axios.get('https://api-entrega-final-production.up.railway.app/api/carritos/userid',{withCredentials:true});
      
      console.log(`3 ${JSON.stringify(response)}`)
      setUserLog(response.data.user)
      setResp(response.data.carritos) 
      
     
       
        
      
    } catch (error) {
      console.error(error);
    }
  }
  async function getCarritoFacturacion() {
    try {
      const response = await axios.get('https://api-entrega-final-production.up.railway.app/api/carritos/userid',{withCredentials:true});
    
      setResp(response.data.carritos) 
      
     
       
        
      
    } catch (error) {
      console.error(error);
    }
  }
  async function CrearCarrito() {
    try {

      const response = await axios.get('https://api-entrega-final-production.up.railway.app/api/carritos/userid');
      console.log(response)
      setUserLog(response.data.user)
      setResp(response.data.carritos) 
      
      if(response.data.carritos.length === 0 ||response.data.carritos ===[]){
       
        const response1 = await axios.post('https://api-entrega-final-production.up.railway.app/api/carritos/agregarcarrito',cart,{withCredentials:true});
        setResponseTest(response1)
        // setCarritoId(response1.data.carritos[0]._id)
       }else{
        
        setCart(response.data.carritos)
        setCarritoId(response.data.carritos[0]._id)
        
       }
   
      
     
      
    } catch (error) {
      console.error(error);
    }
  }
  async function getProducts() {
    try {
      const response2 = await axios.get('https://api-entrega-final-production.up.railway.app/api/productos',{withCredentials:true});
     
      setProductos(response2.data.productos) 
      
    } catch (error) {
      console.error(error);
     
  }
}

let AddToCart =async (event)=>{
  const ProductoId = event.target.id;

  try{ 
    let idProd={
      id: ProductoId,
      cantidadPedida:1,
    }
    
    
    const response = await axios.post(`https://api-entrega-final-production.up.railway.app/api/carritos/${CarritoId}/productos`,idProd,{withCredentials:true});
    await getCarrito()
    
  
}catch(error){
  console.log(error)
}

}
let AddToProductToCartFromCart =async (event)=>{
  const ProductoId = event.target.id;
  
  try{ 
    let idProd={
      id: ProductoId,
      cantidadPedida:1,
    }
    
   
    const response = await axios.post(`https://api-entrega-final-production.up.railway.app/api/carritos/${CarritoId}/productos/cart`,idProd,{withCredentials:true});
    await getCarrito()
    
   
  
}catch(error){
  console.log(error)
}

}
let RemoveProductFromCartFromCart =async (event)=>{
  const ProductoId = event.target.id;
 
  try{ 
    let idProd={
      id: ProductoId,
      cantidadPedida:1,
    }
   
    
    const response = await axios.delete(`https://api-entrega-final-production.up.railway.app/api/carritos/${CarritoId}/productos/cart/${ProductoId}`,idProd,{withCredentials:true});
    await getCarrito()
   
  
}catch(error){
  console.log(error)
}

}

let Facturacion =async (event)=>{
  const date = new Date();
  const localeString = date.toLocaleString();
  
  let cartToSend={
    user:userLog,
    productos: Resp[0].productos,
    idCart:Resp[0]._id,
    total:TotalParaFacturacion,
    date: localeString
  }
  
  try{ 
    const responseFacturacion = await axios.post(`https://api-entrega-final-production.up.railway.app/api/facturacion`,cartToSend,{withCredentials:true});
   
    // console.log(responseFacturacion.data[0]._id)
    //ver id de facturacion para el mail
    setIDFACTURACION(responseFacturacion.data[0]._id)


    let cartToSend2={
      user:userLog,
      productos: Resp[0].productos,
      idCart:Resp[0]._id,
      total:TotalParaFacturacion,
      date: localeString,
      idFactura:IDFACTURACION,
    }

    const response = await axios.post(`https://api-entrega-final-production.up.railway.app/api/carritos/${CarritoId}/facturacion`,cartToSend2,{withCredentials:true});
    // console.log(response.status)
    

    setstatusfact(response.status)
    if(response.status ===200){
      getCarritoFacturacion()
   
    }

    }catch(error){
      console.log(error)
    }
 
}


  async function LoginUser(dataObj) {
    try {
      
      const response = await axios.post('https://api-entrega-final-production.up.railway.app/api/session/login',dataObj,{withCredentials:true});
      console.log(`1 ${JSON.stringify(response)}`)
      
      setRespLogin(response)
     
     
      
    } catch (error) {
      console.error(error);
     
    }
  }
 

  
  const handleOpen = async(event) => {
    try{ 
    event.preventDefault();
    const formData = new FormData(event.target);
    const dataObj = Object.fromEntries(formData);
    
    await getUser(dataObj)
   
    setOpen(true)
    }catch (error) {
      console.error(error);
    }
  };
  const handleOpen2 = async(event) => {
    try{ 
    event.preventDefault();
    const formData = new FormData(event.target);
    const dataObj = Object.fromEntries(formData);
    
    await LoginUser(dataObj)
    await CrearCarrito()
    await getProducts()

    
    setOpen(true)
    }catch (error) {
      console.error(error);
    }
  };
  
  const handleClose = () => setOpen(false);

  const logOut= async(event) => {
    try{ 
    
      const response = await axios.get('https://api-entrega-final-production.up.railway.app/api/session/logout',{withCredentials:true});
   
    }catch (error) {
      console.error(error);
    }
  };
  




  return <Provider value={{ getUser,Resp,setResp,open, setOpen,handleOpen,handleClose,handleOpen2,RespGetUser,RespLogin,userLog,getProducts,Productos,AddToCart,setTotalParaCart,TotalParaCart,AddToProductToCartFromCart,RemoveProductFromCartFromCart,TotalParaFacturacion,getTotal,Facturacion,statusfact,logOut,IDFACTURACION, }}>{children}</Provider>;
};
export default CustomProvider;
