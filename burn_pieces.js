function burnPieces(arr){
    if(arr.length>0){
        for(let i = 0; i< arr.length; i++){
        for(let j = 0; j< arr[i].length; j++){
             let id = arr[i][j];
             let targetElement = document.querySelector(`[data-id="${id}"]`)
             targetElement.classList.add('fade');
        }
    }
    }
}