import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.scss'],
  template: `<h1>Welcome to the Second Page</h1>`,
})
export class SecondComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

