let deck = 
{
    cardArray:[],
    load: function () 
    {
        let rankCounter = 1;
        let suitCounter = 1;

        for (suitCounter = 1; suitCounter <5; suitCounter++) 
        {
            for (rankCounter = 1; rankCounter < 14; rankCounter++)
            {
                this.cardArray.push(new card(suitCounter, rankCounter));
            }
        }
    }
}
