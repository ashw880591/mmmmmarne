import { Routes, RouterModule } from '@angular/router'
import { DashboardComponent } from './dashboard/dashboard.component'
import { RegistrationComponent } from './Registration/registraion.component'
import { RegistrationTableComponent } from './registration-table/registration-table.component'
import { NgModule } from '@angular/core'
import { LoginComponent } from './Login/login.component'
import { AdminComponent } from './admin.component'


export const adminroute: Routes = [
    { path: '', redirectTo: 'admin', pathMatch: 'full' },
    { path: 'admin', component: AdminComponent },
    { path: 'Login', component: LoginComponent },
    {
        path: 'Dashboard', component: DashboardComponent, children: [
            { path: 'Registration', component: RegistrationComponent },
            { path: 'RegistrationTable', component: RegistrationTableComponent },
            // { path: 'Admin', component: AdminComponent },
            // { path: 'Login', component: LoginComponent }
        ]
    }
]

@NgModule({

    imports:
        [
            RouterModule.forChild(adminroute)
        ],
    exports: [RouterModule]
})
export class AdminRoutingModule {

}