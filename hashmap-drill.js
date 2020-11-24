const HashMap = require('./hashmap')

function main() {
   let lotr = new HashMap(initialCapacity = 11)
   lotr.MAX_LOAD_RATIO = 0.5
   lotr.SIZE_RATIO = 3
   characters = [
		{"Hobbit":"Bilbo"},
		{"Hobbit":"Frodo"},
		{"Wizard":"Gandalf"},
		{"Human":"Aragorn"}, 
		{"Elf":"Legolas"}, 
		{"Maiar":"The Necromancer"},
		{"Maiar":"Sauron"}, 
		{"RingBearer":"Gollum"}, 
		{"LadyOfLight":"Galadriel"}, 
		{"HalfElven":"Arwen"},
		{"Ent":"Treebeard"}
   ]
   characters.forEach(character => {lotr.set(character)})
   console.log(lotr.length)
   console.log('-------------------------------------')
   lotr._hashTable.forEach(key => {console.log(key)})
   console.log('-------------------------------------')
   lotr._hashTable.forEach((key, index) => {
      if (!!lotr._hashTable[index].key['Maiar']) {
         console.log(lotr._hashTable[index].key['Maiar'])
      }
   })
   console.log('------------------------------------')
   lotr._hashTable.forEach((key, index) => {
      if (!!lotr._hashTable[index].key['Hobbit']) {
         console.log(lotr._hashTable[index].key['Hobbit'])
      }
   })
   console.log('------------------------------------')
}

const WhatDoesThisDo = function () {
   let str1 = 'Hello World'
   let str2 = 'Hello World'
   let map1 = new HashMap()
   map1.set(str1, 10)
      console.log(map1.get(str1))
   map1.set(str2, 20)
   let map2 = new HashMap()
   let str3 = str1
   let str4 = str2
   map2.set(str3, 20)
      console.log(map1.get(str1))
   map2.set(str4, 10)
   console.log(map1.get(str1))
   console.log(map2.get(str3))
}

function numbers() {
   let num = newHashMap(initialCapacity = 11)
   num.MAX_LOAD_RATIO = 0.5
   num.SIZE_RATIO = 3
   numbers = [
      {10:"Bilbo"},
		{22:"Frodo"},
		{31:"Gandalf"},
		{4:"Aragorn"}, 
		{15:"Legolas"}, 
		{28:"The Necromancer"},
		{17:"Sauron"}, 
		{88:"Gollum"}, 
		{59:"Galadriel"},
   ]
   numbers.forEach(number => {num.set(number)})
   console.log(num.length)
   console.log('----------------------------------')
   num._hashTable.forEach(key => {console.log(key)})
   console.log('----------------------------------')
}

function removeDuplicates(string) {
   let hasheroo = new HashMap
   hasheroo.MAX_LOAD_RATIO = 0.5
   hasheroo.SIZE_RATIO = 3
   newString = []
   for (let i = 0; i < string.length; i++) {
      try {
         if (hasheroo.get(string[i]) !== string[i]) {
            throw new Error('new character with same hash')
         }
      } catch (e) {
         hasheroo.set(string[i], string[i])
         newString.push(string[i])
      }
   }
   return newString.join('')
}
console.log(removeDuplicates("google"))