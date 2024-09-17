import { Component } from '@angular/core';
import { SingleCrisisComponent } from "../../../shared/single-crisis/single-crisis.component";

@Component({
  selector: 'app-all-crissis',
  standalone: true,
  imports: [SingleCrisisComponent],
  templateUrl: './all-crissis.component.html',
  styleUrl: './all-crissis.component.scss'
})
export class AllCrissisComponent {

}
