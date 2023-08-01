import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthenticateServiceService } from './authenticate-service.service';
import { Hotel } from '../models/hotel.model';
import { environment } from '../environnements/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  constructor(private http:HttpClient, private auth : AuthenticateServiceService) { }

  public getHotels() {
    return this.http.get<Hotel[]>(environment.host + "/hotels");
  }
}
