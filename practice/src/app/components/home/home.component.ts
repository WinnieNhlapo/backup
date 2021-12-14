import { Component, OnInit } from '@angular/core';
import { Person } from "../../interfaces/person";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {



  caiphus : Person;
  constructor() { }



  ngOnInit(): void {
    this.caiphus;
    let caiphus;
  }

}
