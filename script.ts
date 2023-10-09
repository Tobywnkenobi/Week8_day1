console.log('Hello TypeScript');

let newString: string;

newString = 'foo';

// newString = 88

let newNumber: number;

newNumber = 88;

let myBool: boolean;

myBool = true;

let myArray: string[];

myArray = [];

myArray.push('foo', 'abc', 'bar');

let myObject: object;

myObject = {};

let myUndefined: undefined;

myUndefined = undefined;

let randomArray: any[] = [];

randomArray.push(1, 'abc', [], {});

let anyVar: any;

anyVar = '123';
anyVar = 123;
anyVar = [];
anyVar = {};
anyVar = true;

let myString2 = 'abc';
myString2 = '123';

let myNum2 = 123;

// myNum2 = []

const stringArray: string[] = [];
const stringArray2: Array<string> = [];

stringArray.push('abc', 'foo', '123');
stringArray2.push('abc', 'foo', '123');

const numArray: number[] = [];
numArray.push(1, 2, 3);

const booleanArray = [true, false, false];

booleanArray.push(true);

const randomArray2: [number, string, boolean, []] = [1, 'abc', true, []];

const randomArray3: [number?, string?, boolean?, []?] = [];

randomArray3.push(2, 'abc', true, []);

const unknownLenArray: [string, ...number[]] = ['foo', 1, 3, 4];

unknownLenArray.push(4, 39, 100);

/* 
Create an array that starts with one string and then can hold any number of booleans and name it `stringBoolsArray` and assign it some values
*/

function lowerCaseName(astring: any) {
  astring = astring.toLowerCase();
  return astring;
}

let myName = lowerCaseName('DYLAN');

console.log(myName);

function yellingName(name: string) {
  name = name.toUpperCase();
  return name;
}

const sean = yellingName('sean');
console.log(sean);
sean.endsWith('n');

function adder(num1: number, num2: number): number {
  return num1 + num2;
}

adder(5, 10).toString();

/* 
Create a regular function that takes in two numbers and returns a string that says.
```[firstnumber] plus [secondNumber] equals [FirstNumber plus SecondNumber]```

Name the function `iceAddition`

if we run `iceAddition(2,5)`

the output should be :

```
"2 plus 5 equals 7"
```

Use Explicit type checking on the parameters and return type
*/

const greeting = (aname: string): string => {
  return '';
};

console.log(((aname: string): string => `Welcome ${aname}`)('sean'));

function logAString(astring: string): void {
  console.log(astring);
  return;
}

logAString('foo bar');

const myTuple: [number, number] = [21, 33];

// myTuple.push(100)

console.log(myTuple);

enum Direction {
  north,
  east,
  south,
  west,
}

console.log(Direction.north);
console.log(Direction.east);
console.log(Direction.south);
console.log(Direction.west);

enum Size {
  small = 5,
  medium,
  large = 10,
  'x-large',
}

console.log(Size.medium);
console.log(Size.large);
console.log(Size['x-large']);

enum ShirtAbbreviation {
  small = 'sm',
  medium = 'med',
  large = 'lrg',
  'x-large' = 'xlrg',
}

const shirtSize = ShirtAbbreviation['x-large'];

console.log(shirtSize);

/* 
Create an enum type to represent The different football teams that can be on the field.

`offense` `defense` and `specialTeams`

They should be represented by `O`,`D`, and `ST` respectively

name the enum `IceEnum`

use the Ice Enum to print `ST O D`
*/

function takesAnyType(param: any): void {
  param.walk();
  param.jump();
}

takesAnyType('foo');

class Person {
  walk() {
    console.log('walking');
  }
  jump() {
    console.log('jumping');
  }
}

function takesUnknown(person: unknown): void {
  if (person instanceof Person) {
    person.walk();
    person.jump();
  }
}

function takesUnknown2(param: unknown): void {
  if (typeof param === 'number') {
    param.toString();
  } else if (typeof param === 'string') {
    param.split(' ');
  } else console.log(param);
}

