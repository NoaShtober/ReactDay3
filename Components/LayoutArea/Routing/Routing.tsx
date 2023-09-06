import { Navigate, Route, Routes } from "react-router-dom";
import Home from "../../HomeArea/Home/Home";
import "./Routing.css";
import { Suspense, lazy } from "react";
import ProductList from "../../ProductsArea/ProductList/ProductList";
import Page404 from "../Page404/Page404";
import ContactUs from "../../AboutArea/ContactUs/ContactUs";
import ProductDetails from "../../ProductsArea/ProductDetails/ProductDetails";
import EmployeeList from "../../EmployeeArea/EmployeeList/EmployeeList";
import Spinner from "../../SharedArea/Spinner/Spinner";
import AddProduct from "../../ProductsArea/AddProduct/AddProduct";
import EditProduct from "../../ProductsArea/EditProduct/EditProduct";

function Routing(): JSX.Element { 

    function delay () {
        return new Promise<void>(resolve => {
            setTimeout(() => {
                resolve();
            }, 3000)
       });
    }
    const LazyAbout = lazy(async () => {
        await delay();
        return import("../../AboutArea/About/About")
    });

    return (
        <div className="Routing">
			<Routes>
                <Route path = "/home" element={<Home/>}/>
                <Route path = "/products" element={<ProductList/>}/>
                <Route path = "/" element={<Home/>}/>
                {/*Eager Loading */}
                {/* Route path="/about element={About/>}" */}
                {/*Eager Loading */}
                <Route path="/about" element = {
                <Suspense fallback={<Spinner/>}>
                <LazyAbout/></Suspense>
                }/>
                <Route path= "/" element ={<Navigate to="/home"/>} />
                <Route path="*" element ={<Page404/>}/>
                <Route path="/contactus" element={<ContactUs/>}/>
                <Route path="/product/details/:id" element={<ProductDetails/>}/>
                <Route path="/employees" element={<EmployeeList/>}/>
                <Route path="/products/new" element={<AddProduct/>}/>
                <Route path="/products/edit/:id" element={<EditProduct/>}/>
            </Routes>
        </div>
    );
}

export default Routing;
