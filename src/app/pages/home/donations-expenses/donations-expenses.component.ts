import { Component } from '@angular/core';
import { DonationExpensesChartComponent } from "../../../shared/donation-expenses-chart/donation-expenses-chart.component";

@Component({
  selector: 'app-donations-expenses',
  standalone: true,
  imports: [DonationExpensesChartComponent], // Import the child component here
  templateUrl: './donations-expenses.component.html',
  styleUrls: ['./donations-expenses.component.scss'] // Use styleUrls instead of styleUrl
})
export class DonationsExpensesComponent {}

