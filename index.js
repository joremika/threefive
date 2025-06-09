// basically you can only move a piece one step up, down, left or right (if such a step exists)
// that means i should be able to verify the step's validity by checking the absolute value of the difference between the initial place index vs target place index
// indices will stay the same, sort of like unmovable places where the contained elemens will change; so basically the place will have an index to be always indentifiable on the board + it will contain 
// an element that will either stay or collapse if the conditions for it are met.

// also there probably will have to be that drag-and-drop thing, as I will have to pull an element over another piece, so they kind of cross, and then upon mouseup event the comparison will either click
// in favor of the condition or fail, leaving the initial element it its place

const game_matrix = [
    {id: 11, contains: {}},{id: 12, contains: {}}, {id: 13, contains: {}}, {id: 14, contains: {}}, {id: 15, contains: {}}, {id: 16, contains: {}}, {id: 17, contains: {}},
    {id: 21, contains: {}},{id: 22, contains: {}}, {id: 23, contains: {}}, {id: 24, contains: {}}, {id: 25, contains: {}}, {id: 26, contains: {}}, {id: 27, contains: {}},
    {id: 31, contains: {}},{id: 32, contains: {}}, {id: 33, contains: {}}, {id: 34, contains: {}}, {id: 35, contains: {}}, {id: 36, contains: {}}, {id: 37, contains: {}},
    {id: 41, contains: {}},{id: 42, contains: {}}, {id: 43, contains: {}}, {id: 44, contains: {}}, {id: 45, contains: {}}, {id: 46, contains: {}}, {id: 47, contains: {}},
    {id: 51, contains: {}},{id: 52, contains: {}}, {id: 53, contains: {}}, {id: 54, contains: {}}, {id: 55, contains: {}}, {id: 56, contains: {}}, {id: 57, contains: {}},
    {id: 61, contains: {}},{id: 62, contains: {}}, {id: 63, contains: {}}, {id: 64, contains: {}}, {id: 65, contains: {}}, {id: 66, contains: {}}, {id: 67, contains: {}},
    {id: 71, contains: {}},{id: 72, contains: {}}, {id: 73, contains: {}}, {id: 74, contains: {}}, {id: 75, contains: {}}, {id: 76, contains: {}}, {id: 77, contains: {}}
]


function create_element(name){
    this.name = name;
    return this;
}

function spawn_element(){
    let num = (Math.random() * 100);
    num = Math.floor(num);
    // between 0 and 99 both included 
    if (num >= 0 && num < 20){
        // between 0 and 19 so 20% chance to spawn
        let element = new create_element("cat")
        element.style = "red";
        return element;
    }else if(num >= 20 && num < 40){
        // between 20 and 39 so 20% chance to spawn
        let element = new create_element("star")
        element.style = "orange";
        return element;
    }else if(num >=40 && num < 60){
        // between 40 and 59 so 20% chance to spawn
        let element = new create_element("octopus")
        element.style = "yellow";
        return element;
    }else if(num >=60 && num < 80){
        // betweeen 60 and 79 so 20% chance to spawn
        let element = new create_element("squid")
        element.style = "green";
        return element;
    }else if(num >= 80 && num < 90){
        // bewtween 80 and 89 so 10 % chance to spawn
        let element = new create_element("dancing cat")
        element.style = "pink";
        return element;
    }else if(num >= 90 && num < 95){
        // between 90 and 94 so 5% chance to spawn
        let element = new create_element("cockroach")
        element.style = "black";
        return element;
    }else{
        // between 95 and 99 so 5% chance to spawn
        let element = new create_element("lightning")
        element.style = "white";
        return element;
    }
}

function fill_board_initial(){
    for(i = 0; i < game_matrix.length; i++){
       game_matrix[i].contains = spawn_element();
    }   
}



fill_board_initial(game_matrix);

function populate_board(){
    let board = document.getElementById('gameBoard');
    for(let i = 0; i<49; i++){
        let element = document.createElement('div');
        element.classList.add('boardElement');
        element.id = i; 
        element.style.backgroundColor = game_matrix[i].contains.style;
        board.appendChild(element);
    }

    console.log(board);
}


 window.onload = function(){
populate_board();
} 
 
console.table(game_matrix);
console.log(game_matrix[0].contains.style)