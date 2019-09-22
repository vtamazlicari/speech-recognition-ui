import { Component, OnInit } from '@angular/core';

import {Tabs} from '../../../shared/constants/constants';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  tab: string;

  tabs = Tabs;

  constructor() { }

  ngOnInit() {
  }

  setTabName(value) {
    this.tab = value;
  }

}
