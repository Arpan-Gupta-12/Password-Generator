const btn =document.getElementById("passBtn")
const genPass = document.getElementById("genPass")
const slider = document.getElementById("range")
const rangeVal = document.getElementById("rangeval")
rangeVal.innerText =slider.value
const uprcase=document.getElementById("capLet")
const lwrcase=document.getElementById("smlLet")
const spcl=document.getElementById("spclchar")
const num=document.getElementById("num")
const copybtn =document.getElementById("copybtn")



slider.addEventListener("input", ()=>{
    rangeVal.innerText =slider.value

})
btn.addEventListener('click',()=>{
 let small ='abcdefghijklmnopqrstuvwxyz'
 let  capital ='ABCDEFGHIJKLMNOPQRSTUVWXYZ'
 let number ='1234567890'
let special ='@#$&*()'
let finalstr = ''
let latestpass =''
if(uprcase.checked){
    finalstr+=capital
}
if(lwrcase.checked){
    finalstr+=lwrcase
   
}
if(spcl.checked){
    finalstr+=special
   
}
if(num.checked){
    finalstr+=number
   
}
if(finalstr==''){
    alert("Please select any of the options!")
}
for(let i=0; i<slider.value;i++)
{
    let randNim= Math.floor(Math.random()*finalstr.length)
    latestpass+=finalstr[randNim]

}


    genPass.innerText = `${latestpass}`
})
copybtn.addEventListener('click', ()=>{
    window.navigator.clipboard.writeText( genPass.innerText)
})