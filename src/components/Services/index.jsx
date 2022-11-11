import React from "react";
import { useSelector } from "react-redux";
import css from "../Categories/styles.module.css";

const Services = ({ categoryId }) => {

  const services = useSelector((state) => state.services.services);
  const servicesByCat = services.filter((service) => service.categories === categoryId);

  return (
    <div>
      <div  className={`dropdown-menu ${css.dropMe}`}>
      {servicesByCat.map((serv) => {
        return (
          <a key={serv._id} className={`dropdown-item ${css.dropTwo}`} href="/lawyers" >{serv.name}</a>
        );
      })}
      </div>
    </div>
  );
};

export default Services;
