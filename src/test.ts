let name: string = 'potter';
name = 'harry';

console.log(name.toUpperCase());

let numbers : number[] = [1,2,34];
numbers.push(4);

console.log(numbers.length);

let numberArray: Array<number> = [1,2,4,4];

console.log(numberArray[0] * 2)

let value: string | number;

value ="hello";
console.log(value.toUpperCase());

value = 40;
console.log(value+8);

function printId(id:string | number): void {
    console.log('Your ID is: ${id}');
}

printId(12345678);
printId("abc123");
