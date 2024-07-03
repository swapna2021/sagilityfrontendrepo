import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Department } from 'src/app/model/deartment';
import { Employee } from 'src/app/model/employee';
import { EmployeeService } from 'src/app/service/employee.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {

  employee!:Employee;
  constructor(private service:EmployeeService,private router:Router) { }

  ngOnInit(): void {
    this.employee=new Employee();
    // this.employee.department=new Department();
    }
  
  addEmployee(){
    this.service.addNewEmployee(this.employee).subscribe
   (employee=>
      this.router.navigate(['/employee-details',employee.id])
   )
   }
}
