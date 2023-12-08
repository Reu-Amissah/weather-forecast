import { Component } from '@angular/core';
import { DetailsComponent } from '../../details/details/details.component';

@Component({
  selector: 'app-body',
  standalone: true,
  imports: [DetailsComponent],
  templateUrl: './body.component.html',
  styleUrl: './body.component.css',
})
export class BodyComponent {}
