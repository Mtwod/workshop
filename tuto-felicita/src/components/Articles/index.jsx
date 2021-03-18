import SearchBar from "components/SearchBar";
import Article from "./Article";
import { useEffect, useState } from "react";

const data1 = {
  title: 'Article 1',
  content: 'Ici la description de l&apos;article 1',
  date: '2021/03/16',
};

const data2 = {
  title: 'Article 2',
  content: 'Un article en deux est toujours plus intéressant',
  date: '2022/03/16',
};

const data3 = {
  title: 'Article 3!!!',
  content: 'Jamais deux sans trois !!!',
  date: '2022/03/18',
};

const datas = [
  data1,
  data2,
  data3,
];

const Articles = () => {
  const [inputValue, setInputValue] = useState('');
  const [articles, setArticles] = useState([]);

  // S'exécute après le premier rendu du composant
  useEffect(() => {
    // Contenu du useEffect
    setTimeout(() => {
      setArticles(datas);
    }, 2000);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      const filteredArticles = datas.filter((article) => article.content.toLowerCase().includes(inputValue.toLowerCase()));
      setArticles(filteredArticles);
    }, 2000);
  }, [inputValue]);

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const alertUser = (text) => {
    alert(text);
  };

  return (
    <div className="Articles">
      <h1 className="Articles__title" onClick={() => { alertUser('BOUH de l\'index des articles!') }}>Articles</h1>
      <SearchBar
        inputValue={inputValue}
        handleChange={handleChange}
      />
      {articles.length === 0 && (<p>Aucun articles !</p>)}
      {articles.length > 0 && ( articles.map((article) => {
        const {
          title,
          content,
          date,
        } = article;

        return (
          <Article
            title={title}
            content={content}
            date={date}
            propFunction={alertUser}
          />
        );
      }))}
    </div>
  );
};

export default Articles;
