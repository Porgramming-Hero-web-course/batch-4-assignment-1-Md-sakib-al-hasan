union is used in two or more ways so who joins these two or more ways to use any one of the typeAnd intersection is the use of two or more smaller types together to convert them into one larger type

**union
function print(value: string | number) {
  console.log(value);
}

print("Hello");
print(42);

**intersection
type Person = { name: string };
type Employee = { id: number };

type EmployeeDetails = Person & Employee;

const employee: EmployeeDetails = {
  name: "John",
  id: 123,
};

