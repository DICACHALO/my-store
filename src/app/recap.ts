const username: string = 'dicachalo';
const sum = (a: number, b: number) => {
  return a + b;
};
sum(1,2);

class Person{

  constructor(public age:number, public lastName:string){

  }
}

const diana = new Person(34, 'Chacón');

diana.age;
