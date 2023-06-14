//commonJs, every file is aa module (by default)
//modules -Encapsulated code (only share minimum)

const {john, peter} = require('./4-names')// we have destructured the object
const names = require('./4-names')
const sayHi = require('./5-utils')
const data = require('./6-alternative-flavour')
require('./7-mind-grenade')


sayHi('susan')
sayHi(john)
sayHi(peter)
sayHi(names.john)
sayHi(names.peter)