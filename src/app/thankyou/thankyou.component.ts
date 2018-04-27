
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-thankyou',
  templateUrl: './thankyou.component.html',
  styleUrls: ['./thankyou.component.scss']
})
export class ThankyouComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    setTimeout(() => {
      window.location.href = 'https://beaver.group/';
    }, 4000);

  }

}
