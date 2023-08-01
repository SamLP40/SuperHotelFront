import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HotelComponent } from './components/hotel/hotel.component';
import { User } from './models/user.model';
import { UserComponent } from './components/user/user.component';
import { BookComponent } from './components/book/book.component';

const routes: Routes = [  
{path : 'hotel/:id', component : HotelComponent},
{path : 'user', component : UserComponent},
{path : 'book', component : BookComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 


}
