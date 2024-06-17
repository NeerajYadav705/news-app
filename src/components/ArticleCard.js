import React from 'react';
import { Card } from 'react-bootstrap';

const ArticleCard = ({ article }) => (
  <Card className="mb-3">
    {article.urlToImage && <Card.Img variant="top" src={article.urlToImage} />}
    <Card.Body>
      <Card.Title>{article.title}</Card.Title>
      <Card.Text>{article.description}</Card.Text>
      <a href={article.url} target="_blank" rel="noopener noreferrer">Read more</a>
    </Card.Body>
  </Card>
);

export default ArticleCard;
