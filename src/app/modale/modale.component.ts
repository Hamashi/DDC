import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-modale',
  templateUrl: './modale.component.html',
  styleUrls: ['./modale.component.css']
})
export class ModaleComponent implements OnInit {

  constructor() { }
  @Input('selected') selected: number;
  ngOnInit() {
  }
}
