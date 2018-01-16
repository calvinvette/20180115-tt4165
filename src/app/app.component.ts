import { Component } from '@angular/core';

@Component({
  selector: 'weasley-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private _title = 'Weasley\'s Wizarding Wheezes';
  private _now: Date = new Date();


  get title(): string {
    return this._title;
  }

  set title(value: string) {
    this._title = value;
  }

  get now(): Date {
    return this._now;
  }

  set now(value: Date) {
    this._now = value;
  }
}
