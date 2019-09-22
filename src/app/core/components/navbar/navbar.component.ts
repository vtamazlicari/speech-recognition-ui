import {Component, EventEmitter, OnInit, Output} from '@angular/core';

import {Tabs} from '../../../shared/constants/constants';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  @Output() public tabSwitch = new EventEmitter<any>();

  tabs = Tabs;

  constructor() { }

  ngOnInit() {
  }

  switchTo(tab) {
    this.tabSwitch.emit(tab);
  }

}
