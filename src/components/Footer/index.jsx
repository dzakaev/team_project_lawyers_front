import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllServices } from '../../redux/features/services';
import css from "./styles.module.css"

const Footer = () => {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchAllServices())
  }, [dispatch])

  return (
    <div className= {css.main}>
      <div className={`container ${css.cont}`}>
        <footer className={`py-5 ${css.mainLogo}`}>
          <div className="row">
            <div className="col-2">
              <h5>Section</h5>
              <ul className="nav flex-column">
                <li className="nav-item mb-2"><a href="#"
                                                 className="nav-link p-0 text-muted">Home</a></li>
                <li className="nav-item mb-2"><a href="#"
                                                 className="nav-link p-0 text-muted">Features</a>
                </li>
                <li className="nav-item mb-2"><a href="#"
                                                 className="nav-link p-0 text-muted">Pricing</a>
                </li>
                <li className="nav-item mb-2"><a href="#"
                                                 className="nav-link p-0 text-muted">FAQs</a></li>
                <li className="nav-item mb-2"><a href="#"
                                                 className="nav-link p-0 text-muted">About</a></li>
              </ul>
            </div>
          </div>

          <div className="d-flex justify-content-between py-4 my-4 border-top">
            <p>© 2021 Company, Inc. All rights reserved.</p>
          </div>
        </footer>
        <div>
          <div>
          <ul className="list-unstyled d-flex">
            <li className="ms-3"><a className="link-dark" href="#">
              <svg className="bi" width="24" height="24">
                <use href="#twitter">tw</use>
              </svg>
            </a></li>
            <li className="ms-3"><a className="link-dark" href="#">
              <svg className="bi" width="24" height="24">
                <use href="#instagram">inst</use>
              </svg>
            </a></li>
            <li className="ms-3"><a className="link-dark" href="#">
              <svg className="bi" width="24" height="24">
                <use href="#facebook">face</use>
              </svg>
            </a></li>
           </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;