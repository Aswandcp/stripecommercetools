import React, { useState, useEffect } from "react";
import ProductCard from "./ProductCard.js";

export default function ProductList(props) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [products, setProducts] = useState([]);

  // Fetch all products whenever currency is switched, or on initial load
  useEffect(() => {
    setIsLoaded(false);
    setProducts([]);
<<<<<<< HEAD
    fetch(REACT_APP_API_URL+ "/products/" + props.currency)
=======
    fetch(REACT_APP_API_URL+"/products/" + props.currency)
>>>>>>> 178b6ea30f82a462996fdec61790dad8275bd14b
      .then((res) => res.json())
      .then((obj) => {
        setProducts(obj);
        setIsLoaded(true);
      });
  }, [props.currency]);

  if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <>
        <div>
          <div className="row row-cols-1 row-cols-lg-5 g-4">
            {products.map((product, key) => (
              <ProductCard
                product={product}
                addToCart={props.addToCart}
                key={key}
                brandColor={props.brandColor}
                currency={props.currency}
              />
            ))}
          </div>
        </div>
      </>
    );
  }
}
