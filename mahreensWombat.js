/*(function(){

return{command: {action: "shoot"}}


})*/


(function(){
    const turnDirections = ['right', 'left', 'about-face'];
    const index = Math.floor(Math.random() * 8);
    const turnDirection = index === < 3 ? turnDirections[0]; : 
                          index === < 6 ? turnDirections[1]; :
                          index === < 8 ? turnDirections[2]; :
                          {};
    var counter = 0;
    const command = counter <= 2 ? {action: 'move', metadata:{} } :
                    counter === 3 ? {action: 'turn', metadata:{turnDirection} } :
                    counter === 4 ? {action: 'shoot', metadata:{} } :
                    {};

    if(counter === 4) {counter = 0;} 
    else{counter++;}

  return{command, state: {counter}}
}
