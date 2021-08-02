import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.sass']
})
export class FooterComponent implements OnInit {

  @Input() appName: string = ''
  @Input() appRepo: string = 'https://github.com/'

  constructor() { }

  ngOnInit(): void {
  }

}
