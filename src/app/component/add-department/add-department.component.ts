import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Department } from 'src/app/model/deartment';
import { DepartmentService } from 'src/app/service/department.service';

@Component({
  selector: 'app-add-department',
  templateUrl: './add-department.component.html',
  styleUrls: ['./add-department.component.css']
})
export class AddDepartmentComponent implements OnInit {

  department!:Department;
  constructor(private service:DepartmentService,private router:Router) { }

  ngOnInit(): void {
    this.department=new Department();
   }
  
  addDepartment(){
    console.log("department added")
    this.service.addNewDepartment(this.department).subscribe
   (department=>
      this.router.navigate(['/department-details',department.departmentId])
   )}



}
