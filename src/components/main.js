'use strict'

import { Component } from 'angular2/core'
import PetService from '../services/PetService'

const compConfig = {
  selector: 'my-app',
  providers: [PetService],
  template: `
    <h1>My name is {{ myName }}</h1>
    <button (click)="onAddPet()">Add pet</button>
    <p>My pets are:</p>
    <ul>
      <li *ngFor="#petName of pets">
        {{ petName }}
      </li>
    <ul>
  `
}

class MainComponent {
  constructor (petService) {
    this._petService = petService

    this.myName = 'Alice'
    this.pets = this._petService.get()
  }

  onAddPet () {
    this._petService.add('new pet')
  }
}

MainComponent.parameters = [PetService]

export default Component(compConfig)(MainComponent)
