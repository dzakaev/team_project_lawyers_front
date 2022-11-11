import React from "react";
import Header from "../components/Header";
// import css from './HomePage.module.css'
import css from "../components/Header/header.module.css";
import Footer from "../components/Footer";

const HomePage = () => {
  return (
    <>
      <div className={css.PageImage}>
        <Header />
        <div className={css.content}>
          <h1> Личный юрист </h1>
          <p>Онлайн консультация по любым юридическим вопросам</p>
          <div className={css.desc}>
            <div className={css.call}>
              <h3>24/7</h3>
              <p>
                Звоните в<br /> любое время
              </p>
            </div>
            <div className={css.des}>
              <h3>Более 170</h3>
              <p>Опытных юристов</p>
            </div>
            <div className={css.free}>
              <h3>Первая консультация</h3>
              <p>Абсолютно бесплатно!</p>
            </div>
          </div>
          <button type="button" className="btn btn-info btn-lg">
            Оставить заявку
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default HomePage;
