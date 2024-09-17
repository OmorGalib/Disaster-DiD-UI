import { Component } from '@angular/core';
import { SingleVolunteerComponent } from "../../../shared/single-volunteer/single-volunteer.component";

@Component({
  selector: 'app-all-volunteer',
  standalone: true,
  imports: [SingleVolunteerComponent],
  templateUrl: './all-volunteer.component.html',
  styleUrl: './all-volunteer.component.scss'
})
export class AllVolunteerComponent {

}
