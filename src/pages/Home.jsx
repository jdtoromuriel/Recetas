import { useState } from "react";
import Content from "../components/content/content";
import Aside from "../components/aside/aside";

const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState("Todo");

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div className="row">
      <Aside onCategoryChange={handleCategoryChange} />
      <Content selectedCategory={selectedCategory} />
    </div>
  );
};

export default Home;
