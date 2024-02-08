import { Component, OnInit, inject, signal } from '@angular/core';
import { DetailsComponent } from '../../details/details/details.component';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-body',
  standalone: true,
  imports: [DetailsComponent, FormsModule],
  templateUrl: './body.component.html',
  styleUrl: './body.component.css',
})
export class BodyComponent implements OnInit {
  httpClient = inject(HttpClient);
  location: string = 'Texas';
  current: any = {};
  myError: string = '';
  celciusT = signal(1);

  ngOnInit(): void {
    this.fetchCurrentData();
  }

  reSearch(): void {
    this.fetchCurrentData();
  }

  changeCelcius(): void {
    this.celciusT.set(0);
  }
  changeFh(): void {
    this.celciusT.set(1);
  }

  fetchCurrentData() {
    const apiUrl =
      'https://api.weatherapi.com/v1/forecast.json?key=af01bb08f969438f923230747230512' +
      (this.location ? `&q=${this.location}` : '&q=Takoradi');
    this.httpClient.get(apiUrl).subscribe(
      (data: any) => {
        this.current = data;
        console.log(data);
        this.myError = '';
      },
      (error) => {
        this.myError = 'Error fetching data';
        if (error.status === 400) {
          this.myError = 'Location is not valid.';
        } else {
          this.myError = 'An error occurred while fetching data.';
        }
      }
    );
  }
}
