import { Component, OnInit } from '@angular/core';
import { AppService } from '../services/app.service';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {

  constructor(
    private adunitservice: AppService,
  ) { }

  addAdUnit(data) {
    this
    .adunitservice
    .addAdUnit(data.value);
}
  ngOnInit() {
  }

}
