'use strict'

import { Injectable } from 'angular2/core'

class PetService {
  constructor () {
    this.pets = ['cat', 'fox']
  }

  get () {
    return this.pets
  }

  add (name) {
    this.pets.push(name)
  }
}

export default Injectable()(PetService)
