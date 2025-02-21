import axios from "axios";
import { toast } from "react-toastify";
import { FETCH_RECIPE_FAILED } from "../constants";

export const fetchRecipes = async (query: string) => {
  try {
    const url = `https://api.edamam.com/api/recipes/v2?type=public&q=${query}&app_id=14d23335&app_key=f165e44095cd72e7c871bca9a1258381&type=public`;
    const { data } = await axios.get(url);
    return data;
  } catch (error) {
    toast.error(FETCH_RECIPE_FAILED);
  }
};
