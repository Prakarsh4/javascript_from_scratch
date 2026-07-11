/*const marvel_heroes=[
    "Iron Man",
    "Captain America",]
    const dc_heroes=[
    "Superman",
    "Batman",
    "Wonder Woman"
]
const all_heroes=marvel_heroes.concat(dc_heroes)// combine dc_heroes as all new element. not treated as individiual element of dc heroes. all the dc heroes qill be single new element.
const all_heroes2=[...marvel_heroes,...dc_heroes]// combine dc_heroes as individual element. all the dc heroes will be treated as individual element of all_heroes2.
*/
const real_numbers=[1,2,3,[4,5,6],[7,8,9],[10,11,12,[13,14,15]]]
const flat_numbers=real_numbers.flat(Infinity)// flattens the array to a depth of 2. so the nested arrays will be flattened to a single array.
console.log(flat_numbers)