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
import ItemDetailView from "./pages/ItemDetailView";
import { Box } from "@chakra-ui/react";

function App() {
  return (
    <>
      <Nav />
      <Box p={5}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="cart" element={<Cart />} />
        </Routes>
      </Box>

      {/* <ItemDetailView /> */}
    </>
  );
}

export default App;
