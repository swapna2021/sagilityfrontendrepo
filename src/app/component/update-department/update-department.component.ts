import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DepartmentService } from 'src/app/service/department.service';

@Component({
  selector: 'app-update-department',
  templateUrl: './update-department.component.html',
  styleUrls: ['./update-department.component.css']
})
export class UpdateDepartmentComponent implements OnInit {

  
departmentForm!:FormGroup;
constructor(private service: DepartmentService, private router: Router,
  private activatedRoute: ActivatedRoute) { }

ngOnInit(): void {

  this.activatedRoute.params.subscribe(
    params => {
      this.service.getDepartmentDetails(params['id']).subscribe(
        department => {
          this.departmentForm.setValue({...department});
        });
    });
    this.departmentForm=new FormGroup({
      id:new FormControl(),
      name:new FormControl('',[Validators.required,Validators.minLength(3)]),
      location:new FormControl('',[Validators.required,Validators.minLength(3)])  
    });
}

saveChanges(){
  this.service.updateDepartment(this.departmentForm.value).subscribe
  (department=>this.router.navigate(['/department-details',department.departmentId])
  )}
}

