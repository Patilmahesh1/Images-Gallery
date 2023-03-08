let cl = console.log;

const changebg = document.getElementById("changebg")
const allbox = [...document.querySelectorAll(".all")]





const onchangebg = (eve) => {
    cl(eve.target.value)
    let getclass = eve.target.value
    allbox.forEach(ele => ele.classList.add("d-none"))
    let getDiv = [...document.querySelectorAll(`.${getclass}`)]
    cl(getDiv)
    getDiv.forEach(ele => ele.classList.remove("d-none"))
}







changebg.addEventListener("change" , onchangebg)






































// let cl = console.log;

// const changebg = document.getElementById("changebg")
// const allbox = [...document.querySelectorAll(".all")]


// const onchangebg = (eve) =>{
//     cl(eve.target.value)
//     let getclass = eve.target.value
//     allbox.forEach(ele => ele.classList.add("d-none"))
//     let getDiv = [...document.querySelectorAll(`.${getclass}`)] 
//     cl(getDiv)
//     getDiv.forEach(ele => ele.classList.remove("d-none"))
// }






// changebg.addEventListener("change" , onchangebg)