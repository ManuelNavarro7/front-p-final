import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";
import CustomProvider from "./context/context.js";
import Main from "./start/main.js";
import Login from "./login/login.js";
import Store from "./store/store.js";
import Cart from './Cart/main.js'
import Thankyoupage from "./thankyoupage/thankyoupage.js"
import Mensajes from "./Mensajes/main.js"
import io from 'socket.io-client'
const socket =io.connect('https://api-entrega-final-production.up.railway.app/')

function App() {
  return (
    <CustomProvider>
      <BrowserRouter>
        {/* <NavB /> */}
        <Routes>
          <Route exact path="/" element={<Main></Main>}></Route>
          <Route exact path = "/login" element={<Login></Login>}></Route>
          <Route exact path = "/store" element={<Store></Store>}></Route>
          <Route exact path = "/cart" element={<Cart></Cart>}></Route>
          <Route exact path = "/thankyoupage" element={<Thankyoupage></Thankyoupage>}></Route>
          <Route exact path = "/chat"  element={<Mensajes socket={socket}></Mensajes>}></Route>
          {/* <Route exact path = "/Store/Detalle/:id" element={<Item></Item>}></Route>
           <Route exact path = "/Store/ProductoBuscado" element={<PBuscado/>}></Route>
           <Route exact path = "/Store/Contacto" element={<Contacto/>}></Route>
           <Route exact path = "/Store/Cart" element={<CartFinal/>}></Route>
           <Route exact path = "/Store/CheckOut" element={<CheckOut/>}></Route> */}
        </Routes>

        {/* <Foot/> */}
      </BrowserRouter>
    </CustomProvider>
  );
}

export default App;
