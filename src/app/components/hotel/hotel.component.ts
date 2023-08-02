import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { Hotel } from 'src/app/models/hotel.model';
import { ApiServiceService } from 'src/app/services/api-service.service';
import { environment } from 'src/environnements/environment';

@Component({
  selector: 'app-hotel',
  templateUrl: './hotel.component.html',
  styleUrls: ['./hotel.component.css']
})
export class HotelComponent implements OnInit {
  listHotels: Hotel[] | undefined;
  error: any;
  host : string = "";
  idCity : number = 0;
  constructor( private router : Router, 
    private apiServiceService : ApiServiceService,
    public route : ActivatedRoute) { // ajouter public authService : AuthenticateService, 
  }
  ngOnInit(): void {
    this.host = environment.host;
    this.router.events.subscribe( nav => {    //on observe chaque évènement sur le routeur qui redirige vers le composant trainings
      if(nav instanceof NavigationEnd) {      //on vérifie si la navigation s'est finalisé correctement
        this.idCity = this.route.snapshot.params['ca']; //on récupère l'id de la catégorie positionné dans le composant principal
        this.refreshScreen();
      }
    })
this.getAllHotels;
  }
  refreshScreen() {
    if(this.idCity > 0) 
    // this.getHotByCity(this.idCity); else 
    this.getAllHotels(); 
  }

    getAllHotels() {

      this.apiServiceService.getHotels().subscribe({
  
        next: (data) => this.listHotels = data,
        error : (err) => this.error = err.message,
        complete : () => this.error = null
      })

  }

  }

