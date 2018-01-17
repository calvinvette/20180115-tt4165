import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'weasley-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {
  private _title = 'Weasley\'s Wizarding Wheezes';

  constructor() { }

  ngOnInit() {
  }

  get title(): string {
    return this._title;
  }

  set title(value: string) {
    this._title = value;
  }
}
