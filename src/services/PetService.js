import { Injectable } from 'angular2/core'

class PetService {
  constructor () {
    this.pets = ['cat', 'fox']
  }
}

export default Injectable()(PetService)
