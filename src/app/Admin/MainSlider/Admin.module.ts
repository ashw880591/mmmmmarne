import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RegistrationComponent } from './Registration/registraion.component';
import { RegistrationTableComponent } from './registration-table/registration-table.component';
import { AdminComponent } from './admin.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './Login/login.component';



@NgModule({
    declarations: [
        DashboardComponent,
        RegistrationComponent,
        AdminComponent,
        RegistrationTableComponent,
        LoginComponent
    ],
    imports: [
        CommonModule,
        AdminRoutingModule,
        FormsModule,
        ReactiveFormsModule
    ],
    bootstrap: [
        AdminComponent
    ]
})

export class AdminModule {

    constructor() {
        console.log('admin module loaded');
    }
}