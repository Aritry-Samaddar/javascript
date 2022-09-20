const ucont = document.querySelector('.content')
const uconts = document.querySelector('.container')
const putid = document.getElementById('uid')
ucont.addEventListener('submit', (event) => {
    event.preventDefault()
    let putuid = putid.value
    uconts.innerHTML = `
        User Name: <input type="text" id="name">
        <br>
        Email Id:  <input type="text" id="email">
        <br>
        Mobile No:  <input type="text"  id="mob">
        <br>
        City:  <input type="text"  id="city">
        <br>
        <input type="submit">
    `
    const uname = document.getElementById('name')
    const uemail = document.getElementById('email')
    const uphone = document.getElementById('mob')
    const ucity = document.getElementById('city')
    uconts.addEventListener('submit', (event) => {
        event.preventDefault()
        const obj={
            fname:uname.value,
            email:uemail.value,
            phone:uphone.value,
            city:ucity.value
        }
    fetch(`http://localhost:3001/empDetails/${putuid}`, {
        method:'PATCH',
        body:JSON.stringify(obj),
        headers:{
            'Content-Type':'application/json'
        }
    }).then((res)=>{return res.json()}).then((serverres)=>console.log(serverres)).catch((err)=>console.log(err))
})
})
