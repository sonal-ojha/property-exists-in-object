### property-exists-in-object

A small, yet very useful npm package, which is used to check if an object possess a property/not at any depth of nested objects.

  - If the object has the property, it will return the value else returns 'null'

### Installation

```sh
$ npm i property-exists-in-object
```

### How to Use

Install and import property-exists-in-object 

```sh
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
```

isObjProps is a function which takes 2 arguements:
  - Arguement 1 - Type: Object - The Object to be traversed to find the property in it.
  - Arguement 2 - Type: Array - Array of Property names. The length of the array denotes the depth of the property in nested object.
    
##### The examples will make you understand better

##

```sh
console.log(propertyExistsInObject(testObject, ["name"]));
//Sonal

console.log(propertyExistsInObject(testObject, ["city"]));
//Bangalore

console.log(propertyExistsInObject(testObject, ["hobbies","hobby1"]));
//travelling

console.log(propertyExistsInObject(testObject, ["gender"]));
//null

console.log(propertyExistsInObject(testObject, ["hobbies","hobby2","subHobby1"]));
//reading novels

console.log(propertyExistsInObject(testObject, ["hobbies","hobby1","subHobby1"]));
//null
```