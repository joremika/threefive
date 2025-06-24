function findCombos(){
    let startingIndex = 71;
    let zalupa = 71; 
    let known_pairs = [];
        for(let j = 0; j<7; j++){
                let pair = [];
                        for(let i = 0; i<6; i++){
    let startingElement = getElementById(startingIndex);
    let next_element = getElementById(startingIndex-10);
            if(next_element){
                    if((startingElement.contains.name == next_element.contains.name)){
                            if(!pair.includes(startingElement.id)){
             pair.push(startingElement.id);
             }
             pair.push(next_element.id);
                                     }else{
                                            if(pair.length>2){
             let found_pair = pair.slice();
             known_pairs.push(found_pair);
             }
             pair = [];
         }
        startingIndex = startingIndex-10;
     }
       }
                    if(pair.length>2){
            let found_pair = pair.slice();
            known_pairs.push(found_pair);
         }
            zalupa++;
            startingIndex=zalupa;
    }
    burnPieces(known_pairs);
    return known_pairs;
}

