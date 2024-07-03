import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const baseUrl = "http://localhost:8083/department/"
import 'rxjs/add/operator/map'
import { Department } from '../model/deartment';
import { Observable } from 'rxjs';
import { Employee } from '../model/employee';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  constructor(private http: HttpClient) { }

  getDepartmentDetails(id: number): Observable<Department> {
    return this.http.get(baseUrl + id).map(data => data as Department)
  }
  addNewDepartment(department: Department): Observable<Department> {
    console.log("addnewdepartment")
    console.log(department)
    return this.http.post(baseUrl , department).map(data => data as Department);
  }
  updateDepartment(department: Department): Observable<Department> {
    return this.http.put(baseUrl + department.departmentId, department).map(data => data as Department);
  }
  deleteDepartment(id: number): Observable<any> {
    return this.http.delete(baseUrl + id);
  }
  getAllDepartment(pageNumber: number = 1): Observable<Department[]> {

    let params = {
      '_page': '' + pageNumber
    }
    return this.http.get(baseUrl, { params }).map(resp => resp as Department[]);
  }



  

}
