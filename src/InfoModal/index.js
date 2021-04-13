import React,{useState} from 'react';
import {Modal} from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import './style.css';

const InfoModal =({data})=> {
    const [show, setShow] = useState(false);
    const [expandRecipe, setExpandRecipe] = useState(false);
    const [expandOrder, setExpandOrder] = useState(false);
    const [expandDish, setExpandDish] = useState(false);
    const history = useHistory();
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleRecipeExpand = (e) => {
        if(e.target.id==0){
            setExpandRecipe(!expandRecipe);
        }

    }
    const handleOrderExpand = (e) => {
        setExpandOrder(!expandOrder);
    }
    const handleDishExpand = (e) => {
        setExpandDish(!expandDish);
    }

    const cardBtn={
        backgroundColor: "#fdfffd",
        width: "100%",
        height:"100%",
        border: "none",
        textAlign: "left",
        padding:"13px 20px",
        outline: "transparent",
    }

    return (
      <>
        <button className='card-btn' style={cardBtn} onClick={handleShow}>
           <span> {data.title} </span>
        </button>
  
        <Modal show={show} onHide={handleClose} className='info-modal'>
          <Modal.Header closeButton />
          <Modal.Body>
              <div className='food-info food-info-img'>
                  <img src={data.img} alt={data.title} />
              </div>
              <div className='food-info'>
                  <h3>Get it your way</h3>
                  <ul>
                      {
                              <li >
                                  {
                                      data.key_options && data.key_options.data.map((value,i)=>{
                                          return(
                                           <React.Fragment>
                                              <div id={i} className='info-key' onClick={(e) => handleRecipeExpand(e)}>{value.key_name}</div>
                                              { value.options.map((v,i)=>{
                                              return (
                                                  expandRecipe && (
                                                      <div className='key-option'>
                                                          <span onClick={() => history.push('/gujiya-recipe')}>{v}</span>
                                                      </div>
                                                  )
                                              )
                                          }) }
                                          </React.Fragment>
                                          )

                                      })
                                  }
                              </li>
                      }
                  </ul>
              </div>
          </Modal.Body>
        
        </Modal>
      </>
    );
  }
  
export default InfoModal;