// function startServer(): never {
//   while(true){
//     console.log('server Running')
//   }
// }

// OBJECTS

const firstObj = { foo: 'bar', 1: 0 };

console.log(firstObj.foo);
console.log(firstObj['1']);

firstObj.foo = '123';

// firstObj.sean = true

const seanObj: { birthday: string; poolLvl: string; favLang: string} = {
  birthday: 'october',
  poolLvl: 'master',
  favLang: 'typeScript',
};

seanObj.favLang = 'go'

seanObj.poolLvl = '100'

// seanObj.age = 28

/* 
Define the shape and the values for an object name `iceMan`

Ice man should have:

- a id that is a number

- a name that is a string

- a wasFrozen property that is a boolean on whether or not our iceMan was ever frozen in time
*/


type UserOG = {
  id: number, 
  username: string, 
  email:string, 
  password:string,
}

type UserWithIndex = {
  [key:string]: number | string | undefined,
  readonly id: number, 
  username: string, 
  email: string, 
  password: string,
  firstName?: string | undefined,
  lastName?: string | undefined
}

type User = {
  readonly id: number, 
  username: string, 
  email: string, 
  password: string,
  firstName?: string | undefined,
  lastName?: string | undefined
}

type UserWithMethod = {
  readonly id: number, 
  username: string, 
  email: string, 
  password: string,
  firstName?: string | undefined,
  lastName?: string | undefined,
  fullName: () => string
}

const userWithMethod: UserWithMethod = {
  id: 2,
  username: 'dylans',
  email: 'dylans@ct.com',
  password: '321',
  firstName: 'dylan',
  lastName: 'smith',
  fullName(){ return `${this.firstName} ${this.lastName}`}
}

console.log(userWithMethod.fullName())

function diplayUser(user: User):void{
  console.log(user)
}

const user: User = {
  id: 1,
  username:'seanc',
  email: 'seanc@ct.com',
  password: '123'
}

const userWithName: User = {
  id: 2,
  username: 'dylans',
  email: 'dylans@ct.com',
  password: '321',
  firstName: 'dylan',
  lastName: 'smith'
}




user.username = 'seant'
// user.id = 10
console.log(user.id)


/* 
Create a type `IceShoeType` and 1 member of this type `iceShoe`

all IceProducts must meet the following requirements

- has readonly id field
- has size (i.e. 7, 8, 11)
- has a name
- has an Optional value to describe if is the product has a wide version
- has a description
*/

let age: number | string 

age = 33
age = '33'
// age = ['23']

function birthday(age: number | string):void {
  console.log(`Happy Birthday Sean you are now ${age.toString() + 1}`)
}

function birthday2(age: number | string):void {
  console.log(`Happy Birthday Sean you are now ${age as string + 1}`)
}

birthday2('27')

type UserAuth = {
  token: string
}

type AuthorizedUser = User & UserAuth


const loggedUser: AuthorizedUser = {
  id:3,
  username: 'ryanr',
  password: 'rangers123',
  email: 'ryanr@ct.com',
  token : '3489534-95834-9275'
}

/* 
Create two types and then create a 3rd type from those first two type.

IceUser:

- firstName
- lastName
- age

IceCustomer:
- cart (array of strings) Array<string> string[]
- address (string)


IceComplete:
- Combination of IceCustomer and IceUser

Also Create an IceComplete Object named `icedOver`

*/


// literal types

type FavoriteInstructor = 'sean' | 'dylan'

const fav: FavoriteInstructor = 'sean'

type MatrixStudents = 'lyla' | 'josh' | 'toby' | 'raul' | 'mabel' | 'tom' | 'heather' | 'milad' | 'timothy' | 'senait' | 'mel' | 'porter'

const student1: MatrixStudents = 'josh'
const student2: MatrixStudents = 'toby'
const student3: MatrixStudents = 'porter'
