import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./Pages/HomePage/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./Pages/AboutPage/About";
import Protected from "./Layout/Protected";
import Delivery from "./component/FooterComp/Delivery";
import Return from "./component/FooterComp/Return";
import Terms from "./component/FooterComp/Terms";
import Privacy from "./component/FooterComp/Privacy";
import Careers from "./component/FooterComp/Careers";
import AllProduct from "./component/ProductComp/AllProduct";
import Dates from "./component/ProductComp/Dates";
import Exclusive from "./component/ProductComp/Exclusive";
import Natural from "./component/ProductComp/Natural";
import Snacks from "./component/ProductComp/Snacks";
import Stuffed from "./component/ProductComp/Stuffed";
import Gourmet from "./component/ProductComp/Gourmet";
import DryFruits from "./component/ProductComp/DryFruits";
import Nuts from "./component/ProductComp/Nuts";
import Seeds from "./component/ProductComp/Seeds";
import Spices from "./component/ProductComp/Spices";
import Wine from "./component/ProductComp/Wine";

export default function App() {
  return (
    <>
     <BrowserRouter >
     <Routes>

      {/* for navbar pages */}
     <Route path="/" element={<Protected Component={Home} />} />
     <Route path="/about-us" element={<Protected Component={About} />} />
     <Route path="/all-Product" element={<Protected Component={AllProduct} />} />
     <Route path="/dates" element={<Protected Component={Dates} />} />
     <Route path="/exclusive" element={<Protected Component={Exclusive} />} />
     <Route path="/natural" element={<Protected Component={Natural} />} />
     <Route path="/snacks" element={<Protected Component={Snacks} />} />
     <Route path="/stuffed" element={<Protected Component={Stuffed} />} />
     <Route path="/gourmet" element={<Protected Component={Gourmet} />} />
     <Route path="/dryFruits" element={<Protected Component={DryFruits} />} />
     <Route path="/nuts" element={<Protected Component={Nuts} />} />
     <Route path="/seeds" element={<Protected Component={Seeds} />} />
     <Route path="/spices" element={<Protected Component={Spices} />} />
     <Route path="/wine" element={<Protected Component={Wine} />} />

    {/* for footer pages */}
     <Route path="/delivery" element={<Protected Component={Delivery} />} />
     <Route path="/return" element={<Protected Component={Return} />} />
     <Route path="/terms" element={<Protected Component={Terms} />} />
     <Route path="/privacy" element={<Protected Component={Privacy} />} />
     <Route path="/careers" element={<Protected Component={Careers} />} />
     </Routes>
     </BrowserRouter>

    </>
  );
}
