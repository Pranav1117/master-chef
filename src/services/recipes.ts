import axios from "axios";
import { toast } from "react-toastify";
import { ErrorMessages } from "../constants";

export const fetchRecipes = async (query: string) => {
  try {
    const url = `${process.env.NEXT_PUBLIC_EDAMAM_BASE_URL}?type=public&q=${query}&app_id=${process.env.NEXT_PUBLIC_EDAMAM_APP_ID}&app_key=${process.env.NEXT_PUBLIC_EDAMAM_APP_KEYS}`;
    const { data } = await axios.get(url);
    return data;
  } catch (error) {
    // @ts-ignore
    if (error.status === 429) {
      toast.error(ErrorMessages.TOO_MANY_REQUEST);
    } else {
      toast.error(ErrorMessages.FETCH_RECIPE_FAILED);
    }
  }
};
