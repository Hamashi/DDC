import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vignettes',
  templateUrl: './vignettes.component.html',
  styleUrls: ['./vignettes.component.css']
})
export class VignettesComponent implements OnInit {

  date=8;
  vignettes = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24];
  selected = 0;
  constructor() { }

  ngOnInit() {
  }

  onSelect(selecter) {
    this.selected = selecter;
  }
}
