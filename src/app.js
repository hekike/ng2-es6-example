'use strict'

import 'zone.js/lib/browser/zone-microtask'
import 'reflect-metadata'
import { bootstrap } from 'angular2/platform/browser'

import main from './components/main'

global.document.addEventListener('DOMContentLoaded', () => {
  bootstrap(main)
})
