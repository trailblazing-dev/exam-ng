import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.sass']
})
export class PageNotFoundComponent implements OnInit {
  oopsClass: string = 'oops-'
  n404Class: string = 'n404-'
  msgClass: string = 'msg-'
  backClass: string = 'back-'

  @Input() template: string = 'default'

  constructor() { }

  ngOnInit(): void {
    this.oopsClass += this.template
    this.n404Class += this.template
    this.msgClass += this.template
    this.backClass += this.template
  }

}
