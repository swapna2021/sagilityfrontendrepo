import { formatCurrency } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from 'src/app/model/employee';
import { EmployeeService } from 'src/app/service/employee.service';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit {

employeeForm!:FormGroup;
  constructor(private service: EmployeeService, private router: Router,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {

    this.activatedRoute.params.subscribe(
      params => {
        this.service.getEmployeeDetails(params['id']).subscribe(
          employee => {
            this.employeeForm.setValue({...employee});
          });
      });
      this.employeeForm=new FormGroup({
        id:new FormControl(),
        name:new FormControl('',[Validators.required,Validators.minLength(3)]),
        dob:new FormControl('',[Validators.required]),
        phone:new FormControl('',[Validators.required,Validators.maxLength(10)]),
        email:new FormControl('',[Validators.email,Validators.required]),
        address:new FormControl('',[Validators.required,Validators.minLength(3)]),
        salary:new FormControl('',[Validators.required])
        
      });
  }

  saveChanges(){
    this.service.updateEmployee(this.employeeForm.value).subscribe
    (employee=>this.router.navigate(['/employee-details',employee.id])
    )}
}
