import { Component, OnInit } from '@angular/core';
import { Router, RouterEvent } from '@angular/router';

@Component({
  selector: 'app-who-we-are',
  templateUrl: './who-we-are.component.html',
  styleUrls: ['./who-we-are.component.css']
})
export class WhoWeAreComponent implements OnInit {

  constructor(private router:Router) { }


  GoToContactusPage(){
    this.router.navigate(['ContactUs'])
    window.scroll(0, 0);
  }
  ngOnInit() {
  
  }

}
