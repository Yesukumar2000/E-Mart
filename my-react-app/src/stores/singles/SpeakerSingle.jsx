import React from "react";
import { speakerData } from "../data/speaker"; 
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import { useCart } from "../context/CartContext";

const SpeakerSingle = () => {
  const { id } = useParams();
  const { addToCart } = useCart();

  const product = speakerData.find((item) => item.id === id);

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <>
      <Navbar />
      <div className="ind-section">
        <div className="ind-image">
          {console.log("Image URL:", product.image)}
          <img src={product.image} alt={product.model} />
        </div>
        <div className="ind-details space">
          <div className="ind-company">
            <h2>{product.brand}</h2>
          </div>
          <div className="ind-model space">
            <h3>{product.model}</h3>
          </div>
          <div className="ind-price space">
            <h2>{product.price}</h2>
          </div>
          <div className="ind-desc space">
            <p>{product.description}</p>
          </div>
          <button onClick={() => addToCart(product)}>Add to Cart</button>
        </div>
      </div>
    </>
  );
};

export default SpeakerSingle;
