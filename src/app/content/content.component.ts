import { Component, OnInit } from '@angular/core';
import { PasswordMakerCore } from '../core/password-maker.core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    const test = new PasswordMakerCore(true, true, true);
  }

}
