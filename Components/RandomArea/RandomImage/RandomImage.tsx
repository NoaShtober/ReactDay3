import "./RandomImage.css";
import { ChangeEvent, SyntheticEvent, useState , useEffect} from "react";
import imageSource1 from "../../../Assets/Images/fruits.jpg";
import imageSource2 from "../../../Assets/Images/bev.jpg";
import imageSource3 from "../../../Assets/Images/candies.jpg";
import imageSource4 from "../../../Assets/Images/cheese.jpg";
import imageSource5 from "../../../Assets/Images/fishchips.jpg";

function RandomImage(): JSX.Element {
    const randomImages = [imageSource1,imageSource2,imageSource3,imageSource4,imageSource5]
    const [Image, setImage] = useState<string>(imageSource1)

    useEffect(() => {
        
        const timerId = setInterval(() => {
            const now = new Date();
            const time = now.toLocaleTimeString();
            const randomNum = Math.floor(Math.random() * 10) % 5;

            setImage(randomImages[randomNum])
            console.log(time, Math.random())
        }
        ,3000)

        return () => clearInterval(timerId);
    
    }, [])

    return (
        <div className= "RandomImages">
            <img src = {Image} ></img>
            </div>
    );
            
}

export default RandomImage;
