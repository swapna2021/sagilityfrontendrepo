import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Department } from 'src/app/model/deartment';
import { Employee } from 'src/app/model/employee';
import { EmployeeService } from 'src/app/service/employee.service';

@Component({
  selector: 'app-department-employee-list',
  templateUrl: './department-employee-list.component.html',
  styleUrls: ['./department-employee-list.component.css']
})
export class DepartmentEmployeeListComponent implements OnInit {

  department: Department = new Department(); 
  employees: Employee[] = [];
  employee!:Employee;
  pageNum: number = 1;
  constructor(private service: EmployeeService, private activatedRoute: ActivatedRoute,private router:Router) { }

  

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(paramsData => {

      this.service.searchDepartment(paramsData['id']).subscribe(data => {
        this.employees = data;
        console.log(data);
      })

    })
      
    }
}
