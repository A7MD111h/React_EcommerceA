import {
  GroupCloth,
  Shoes,
  Electronics,
  FemaleCloth,
  MaleCloth,
  Books,
  Jewelry,
} from "../Assets/Images/Image";

import { useState } from "react";


let [data , setData] = useState([{}]);

data = [
  {
    img: GroupCloth,
    name: "Cloths"
  },
  {
    img: Shoes,
    name: "Shoe"
  },
  {
    img: FemaleCloth,
    name: "Cloths"
  },
  {
    img: Electronics,
    name: "Electronics"
  },
  {
    img: MaleCloth,
    name: "Cloths"
  },
  {
    img: Books,
    name: "Book"
  },
  {
    img: Jewelry,
    name: "Jewelry"
  },
];
export default data;
