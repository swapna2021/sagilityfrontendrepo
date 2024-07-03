import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Department } from 'src/app/model/deartment';
import { EmployeeService } from 'src/app/service/employee.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  department!:Department;
  constructor(private service:EmployeeService,private router:Router) { 
    this.department=new Department();
  }
  
  ngOnInit(): void {
  }

  searchDepartment(id:number){
    
    this.service.searchDepartment(id).subscribe(
      ()=>{
      this.router.navigate(['/dept-emp-list',id])
    }
  )}

}
