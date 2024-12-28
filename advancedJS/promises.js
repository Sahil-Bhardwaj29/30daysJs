const promise1=new Promise(function (resolve,reject){
    //Do async task
    //Database Call , cryptyography
    setTimeout(function(){
        console.log('Async task is commplete')
        resolve()//resolve is connected
    },1000)
})
//resolve is connected with .then()
promise1.then(function(){
    console.log("Promise consumed");
})

//sending data
const promise2=new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username:"Sahil",Id:"5082"})
    },1000)
})
promise2.then(function(user){
    console.log(user);
})


//Error
const promise3=new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=false
        if(!error){
            resolve({username:"Sahil",Id:"5082"})
        }else{
            reject('ERROR!, Something went Wrong')
        }
        
    },1000)
})

//chaining
promise3
.then((user)=>{
    console.log(user);
    return user.username 
})
.then((username)=>{
    console.log(username)
})
.catch((error)=>{
    console.log(error)//if error === true
})
.finally(()=>{
    console.log('The Promise is either rejected or resolved')//Always execute
})


//Async await
const promise4=new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=true
        if(!error){
            resolve({username:"Tarun",Id:"5000"})
        }else{
            reject('ERROR!, Something must went Wrong')
        }
    },1000)
})
async function consumePromise4(){
    try {
        const response=await promise4// Jhah Time lagta h Vha await use hota h
        console.log(response)
    } catch (error) {
        console.log(error)
    }
}
consumePromise4()

// async function getUser(){
//     try {
//         const response=await fetch('https://jsonplaceholder.typicode.com/users')
//         const data =await response.json()
//         console.log(data);
//     } catch (error) {
//         console.log('E: ',error);
//     }
// }
// getUser()


fetch('https://api.github.com/users/Sahil-Bhardwaj29')
.then((response)=>{
    return response.json()
})
.then((data)=>{
    console.log(data)
})
.catch((error)=>{
    console.log(error);
})