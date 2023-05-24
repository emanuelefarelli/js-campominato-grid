
const button = document.querySelector('button');
const myMain = document.querySelector('main');
let newGame = false;

button.addEventListener('click',function(){
    myMain.replaceChildren();
    const tableGame = document.createElement('div');
    tableGame.classList.add('table-game');
    myMain.append(tableGame);
    for (let i = 0; i < 100; i++) {
        const ugio = createBoxes(i,tableGame);
        ugio.addEventListener('click',function(){
            ugio.classList.toggle('toogled');
        });
    }
   
});


function createBoxes(content,container){
    const div = document.createElement('div');
    div.classList.add('box','d-flex','justify-content-center','align-items-center');
    div.append(content);
    container.append(div);
    return div;

}