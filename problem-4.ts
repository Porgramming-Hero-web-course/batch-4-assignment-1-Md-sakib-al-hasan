// Define the union types with literal type for shape
type Circle = {
    shape: "circle"; 
    radius: number;
  };
  
  type Rectangle = {
    shape: "rectangle"; 
    width: number;
    height: number;
  };
  
  // Define the function type for CalculateShapeArea
  type CalculateShapeArea = (shapeinfo: Circle | Rectangle) => number;
  
  // Define the function using type guards
  let calculateShapeArea: CalculateShapeArea = (shapeinfo) => {
    
    if (shapeinfo.shape === "circle") {
      return parseFloat((Math.PI * Math.pow(shapeinfo.radius, 2)).toFixed(2));
    } 
    
    else  {
      return shapeinfo.width * shapeinfo.height;
    }
    
    
  };
  

  const circleArea = calculateShapeArea({ shape: "circle", radius: 5 });
  console.log(circleArea); 
  const rectangleArea = calculateShapeArea({ shape: "rectangle", width: 4, height: 6 });
  console.log(rectangleArea); 
  