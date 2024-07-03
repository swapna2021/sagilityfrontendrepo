import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { SidebarComponent } from './component/sidebar/sidebar.component';
import { HomeComponent } from './component/home/home.component';
import { EmployeeDetailsComponent } from './component/employee-details/employee-details.component';
import { EmployeeListComponent } from './component/employee-list/employee-list.component';
import {Router, RouterModule, Routes} from '@angular/router';
import { AddEmployeeComponent } from './component/add-employee/add-employee.component';
import{FormsModule,ReactiveFormsModule} from '@angular/forms';
import { UpdateEmployeeComponent } from './component/update-employee/update-employee.component';
import { AddDepartmentComponent } from './component/add-department/add-department.component';
import { DepartmentDetailsComponent } from './component/department-details/department-details.component';
import { DepartmentListComponent } from './component/department-list/department-list.component';
import { DepartmentEmployeeListComponent } from './component/department-employee-list/department-employee-list.component';
import { UpdateDepartmentComponent } from './component/update-department/update-department.component';
import { DepartmentEmployeeDetailsComponent } from './component/department-employee-details/department-employee-details.component';


const routes:Routes=[
  {
    path:'',
    component:HomeComponent

  },
  {
    path:'home',
    component:HomeComponent
  },
  {
    path:'employee-list',
    component:EmployeeListComponent
  },
  {
    path:'employee-details/:id',
    component:EmployeeDetailsComponent
  },
  {
    path:'add-employee',
    component:AddEmployeeComponent
  },
  {
    path:'update-employee/:id',
    component:UpdateEmployeeComponent
  },
  {
    path:'dept-emp-list/:id',
    component:DepartmentEmployeeListComponent
  },
  {
    path:'department-list',
    component:DepartmentListComponent
  },
  {
    path:'add-department',
    component:AddDepartmentComponent
  },
  {
    path:'department-details/:id',
    component:DepartmentDetailsComponent
  },
  {
    path:'update-department/:id',
    component:UpdateDepartmentComponent
  }
  


];
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    HomeComponent,
   EmployeeDetailsComponent,
   EmployeeListComponent,
   AddEmployeeComponent,
   UpdateEmployeeComponent,
   AddDepartmentComponent,
   DepartmentDetailsComponent,
   DepartmentListComponent,
   DepartmentEmployeeListComponent,
   UpdateDepartmentComponent,
   DepartmentEmployeeDetailsComponent,
   
 
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
