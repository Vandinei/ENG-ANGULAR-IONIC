import { Component } from '@angular/core';
import { UserModel } from './model/user-model';
import { Address } from './model/address';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  user: UserModel;
  animal = '';
  AnimalName = '';

  constructor() {
    this.user = new UserModel();
    this.user.adresses = new Array<Address>();
    const adress = new Address();
    adress.state = 'São Paulo';
    this.user.adresses.push(
      {
        street: 'Teste',
        number: 33,
        state: 'São Paulo'
      }
    );
  }

  showAlert() {
    alert('Fui clicado');
  }

  setRandomNumber() {
    const rand = Math.random();
    this.user.number = rand;

    let user = new UserModel();
    user.name = '';
  }

  updateAnimal(animalName: string) {
    this.AnimalName = animalName;
  }
}
