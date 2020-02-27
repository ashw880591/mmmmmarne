import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { headersToString } from 'selenium-webdriver/http';

@Component({
  selector: 'app-career',
  templateUrl: './career.component.html',
  styleUrls: ['./career.component.css']
})
export class CareerComponent implements OnInit {

  constructor(private httpCLient: HttpClient) {


  }

  ngOnInit() {
  }


  uploadImages(event) {
    debugger
    let file = event.target.files[0];

    let formData = new FormData();
    formData.append('file', file);


    this.httpCLient.post("http://localhost:8081/api/file/uploadImage", formData).subscribe(data => {

      let result = data;

    });



  }

}
