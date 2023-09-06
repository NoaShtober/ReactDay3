import { ChangeEvent, SyntheticEvent, useState , useEffect} from "react";
import WhoAreWe from "../WhoAreWe/WhoAreWe";
import "./About.css";
import { useNavigate } from "react-router-dom";
import RandomImage from "../../RandomArea/RandomImage/RandomImage";
import Tune from "../Tune/Tune";
import useTitle from "../../../Utils/UseTitle";
import Greeting from "../../SharedArea/Greeting/Greeting";
import Spinner from "../../SharedArea/Spinner/Spinner";

function About(): JSX.Element {

    useTitle("About");
    function showDate(): void {
        const now = new Date();
        alert(now.toLocaleDateString());
    }
    function showTime(args: SyntheticEvent): void {
        console.log(args.target);
        console.log((args.target as HTMLButtonElement).innerHTML);
        const now = new Date();
        alert(now.toLocaleTimeString());
    }
    
    const navigate = useNavigate(); //React Hook

    function navigateToHome(): void {
        navigate("/home");
    }

    const arr = useState<string>("---");
    const topProduct = arr[0] //The state data
    const setTopProduct = arr[1] //Function performing two things: (a) change the data. (b)rerender the component
    /*let topProduct = "---"; */

    function displayTopProduct(): void {
        /*
        topProduct = "Ice Coffee";
        alert(topProduct);
        */
       setTopProduct("Ice Coffee"); //change the data + rerender the component

    }

    const [topSeller, setTopSeller] = useState<string>("---");

    function displayTopSeller(): void {
        setTopSeller("Exotic Liquids")
    }

    const [CurrentDate, setCurrentDate] = useState<string>("---");

    function displayDate(): void {
        const now = new Date();
        setCurrentDate(now.toLocaleDateString())
    }

    const [CurrentTime, setCurrentTime] = useState<string>("Show current Time");

    function displayTime(): void {
        const now = new Date();
        setCurrentTime(now.toLocaleTimeString())
    }

    const [clock, setClock] = useState<string>("---")

    //call a function once when a component is ready to use (mounted)
    //useEffect(() => {}, []);

    //call a function whenever some dependencies change (value1, value2, value3):
    //useEffect(() => {}, [value1, value2, value3]);

    //call a function once when the component is destroyed (unmounted)
    //useEffect(() => {return () => {}}, []);

    useEffect(() => {
        
        const timerId = setInterval(() => {
            const now = new Date();
            const time = now.toLocaleTimeString();

            setClock(time)
            console.log(time, Math.random())
        }
        ,1000)

        return () => clearInterval(timerId);
    
    }, [])



    return (
        <div className="About">
            <Greeting hour ={new Date().getHours()} />
			<WhoAreWe />
            <br/>
            <button onClick = {displayDate} >Show current Date</button>
            <span>{CurrentDate}</span>
            <br/>
            <button onClick={displayTime}>{CurrentTime}</button>
            <br/>
            <button onClick={navigateToHome}>Navigate to Home</button>
            <br/>
            <hr/>
            <button onClick={displayTopProduct}>Display Top product</button>
            <span>{topProduct}</span>
            <button onClick= {displayTopSeller}>Display top seller</button>
            <br/>
            <span>{topSeller}</span>
            <br/>
            <span>{clock}</span>

            <RandomImage></RandomImage>
            <hr/>

            <Tune/> 
            <Spinner/>
        </div>
    );
}

export default About;
