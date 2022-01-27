function giveTalonsInOrder(patients, orders) {
  let result = [];
  let localPatients = [...patients];
  let localOrders = [...orders];
  for (let i = 0; i < localOrders.length; i++) {
    let index = localOrders[i];
    for (let j = 0; j < localPatients.length; j++) {
      if ( localPatients[j].id == index) {
        result.push(localPatients[j]);
        localPatients.splice(j, 1);
        break;
      }
    }
  }
  return result;
}

const ordersArr = [4, 2, 1, 3];
const people = [
  { id: 1, name: "Максим" },
  { id: 2, name: "Николай" },
  { id: 3, name: "Ангелина" },
  { id: 4, name: "Виталий" },
];

const result = giveTalonsInOrder(people, ordersArr);

console.log('result', result);
