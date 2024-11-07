{
    //

    let getProperty = <T extends {}>(obj: T, name: keyof T) => {
        return obj[name]; 
      };

      const person = { name: "Alice", age: 30 };
      console.log(getProperty(person, "name"));

    //
}