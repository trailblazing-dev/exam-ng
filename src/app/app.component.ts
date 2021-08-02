import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
  name = 'exam-ng'
  title = 'Online Exam System'
  repo = `https://github.com/trailblazing-dev/${this.name}`

  constructor() {
    
  }

  ngOnInit() {
    
  }
}
