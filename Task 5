// case 5 Object Converting
const basicJson = {
    fistName: "Joe",
    lastName: "Doe",
    age: 30
}

function objectToArray(obj) {
  const result = [];
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      result.push([key, obj[key]]);
    }
  }
  return result;
}

const convertedArray = objectToArray(basicJson);
alert(`Converted Repsonse: [${JSON.stringify(convertedArray)}]`)
