import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthenticateServiceService } from './authenticate-service.service';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  constructor(private http:HttpClient, private auth : AuthenticateServiceService) { 

  }
}
