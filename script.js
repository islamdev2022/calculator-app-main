const input=document.getElementById('write')
const buttons=document.querySelectorAll('.number')
const operators=document.querySelectorAll('.operator')
const equal=document.getElementById('equal')
const reset=document.getElementById('reset')
const del=document.getElementById('del')

buttons.forEach(function(btn){
    btn.addEventListener('click',()=>{
        input.value += btn.textContent
    })
})

operators.forEach(function(btn){
    btn.addEventListener('click',()=>{
        input.value +=btn.textContent
    })
})

equal.addEventListener('click',()=>{
    try{
    input.value=eval(input.value)
    }catch(error){
        input.value='Error'
    }}
)

reset.addEventListener('click',()=>{
    input.value=''
})
del.addEventListener('click',()=>{
    if(input.value=="Error" || input.value=="undefined"){
        input.value=""
    }else{ input.value=input.value.slice(0,-1)}
   
})


// now for the themes

const radiobtns=document.querySelectorAll('.them')

radiobtns.forEach(function(btn){
  const themeElements=document.querySelectorAll('.calculator,.btns,.body,#write,button,#reset,#equal,#del')

    btn.addEventListener('change',function(e){
      document.body.classList.toggle('secmode')
        if(e.target.checked){
           if(e.target.id=="theme2"){
            themeElements.forEach(element=>{
                element.classList.remove('thirdmode')
                element.classList.toggle('secmode')
                document.querySelector('body').style.backgroundColor=" hsl(0, 0%, 90%)"
            })
           }else if(e.target.id=="theme3"){
            themeElements.forEach(element=>{
                element.classList.remove('secmode')
                element.classList.toggle('thirdmode')
                document.querySelector('body').style.backgroundColor="hsl(268, 75%, 9%)"
            })
           }else if(e.target.id=="theme1"){
            themeElements.forEach(element=>{
                element.classList.remove('secmode')
                element.classList.remove('thirdmode')
                document.querySelector('body').style.backgroundColor="hsl(222, 26%, 31%)"
            })
           }
        }
    })
})

