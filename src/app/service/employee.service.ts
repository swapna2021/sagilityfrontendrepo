import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from '../model/employee';
const baseUrl = "http://localhost:8083/employees/"
import 'rxjs/add/operator/map'
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http: HttpClient) { }

  getEmployeeDetails(id: number): Observable<Employee> {
    return this.http.get(baseUrl + id).map(data => data as Employee)
  }
  addNewEmployee(employee: Employee): Observable<Employee> {

    return this.http.post(baseUrl, employee).map(data => data as Employee);
  }
  updateEmployee(employee: Employee): Observable<Employee> {
    return this.http.put(baseUrl + employee.id, employee).map(data => data as Employee);
  }
  deleteEmployee(id: number): Observable<any> {
    return this.http.delete(baseUrl + id);
  }
  getAllEmployees(pageNumber: number = 1): Observable<Employee[]> {

    let params = {
      '_page': '' + pageNumber
    }
    return this.http.get(baseUrl, { params }).map(resp => resp as Employee[]);
  }

  calculateSalary(id: number): Observable<any> {

    return this.http.get(baseUrl + "sal/" + id);
  }


  searchDepartment(id: number): Observable<Employee[]> {
    return this.http.get(baseUrl + "department/" + id).map(resp => resp as Employee[]);
  }


}
