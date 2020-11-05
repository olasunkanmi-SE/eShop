import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  categories: string[] = [
    'Games',
    'Headphones',
    'Playstation',
    'Computer',
    'Fashion',
  ];
  constructor() {}

  ngOnInit(): void {}
}
