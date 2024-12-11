import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first',
  template: `<h1>Welcome to the First Page</h1>`,
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.scss']
})
export class FirstComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
