import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { WhoWeAreComponent } from './who-we-are/who-we-are.component';
import { WhatWeDoComponent } from './what-we-do/what-we-do.component';
import { CareerComponent } from './career/career.component';
import { ResidentialsComponent } from './what-we-do/residentials/residentials.component';
import { HospitalityComponent } from './what-we-do/hospitality/hospitality.component';
import { IndustrialComponent } from './what-we-do/industrial/industrial.component';
import { EducationComponent } from './what-we-do/education/education.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { OurProjectComponent } from './our-project/our-project.component';
import { GalleryComponent } from './our-project/gallery/gallery.component';
import { OurprojectnameComponent } from './ourprojectname/ourprojectname.component';
import { AdminComponent } from './Admin/MainSlider/admin.component';
import { LoginComponent } from './Admin/MainSlider/Login/login.component';

const routes: Routes = [
  { path: 'Home', component: HomeComponent },
  { path: '', redirectTo: 'Home', pathMatch: 'full' },
  { path: 'WhoWeAre', component: WhoWeAreComponent },
  { path: 'WhatWeDo', component: WhatWeDoComponent },
  { path: 'Residentials', component: ResidentialsComponent },
  { path: 'Hospitality', component: HospitalityComponent },
  { path: 'Industrial', component: IndustrialComponent },
  { path: 'Education', component: EducationComponent },
  { path: 'OurProject', component: OurProjectComponent },
  { path: 'Gallery', component: GalleryComponent },
  { path: 'Career', component: CareerComponent },
  { path: 'ContactUs', component: ContactUsComponent },
  { path: 'OurProjectName', component: OurprojectnameComponent },
  {
    path: "Admin",
    loadChildren: './Admin/MainSlider/Admin.module#AdminModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
