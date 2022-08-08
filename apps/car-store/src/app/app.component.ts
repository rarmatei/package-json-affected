import { Component } from '@angular/core';
import * as cowsay from "cowsay"

const output = cowsay.say({ text: 'Hello from typescript!' });

console.log(output);

@Component({
  selector: 'package-json-deps-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'car-store';
}
