import ProductModel from "../Models/ProductModel";
import axios from "axios";
import appConfig from "../Utils/AppConfig";

class ProductsService {
    public async getAllProducts() : Promise<ProductModel[]> {
        const response = await axios.get<ProductModel[]>(appConfig.productsUrl)
        const products = response.data;
        return products;

    }

    public async getOneProduct(id: number): Promise<ProductModel> {
        const response = await axios.get<ProductModel>(appConfig.productsUrl+id)
        const product = response.data;
        return product;
 
    }

    public async addProduct(product: ProductModel):Promise<void> {
       const options = {
        headers: {"content-Type": "multipart/form-data"}
       }
       const response = await axios.post<ProductModel>(appConfig.productsUrl, product, options)
       const addedProduct = response.data;
       console.log(addedProduct);
    }

    public async deleteProduct(id:number):Promise<void> {
        await axios.delete(appConfig.productsUrl +id)
    }
    
    public async updateProduct(product: ProductModel):Promise<void> {
        const options = {
         headers: {"content-Type": "multipart/form-data"}
        }
        const response = await axios.put<ProductModel>(appConfig.productsUrl + product.id, product, options)
        const updatedProduct = response.data;
        console.log(updatedProduct);
     }


}
const productsService = new ProductsService();
export default productsService;