import React from "react";
import Header from "../common/header/Header";
import ScrollToTop from './ScrollToTop';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "../home/Home";
import Footer from "../common/footer/Footer";
import About from "../about/About";
import Blog from "../blog/Blog";
import Services from "../services/Services";
import Contact from "../contact/Contact";
import SugarReport from "../report/SugarReport"; // Import the Diet component
import LiverFunction from "../report/LiverFunctionReport"; // Import the Diet component
import CardiovascularReport from "../report/CardiovascularReport"; // Import the Diet component
import BloodPressureReport from "../report/BloodPressureReport"; // Import the Diet component
import CompleteBloodCountReport from "../report/CompleteBloodCountReport"; // Import the Diet component
import KidneyFunctionTestReport from "../report/KidneyFunctionTestReport"; // Import the Diet component
import Diet from "../diet/Diet"; // Import the Diet component
import Dietcv from "../diet/Dietcv"; // Import the Diet component
import Dietp from "../diet/Dietp"; // Import the Diet component
import Dietcbc from "../diet/Dietcbc"; // Import the Diet component
import Dietbp from "../diet/Dietbp"; // Import the Diet component
import Dietkft from "../diet/Dietkft"; // Import the Diet component

import HighProteinFoods from "../dietss/highprotein"; // Import the Diet component
import HighFiberFoods from "../dietss/highfiber"; // Import the Diet component
import WeightGain from "../dietss/weightgain"; // Import the Diet component
import Demo from "../dietss/demo"; // Import the Diet component

const Pages = () => {
  return (
    <>
      <Router>
      <ScrollToTop />
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/services" component={Services} />
          <Route exact path="/blog" component={Blog} />    
          <Route exact path="/contact" component={Contact} />

          <Route exact path="/diet" component={Diet} />
          <Route exact path="/dietcv" component={Dietcv} />
          <Route exact path="/dietp" component={Dietp} />
          <Route exact path="/dietbp" component={Dietbp} />
          <Route exact path="/dietcbc" component={Dietcbc} />
          <Route exact path="/dietkft" component={Dietkft} />
         
         
         
          <Route exact path="/highprotein" component={HighProteinFoods} />
          <Route exact path="/highfiber" component={HighFiberFoods} />
          <Route exact path="/weightgain" component={WeightGain} />
          <Route exact path="/demo" component={Demo} />

         
          <Route exact path="/Sugarreport" component={SugarReport} /> 
          <Route exact path="/LiverFunctionreport" component={LiverFunction} /> 
          <Route exact path="/Cardiovascularreport" component={CardiovascularReport} /> 
          <Route exact path="/BloodPressurereport" component={BloodPressureReport} /> 
          <Route exact path="/CompleteBloodCountreport" component={CompleteBloodCountReport} /> 
          <Route exact path="/KidneyFunctionTestReport" component={KidneyFunctionTestReport} /> 


        </Switch>
        <Footer />
      </Router>
    </>
  );
};

export default Pages;
