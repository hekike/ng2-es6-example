'use strict'

import { Component } from 'angular2/core'
import PetService from '../services/PetService'

const compConfig = {
  selector: 'my-app',
  providers: [PetService],
  template: `
    <h1>My name is {{ myName }}</h1>
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
    this.myName = 'Alice'
    this.pets = petService.pets
  }
}

MainComponent.parameters = [PetService]

export default Component(compConfig)(MainComponent)
