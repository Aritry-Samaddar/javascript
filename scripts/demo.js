const userPromise=new Promise(
    (resolve,reject)=>{
        let user
    // let user={
    //     fname:"john",
    //     email:"john@gmail.com",
    //     role:"admin"
    // }
    if(user){
        resolve(user)
    }
    else{
        reject("user is not fetched")
    }
    }
)
// userPromise.catch((res)=>{console.log(res)}).then((res1)=>{console.log(res1)}).catch((err)=>{console.log(err)})
// userPromise.catch((res)=>{console.log(res)}).then((res1)=>{return "some"}).then((res2)=>{console.log(res2)}).catch((err)=>{console.log(err)})
// userPromise.then((res1)=>{console.log(res1)}).catch((err)=>{console.log(err)}).then(()=>{console.log("hi")})
// userPromise.then((res1)=>{console.log(res1)}).catch((err)=>{console.log(err)}).then((ress)=>{console.log(ress)})
userPromise.then((res)=>{return "something"}).catch((err)=>{console.log(err)}).then((ress)=>{console.log(ress)})
