import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
// import { AuthenticateServiceService } from './authenticate-service.service';
import { Hotel } from '../models/hotel.model';
import { environment } from '../../environnements/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {
 
  getCities() {

  }

  constructor(private http:HttpClient) { }
//, private auth : AuthenticateServiceService
  public getHotels() {
    return this.http.get<Hotel[]>(environment.host + "/hotels");
  }
  // public postTraining(hotel : any) {
  //   return this.http.post<Hotel>(environment.host+"/hotels", hotel , {headers:new HttpHeaders({'Authorization': this.auth.getToken()})});
  // }
}
