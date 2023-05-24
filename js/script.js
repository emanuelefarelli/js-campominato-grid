
const button = document.querySelector('button');
const myMain = document.querySelector('main');
let newGame = false;

button.addEventListener('click',function(){

    myMain.replaceChildren();
    const tableGame = document.createElement('div');
    tableGame.classList.add('table-game');
    myMain.append(tableGame);

    for (let i = 1; i < 101; i++) {
        const box = createBoxes(i,tableGame);

        box.addEventListener('click',function(){
            box.classList.toggle('toogled');
            console.log(i);
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