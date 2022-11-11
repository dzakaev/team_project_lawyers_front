import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllCategories } from "../../redux/features/categories";
import css from "./styles.module.css";
import { NavLink } from 'react-router-dom';
import Services from '../Services';

const Category = () => {
  const categories = useSelector((state) => state.categories.categories);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAllCategories());
  }, [dispatch]);

  return (
    <div className={`dropdown show ${css.drop}`}>
      <NavLink   className={`nav-link active  ${css.dtt}`} to="/" role="button"
                 id="dropdownMenuLink"  aria-haspopup="true"
                 aria-expanded="false">
        Категории
      </NavLink>
      <div className={`dropdown-menu  ${css.dropMenu}`} aria-labelledby="dropdownMenuLink">
        {categories.map((category) => {
          return (
            <div key={category._id}>
            <span  className={`dropdown-item  ${css.dropTwo}`} >{category.name}
              <div className={`btn-group dropend ${css.dro}`}>
                <span className="dropdown-toggle"  role="button"
                   id="dropdownMenuLink"  aria-haspopup="true"
                   aria-expanded="false">
                </span>
                <Services categoryId={category._id}/>
              </div>
            </span>
        </div>
          )
        })}
      </div>
    </div>
  );
};

export default Category;
