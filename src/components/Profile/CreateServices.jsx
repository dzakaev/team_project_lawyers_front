import React, { useEffect, useState } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { createServices, loadCategories } from "../../redux/features/profileReducer";
import css from './services.module.css'
import styled from 'styled-components';
import Service from './services';


const CreateServices = (props) => {
  // const category = useSelector(state => state.lawyerReducer.categories)
  const dispatch = useDispatch();

  const [text, setText] = useState("");
  const [price, setPrice] = useState("");
  // const [categories, setCategories] = useState("");

// const handleChangeCategories = (e) => {
//   setCategories(e.target.value)
// }

const handleChangeText = (e) => {
  setText(e.target.value)
}

const handleChangePrice = (e) => {
  if(e.target.value === e.target.value.replace(/[^\d,]/g, '')) {
    setPrice(e.target.value)
  }
}

  const addServices = () => {
    dispatch(createServices(text, price),
      props.onHide(false))
  }

  useEffect(() => {
    dispatch(loadCategories());
  }, [dispatch]);

  return (
    <div>
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Добавление услуг в анкету
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/*<h4>Выберите категорию:</h4>*/}
          {/*<p>*/}
          {/*  <Form.Select value={categories} onChange={handleChangeCategories} aria-label="Default select example">*/}
          {/*    {category.map ((cate) => {*/}
          {/*      return (*/}
          {/*        <option key={cate._id}>{cate.name}</option>*/}
          {/*      )*/}
          {/*    })}*/}
          {/*  </Form.Select>*/}
          {/*</p>*/}
          <Form>
            <input value={text} onChange={handleChangeText} className={`form-control ${css.form}`} type="text"  maxLength="25" placeholder="Введите название услуги" />
            <input value={price} onChange={handleChangePrice} className="form-control" type="text" maxLength="6" placeholder="Введите цену" />
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={() => addServices()}>Добавить</Button>
          <Button onClick={props.onHide}>Закрыть</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

function Services() {

const CreateButton = styled.button `
  background-color: white;
  border: none;
  margin: 0 15px 0 10px;
  &:hover {
    border-bottom: 1px solid #1f90fa;
  }
`

  const [modalShow, setModalShow] = React.useState(false);

  return (
    <div className={css.createServicesMainBlock}>
      <CreateButton  onClick={() => setModalShow(true)}>
        Добавить услугу
      </CreateButton>
      <Service/>

      <CreateServices
        show={modalShow}
        onHide={() => setModalShow(false)}
      />

    </div>
  );
}

export default Services;