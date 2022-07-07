/*
  components
    item
    nav
  pages (next.js)
    Home
    ItemDetailView
    Cart

  theme
  util
  service
  store
  ..
*/
import { Routes, Route } from "react-router-dom";
import Nav from "./components/nav";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import ItemDetailView from "./pages/ItemDetailView";
import { Box } from "@chakra-ui/react";

function App() {
  return (
    <>
      <Nav />
      <Box>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="cart" element={<Cart />} />
          <Route path="login" element={<Login />} />
          <Route path="detail/:id" element={<ItemDetailView />} />
          <Route path="detailed/:id" element={<ItemDetailView />} />
        </Routes>
      </Box>
    </>
  );
}

export default App;
