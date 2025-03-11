const jsonString = '{"name": "John", "age": 30, "city": "New York"}';
try {
  const parsedObject = JSON.parse(jsonString);
  console.log("Parsed Object:", parsedObject);
  console.log("Name:", parsedObject.name);
  console.log("Age:", parsedObject.age);
  console.log("City:", parsedObject.city);
} catch (error) {
  console.error("Error parsing JSON:", error);
}

const myObject = {
  firstName: "Jane",
  lastName: "Doe",
  occupation: "Developer",
};

const stringifiedJson = JSON.stringify(myObject);
console.log("Stringified JSON:", stringifiedJson);
