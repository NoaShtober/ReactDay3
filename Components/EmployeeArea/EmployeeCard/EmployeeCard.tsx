import EmployeeModel from "../../../Models/EmployeeModel";
import EmployeeList from "../EmployeeList/EmployeeList";
import "./EmployeeCard.css";
import { NavLink } from "react-router-dom";

interface EmployeeCardProps {
    employee: EmployeeModel;
}

function EmployeeCard(props:EmployeeCardProps): JSX.Element {
    return (
        <div className="EmployeeCard">
            <table>
                <thead>
                    <tr>
       
                    </tr>
                </thead>
                <tbody>
                    {}
                </tbody>
            </table>
            </div>

    );
}

export default EmployeeCard;

