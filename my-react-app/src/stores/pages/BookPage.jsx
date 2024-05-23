import React, { useState } from "react";
import { booksData } from "../data/books";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

const BookPage = () => {
  const [selectedProduct, setSelectedProduct] = useState([]);

  const authorHandler = (mango) => {
    if (selectedProduct.includes(mango)) {
      setSelectedProduct(selectedProduct.filter((item) => item !== mango));
    } else {
      setSelectedProduct([...selectedProduct, mango]);
    }
  };

  const filteredProduct =
    selectedProduct.length === 0
      ? booksData
      : booksData.filter((orange) => selectedProduct.includes(orange.author));

  return (
    <>
      <Navbar />
      <div className="fullpage">
        <div className="pro-selected">
          {booksData.map((phone) => {
            return (
              <div className="pro-input">
                <label>
                  <input
                    type="checkbox"
                    checked={selectedProduct.includes(phone.author)}
                    onChange={() => authorHandler(phone.author)}
                  />
                  {phone.author}
                </label>
              </div>
            );
          })}
        </div>

        <div className="pageSection">
          {filteredProduct.map((item) => {
            return (
              <div className="pro-section">
                <Link to={`/books/${item.id}`}>
                  <div className="pageImg">
                  <img src={item.image} title={item.description} alt="" />
                  </div>
                </Link>
                
              </div>
            );


            
          })}
        </div>
      </div>
    </>
  );
};

export default BookPage;
