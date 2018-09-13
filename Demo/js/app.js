'use strict';
function aboutMe(){
      var  question = prompt('Is my favorite game fortnite');
      if(question.toUpperCase() === 'Y' || question.toUpperCase()==='YES') 
      {
            alert('Hell no! You are wrong.');
            console.log('User answer to questions' + question + 'wrong');
      }

      else if(question.toUpperCase() === 'N' || question.toUpperCase()==='NO')
      {
            alert('Yes! PUBG all the way!');
            console.log('User answer to question' + question + 'correct');
      }


      var question1 = prompt('Do I love the mountians?');
      if(question1.toUpperCase() === 'Y' || question1.toUpperCase()==='YES') {
            alert('Yes!');
            console.log(question1);
      }

      else if(question1.toUpperCase() === 'N' || question1.toUpperCase() === 'NO') 
      {
            alert(question1  + 'Of course they are what is wrong with you?!');
            console.log(question1);
      }

      var question2 = prompt('Do i drink milk?');
      if(question2.toUpperCase() === 'Y' || question2.toUpperCase()==='YES') 
      {
            alert('No!');
            console.log(question2);
      }

      else if(question2.toUpperCase() === 'N' || question2.toUpperCase() === 'NO') 
      {
            console.log(question2);
            alert('Of course I do not I am not a sicko!');
      }


      var question3 = prompt('Do I like board games');
      if(question3.toUpperCase() === 'Y' || question3.toUpperCase()==='YES') 
      {
            alert('Yes, why would\'t I?!');
            console.log(question3);
      }

      else if(question3.toUpperCase() === 'N' || question3.toUpperCase()==='NO') 
      {
            alert('Well you are wrong');
            console.log(question3);
      }   


      var question4 = prompt('do i like anime');
      if(question4.toUpperCase()=== 'Y' || question4.toUpperCase()==='YES') 
      {
            alert('Umm, duh!');
            console.log(question4);
      }

      else if(question4.toUpperCase() === 'N' || question4.toUpperCase() ==='NO') 
      {
            alert('Oh my!');
            console.log(question4);
      }   

}

function guessNumber () {
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
            alert('You got it!')
            var I = 10;
      }
            console.log(number)
      }
}
function myGames(){
      for(var I = 0;I < 6; I++)
      {
            var guess = prompt('what videogames do i play');
            var myarray = ['pubg','halo','gangbeasts','cod'];
      switch(guess)
      {
            case myarray[0]: 
            alert('yes that is one')
            var I = 10;
            break;
            case myarray[1]: 
            alert('yes that is one of my favorites')
            var I = 10;
            break;
            case myarray[2]: 
            alert('yes it is great')
            var I = 10;
            break;
            case myarray[3]: 
            alert('oooh yeah')
            var I = 10;
            break;
      }
      }
}

aboutMe();
guessNumber();
myGames();

alert('all the answers were pubg, halo, gangbeasts, and cod');
console.log(guess)
