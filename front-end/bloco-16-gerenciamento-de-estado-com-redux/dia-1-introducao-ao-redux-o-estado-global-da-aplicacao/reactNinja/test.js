console.assert(
  counter(0,{ type: 'INCREMENT' }) === 1
  );
console.assert(
  counter(0, { type: 'DECREMENT' }) === -1
  );
console.assert(
  counter(3, { type: 'SOMETHING' }) === 3
);
console.assert(
  counter(undefined, {}) === 0
)