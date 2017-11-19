// Design an algorithm to find all paris of integers within an array which sum to a specifified value.
// function printPairSums(array, sum) {
//   let out = [];
//   array.sort();
//   console.log(array);
//   let first = 0, last = array.length - 1;
//   while(first < last) {
//     console.log("first, last", array[first], array[last])
//     let s= array[first] + array[last];
//     if(s == sum) {
//       out.push(array[first], array[last]);
//       first ++;
//       last --;
//     }
//     else {
//       if(s < sum) first ++;
//       else last --;
//     }
//   }
//   return out;
// }

//look at an element
//look for another element whose sume will equal sum
//

function printPairSums(array, sum) {
  mySet = new Set();
  let out = [];
  array.map(el => mySet.add(el = sum-el))

  for (let item of mySet) {
    if(item !== sum- item && mySet.has(sum - item)) {
      out.push([item, sum-item])
      mySet.delete(sum-item)
    }
  }
   return out;
}

printPairSums([13,5,7,-2,0,9,-1,6,3,14],12)




// function lift(queues, max) {
  // let elevatorCart = new Array(max);
  // let occupants = 0;
  // const maxFloors = queues.length;
  // let move = true;
  // let currentFloor = 0;
  // let moveUp = true;

  // while(move) {
  // //load and unload riders
  // elevatorCart. map(destination => {
  //   if(space === undefined) {return queues[currFloor].pop}
  //   else if(destination !== currentFloor){return destination}
  //   else {
  //     queues[currFloor].push(destination)
  //     return queues[currFloor].pop;
  //   }
  // })
  // //Move Elevator
  //     if(moveUp) {
  //         if(elevatorCart.length === 0) {currentFloor = max}
  //         else if(currentFloor === maxFloors) {moveUp = false, currentFloor --}
  //         else {currentFloor ++}
  //     }
  //     else {
  //       if(elevatorCart.length === 0) {currentFloor = 0}
  //       else if(currFloor === 0) {moveUp = true, currentFloor ++}
  //         else{currentFloor --}
  //     }

// }
