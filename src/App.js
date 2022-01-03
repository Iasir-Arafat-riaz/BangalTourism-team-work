import "./App.css";

import logo from "./logo.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home/Home";
import NotFound from "./components/NotFound/NotFound";
import AboutUs from "./components/AboutUs/AboutUs";
import TourPlans from "./components/TourPlans/TourPlans";
import DivisionTourPlan from "./components/Home/DivisionTourPlan/DivisionTourPlan";
import TourLists from "./components/Tours/TourLists/TourLists";
import Dashboard from "./components/Dashboard/Dashboard/Dashboard";
import MakeAdmin from "./components/Dashboard/MakeAdmin/MakeAdmin";
import MyBooking from "./components/Dashboard/MyBooking/MyBooking";
import ServiceReview from "./components/Dashboard/ServiceReview/ServiceReview";
import Payment from "./components/Dashboard/Payment/Payment";
import AddPlan from "./components/Dashboard/AddPlan/AddPlan";
import ManagePlan from "./components/Dashboard/ManagePlan/ManagePlan";
import ManageBooking from "./components/Dashboard/ManageBooking/ManageBooking";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header></Header>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/Home" element={<Home></Home>}></Route>
          <Route path="/About" element={<AboutUs />}></Route>
          <Route
            path="/DivisionTourPlan/:divName/:id"
            element={<TourLists />}
          ></Route>
         
          <Route path="/TourPlans" element={<TourPlans />}></Route>

          <Route path="/Dashboard" element={<Dashboard/>}>
            <Route path="MyBooking" element={<MyBooking/>}></Route>
            <Route path="ServiceReview" element={<ServiceReview/>}></Route>
            <Route path="Payment" element={<Payment/>}></Route>
            <Route path="AddPlan" element={<AddPlan/>}></Route>
            <Route path="ManagePlan" element={<ManagePlan/>}></Route>
            <Route path="ManageBooking" element={<ManageBooking/>}></Route>
            <Route path="MakeAdmin" element={<MakeAdmin/>}></Route>
          </Route>
          <Route path="*" element={<NotFound></NotFound>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
