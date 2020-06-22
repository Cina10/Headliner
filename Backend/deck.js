function createDeck() //input some JSON file
{
    var deck = new Array();
    var obj = JSON.parse()
}

function shuffle(deck)
{
    for(var i = 0; i<deck.length, i++)
    {
        //chooses a random indec between current index and end of array
        var j = Math.floor(Math.random()*(deck.length - i))+1;

        //swaps cards
        var temp = deck[i];
        deck[i] = deck[j];
        deck[j] = temp;

    }

}