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

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="cart" element={<Cart />} />
      </Routes>

      {/* <ItemDetailView /> */}
    </>
  );
}

export default App;
