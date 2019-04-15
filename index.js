let katzDeliLine = [];



function currentLine(arr) {
    let line = [];
    if (arr.length === 0) {
      return "The line is currently empty.";
    } else {
      for(let i = 0; i < arr.length; i++) {
        line += (i + 1) + ". " + arr[i] + ", ";
      }
      line = line.slice(0, line.length-2);
      return "The line is currently: " + line;
    }
}

let count = 0;
function takeANumber(katzDeliLine){
    count++
    katzDeliLine.push(count)
    return `Welcome, you are number ${count}`
}

console.log(takeANumber(katzDeliLine))
console.log(takeANumber(katzDeliLine))
console.log(takeANumber(katzDeliLine))

function nowServing(arr) {
  if (arr.length === 0) {
    return "There is nobody waiting to be served!";
  } else {
    let name = arr[0];
    arr.splice(0, 1);
    return "Currently serving " + name + ".";
  }
}
