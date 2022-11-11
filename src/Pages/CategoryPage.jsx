import React from 'react';
import Category from '../components/Categories';
import Header from '../components/Header';
import css from '../components/Header/header.module.css'
import Lawyer from '../components/Lawyer/Lawyer';

const CategoryPage = () => {
  return (
    <div className={css.PageImage}>
      <Header/>
      <Lawyer/>
    </div>
  );
};

export default CategoryPage;