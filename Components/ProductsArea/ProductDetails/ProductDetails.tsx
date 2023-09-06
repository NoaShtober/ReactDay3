import { NavLink, Navigate, useNavigate, useParams } from "react-router-dom";
import "./ProductDetails.css";
import { useEffect, useState } from "react";
import ProductModel from "../../../Models/ProductModel";
import productsService from "../../../Services/ProductsService";

function ProductDetails(): JSX.Element {

    const params = useParams();
    const [product, setProduct] = useState<ProductModel>();

   /* useEffect(() => {
        const id = +params.id;
        productsService.getOneProduct(id)
            .then(product => setProduct(product))
            .catch(err => alert(err.message));

    }, []) */

    useEffect(() => {
        (async function() {
            try {
                const id  = +params.id;
                const product = await productsService.getOneProduct(id);
                setProduct(product);
            }
            catch(err:any) {
                alert(err.message);
            }
        })();
    }, []);

    const navigate = useNavigate();
    async function deleteMe() {
        try {
            const sure = window.confirm("Are you sure?")
            if(!sure) return;
            await productsService.deleteProduct(product.id);
            alert("Product has been deleted")
            navigate("/products");

        }

        catch(err:any) {
            alert(err.message);
        }
    }
    
    return (
        <div className="ProductDetails">
            <h3>Name: {product?.name}</h3>
            <h3>Price: {product?.price}</h3>
            <h3>Stock: {product?.stock}</h3>
            <img src = {product?.imageUrl}/>
            <br/>
            <NavLink to = {"/products"}>Back</NavLink>
            <br/>
            <NavLink to = {"/products/edit/" + product?.id}>Edit</NavLink>
            <br/>
            <NavLink to = "#" onClick={deleteMe}>Delete</NavLink>
        </div>
    );
}

export default ProductDetails;
