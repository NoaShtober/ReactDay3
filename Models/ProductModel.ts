class ProductModel {
	public id: number;
    public name: string;
    public price: number;
    public stock: number;
    public imageUrl: string;
    public image: File;

    public static nameValidation = {
        required: {value: true, message:"Missing name."},
        minLength:{value:2, message:"Please Insert at least 2 charecters"},
        maxLength:{value:20, message:"Name is too long"}
    }

    public static priceValidation = {
        required: {value: true, message:"Missing Price."},
        min:{value:0, message:"Price is too low or negative"},
        max:{value:1000, message:"Price is too high"},
    }
    
    public static StockValidation = {
        required: {value: true, message:"Missing Stock."},
        min:{value:0, message:"Stock is too low or negative"},
        max:{value:1000, message:"Stock is too high"},
    }

    public static ImageValidation = {
        required: {value: true, message:"Missing Image."}
    }




    
}

export default ProductModel;
