import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Department } from 'src/app/model/deartment';
import { DepartmentService } from 'src/app/service/department.service';

@Component({
  selector: 'app-department-list',
  templateUrl: './department-list.component.html',
  styleUrls: ['./department-list.component.css']
})
export class DepartmentListComponent implements OnInit {

  departments:Department[] = [];
  employee!:Department;
  pageNum: number = 1;
  constructor(private service: DepartmentService,private router:Router) { }

  ngOnInit(): void {
this.service.getAllDepartment().subscribe(data=>this.departments=data)

      }
 
  deleteDepartment(id:number){
    if(!confirm('Are you sure?')){
      return;
    }
    this.service.deleteDepartment(id).subscribe(
      ()=>{
      this.router.navigate(['/home'])
    }
    )
  }
}
