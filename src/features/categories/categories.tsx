import { useEffect, useState, ReactElement } from "react";
import { CategoriesStateEnum } from "./types";
import { NavDropdown } from "react-bootstrap";
import { useCategories } from "./hooks/useCategories";
import Loader from "app/components/Loader";
import { Badge } from "react-bootstrap";
import { useAppDispatch } from "app/reduxHooks";
import { getProductsByCategory } from "features/products/productsSlice";
import { getCategories } from "./categoriesSlice";

export default function Categories() {
    
  const { state, categories } = useCategories();
  const [_State, setState] = useState<CategoriesStateEnum>("loading");
  const dispatch = useAppDispatch();
  const [SelectedCategory, setSelectedCategory] = useState("");

  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);

  useEffect(() => {
    if (SelectedCategory) {
      dispatch(getProductsByCategory(SelectedCategory));
    }
  }, [SelectedCategory, dispatch]);

  useEffect(() => {
    if (state === "loading") {
      setState("loading");
    } else if (state === "failed") {
      setState("failed");
    } else {
      setState("done");
    }
  }, [state, categories]);

  const CategoriesState: { [key in CategoriesStateEnum]: ReactElement } = {
    loading: <Loader width={50} />,
    failed: <Badge bg="danger">Loading Categories Failed</Badge>,
    done: (
      <>
        {categories?.map((category) => (
          <NavDropdown.Item onClick={() => setSelectedCategory(category)}>
            {category}
          </NavDropdown.Item>
        ))}
      </>
    ),
  };

  return <div className="p-2">{CategoriesState[_State]}</div>;
}
