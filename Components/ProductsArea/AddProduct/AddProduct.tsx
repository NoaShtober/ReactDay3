import { useForm } from "react-hook-form";
import ProductModel from "../../../Models/ProductModel";
import "./AddProduct.css";
import productsService from "../../../Services/ProductsService";
import { useNavigate } from "react-router-dom";


function AddProduct(): JSX.Element {
    const {register, handleSubmit, formState} = useForm<ProductModel>();
    const navigate = useNavigate();

    async function send(product:ProductModel) {
  
        try{
            product.image = (product.image as unknown as FileList)[0];
            await productsService.addProduct(product);
            alert("Product has been added.")
            navigate("/products")
        }
        catch(err:any) {
            alert(err.message);
        }

    }
    
    return (
        <div className="AddProduct">
			<form onSubmit= {handleSubmit(send)}>
                <h2>add Product</h2>
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
                    <input type="file" accept="Image/*" {...register("image", ProductModel.ImageValidation)}/>
                    <span className="err">{formState.errors?.image?.message}</span>
                    <button>Add</button>
            </form>
        </div>
    );
}

export default AddProduct;


