const userContainer = document.querySelector('.contain')
const uname = document.getElementById('name')
const uemail = document.getElementById('email')
const uphone = document.getElementById('mob')
const ucity = document.getElementById('city')
const msgContent = document.getElementById("msg")
userContainer.addEventListener('submit', (event)=>{
    event.preventDefault()
    const obj={
        id:Date.now(),
        fname:uname.value,
        email:uemail.value,
        phone:uphone.value,
        city:ucity.value
    }
    fetch("http://localhost:3001/empDetails", {
        method:'POST',
        body:JSON.stringify(obj),
        headers:{'content-Type':'application/json'}
    }).then((res)=>{return res.json()}).then((res1)=>{msgContent.innerHTML="Added Contact Successfully!"})
    .catch((err)=>{msgContent.innerHTML="Sorry! Try again!"})
})