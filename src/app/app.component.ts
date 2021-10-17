import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-store';
  name = 'Diana';
  age = 34;
  img = 'https://source.unsplash.com/random';
  btnDisabled=true;
  person = {
    name: 'Leo',
    age: 26,
    avatar: 'https://www.w3schools.com/howto/img_avatar.png'
  }
}
