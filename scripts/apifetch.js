fetch("http://localhost:3001/empDetails").then((res)=>{return res.json()}).then((res1)=>{
    // res1.forEach((item)=>{
        //     if(item.email === "peter@gmail.com") return item
        // })
        for(let i = 0; i < res1.length; i++) {
            let obj = res1[i];
            if(obj.email === "peter@gmail.com") return obj
        }
        return "User not registered!"
}).then((res2)=>{console.log(res2)}).catch((res3)=>{console.log(res3)})


fetch("http://localhost:3001/empDetails").then((res)=>{return res.json()}).then((res1)=>{
    return res1.filter((item)=>item.city === "delhi")
}).then((res2)=>{console.log(res2)}).catch((res3)=>{console.log(res3)})


fetch("http://localhost:3001/empDetails").then((res)=>{return res.json()}).then((res1)=>{
    for(let i = 0; i < res1.length; i++) {
        let obj = res1[i];
        if(obj.email === "peter@gmail.com") console.log(obj)
    }
    console.log(res1.filter((item)=>item.city === "delhi"))
}).catch((res3)=>{console.log(res3)})

function postData() {
    let url = "http://localhost:3001/empDetails"
    const data = {
        id:3,
        fname:"aritry",
        email:"aritry@gmail.com",
        city:"asansol"
    }
    fetch(
        url, {
            method:'POST',
            body:JSON.stringify(data),
            headers:{
                'content-Type':'application/json'
            }
        }
    ).then((res)=>{return res.json()}).then((res1)=>{console.log(res1)}).catch((err)=>{console.log(err)})
}
// postData()

function deleteReq(){
    fetch("http://localhost:3001/empDetails/3",{
        method:'DELETE'
    }).then((res)=>{return res.json()}).then((res)=>console.log(res)).catch((Err)=>console.log(Err))
}
// deleteReq()

function patchReq(){
    const url="http://localhost:3001/empDetails/3"
    const data={
        city:"kolkata"
        // id:4
    }
    fetch(url,{
        method:'PATCH',
        body:JSON.stringify(data),
        headers:{
            'Content-Type':'application/json'
        }
    }).then((res)=>{return res.json()}).then((serverres)=>console.log(serverres)).catch((err)=>console.log(err))
}
// patchReq()

function putReq(){
    const url="http://localhost:3001/empDetails/3"
    const data={
        city:"kolkata"
    }
    fetch(url,{
        method:'PUT',
        body:JSON.stringify(data),
        headers:{
            'Content-Type':'application/json'
        }
    }).then((res)=>{return res.json()}).then((serverres)=>console.log(serverres)).catch((err)=>console.log(err))
}
// putReq()
function deleteReq(){
    fetch("http://localhost:3001/empDetails/1658487451928",{
        method:'DELETE'
    }).then((res)=>{return res.json()}).then((res)=>console.log(res)).catch((Err)=>console.log(Err))
}
// deleteReq()