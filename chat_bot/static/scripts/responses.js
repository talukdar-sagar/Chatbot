function getBotResponse(input){
    if(input=="rock" || input=="paper" || input=="scissors"){
    // rock paper scissors
    var b=Math.floor(Math.random() * 3);
    if(b==0){
        return "paper";
    }else if(b==1){
        return "scissors";
    }else if(b==2){
        return "rock";
    }
    }else if(input=="hello" || input=="Hello"){
        return "Hello there!";
    }else if(input=="goodbye"){
        return "Talk to you later";
    }else{
        return "Try typing something else ";
    }

}