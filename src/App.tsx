import { FC } from "react";
import Home from "./pages/Home";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Shop from "./pages/Shop";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Cart from "./pages/cart";
import { useAuth0 } from "@auth0/auth0-react";

const App:FC = () => {

  const {isLoading} = useAuth0()

  if(isLoading) {
    return (
      <div className="h-[100vh] flex justify-center items-center font-extrabold text-7xl text-[#3652AD] bg-[#E9F6FF]">Loading...</div>
    )
  }

  return (
    <main className="bg-[#E9F6FF]">
      <Router>
        <Nav />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="Shop" element={<Shop />} />
            <Route path="Cart" element={<Cart />} />
          </Routes>
        <Footer />
      </Router>     
    </main>
  )
}

export default App;