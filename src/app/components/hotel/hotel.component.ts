import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Hotel } from 'src/app/models/hotel.model';
import { ApiServiceService } from 'src/app/services/api-service.service';

@Component({
  selector: 'app-hotel',
  templateUrl: './hotel.component.html',
  styleUrls: ['./hotel.component.css']
})
export class HotelComponent implements OnInit {
  listHotels: Hotel[] | undefined;
  error: any;
  constructor( private router : Router, 
    private apiServiceService : ApiServiceService,
    public route : ActivatedRoute) { // ajouter public authService : AuthenticateService, 
  }
  ngOnInit(): void {
this.getAllHotels;
  }

    getAllHotels() {

      this.apiServiceService.getHotels().subscribe({
  
        next: (data) => this.listHotels = data,
        error : (err) => this.error = err.message,
        complete : () => this.error = null
      })

  }

  }

