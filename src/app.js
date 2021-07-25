import getData from './lib/service.js'
const dat =  getData(1).then(ba=>{
  console.log(ba);
});