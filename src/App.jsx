import React from "react";
import ArticleHeaderIndex from "./components/01 articleHeader/ArticleHeaderIndex";
import MainComponentIndex from "./components/02 mainComponents/MainComponentIndex";
import { MainProvider } from "./components/02 mainComponents/MainContext";
import FooterComponentIndex from "./components/03 FooterCompoents/FooterComponentIndex";

const App = () => {
  return (
    <div>
      <MainProvider>
        <ArticleHeaderIndex />
        <MainComponentIndex />
        <FooterComponentIndex />
      </MainProvider>
    </div>
  );
};

export default App;
