document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("next").style.visibility = "hidden";

    let pArray = [];
    let cpuArray = [];

    document.getElementById("deal").addEventListener("click", function()
    {
        deck.load();

        let i;
        let random;

        for(i = 0; i < 26; i++)
        {
            random = Math.floor(Math.random() * (52));
            while (deck.cardArray[random].inuse === true)
            {
                random = Math.floor(Math.random() * (52));
            }
            pArray[i] = deck.cardArray[random];
            deck.cardArray[random].inuse = true;

            random = Math.floor(Math.random() * (52));
            while (deck.cardArray[random].inuse === true)
            {
                random = Math.floor(Math.random() * (52));
            }
            cpuArray[i] = deck.cardArray[random];
            deck.cardArray[random].inuse = true;

        }

        console.log(pArray);
        console.log("-------------");
        console.log(cpuArray);

        document.getElementById("deal").style.visibility = "hidden";
        document.getElementById("next").style.visibility = "visible"

    });

    document.getElementById("next").addEventListener("click", function()
    {
        let turnNumber = Number(document.getElementById("turnNumber").innerText);

        

        let pScore = Number(document.getElementById("pScore").innerText);
        let cpuScore = Number(document.getElementById("cpuScore").innerText);
        
        document.getElementById("pCard").innerText = "Rank;" + pArray [turnNumber].rank + " Suit; " + pArray[turnNumber].suit
        document.getElementById("cpuCard").innerText =  "Rank;" + cpuArray [turnNumber].rank + " Suit; " + cpuArray[turnNumber].suit

        if (pArray[turnNumber].rank > cpuArray[turnNumber].rank)
        {
            pScore++;
        }
        if (pArray[turnNumber].rank < cpuArray[turnNumber].rank)
        {
            cpuScore++;
        }
        
        document.getElementById("pScore").innerText = pScore;
        document.getElementById("cpuScore").innerText = cpuScore;

        if (++turnNumber > 52){

            console.log("here");

            if (pScore > cpuScore){
                document.getElementById("message").innerText = "You !";
                console.log("Win");
            }
            if (pScore < cpuScore){
                document.getElementById("message").innerText = "The Cpu :(";
                console.log("Lose");
            }
            if (pScore === cpuScore){
                document.getElementById("message").innerText = "Tie";
            }
            document.getElementById("next").style.visibility = "hidden";
        }
        document.getElementById("turnNumber").innerText = turnNumber;

    });
});
