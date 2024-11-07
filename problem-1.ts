{
    //

    
    //function type
    type SumArray = (array:number[]) => number;
    
    //this function received an array for parameter and return the sum of all element
    const sumArray:SumArray = (array) => {
        return array.reduce((total,curentelement) => total+=curentelement,0);
    }

   let result = sumArray([1, 2, 3, 4, 5]);
   console.log(result)

    

    //
}