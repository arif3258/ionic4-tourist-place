import { Injectable } from '@angular/core';
import { Place } from './place.model';

@Injectable({
  providedIn: 'root'
})
export class PlacesService {
  private _places: Place[] = [
    new Place(
      'p1',
      'Place 1',
      'This is description for place 1',
      './assets/img/place1.jpg',
      149
    ),
    new Place(
      'p2',
      'Place 2',
      'This is description for place 2',
      './assets/img/place2.jpg',
      149
    ),
    new Place(
      'p3',
      'Place 3',
      'This is description for place 3',
      './assets/img/place3.jpg',
      149
    )

  ];

  get places() {
    return [...this._places];
  }

  getPlace(id: string) {
    return { ...this._places.find(p => p.id === id) };
  }

  constructor() { }
}
