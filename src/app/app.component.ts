import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { City } from './models/city.model';
import { ApiServiceService } from './services/api-service.service';
import { Hotel } from './models/hotel.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'super-hotel-front';

  listCity: City[] | undefined;
  currentCity : Hotel | undefined;
  error=null;

  constructor(public apiServiceService : ApiServiceService, public router : Router) {} // penser à ajouter la sécurité (authService)

  ngOnInit(): void {

  }
  // getAllCities() {
  //   this.apiServiceService.getCities().subscribe({
  //     next : (data) => this.listCity = data,
  //     error : (err) => this.error = err.message,
  //     complete : () => this.error = null
  //   })
  // }
  
  listHotels() {
    this.currentCity = undefined;
    this.router.navigateByUrl("/hotels/0")}
  }

  // configurer les méthodes et les interactions avec le back/les événements html

