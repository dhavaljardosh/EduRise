window.onload = function () {
    const myScoreDisplay = document.getElementById('my-score');
    const computerScoreDisplay = document.getElementById('computer-score');
    const Rock = document.getElementById("rock");
    const Paper = document.getElementById("paper");
    const Scissor = document.getElementById("scissor");
    const myChoiceImage = document.getElementById("myChoice-Image");
    var computerChoiceImage = document.getElementById("opponent-Image");

    var myScore = 1;
    var computerScore = 1;

    /**
     * Select Computer's Choice randomly
     * Pick between Rock, Paper or Scissor
     */
    function computerChoice() {
        var choice = Math.floor(Math.random() * 3)
        switch (choice) {
            case 0:
                return {selection: 'rock', url: './images/rock.png'};
            case 1:
                return {selection: 'paper', url: './images/paper.png'};
            case 2:
                return {selection: 'scissor', url: './images/scissor.png'};
        }
    }

    /**
     * This function decides the score as to who won and who lost
     */
    function game(myChoice) {
        resetHighlight();
        myChoiceImage.src = myChoice.url;

        let opponentChoice = computerChoice();
        computerChoiceImage.src = opponentChoice.url;

        if (myChoice.selection !== opponentChoice.selection) {
            selectWinner(myChoice.selection, opponentChoice.selection)
        }
    }

    function resetHighlight() {
        Rock.style["boxShadow"] = `0px 0px 5px gray`;
        Paper.style["boxShadow"] = `0px 0px 5px gray`;
        Scissor.style["boxShadow"] = `0px 0px 5px gray`;
    }

    /**
     * This function will highlight user's selection
     * Green - Win
     * Red - Lose
     * @param {*} myChoice
     * @param {*} color
     */
    function highlightUserSelection(myChoice, color) {
        if (myChoice === 'rock') {
            Rock.style.boxShadow = `0px 0px 5px 5px ${color}`;
        } else if (myChoice === 'paper') {
            Paper.style.boxShadow = `0px 0px 5px 5px ${color}`
        } else if (myChoice === 'scissor') {
            Scissor.style.boxShadow = `0px 0px 5px 5px ${color}`
        }
    }

    /**
     *
     * @param {*} myChoice  This is My Choice ID
     * @param {*} opponentChoice  This is Opponent Choice ID
     */
    function selectWinner(myChoice, opponentChoice) {
        let joinedContent = myChoice + '-' + opponentChoice;
        let userWin = ['paper-rock', 'scissor-paper', 'rock-scissor'];
        // let computerWin = ['rock-paper','paper-scissor','scissor-rock'];

        if (userWin.includes(joinedContent)) {
            highlightUserSelection(myChoice, 'green')
            myScoreDisplay.innerHTML = myScore++;
        } else {
            highlightUserSelection(myChoice, 'red')
            computerScoreDisplay.innerHTML = computerScore++;
        }

    }

    /**
     * Main funtion which triggers everytime we click on
     * the icons.
     */
    // function main() {
        Rock
            .addEventListener('click', function () {
                let myChoice = {
                    selection: 'rock',
                    url: './images/rock.png'
                }
                game(myChoice)
            })

        Paper.addEventListener('click', function () {
            let myChoice = {
                selection: 'paper',
                url: './images/paper.png'
            }
            game(myChoice)
        })

        Scissor.addEventListener('click', function () {
            let myChoice = {
                selection: 'scissor',
                url: './images/scissor.png'
            }
            game(myChoice)
        })
    // }
    // main();
}
