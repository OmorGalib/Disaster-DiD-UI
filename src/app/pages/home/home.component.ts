import { Component } from '@angular/core';
import { DonationsExpensesComponent } from "./donations-expenses/donations-expenses.component";
import { AllVolunteerComponent } from "./all-volunteer/all-volunteer.component";
import { AllCrissisComponent } from './all-crissis/all-crissis.component';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [DonationsExpensesComponent, AllCrissisComponent, AllVolunteerComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
