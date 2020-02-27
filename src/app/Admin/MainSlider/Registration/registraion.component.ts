import { Component, OnInit } from '@angular/core'
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { RegistrationService } from './registraion.service'
//import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-registration',
  templateUrl: './registraion.component.html',
  styleUrls: ['./registraion.component.css'],
  providers: [RegistrationService]
})

export class RegistrationComponent implements OnInit {
  RegistrationForm: FormGroup
  public mainregistration: any;
  constructor(private serviceregistration: RegistrationService) {


    this.RegistrationForm = new FormGroup({
      tagline: new FormControl('', Validators.required),
      category: new FormControl('', Validators.required),
      description1: new FormControl('', Validators.required),
      description2: new FormControl('', Validators.required),
      projectname: new FormControl('', Validators.required),
        enquiry: new FormControl('',Validators.required),
      // image: new FormControl('',Validators.required),
    })
  }
  sersignup: any;
  temp: string


  public saveAction(data: any) {



    // localStorage.setItem('key',data.mobileno);
    console.log(JSON.stringify(data));

    this.serviceregistration.saveAllUser(data).subscribe

      (
        res => {
        this.sersignup = res;
          //      if(this.sersignup===true){
          //     this.toastr.success("data inserted","success")
          //    }
          //  else{
          //        this.toastr.error("data insertion failed" ,"failed")
          //    }

        },

        err => { this.sersignup = err }

      );


  }






  //method defination---//
  //   responseobj:any;
  //   getBookingListOnId(sessionId:any){
  //     this.serviceregistration.getAllBookingById(sessionId).subscribe(
  //       res=>{this.responseobj=res,console.log(res)},
  //       err=>{this.responseobj=err}
  //     )
  // }

  ngOnInit() {
  }













}
