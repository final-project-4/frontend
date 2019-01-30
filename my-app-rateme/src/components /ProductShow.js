import React from 'react';

const ProductShow = props => {
    
    return (
        <div>
        <div
          className="back"
          onClick={() => {
            props.setCurrentProduct(null);
          }}
        >
          back
        </div>
        <div className="container">
          <div className="Product">
            <div>
              <h2>{props.activeProduct.name}</h2>
              <h4>{props.activeProduct.rating} / 10 ✭</h4>
            </div>
            <div>
              <div className="Product-details">
              <p>{props.activeProduct.brand}</p>
                <p>{props.activeProduct.description}</p>
                <p>{props.activeProduct.expected_price}</p>
                <p>{props.activeProduct.color}</p>
                <p>{props.activeProduct.model_year}</p>
              <img src={props.activeProduct.image} alt="" />
               
                <div className="Product-buttons">
                  <button onClick={() => {props.toggleModal()}}>Edit</button>
                  <button onClick={() => {props.deleteProduct(props.activeProduct.id)}}>Delete</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
        

    export default ProductShow;