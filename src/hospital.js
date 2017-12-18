const R = require('ramda');
const store = ['Warehouse', 'ICU', 'Dispensary'];
const meds = ['Paracetamol', 'Ibuprofen', 'Syringe', 'Scalpel'];
const initialData = {
  Warehouse: {
    Paracetamol: 10,
    Ibuprofen: 50,
    Syringe: 80,
    Scalpel: 100
  },
  ICU: {
    Paracetamol: 0,
    Ibuprofen: 20,
    Syringe: 7,
    Scalpel: 8
  },
  Dispensary: {
    Paracetamol: 50,
    Ibuprofen: 33,
    Syringe: 10,
    Scalpel: 80
  }
};

const transactionLog = [
  {
    from: 'Warehouse',
    to: 'Dispensary',
    item: 'Paracetamol',
    quantity: 2
  }, {
    from: 'Warehouse',
    to: 'Dispensary',
    item: 'Ibuprofen',
    quantity: 5
  }, {
    from: 'Dispensary',
    to: 'ICU',
    item: 'Syringe',
    quantity: 2
  }, {
    from: 'Warehouse',
    to: 'ICU',
    item: 'Scalpel',
    quantity: 10
  }
];

// console.log(meds);
// console.log(store);
// console.log(initialData);
// console.log(transactionLog);

const availability = p => initialData[p.from][p.item] >= p.quantity;

const from = R.map(availability, transactionLog);
//console.log('txn validity',from);
//console.log(R.map(availability)(transactionLog));


// const updateInventory = p => R.filter(q=>q.)(transactionLog);
// const finalData = R.map(updateInventory)(initialData);
