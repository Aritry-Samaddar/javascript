let contact=document.querySelector('.contact-container')
// fetch("http://localhost:3001/empDetails/1").then((res)=>{return res.json()}).then((res1)=>{
//     getDetails(res1)
// }).catch((err)=>{console.log(err)})
// function getDetails(data) {
//     contact.innerHTML = `
//     <div class="col-sm-6">
//       <div class="card">
//       <div class="card-body">
//         <h3>${data.fname}</h3>
//         <p>${data.email}</p>
//         <p>${data.city}</p>
//         <button>Submit</button>
//       </div>
//       </div>
//     </div>
//     `
// }

fetch("http://localhost:3001/empDetails").then((res)=>{return res.json()}).then((res1)=>{
    console.log(res1)
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
        <button>Submit</button>
      </div>
      </div>
    </div>
    `
    }
    contact.innerHTML = content
}