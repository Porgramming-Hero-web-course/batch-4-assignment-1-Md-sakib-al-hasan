
//type
const person = { name: "Alice", age: 25, email: "alice@example.com",phonenumber:"0162542471" };

let validateKeys = <T extends object  >(obj:T,key:(keyof T)[]) => {

    let result = true;
   for(let x in key ){

        if(!(key[x] in obj)){
            console.log(x)
            result = false;
            break
        }
   }

 return  result
}

console.log(validateKeys(person, ["name", "age","email","phonenumber"]));








