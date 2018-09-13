
for(var I = 0;I < 4; I++)
{
      var number = prompt('what is my favorite number');
      var favoritenumber = 8;
     if(number < favoritenumber)
     {
      alert('to low guess again')
    }
    else if(number > favoritenumber){
        alert ('to high guess again')
    }
    else if(number == favoritenumber){
        alert('You got it!)')
    }
      console.log(number)
}

