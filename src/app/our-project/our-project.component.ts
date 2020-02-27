import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-our-project',
  templateUrl: './our-project.component.html',
  styleUrls: ['./our-project.component.css']
})
export class OurProjectComponent implements OnInit {

  constructor(private ourroutes:Router) { }

  GoToContactUs(){
    this.ourroutes.navigate(['ContactUs'])
  }

  GoToOurProjectNamePage(){
    this.ourroutes.navigate(['OurProjectName'])
  }
  ngOnInit() {
  }

}
