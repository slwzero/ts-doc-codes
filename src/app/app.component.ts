import { Component, OnInit } from '@angular/core';
import { Greeter, Dog, Animal } from './../ts/class';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  greet: Greeter = new Greeter('typescript学习start');
  husky: Animal = new Dog('我是哈士奇');

  ngOnInit() {

  }
}
