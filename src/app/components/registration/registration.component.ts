import { Component, OnInit } from '@angular/core';
import { Registration } from '../../models/registration.model';
import { Router } from '@angular/router';
import { StorageService } from '../../services/storage.service'


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  registration: Registration = new Registration();
  userRegDetails: Array<Registration> = new Array<Registration>();

  constructor(
    private router:Router,
    private storageService: StorageService) {}

  ngOnInit(): void {
  }

  registerForm(){
    // alert(JSON.stringify(this.registration));
    // this.userRegDetails.push(this.registration);
    
    //this.router.navigateByUrl("/login");
    //this.userRegDetails.push((this.registration));
    //alert(JSON.stringify(this.userRegDetails)); // OBJECT REFERENCE IS UPADATED ALONG WITH CURRENT AND PRREVIOUS FOR THAT WE NEED TO FIX ANOTHER WAY 
    
    // this.userRegDetails.push(this.registration);
    // alert(JSON.stringify(this.registration));

    this.userRegDetails.push((JSON.parse(JSON.stringify(this.registration))));
    localStorage.setItem("result", JSON.stringify(this.userRegDetails));
    this.registration.id = this.userRegDetails.length;
    // alert(JSON.stringify(this.userRegDetails));
    localStorage.getItem("result");
    this.storageService.saveLocalstarage(this.registration)
    alert( localStorage.getItem("result"));

  }

}
