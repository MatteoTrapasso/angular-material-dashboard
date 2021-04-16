import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-update-weight',
  templateUrl: './update-weight.component.html',
  styles: []
})
export class UpdateWeightComponent implements OnInit {
  weight = new FormControl('');
  saveWeight() {
  }

  constructor() { }

  ngOnInit() {
  }

}
