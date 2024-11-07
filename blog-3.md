Why are Type Guards Necessary?

By using Time Gate, the types can be configured in a very specific way based on the condition, which allows for very precise and specific type selection and its roles to solve problems.



Discuss Various Types of Type Guards ?

There are several ways to implement type guards in TypeScript




Use Cases:

//typeof

function demo(value: string | number) {
  if (typeof value === "string") {
    console.log(value.length);  
  } else {
    console.log(value.toFixed(2)); 
  }
}

demo("sakib"); 
demo(123.456); 

// instanceof
class Dog {
    bark() {
      console.log("Woof!");
    }
  }
  
  class Cat {
    meow() {
      console.log("Meow!");
    }
  }
  
  function makeSound(animal: Dog | Cat) {
    if (animal instanceof Dog) {
      animal.bark();  
    } else if (animal instanceof Cat) {
      animal.meow();  
    }
  }
  
  const dog = new Dog();
  const cat = new Cat();
  
  makeSound(dog);
  makeSound(cat); 


  // in guard

  type NormalPerson = {
    name: string;
    age: number;
  };
  
  type PersonWithSpecialNeeds = {
    name: string;
    age: number;
    specialCare: string; 
  };

  let defineperosn = (user:NormalPerson | PersonWithSpecialNeeds) => {
    if('specialCare' in user ){
            console.log("this person is no nomrmal")
    }else{
        console.log("This person is nomrmal")
    }
  }
  


