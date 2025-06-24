let draggedElement = null;

document.querySelectorAll('.boardElement').forEach((elem) => {
    elem.setAttribute('draggable', true);
    elem.addEventListener('dragstart', (e)=>{
        draggedElement = e.target;
    })
})