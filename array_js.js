const marvel_heroes=[
    "Iron Man",
    "Captain America",]
    const dc_heroes=[
    "Superman",
    "Batman",
    "Wonder Woman"
]
const all_heroes=marvel_heroes.concat(dc_heroes)// combine dc_heroes as all new element. not treated as individiual element of dc heroes. all the dc heroes qill be single new element.
const all_heroes2=[...marvel_heroes,...dc_heroes]// combine dc_heroes as individual element. all the dc heroes will be treated as individual element of all_heroes2.