import "./Search.css";
import { ChangeEvent, SyntheticEvent, useState , useEffect} from "react";
function Search(): JSX.Element {

    const [textToSearch, setTextToSearch] = useState<string>("");
    function handleChange(args: ChangeEvent<HTMLInputElement>): void {
        const value = args.target.value;
        setTextToSearch(value);

    }

    function searchProduct() : void{
        alert("Searching for"+ textToSearch);
        setTextToSearch("");
    }
    return (
        <div className="Search">
			<label>Search something:</label>
            <input type="search" onChange={handleChange} value = {textToSearch} />
            <button onClick={searchProduct}>search</button>
            <span>{textToSearch}</span>
        
        </div>
    );
}

export default Search;
