//captcha-code maker//
let emptyArray=[]
let intialCharacter=["1","2","3","4","5","6","7","8","9"]

for(let i=1;i<=5;i++){
    emptyArray.push(intialCharacter[Math.floor(Math.random()*(intialCharacter.length))])
}

let captchaCode=emptyArray.join("")
let c=Math.random()*20

document.querySelector("#captchacode").innerHTML=captchaCode;
document.getElementById("captchacode").style.letterSpacing =`${c}px`



document.querySelector("#inputvalidationcode").addEventListener("keyup",function(e){
    if(e.keyCode===13){
       if( document.querySelector("#inputvalidationcode").value===captchaCode){
        
        //document.querySelector(".alert").classList.remove("active")
        document.querySelector("#alert").className="alert"
        document.location.reload()
        document.getElementById("captchacode").style.letterSpacing =`${c}px`
       }
       else{
        document.querySelector("#alert").classList.add("active")
        document.querySelector("#alert").innerHTML="کد امنیتی اشتباه است.لطفا مجدد وارد نمایید. "
        captchaCode=""
        emptyArray=[]
        for(let i=1;i<=5;i++){
            emptyArray.push(intialCharacter[Math.floor(Math.random()*(intialCharacter.length))])
             captchaCode=emptyArray.join("")
            
document.querySelector("#captchacode").innerHTML=captchaCode;
c=Math.random()*20
document.getElementById("captchacode").style.letterSpacing =`${c}px`
        }
       }    
    }
})

document.querySelector("#refreshBtn").addEventListener("click",function(){
     emptyArray=[]
    for(let i=1;i<=5;i++){
        emptyArray.push(intialCharacter[Math.floor(Math.random()*(intialCharacter.length))])
        captchaCode=emptyArray.join("")
        
document.querySelector("#captchacode").innerHTML=captchaCode;
c=Math.random()*20
document.getElementById("captchacode").style.letterSpacing =`${c}px`

}
})


document.querySelector(".bottom-box .right").addEventListener("click",function(){
    if( document.querySelector("#inputvalidationcode").value===captchaCode){
        document.location.reload()
        document.querySelector(".alert").classList.remove("active")

       }
       else{
        document.querySelector(".alert").classList.add("active")
        document.querySelector(".alert").innerHTML="کد امنیتی اشتباه است.لطفا مجدد وارد نمایید. "
         emptyArray=[]
        for(let i=1;i<=5;i++){
            emptyArray.push(intialCharacter[Math.floor(Math.random()*(intialCharacter.length))])
            captchaCode=emptyArray.join("")
            
document.querySelector("#captchacode").innerHTML=captchaCode;
c=Math.random()*20
document.getElementById("captchacode").style.letterSpacing =`${c}px`
        }
       }    

})


//input//
//document.getElementsByTagName("input").addEventListener("keyup",function(){
  //  document.querySelector(".input-group span")
//})

document.querySelector("#ali").addEventListener("keyup",function(e){
    document.querySelector("#ali span").innerHTML=""
})

//document.querySelector("#ali").addEventListener("keyup",function(e){
   // if(Input.value===""){
       // document.querySelector("#ali span").innerHTML="نام کاربری"
   // }
//})


if(document.querySelector("#hasan").value===""){
    document.querySelector("#ali span").innerHTML="نام کاربری"
}







