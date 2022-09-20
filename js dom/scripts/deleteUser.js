const udelete = document.querySelector('.delContent')
const udel = document.getElementById('del')
udelete.addEventListener('submit', (event) => {
    event.preventDefault()
    let userDel = udel.value
    fetch(`http://localhost:3001/empDetails/${userDel}`,{
        method:'DELETE'
    }).then((res)=>{return res.json()}).then((res)=>console.log(res)).catch((Err)=>console.log(Err))
})