import { Injectable } from '@angular/core';
import { Registration } from '../models/registration.model';

@Injectable()
export class StorageService {
  constructor() { }
  // saveLocalstarage(userData: Registration) {
  //   let arrayData = this.getLocalStorage();
  //   if (arrayData.length > 0) {
  //     arrayData.push(userData);
  //   }
  //   else
  //     arrayData.push(userData);
  //   localStorage.setItem("serviceResult", JSON.stringify(arrayData));
  // }

  saveLocalstarage(userData: Registration) {
    let arrayData = new Array<Registration>();
    for (let items of this.getLocalStorage()) {
      arrayData.push(items);
    }
      arrayData.push(userData);
    localStorage.setItem("serviceResult", JSON.stringify(arrayData));
  }
  getLocalStorage(): Array<Registration> {
    let tempData = localStorage.getItem("serviceResult");
    // if(tempData !=null && tempData!=""){
    //   return JSON.parse(tempData)
    // }
    // else{
    //   return new Array<Registration>();
    // }
    //teneary operation which will check the condtion or decision making
    return (tempData != null && tempData != "") ? JSON.parse(tempData) : new Array<Registration>();
  }
}
