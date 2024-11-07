{
    //

    //type 
    type CountWordOccurrences = (sentence:string,word:string) => number;

    //this function recived tow parameter sentence and word and return number;
    let countWordOccurrences:CountWordOccurrences = (sentence,word) => {
         let mutcharray = sentence.match(  new RegExp(`\\b${word}\\b`, 'gi'))
            return mutcharray ? mutcharray.length : 0; 
    }


   let result =  countWordOccurrences("TypeScript is great. I love TypeScript!","typescript")

   console.log(result)
    //

}