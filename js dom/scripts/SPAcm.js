const userContainer = document.querySelector('.content')
const ucont=document.querySelector('.container')
const contact=document.querySelector('.contact-container')
const uname = document.getElementById('name')
const uemail = document.getElementById('email')
const uphone = document.getElementById('mob')
const ucity = document.getElementById('city')
const searchUser = document.querySelector('.searching')
const sUser = document.getElementById('suser')
fetch("http://localhost:3001/empDetails").then((res)=>{return res.json()}).then((res1)=>{
    console.log(res1)
    getAllDetails(res1)
}).catch((err)=>{console.log(err)})
function getAllDetails(data) {
    let content = ``
    for(let i = 0; i < data.length; i++) {
        let item = data[i];
        content += `
    <div class="col-sm-3">
      <div class="card" style="margin: 5px; background-color: #dddddd; box-shadow: -4px 2px 2px 2px #dcdde1;">
      <div class="card-body" data-id=${item.id} data-fname=${item.fname} data-email=${item.email} data-phone=${item.phone} data-city=${item.city}>
        <h3 class="card-title">${item.fname}</h3>
        <p class="card-text">${item.email}</p>
        <p class="card-text">${item.phone}</p>
        <p class="card-text">${item.city}</p>
        <button class="btn btn-outline-danger" id="del-btn">Delete</button>
        <button class="btn btn-outline-success" id="edit-btn">Edit</button>
      </div>
      </div>
    </div>
    `
    }
    contact.innerHTML = content
}
userContainer.addEventListener('click',(e)=>{
    e.preventDefault()
    if(e.target.id === 'sub-btn') {
        if(uname.value.trim() != "" && uemail.value.trim() != "" && uphone.value.trim() != "" && ucity.value.trim() != "") {
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
                headers:{'Content-Type':'application/json'}
            }).then((res)=>{return res.json()}).then((res1)=location.reload())
            .catch((err)=>{console.log(err)})
        } else {
            alert("Please fill all the required fields!")
            // location.reload()
        }
        // location.reload()
    }
    // else if(e.target.id === 'upd-btn') {
    //     alert("You are registering for the first time!")
    //     // location.reload()
    // }
    // if(e.target.id === 'upd-btn') location.reload()
})
function callDetails(userid) {
    userContainer.addEventListener('click',(e)=>{
        e.preventDefault()
        // if(e.target.id === 'sub-btn') {
        //     if(uname.value.trim() != "" && uemail.value.trim() != "" && uphone.value.trim() != "" && ucity.value.trim() != "") {
        //         const obj={
        //             id:Date.now(),
        //             fname:uname.value,
        //             email:uemail.value,
        //             phone:uphone.value,
        //             city:ucity.value
        //         }
        //         fetch("http://localhost:3001/empDetails", {
        //             method:'POST',
        //             body:JSON.stringify(obj),
        //             headers:{'Content-Type':'application/json'}
        //         }).then((res)=>{return res.json()}).then((res1)=location.reload())
        //         .catch((err)=>{console.log(err)})
        //     } else {
        //         alert("Please fill all the required fields!")
        //         location.reload()
        //     }
        // }
        if(e.target.id === 'upd-btn') {
            if(uname.value.trim() != "" && uemail.value.trim() != "" && uphone.value.trim() != "" && ucity.value.trim() != "") {
                const obj={
                    fname:uname.value,
                    email:uemail.value,
                    phone:uphone.value,
                    city:ucity.value
                }
                fetch(`http://localhost:3001/empDetails/${userid}`,{
                    method:'PATCH',
                    body:JSON.stringify(obj),
                    headers:{
                        'Content-Type':'application/json'
                    }
                }).then((res)=>{return res.json()}).then((serverres)=>location.reload()).catch((err)=>console.log(err))
            } else {
                alert("Please fill all the required fields!")
                location.reload()
            }
        }
    })
}
contact.addEventListener('click', (e)=>{
    e.preventDefault()
    const parentElement=e.target.parentElement
    const uid=parentElement.dataset.id
    if(e.target.id === 'del-btn') {
        fetch(`http://localhost:3001/empDetails/${uid}`,{
        method:'DELETE'
    }).then((res)=>{return res.json()}).then((res)=>location.reload()).catch((Err)=>console.log(Err))
    }
    if(e.target.id === 'edit-btn') {
        const parent=e.target.parentElement
        let fname=parent.dataset.fname
        let email=parent.dataset.email
        let phone=parent.dataset.phone
        let city=parent.dataset.city
        let userid=parent.dataset.id
        uname.value=fname
        uemail.value=email
        uphone.value=phone
        ucity.value=city
        callDetails(userid)
    }
})
searchUser.addEventListener('submit',(e)=>{
    e.preventDefault()
    let search_user = sUser.value
    search_user = search_user.trim()
    if(search_user != "") {
        fetch(`http://localhost:3001/empDetails?fname=${search_user}`).then((res)=>{return res.json()}).then((res1)=>{
        getAllDetails(res1), sUser.value = ""
    }).catch((err)=>{console.log(err)})
    function getAllDetails(data) {
        let content = ``
        for(let i = 0; i < data.length; i++) {
            let obj = data[i];
            content += `
        <div class="col-sm-3">
          <div class="card" style="margin: 5px; background-color: #dddddd; box-shadow: -4px 2px 2px 2px #dcdde1;">
          <div class="card-body">
            <h3>${obj.fname}</h3>
            <p>${obj.email}</p>
            <p>${obj.phone}</p>
            <p>${obj.city}</p>
          </div>
          </div>
        </div>
        `
        }
        contact.innerHTML = content
    }
    } else {
        alert("Please fill all the required fields!")
    }
})