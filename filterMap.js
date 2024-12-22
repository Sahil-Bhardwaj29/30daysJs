const nums=[1,2,3,4,5,6,7,8,9]
//filter
const newNum=nums.filter((num)=>num<4)
console.log(newNum)

//map
console.log(nums.map((num)=>num+10))

//reduce
const total=nums.reduce( function(accumulator,currValue){
    console.log(`acc :${accumulator} and value:${currValue}`)
    return accumulator + currValue
},0/*initial value of accumulator*/ )
console.log(total)







