'use strict'

const config = require('../config.js')
const {Datastore} = require('@google-cloud/datastore')

const db = new Datastore()

module.exports = db