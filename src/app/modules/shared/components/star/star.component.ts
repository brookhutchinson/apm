// components
import { Component, OnChanges } from '@angular/core';

@Component({
  selector: 'star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.scss']
})
export class StarComponent implements OnChanges {
  rating: number = 4;
  starWidth: number;

  constructor() {}

  ngOnChanges() {
    // set star width value in px using rating
    this.starWidth = this.rating * 75 / 5;
  }
}
