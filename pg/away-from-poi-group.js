import data from './away-from-poi-group-data.js';

const dict = {}; // biker day count

const dup = {};

for(const d of data) {

  if(dup[`${d.sp_id}-${d.date}`]){
      continue;
  }

  if(!dict[d.sp_id]) {
      dict[d.sp_id] = 0;
  }

  dup[`${d.sp_id}-${d.date}`] = true;

  dict[d.sp_id]++;

}

console.log(dict)


const group5to8 = [];
const group9to12 = [];
const group13andmore = [];

Object.keys(dict).forEach(key => {

  if(dict[key] >= 5 && dict[key] <= 8) {
      group5to8.push(key);
  } else if(dict[key] >= 9 && dict[key] <= 12) {
      group9to12.push(key)
  }else if(dict[key] >= 13) {
      group13andmore.push(key)
  }
});

// console.log('5 to 8 days', group5to8, group5to8.length)
// console.log('9 to 12 days', group9to12, group9to12.length) 
// console.log('more than 13 days', group13andmore, group13andmore.length)

