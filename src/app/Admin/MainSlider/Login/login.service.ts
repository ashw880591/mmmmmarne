import{Injectable} from  '@angular/core'
import { HttpClient} from '@angular/common/http';

@Injectable()

export class AuthenticationService{
    constructor( private http:HttpClient){

    }
        

    getByPasswordAndEmailId(password: String,emailid: String ) {
           
        let url = "http://localhost:6545/api/signup/getByPasswordAndEmailId/"+ password+"/"+emailid
        return this.http.get(url);
    }
    

  

}