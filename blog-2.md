type Data = { name: string; age: number; phonenumber: string; country: string };

let newPromise = async(): Promise<Data> => {
  return new Promise((resolve, reject) => {
    const data: Data = { 
      name: "sakib", 
      age: 21, 
      phonenumber: "01625427424",
      country: "Bangladesh" 
    };
    
    if (data) {
        setTimeout(() => {
            resolve(data);
          }, 1000);
    }else{
        reject("Faild to fetch data")
    }
  });
};

let fetchData = async():Promise<Data> => {
    let promisedata:Data = await  newPromise();
    return promisedata;

}



let show_data = async () => {
    const data = await fetchData();
    console.log(data);  
  };

show_data ();

