import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'jbalvin',
  templateUrl: './jbalvin.component.html',
  styleUrls: ['./jbalvin.component.css']
})
export class JbalvinComponent implements OnInit {

  pepe : boolean;

  constructor() { 
    this.pepe = false;
  }

  ngOnInit(): void {
  }

   

}
