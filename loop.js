//for of
const arr=[1,2,3,5]
for (const i of arr) {
    console.log(i)
}

//Maps

const map=new Map()
map.set('IN',"India")
map.set('US',"United States Of America ")
console.log(map)

for (const key of map) {
    console.log(key) // array of [key,value]
}
for (const [key,value] of map) {
    console.log(key,':',value)//key : value
}


//for in
const object={
    js:"javascript",
    cpp:"c++",
    rb:"ruby"
}
for (const key in object) {
    // if (Object.prototype.hasOwnProperty.call(object, key)) {
    //     const element = object[key];
        
    // }
    console.log(key,"-->",object[key])
}

//for each
const lang=["java","c++","js"]
 lang.forEach( /*function*/(item,index,arr)=>{
    console.log(item,index,arr)
} )


