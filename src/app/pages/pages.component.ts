import { Component, OnInit } from '@angular/core';

declare function initPlugins();
declare function initActions();

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.css']
})
export class PagesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    initPlugins();
    initActions();
  }

}
