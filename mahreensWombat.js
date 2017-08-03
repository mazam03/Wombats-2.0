/*(function(){

return{command: {action: "shoot"}}


})*/


(function(state){
    const turnDirections = ['right', 'left', 'about-face'];
    const index = Math.floor(Math.random() * 8);
    const turnDirection = index  < 3 ? turnDirections[0] : 
                          index  < 6 ? turnDirections[1] :
                          index  < 8 ? turnDirections[2] :
                          {};
    var counter = state['saved-state'].counter || 0; 
    
    const command = counter <= 2 ? {action: 'move', metadata:{} } :
                    counter === 3 ? {action: 'turn', metadata:{turnDirection} } :
                    counter === 4 ? {action: 'shoot', metadata:{} } :
                    {};
    counter++;
    if(counter === 5) {counter = 0;} 
    //else{counter++;}

  return{command, state: {counter}}
})
