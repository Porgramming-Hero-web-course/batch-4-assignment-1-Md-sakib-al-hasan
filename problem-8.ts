type Person = { name: string; age: number; email: string };

const person: Person = { name: "Alice", age: 25, email: "alice@example.com" };

let validateKeys = <T extends object>(obj: T, keys: (keyof T)[]): boolean => {
    
    for (let key of keys) {
        if (!(key in obj)) {
            return false;  
        }
    }
    return true;  
}

console.log(validateKeys(person, ["name", "age"]));
// console.log(validateKeys(person, ["name", "address"])); 
