import React from "react";
import Mobiles from "./Mobiles";
import Computers from "./Computers";
import Watch from "./Watch";
import Men from "./Men";
import Woman from "./Woman";
import Furniture from "./Furniture";
import AC from "./AC";
import Kitchen from "./Kitchen";
import Books from './Books';
import Speakers from "./Speakers";
import TV from "./TV";

const Products = () => {
  return (
    <div>
      <Mobiles />
      <Computers />
      <Watch />
      <Men />
      <Woman />
      <Furniture />
      <Books/>
      <Speakers/>
      <TV/>
      <AC />
      <Kitchen />
    </div>
  );
};

export default Products;
