import "./Spinner.css";
import loadingGif from "../../../Assets/Images/loading.gif"
function Spinner(): JSX.Element {
    return (
        <div className="Spinner">
			<img src = {loadingGif} />
        </div>
    );
}

export default Spinner;
