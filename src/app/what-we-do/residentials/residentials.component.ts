import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-residentials',
  templateUrl: './residentials.component.html',
  styleUrls: ['./residentials.component.css']
})
export class ResidentialsComponent implements OnInit {

  constructor(private ourrouter : Router) { 

   
    
  }
  GoToOurProjectName(){
    this.ourrouter.navigate(['OurProjectName'])
  }
 
  ngOnInit() {
  }

}
