import { useEffect } from "react";

import "./App.css";
import { useAppDispatch } from "app/reduxHooks";
import { getProducts } from "./features/products/productsSlice";
import Products from "features/products/Products";
import Nav from "app/components/Nav";
import { getCategories } from "features/categories/categoriesSlice";

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getProducts());
    dispatch(getCategories());
  }, [dispatch]);

  return (
    <div className="App">
      <Nav />
      <Products />
    </div>
  );
}

export default App;
