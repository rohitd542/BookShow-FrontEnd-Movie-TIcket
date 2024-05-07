import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { LoginComponent } from './login/login.component';
import { signupComponent } from './signup/signup.component';
import { CustomerDashboardComponent } from './customer-dashboard/customer-dashboard.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { ViewMoviesComponent } from './view-movies/view-movies.component';
import { ViewProfileComponent } from './view-profile/view-profile.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { BookTicketComponent } from './book-ticket/book-ticket.component';
import { UserBookingsComponent } from './user-bookings/user-bookings.component';
import { MovieIndexComponent } from './movie-index/movie-index.component';
import { MoviesCreateComponent } from './movies-create/movies-create.component';
import { AllBookingsComponent } from './all-bookings/all-bookings.component';
import { ContactusComponent } from './contactus/contactus.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { MovieViewComponent } from './movie-view/movie-view.component';

const routes: Routes = [
  { path: '', component: IndexComponent },
  { path: "login", component: LoginComponent },
  { path: "signup", component: signupComponent },
  {path:"customerDashboard",component:CustomerDashboardComponent},
  {path:"adminDashboard",component:AdminDashboardComponent},
  {path:"viewMovies",component:ViewMoviesComponent},
  {path:"viewProfile/:userid",component:ViewProfileComponent},
  {path:"editProfile/:userid",component:EditProfileComponent},
  {path:"bookTicket",component:BookTicketComponent},
  //{path:"userBookings/:userid",component:UserBookingsComponent},
  {path:"userBookings/:id",component:UserBookingsComponent},
  {path:"movieIndex",component:MovieIndexComponent},
  {path:"movieCreate",component:MoviesCreateComponent},
  {path:"allBookings",component:AllBookingsComponent},
  {path:"contactus",component:ContactusComponent},
  {path:"aboutus",component:AboutusComponent},
  {path:"movieView/:movieId/view",component:MovieViewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
