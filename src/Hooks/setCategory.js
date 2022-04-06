import { useEffect, useState } from "react";

const useCategory = () => {
  const [category, setCategory] = useState([]);

  useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/categories.php`)
      .then((res) => res.json())
      .then((data) => setCategory(data.categories));
  }, []);
  return [category];
};
export default useCategory;
