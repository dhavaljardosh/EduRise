const data = [
    'Camel',
    'Cat',
    'Cow',
    'Dog',
    'Donkey',
    'Elephant',
    'Fox',
    'Giraffe',
    'Goat',
    'Hippopotemus',
    'Horse',
    'Hyena',
    'Kangaroo',
    'Leapord',
    'Lion',
    'Monkey',
    'Pig',
    'Rabbit',
    'Rhino',
    'Sheep',
    'Tiger',
    'Wolf',
    'Zebra'
];


window.onload = function () {
    var wins = 0;
    var total_games = 0;
    const IMAGE = document.getElementById("image");
    const SELECTION_ONE = document.getElementById("selection-one");
    const SELECTION_TWO = document.getElementById("selection-two");
    const SELECTION_THREE = document.getElementById("selection-three");
    const MY_SCORE = document.getElementById("my-wins");
    const TOTAL_GAMES = document.getElementById("total-games");
    const PLAY_BLOCK = document.getElementById("play-block");

    function getRandomSelections() {
        let array = [];
        let indices = [];
        while (array.length < 3) {
            var index = Math.floor(Math.random() * data.length);
            if (array.indexOf(data[index]) === -1) {
                array.push(data[index])
                indices.push(index);
            }
        }
        console.log(array);
        return array;
    }

    function getWinnerFromSelection(list) {
        const winner = Math.floor(Math.random() * 3);
        return list[winner];
    }

    function createBoard(){
        var list = getRandomSelections();
        var winner = getWinnerFromSelection(list);

        IMAGE.src = `./images/${winner}.jpeg`;
        SELECTION_ONE.innerHTML= list[0];
        SELECTION_TWO.innerHTML = list[1];
        SELECTION_THREE.innerHTML = list[2];

        return winner;
    }

    function addEventListeners(winner){
        SELECTION_ONE.onclick = function(data) {
            if(winner === data.srcElement.innerHTML){
                MY_SCORE.innerHTML = ++wins;
                TOTAL_GAMES.innerHTML = ++total_games;
                SELECTION_ONE.style.backgroundColor = 'green';
                
            }else{
                TOTAL_GAMES.innerHTML = ++total_games;
                SELECTION_ONE.style.backgroundColor = 'red';
            }
            refresh();
        }
    
        SELECTION_TWO.onclick = function(data) {
            if(winner === data.srcElement.innerHTML){
                MY_SCORE.innerHTML = ++wins;
                TOTAL_GAMES.innerHTML = ++total_games;
                
            }else{
                TOTAL_GAMES.innerHTML = ++total_games;
            }
            refresh();
        }
        SELECTION_THREE.onclick = function(data) {
            if(winner === data.srcElement.innerHTML){
                MY_SCORE.innerHTML = ++wins;
                TOTAL_GAMES.innerHTML = ++total_games;
                
            }else{
                TOTAL_GAMES.innerHTML = ++total_games;
            }
            refresh();
        }
    }

    function refresh(){
        var winner = createBoard();
        addEventListeners(winner)
    }



    function main(){
       refresh();
    } 
   main();
};