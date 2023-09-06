import "./Home.css";
import css from "./Home.module.css";
import imageSource1 from "../../../Assets/Images/fruits.jpg";
import imageSource2 from "../../../Assets/Images/bev.jpg";
import imageSource3 from "../../../Assets/Images/candies.jpg";
import imageSource4 from "../../../Assets/Images/cheese.jpg";
import imageSource5 from "../../../Assets/Images/fishchips.jpg";
import Search from "../Search/Search";
import useTitle from "../../../Utils/UseTitle";
import Orders from "../../SharedArea/Orders/Orders";
function Home(): JSX.Element {

    useTitle("Home");
    const imageNumber = Math.floor(Math.random() *2) +1;
    const now = new Date()
    const day = now.getDay()
    const desserts = [
        {id: 1, name: "Ice cream", price:  10.5},
        {id: 2, name: "Eclair", price: 20.7},
        {id: 3, name: "Apple pie", price: 10.5},
        {id: 4, name: "Pavlova", price: 11.8}
    ];

    const images = [
        {id: 1, subject: "Fruits", image:  imageSource1},
        {id: 2, subject: "Beverages", image: imageSource2},
        {id: 3, subject: "Candies", image: imageSource3},
        {id: 4, subject: "Cheese", image: imageSource4},
        {id: 5, subject: "Fish & chips", image:imageSource5}
    ];

    return (
        <div className="Home">

			home page...
            <Search></Search>
            {/* condition - first way */}
            {<img src={imageNumber === 1 ? imageSource1 : imageSource2} />}
            <br></br>

            {desserts.map(d=> <span key={d.id}>{d.name}, price:{d.price}🤍<br/></span>)}
            {images.map(a=> <span key={a.id} className= {css.List} >   <img src= {a.image} className = {css.images}/> <br/> {a.subject}</span>)}

            {/* condition - second way */}
            {/*imageNumber == 1 ? <img src={imageSource1} /> : <img src={imageSource2} />*/}

            {/* condition - third way */}
            {/*imageNumber == 1 || <img src = {imageSource1} />}
            {imageNumber == 2 || <img src = {imageSource2} />*/}

            {/* condition - fourth way */}
            {/*imageNumber == 1 && <img src = {imageSource1} />}
            {imageNumber == 2 && <img src = {imageSource2} />*/}
            

              {day > 4 ? <h2>Special Discount for the weekend!</h2> : <h2>Special Discount for the week!</h2>}
            <Orders></Orders>    
        </div>
    );
}

export default Home;
