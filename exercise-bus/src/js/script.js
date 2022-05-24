import { Bus } from './classes/Bus.js';

const busses = [

    new Bus('Vienna', ['Praha', 'Jihlava', 'Brno', 'Břeclav', 'Vídeň'], 44, 39, 2),
    new Bus('Prague', ['Vídeň', 'Břeclav', 'Brno', 'Jihlava', 'Praha'], 44, 40, 4)]

console.log(busses);

console.log(busses[0].board(6));

console.log(busses[0].board(19));


console.log(busses[0].deboard(6));

console.log(busses[0].deboard(40));


console.log(busses[0].next());

console.log(busses[0].current());

console.log(busses[1].next());

console.log(busses[1].current());


