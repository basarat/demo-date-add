import { add } from 'date-fns';

/** Add one day to a given input */
function tomorrow(date: Date) {
  return add(date, { days: 1 });
}

const now = new Date('2022-04-03 00:00:00');
const next = tomorrow(now);
console.log(now.toLocaleString(), '--', next.toLocaleString());