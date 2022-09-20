const userContent = document.querySelector('.content')
const userContactContainer = document.querySelector('.contact-container')
const username = document.getElementById('fname')
userContent.addEventListener(('submit'), (event)=>{
    event.preventDefault()
    let uname = username.value
    fetch(`http://localhost:3001/empDetails?fname=${uname}`).then((res)=>{return res.json()}).then((res1)=>{
        getAllDetails(res1)
    }).catch((err)=>{console.log(err)})

    function getAllDetails(data) {
        let content = ``
        for(let i = 0; i < data.length; i++) {
            let obj = data[i];
            content += `
        <div class="col-sm-3">
          <div class="card">
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
        userContactContainer.innerHTML = content
    }
})