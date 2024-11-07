{
    //

    //funciton type 

    type RemoveDuplicates = (array:number[]) => number[];
    
    //this function received an array for parameter and return number of array but remove all duplicated element
    let removeDuplicates:RemoveDuplicates = (array) => {
            return Array.from( new Set(array));
    }


   let result = removeDuplicates([1, 2, 2, 3, 4, 4, 5])
   console.log(result)


    //
}