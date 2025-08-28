// function for heart clicking

let number=1
function clickAndIncreaseHeart(id){

  const heartIncreaseElement=document.getElementById('heart-increasing-para').innerText
   
 let heartIncreaseElements=number++;
document.getElementById('heart-increasing-para').innerText=heartIncreaseElements
}



//  toggle for heart clicking 
document.getElementById('heart-picture-1').addEventListener('click',function(){
 
clickAndIncreaseHeart('heart-picture-1')
})

document.getElementById('heart-picture-2').addEventListener('click',function(){
 
clickAndIncreaseHeart('heart-picture-2')
})

document.getElementById('heart-picture-3').addEventListener('click',function(){
 
clickAndIncreaseHeart('heart-picture-3')
})

document.getElementById('heart-picture-4').addEventListener('click',function(){
 
clickAndIncreaseHeart('heart-picture-4')
})

document.getElementById('heart-picture-5').addEventListener('click',function(){
 
clickAndIncreaseHeart('heart-picture-5')
})

document.getElementById('heart-picture-6').addEventListener('click',function(){
 
clickAndIncreaseHeart('heart-picture-6')
})

document.getElementById('heart-picture-7').addEventListener('click',function(){
 
clickAndIncreaseHeart('heart-picture-7')
})

document.getElementById('heart-picture-8').addEventListener('click',function(){
 
clickAndIncreaseHeart('heart-picture-8')
})

document.getElementById('heart-picture-9').addEventListener('click',function(){
 
clickAndIncreaseHeart('heart-picture-9')
})


// function for call button click 

function clickAndCall(id){
   // for reduce coin 
 const coinElement =document.getElementById('coin-para').innerText
 const perClickReduce=20

 const coinAfterOneClick=coinElement-perClickReduce
 document.getElementById('coin-para').innerText=coinAfterOneClick

 if(coinElement<20){
  alert('Your coins are under the limit')
  return ;
}
 
 

}
// national emergency service
document.getElementById('call-btn-national-emergency').addEventListener('click',function(){
//   // for alert 
  const serviceName=document.getElementById('emergency-service-name').innerText
  const serviceNumber=document.getElementById('emergency-service-number').innerText
  const twiceName='Calling '+ serviceName+' '+ serviceNumber;
  alert( twiceName);

 
clickAndCall('call-btn-national-emergency')
return;
})

// police helpline

document.getElementById('call-btn-police-helpline').addEventListener('click',function(){
//   // for alert 
  const serviceName=document.getElementById('police-helpline-name').innerText
  const serviceNumber=document.getElementById('police-helpline-number').innerText
  const twiceName='Calling '+ serviceName+' '+ serviceNumber;
  alert( twiceName);

 
clickAndCall('call-btn-police-helpline')
})

// fire service 
document.getElementById('call-btn-fire-service').addEventListener('click',function(){
//   // for alert 
  const serviceName=document.getElementById('fire-service-name').innerText
  const serviceNumber=document.getElementById('fire-service-number').innerText
  const twiceName='Calling '+ serviceName+' '+ serviceNumber;
  alert( twiceName);

 
clickAndCall('call-btn-fire-service')
})
// ambulance service
document.getElementById('call-btn-ambulance').addEventListener('click',function(){
//   // for alert 
  const serviceName=document.getElementById('ambulance-service-name').innerText
  const serviceNumber=document.getElementById('ambulance-service-number').innerText
  const twiceName='Calling '+ serviceName+' '+ serviceNumber;
  alert( twiceName);

 
clickAndCall('call-btn-ambulance')
})
// women & child 
document.getElementById('call-btn-women-child').addEventListener('click',function(){
//   // for alert 
  const serviceName=document.getElementById('women-child-service-name').innerText
  const serviceNumber=document.getElementById('women-child-number').innerText
  const twiceName='Calling '+ serviceName+' '+ serviceNumber;
  alert( twiceName);

 
clickAndCall('call-btn-women-child')
})

// anti-corruption
document.getElementById('call-btn-anti-corruption').addEventListener('click',function(){
//   // for alert 
  const serviceName=document.getElementById('anti-corruption-service-name').innerText
  const serviceNumber=document.getElementById('anti-corruption-number').innerText
  const twiceName='Calling '+ serviceName+' '+ serviceNumber;
  alert( twiceName);

 
clickAndCall('call-btn-anti-corruption')
})

// electricity
document.getElementById('call-btn-electricity').addEventListener('click',function(){
//   // for alert 
  const serviceName=document.getElementById('electricity-service-name').innerText
  const serviceNumber=document.getElementById('electricity-service-number').innerText
  const twiceName='Calling '+ serviceName+' '+ serviceNumber;
  alert( twiceName);

 
clickAndCall('call-btn-electricity')
})

// brac service
document.getElementById('call-btn-brac').addEventListener('click',function(){
//   // for alert 
  const serviceName=document.getElementById('brac-service-name').innerText
  const serviceNumber=document.getElementById('brac-service-number').innerText
  const twiceName='Calling '+ serviceName+' '+ serviceNumber;
  alert( twiceName);

 
clickAndCall('call-btn-brac')
})

// railway service
document.getElementById('call-btn-railway').addEventListener('click',function(){
//   // for alert 
  const serviceName=document.getElementById('railway-service-name').innerText
  const serviceNumber=document.getElementById('railway-service-number').innerText
  const twiceName='Calling '+ serviceName+' '+ serviceNumber;
  alert( twiceName);

 
clickAndCall('call-btn-railway')
})

// function for history section 

const callButtons=document.getElementsByClassName('call-btn')
const callingTime=new Date().toLocaleTimeString()
for( let callButton of callButtons){
    callButton.addEventListener('click',function(){
       
      const serviceName=callButton.parentNode.parentNode.children[1].innerText
      const serviceNumber=callButton.parentNode.parentNode.children[3].innerText
      
      const historyCart=document.getElementById('history-container')
      const historyCartDiv=document.createElement('div')
      historyCartDiv.innerHTML=`
      <div id='calling-history' class="mx-auto w-[380px] h-[83px] bg-gray-100 rounded-[10px] mt-[10px] flex justify-between items-center p-2  ">
  <div>
    <h2 class="text-[20px] font-semibold">${serviceName}</h2>
    <p class="text-[18px] font-semibold">${serviceNumber}</p>
  </div>
   <h3 class='font-bold'>${callingTime}</h3>

</div>
      `
     const historyCarts= historyCart.appendChild(historyCartDiv);

     // function for clear history
     document.getElementById('clear-btn').addEventListener('click',function(){
       historyCarts.remove()
     })
    })
}

// function for clicking copy 
const copyButtons=document.getElementsByClassName('copy-btn')
for(let copyButton of copyButtons){
  copyButton.addEventListener('click',function(){
    const serviceNumberForCopy=copyButton.parentNode.parentNode.children[3].innerText
   const serviceNumberForAlert='Copied'+'-'+ serviceNumberForCopy
  alert (serviceNumberForAlert)
  // counting copy 
   const copyIncreasingPara=document.getElementById('copy-increasing-para').innerText
  const copyIncreasingElement=number++
  document.getElementById('copy-increasing-para').innerText=copyIncreasingElement 

  })
}
 

