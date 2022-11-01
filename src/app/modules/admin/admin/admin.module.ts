import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormBuilder,FormGroup, ReactiveFormsModule} from '@angular/forms' ;


import { AdminRoutingModule } from './admin-routing.module';
import { AdminDashboardComponent } from '../components/admin-dashboard/admin-dashboard.component';
import { HomeComponent } from '../components/home/home.component'; 
import { ProfileComponent } from '../components/profile/profile.component';
import { HeaderComponent } from '../components/header/header.component';
import { FooterComponent } from '../components/footer/footer.component';
import { ApiService } from 'src/app/api.service';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AdminDashboardComponent,
    HomeComponent,
    ProfileComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ]
})
export class AdminModule { }
