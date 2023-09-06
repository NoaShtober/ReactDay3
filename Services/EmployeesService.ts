import axios from "axios";
import appConfig from "../Utils/AppConfig";
import EmployeeModel from "../Models/EmployeeModel";

class EmployeesService {
    public async getAllEmployees() : Promise<EmployeeModel[]> {
        const response = await axios.get<EmployeeModel[]>(appConfig.employeesUrl)
        const employees = response.data;
        return employees;

    }

    public async getOneEmployee(id: number): Promise<EmployeeModel> {
        const response = await axios.get<EmployeeModel>(appConfig.employeesUrl)
        const employee = response.data;
        return employee;
 
    }

}
const employeeService = new EmployeesService();
export default employeeService;