import { NgModule } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';
import { HotelComponent } from './components/hotel/hotel.component';
import { UserComponent } from './components/user/user.component';
import { BookComponent } from './components/book/book.component';

const routes: Routes = [  
// {path : 'hotel/:id', component : HotelComponent},
{ path : '' , redirectTo : 'hotels/0', pathMatch : 'full' },
// {path : 'user', component : UserComponent},
// {path : 'book', component : BookComponent},
// { path: '**', redirectTo: '/404'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  // constructor(private router: Router) {
  //   this.router.errorHandler = (error: any) => {
  //       this.router.navigate(['404']);
  //   }
  // }

}
