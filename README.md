# property-exists-in-object

A small, yet very useful npm package, which is used to check if an object containes a property/not by traversing through nested level.

If the object has the property, it will return the value otherwise 'null'.

# Installation

npm install property-exists-in-object

or 

npm i property-exists-in-object

# Usecase

import property-exists-in-object in the file you need to use.

import propertyExistsInObject from 'property-exists-in-object';

const testObject = {
    name: 'Sonal',
    city: 'Bangalore',
    country: 'India',
    age: 25,
    hobbies: {
        hobby1: 'travelling',
        hobby2: {
            subHobby1: 'reading novels',
            subHobby2: 'eating Ice-cream',
        }
    }
}

propertyExistsInObject is a function which takes 2 parameters:

Parameter 1 - Type: Object - The Object to be traversed to find the property in it.
Parameter 2 - Type: Array - Array of Property names. The length of the array denotes the depth of the property in nested object.

console.log(propertyExistsInObject(testObject, ["name"]));  // returns 'Sonal'

console.log(propertyExistsInObject(testObject, ["FullName"]));  // returns 'null'
