import { useHttp } from "../hooks/use.https";

const useService = () => {
  const { request } = useHttp();
  const _apiBase = "https://api.spoonacular.com";
  const _apiKey = "?apiKey=84eef7840383486d903f4c00890368a6";

  const getAllIngridents = async () => {
    const res = await request(`${_apiBase}/food/ingredients/search${_apiKey}`);
    return res;
  };

  const getAllRecipes = async () => {
    const res = await request(`${_apiBase}/recipes/complexSearch${_apiKey}`);
    return res;
  };

  return { getAllIngridents, getAllRecipes };
};

export default useService;
