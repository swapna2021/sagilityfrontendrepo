import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from 'src/app/model/employee';
import { EmployeeService } from 'src/app/service/employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  employees: Employee[] = [];
  employee!:Employee;
  pageNum: number = 1;
  constructor(private service: EmployeeService,private router:Router) { }

  ngOnInit(): void {
this.service.getAllEmployees().subscribe(data=>this.employees=data)

      }
 
  deleteEmployee(id:number){
    if(!confirm('Are you sure?')){
      return;
    }
    this.service.deleteEmployee(id).subscribe(
      ()=>{
      this.router.navigate(['/home'])
    }
    )
  }

  calculateSalary(id:number){
   let sal=0;
    this.service.calculateSalary(id).subscribe(
      data=>alert("Net Salary is: "+data)
    )
   
  }
  

}
