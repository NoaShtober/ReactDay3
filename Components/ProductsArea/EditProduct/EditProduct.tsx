import { useNavigate, useParams } from "react-router-dom";
import "./EditProduct.css";
import { useForm } from "react-hook-form";
import ProductModel from "../../../Models/ProductModel";
import productsService from "../../../Services/ProductsService";
import { useEffect, useState } from "react";

function EditProduct(): JSX.Element {
    
    const {register, handleSubmit, formState, setValue} = useForm<ProductModel>();
    const navigate = useNavigate();
    const params = useParams<{id:string}>();
    
    const imageParams = useParams();
    const [Image, setImage] = useState<string>();

    useEffect(() => {
        const id =+ params.id;
        productsService.getOneProduct(id)
            .then(product => {
                setValue("name", product.name);
                setValue("price", product.price);
                setValue("stock", product.stock);
                setValue("id", product.id)
                setImage(product.imageUrl)
            })
        console.log(id);
    }, [])

    async function send(product:ProductModel) {
  
        try{
            product.image = (product.image as unknown as FileList)[0];
            await productsService.updateProduct(product);
            alert("Product has been Updated.")
            navigate("/products")
        }
        catch(err:any) {
            alert(err.message);
        }

    }
    
    return (
        <div className="EditProduct">
			<form onSubmit= {handleSubmit(send)}>
                <input type= "hidden" {...register("id")}/>
                <h2>Edit Product</h2>
                    <label>Name:</label>
                    <input type="text" {...register("name", ProductModel.nameValidation)}/>
                        <span className="err">{formState.errors?.name?.message}</span>
                    <br/>
                    <label>Price:</label>
                    <input type="number" step="0.01"  {...register("price", ProductModel.priceValidation)}/>
                    <span className="err">{formState.errors?.price?.message}</span>
                    <br/>
                    <label>Stock:</label>
                    <input type="number"  {...register("stock", ProductModel.StockValidation)}/>
                    <span className="err">{formState.errors?.stock?.message}</span>
                    <label>Image:</label>
                    <img src={Image} />
                    <input type="file" accept="Image/*" {...register("image")}/>
                    <button>Edit</button>
            </form>
        </div>
    );
}

export default EditProduct;
function then(arg0: (product: any) => void) {
    throw new Error("Function not implemented.");
}

