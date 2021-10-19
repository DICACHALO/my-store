import { Component } from '@angular/core';
import { Product } from "./product.model";
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

  names: string[] = ['Laura', 'Leo', 'Nancy'];

  names2: any[] = ['Laura', 'Leo', 'Nancy', 2];

  emojis = [ '😂' , '🐦', '🐳','🌮', '💚']

  newName = '';

  products:Product[] = [
    {
      name: 'EL mejor juguete',
      price: 565,
      image: 'https://http2.mlstatic.com/D_NQ_NP_659015-MLM42010221611_052020-W.jpg',
      category: 'all',
    },
    {
      name: 'Bicicleta casi nueva',
      price: 356,
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Left_side_of_Flying_Pigeon.jpg/800px-Left_side_of_Flying_Pigeon.jpg'
    },
    {
      name: 'Colleción de albumnes',
      price: 34,
      image: 'https://images.ctfassets.net/gkhyeghj07ak/73ghfz9LnLupmxHcSpgvkR/b8c767b97dd4b6718d535230c169be56/album-jet.jpg'
    },
    {
      name: 'Mis libros',
      price: 23,
      image: 'https://www.ukrgate.com/eng/wp-content/uploads/2021/02/The-Ukrainian-Book-Institute-Purchases-380.9-Thousand-Books-for-Public-Libraries1.jpeg'
    },
    {
      name: 'Casa para perro',
      price: 34,
      image: 'https://secure.img1-fg.wfcdn.com/im/48003027/compr-r85/1268/126812034/blue-plastic-insulated-dog-house.jpg'
    },
    {
      name: 'Gafas',
      price: 3434,
      image: 'https://i.blogs.es/018610/xiaomi-gafas-00/450_1000.jpeg'
    }
  ]

  toggleButton(){
    this.btnDisabled = !this.btnDisabled;
  }
  increasseAge(){
    this.person.age += 1;
  }
  onScroll(event: Event){
    const element = event.target as HTMLElement;
    console.log(element.scrollTop);
  }

  changeName(event: Event){
    const element = event.target as HTMLInputElement;
    this.person.name = element.value;
  }

  addName(){
    this.names.push(this.newName);
    this.newName = '';
  }

  deleteName(index: number){
    this.names.splice(index,1);
  }
}
