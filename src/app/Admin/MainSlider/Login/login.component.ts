import { Component, OnInit } from '@angular/core'
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthenticationService } from './login.service';
import { Router } from '@angular/router';

@Component({
    selector : 'app-login',
    templateUrl : './login.component.html',
    styleUrls : ['./login.component.css']
})

export class LoginComponent implements OnInit{
    loginModel: FormGroup
    formsubmit: boolean = false;

    constructor(private authService: AuthenticationService, private temprouter: Router) {

        this.loginModel = new FormGroup({
          emailid: new FormControl('8805848812', [Validators.required, Validators.pattern('^[7-9][0-9]{9}$')]),
          password: new FormControl('', [Validators.required,Validators.pattern('^([a-zA-Z0-9@*#]{8,15})$')]),
        })
      }
      GoToDashboardPage(){
        this.temprouter.navigate(['Dashboard'])
      }


      loginResponseStatus: any

  //--to verify whether the data exist in the db..//
  loginVerify(data: any) {

    this.formsubmit = true;

    //if (this.loginModel.invalid) { return; }
    console.log(JSON.stringify(data));

    //verify login details in db//
    this.authService.getByPasswordAndEmailId(data.password, data.emailid).subscribe(res => {
      this.loginResponseStatus = res; console.log(res);
      if (this.loginResponseStatus === true) {

  

        localStorage.setItem('key', data.emailid);
        localStorage.setItem('SessionBuilderid',"");

      
        
        console.log("Setting SessionBuilderid to null:"+localStorage.getItem('SessionBuilderid'));
        
      }
    
    },
      err => { this.loginResponseStatus = err }
    )
  }



    ngOnInit(){


    }

    
}