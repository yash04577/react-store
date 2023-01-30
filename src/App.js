import Annoucement from "./components/Annoucement";
import Navbar from "./components/Navbar";
import Home from "./pages/Home"
import SinglePage from "./pages/SinglePage";
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Context from "./context/Context";
import State from "./context/State";
import Cart from "./pages/Cart";


function App() {
  return (
    <>
      <State>
      {/* <Annoucement></Annoucement> */}
      <BrowserRouter>
      <Navbar></Navbar>
        <Routes>
            <Route path="/" element={<Home></Home>} />
            <Route path="/singleproduct" element={<SinglePage></SinglePage>} />
            <Route path="/cart" element={<Cart></Cart>} />
        </Routes>
      </BrowserRouter>
      </State>
      
    </>
  );
}

export default App;
