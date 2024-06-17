import React from 'react';
import { ButtonGroup, Button } from 'react-bootstrap';

const categories = ['Business', 'Entertainment', 'Health', 'Science', 'Sports', 'Technology'];

const CategoryFilter = ({ selectedCategory, onSelectCategory }) => (
  <ButtonGroup>
    {categories.map(category => (
      <Button
        key={category}
        variant={selectedCategory === category ? 'primary' : 'outline-primary'}
        onClick={() => onSelectCategory(category)}
      >
        {category}
      </Button>
    ))}
  </ButtonGroup>
);

export default CategoryFilter;
