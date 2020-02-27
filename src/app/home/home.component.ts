import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private whoweareroutes: Router) { }


  GoToOurProjectNamePage() {
    this.whoweareroutes.navigate(['OurProjectName'])
    window.scroll(0, 0);
  }

  GoToWhoWeArePage() {
    this.whoweareroutes.navigate(['WhoWeAre']);
    window.scroll(0, 0);
  }

  GoToOurProject() {
    this.whoweareroutes.navigate(['OurProject'])
    window.scroll(0, 0);
  }

  GoToContactUs() {
    this.whoweareroutes.navigate(['ContactUs'])
    window.scroll(0, 0);
  }

  GoToGalleryPage() {
    this.whoweareroutes.navigate(['Gallery'])
    window.scroll(0, 0);
  }
  ngOnInit() {
  }

}
