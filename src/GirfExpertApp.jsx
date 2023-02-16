import { useState } from "react";
import { AddCategory, GifGrid} from "./components";

export const GirfExpertApp = () => {
  const [categories, setCategories] = useState(["Monkey D. Luffy"]);

  const onAddCategory = (newValue) => {
    if (categories.includes(newValue)) return;

    setCategories([newValue,...categories]);
  };
  return (
    <>
      <h1>GirfExpertApp</h1>
      <AddCategory onNewCategory={(newValue) => onAddCategory(newValue)} />

      {categories.map((category) => (
        <GifGrid key={category} category={category} />
      ))}
    </>
  );
};
