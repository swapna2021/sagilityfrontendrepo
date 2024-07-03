import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Department } from 'src/app/model/deartment';
import { DepartmentService } from 'src/app/service/department.service';

@Component({
  selector: 'app-department-details',
  templateUrl: './department-details.component.html',
  styleUrls: ['./department-details.component.css']
})
export class DepartmentDetailsComponent implements OnInit {

  department: Department = new Department();

  constructor(private service: DepartmentService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(paramsData => {

      this.service.getDepartmentDetails(paramsData['id']).subscribe(data => this.department = data)
    })


  }


}
