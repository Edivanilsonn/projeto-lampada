const turnOnOff = document.getElementById( 'turnOnOff' );
const lamp = document.getElementById( 'lamp' );


 function islambroken (){
    return lamp.src.indexOf(' quebrada') > -1

 }

function lampOn () {
    if (!islambroken() ){
        lamp.src = './img/ligada.jpg';

    }
   
}
  function lampOff(){
    if (!islambroken()){
        lamp.src = './img/desligada.jpg'
    }
   

  }

  function lampBroken(){
      lamp.src = './img/quebrada.jpg'
  }

  function lampOnOff (){
    if (turnOnOff.textContent =='ligar'){
        lampOn();
        turnOnOff.textContent = 'desligar';
    }else{
        lampOff();
        turnOnOff.textContent = 'ligar';
    }
  }
 
turnOnOff.addEventListener('click', lampOnOff);


lamp.addEventListener('mouseover',lampOn);
lamp.addEventListener('mouseleave', lampOff);

lamp.addEventListener('dblclick',lampBroken);


