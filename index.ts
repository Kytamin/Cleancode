let beginPoint=0
let firstPoint=1
let secondPoint=2
let thirtPoint=3

export class TennisGame {
    player1name:string
    player2name:string
    player1Score:number
    player2Score:number


    score: string = '';

    constructor(player1name: string, player2name: string,player1Score:number,player2Score:number) {
        this.player1name = player1name;
        this.player2name = player2name;
        this.player1Score=player1Score
        this.player2Score=player2Score
    }

    showScore() {
        if (this.player1Score === this.player2Score) {
            this.setScoreWhenTied(this.player1Score);
        } else if (this.player1Score >= 4 || this.player2Score >= 4) {
            this.setScoreWhenAdvantageOrWin(this.player1Score, this.player2Score);
        } else {
            this.setScoreWhenNotTied(this.player1Score, this.player2Score);
        }
    }

    setScoreWhenTied(player1Score: number) {
        switch (player1Score) {
            case beginPoint:
                this.score = "Love-All";
                break;
            case firstPoint:
                this.score = "Fifteen-All";
                break;
            case secondPoint:
                this.score = "Thirty-All";
                break;
            case thirtPoint:
                this.score = "Forty-All";
                break;
            default:
                this.score = "Deuce";
                break;
        }
    }

    setScoreWhenAdvantageOrWin(player1Score: number, player2Score: number) {
        const minusResult = player1Score - player2Score;
        if (minusResult === 1) {
            this.score = `Advantage ${this.player1name}`;
        } else if (minusResult === -1) {
            this.score = `Advantage ${this.player2name}`;
        } else if (minusResult >= 2) {
            this.score = `Win for ${this.player1name}`;
        } else {
            this.score = `Win for ${this.player2name}`;
        }
    }

    setScoreWhenNotTied(player1Score: number, player2Score: number) {
        let tempScore = 0;
        for (let i = 1; i < 3; i++) {
            if (i === 1) {
                tempScore = player1Score;
            } else {
                this.score += "-";
                tempScore = player2Score;
            }
            switch (tempScore) {
                case beginPoint:
                    this.score += "Love";
                    break;
                case firstPoint:
                    this.score += "Fifteen";
                    break;
                case secondPoint:
                    this.score += "Thirty";
                    break;
                case thirtPoint:
                    this.score += "Forty";
                    break;
            }
        }
    }
}
let game = new TennisGame("cat","dog",10,8)
game.showScore()
console.log(game.score)