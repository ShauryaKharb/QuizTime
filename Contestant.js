class Contestant{
    //this is your quiz.js as per the pdf
    constructor(){

    }// CONSTRUCTOR

    getState(){
        var gameState = database.ref('gameState');
        gameState.on("value",function(data){
            state = data.val();
        })
    }// UPDATE STATE

    updateState(y){
        database.ref('/').update({gameState : y});
    }// WRITE

    async initialise(){

        if(state===0){
            player = new Player();
            var playerCountRef = await database.ref('PlayerCount').once("value");
            if(playerCountRef.exists()){
                playerCount = playerCountRef.val();
                player.getCount();
            }
            
            questions = new Questions();
            questions.display();
        }

        questions.submitButton.mousePressed(()=>{
            clear();
            background("#fce912");

            questions.hide();

            player.name = questions.nameBox.value();
            
            playerCount+=1;
            player.index = playerCount;
            player.updateCount(playerCount);

            player.answer = questions.valueBox.value();
            player.updateName();

            if(playerCount>4){
                playerCount = 0;
            }

        })

        questions.resetButton.mousePressed(()=>{
            player.reset();
        })

    }// INITIALISE
    
    // end(){
    //     if(player.answer === 5){
    //         game.updateState(10);
    //     }
    // }
    
}