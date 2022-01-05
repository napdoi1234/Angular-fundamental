import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'angular-fundamentals';
  token: string = 'empty';
  ngOnInit() {
    this.token = localStorage.getItem('currentUser') ?? 'empty';
  }
}
