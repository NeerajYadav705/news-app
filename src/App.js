import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ArticleList from './components/ArticleList';
import CategoryFilter from './components/CategoryFilter';
import Pagination from './components/Pagination';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

const App = () => {
  const [articles, setArticles] = useState([]);
  const [category, setCategory] = useState('Business');
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    fetchArticles(category, currentPage);
  }, [category, currentPage]);

  const fetchArticles = async (category, page) => {
    const pageSize = 6; // Number of articles per page
    const apiKey = 'c98070fb5b7949f982d5e3b9ed070f37';
    const url = `https://newsapi.org/v2/top-headlines?category=${category.toLowerCase()}&pageSize=${pageSize}&page=${page}&apiKey=${apiKey}`;

    try {
      const response = await axios.get(url);
      setArticles(response.data.articles);
      setTotalPages(Math.ceil(response.data.totalResults / pageSize));
    } catch (error) {
      console.error('Error fetching articles:', error);
    }
  };

  const handleCategoryChange = (newCategory) => {
    setCategory(newCategory);
    setCurrentPage(1); // Reset to first page on category change
  };

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  return (
    <div className="App">
      <header className="mb-4">
        <h1>News App</h1>
        <CategoryFilter selectedCategory={category} onSelectCategory={handleCategoryChange} />
      </header>
      <ArticleList articles={articles} />
      <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
    </div>
  );
};

export default App;
