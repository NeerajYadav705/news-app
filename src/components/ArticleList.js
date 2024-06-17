import React from 'react';
import ArticleCard from './ArticleCard';
import { Container, Row, Col } from 'react-bootstrap';

const ArticleList = ({ articles }) => (
  <Container>
    <Row>
      {articles.map((article, index) => (
        <Col key={index} xs={12} md={6} lg={4} className="d-flex align-items-stretch">
          <ArticleCard article={article} />
        </Col>
      ))}
    </Row>
  </Container>
);

export default ArticleList;
