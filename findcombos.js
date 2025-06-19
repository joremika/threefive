function findCombos(){
    let maxChecks = 6;
    let startingIndex = 71;
    let known_pairs = [];
    let pair = [];
    for(let i = 0; i<=maxChecks; i++){
        let startingElement = game_matrix.find(element => element['id'] == startingIndex)
        let next_element = game_matrix.find(element => element['id'] == startingIndex-10);
        // console.log(`the first element is ${startingElement['contains']['style']} and the next element is ${next_element['contains']['style']}`)
        // console.log(`the pair is ${pair}`)
        if(next_element){
        if((startingElement['contains']['style'] == next_element['contains']['style'])){
            console.log(`pair state before array manipulation but after comparison is ${pair}`)
            pair.pop();
            pair.push(startingElement['id']);
            pair.push(next_element['id']);
            console.log(`pair state after array manipulation is ${pair}`)
        }else{
            if(pair.length>2){
            let found_pair = pair;
            known_pairs.push(found_pair);
            console.log(`the found pair is ${found_pair}`);
            }
            pair = [];
        }
        startingIndex = startingIndex-10;
    }else{
        if(pair.length > 2){
            let found_pair = pair;
            known_pairs.push(found_pair);
        }
    }
           if(known_pairs.length>0 && (next_element)){
            console.log(`known pairs are ${known_pairs}`);
           }
        }
}




//test function to be run on only one column for testing.