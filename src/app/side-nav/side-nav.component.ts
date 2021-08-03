import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.sass']
})
export class SideNavComponent implements OnInit {
  @Output() sidenavClose = new EventEmitter();
  
  constructor() { }

  ngOnInit(): void {
  }

  onSideNavClose = () => this.sidenavClose.emit()
}
