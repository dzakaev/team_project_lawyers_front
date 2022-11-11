import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllLawyers } from '../../redux/features/lawyers';
import styles from "./styles.module.css"

const Lawyer = () => {
  const lawyers = useSelector((state) => state.lawyers.lawyers)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchAllLawyers())
  },[dispatch])

  return (
      <div className={styles.main}>
        {lawyers.map((lawyer) => {
          return (
            <div key={lawyer._id} className={`card ${styles.cardDiv}`}>
              <img src={lawyer.img} className="card-img-top" alt="..."/>
              <div className="card-body">
                <h5 className="card-title">{lawyer.name} {lawyer.surname}</h5>
                <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur cum doloribus eligendi eos excepturi illo ipsa laborum numquam, obcaecati quas ratione repellat tempora. Commodi consectetur eveniet id, magni nisi porro.</p>
                <a href="#" className="btn btn-primary">Оставить заявку</a>
              </div>
            </div>
          )
        })}
      </div>
  );
};

export default Lawyer;