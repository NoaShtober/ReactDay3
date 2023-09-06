import { useEffect, useState } from "react";
import "./EmployeeList.css";
import employeesService from "../../../Services/EmployeesService";
import EmployeeModel from "../../../Models/EmployeeModel";
import EmployeeCard from "../EmployeeCard/EmployeeCard";
import useTitle from "../../../Utils/UseTitle";


function EmployeeList(): JSX.Element {
    useTitle("Employees");
    const[getAllEmployees, setAllEmployees] = useState<EmployeeModel[]>([]);
    useEffect(() => {
        employeesService.getAllEmployees()
            .then(employees => {
                console.log(employees)
                setAllEmployees(employees);
            })
            .catch(err => alert(err.message))

    }, [])

    return (
        <div className="EmployeeList">
            
             {getAllEmployees.map(e => <EmployeeCard key = {e.id} employee={e}/>)} 

            <table>
                <thead>
                    <tr>
                        <th>first name</th>
                        <th>Last Name</th>
                        <th>Title</th>
                        <th>Country</th>
                        <th>City</th>
                        <th>Birth Date</th>
                        <th>Image</th>
                    </tr>
                </thead>
                <tbody>
                    {getAllEmployees.map((e) =>
                    <tr>
                        <td>{e.firstName}</td>
                        <td>{e.lastName}</td>
                        <td>{e.title}</td>
                        <td>{e.country}</td>
                        <td>{e.city}</td>
                        <td>{e.birthDate}</td>
                        <td><img src= {e.imageUrl}/></td>
                    </tr>
                   )}
                </tbody>
            </table>
            </div>
    );
}

export default EmployeeList;


