import { useAppSelector } from "app/reduxHooks";
import { selectCategories, selectStatus } from "../categoriesSlice";
import { CategoriesStateEnum } from "../types";

export const useCategories = (): {
  categories: string[];
  state: CategoriesStateEnum;
} => {
  return {
    categories: useAppSelector(selectCategories),
    state: useAppSelector(selectStatus),
  };
};
