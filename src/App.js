import './App.css';
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import General from "./pages/General";
import ShopCategory from "./pages/ShopCategory";
import Product from "./pages/Product";
import Keychain_banner from "./components/Assets/banner_Keychain.jpg";
import Pen_banner from "./components/Assets/banner_Pen.jpg";
import Candle_holders_banner from "./components/Assets/banner_Candle_holders.jpg";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Navbar/>
                <Routes>
                    <Route path="/" element= {<General/>}/>
                    <Route path="/Keychain" element= {<ShopCategory banner={Keychain_banner} category="Keychain"/>}/>
                    <Route path="/Pen" element= {<ShopCategory banner={Pen_banner} category="Pen" />}/>
                    <Route path="/Candle_holders" element= {<ShopCategory banner={Candle_holders_banner} category="Candle_holders" />}/>
                    <Route path="/product" element={<Product/>}>
                        <Route path=':productId' element={<Product/>}/>
                    </Route>
                </Routes>
                <Footer/>
            </BrowserRouter>
        </div>
    );
}

export default App;
