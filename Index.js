      // Orden vi valt!
      const words = [
        "javascript",
        "stockholm",
        "student",
        "programmering",
        "afterwork",
      ];

      // Math för att göra ordet random/slumpmässigt. Jag har valt att multiplicera det med variabeln words längd, men som i det här fallet så är det ju 5, vilket kravspecen specificerade. Hade det varit ett levande projekt och en vill lägga till flera ord så är det lika bra att ha med words.length från början tycker jag.
      let word = words[Math.floor(Math.random() * words.length)];

      // SvarsArray, i for-loopen specifierar vi att ordets bokstäver ska ersättas med understreck sålänge som det finns bokstäver kvar. Det plockas bort understreck som ersätts med rätt bokstav längre ner i den andra for-loopen.
      let answerArray = [];
      for (let i = 0; i < word.length; i++) {
        answerArray[i] = "_";
      }
      // Vettig variabel, aight? kvarvarande bokstäver = ordets längd.
      let remainingLetters = word.length;

      // Variabeln för hur många försök du har. Detta räknas ner senare i koden!
      let attempt = 5;
      
      //   Variabeln correctGuess används längre ner i vår if-sats inuti en for-loop. Den ändras då till true om spelaren faktiskt gissar rätt för att sen komma tillbaka till false inför nästa gissning.
      let correctGuess = false;      
      
      
      
      
      // Nu börjar spelandet!
      
      
      
      
      while (remainingLetters > 0) {
        // Här kommer vi att få informationen som spelaren matar in, samtidigt så visar vi hur många försök denne har kvar. Den kommer att köras så länge som variabeln remainingLetters är större än 0. Med .toLowerCase() så spelar det ingen roll ifall spelaren matar in versaler eller gemener, alla bokstäver omvandlas till gemener som alla ord i words-arrayen är skriven i.
        guess = prompt(`${answerArray.join(" ")} Liv kvar: ${attempt}. `).toLowerCase();

        if (guess === null) {
        // Om spelaren trycker cancel så stängs loopen.
        alert(`You've canceled the game. The correct word was ${word}`)
        break;
        }

        // Uppdatering av spelet med for-loop och if-else-statements. If-körs endast om gissad bokstav faktiskt finns med, annars fortsätter correctGuess att vara false, och det drar av ett liv lite längre ner.
        for (let x = 0; x < word.length; x++) {
          if (word[x] === guess) {
              answerArray[x] = guess;
              remainingLetters--;
              correctGuess = true;
          }
        //   else{
        //     correctGuess = false;
        //   }
        }
        // Den här console.loggen har jag bara använt för att dubbelkolla ifall gissningarna har loggats som true eller false.
        // console.log(correctGuess);

        // Om gissningen är fel så dras ett liv av i det här skedet.
        if (!correctGuess){
            attempt--;
        }

        correctGuess = false;

        // Har spelaren gissat fel 5ggr så kommer det här meddelandet upp och spelet avslutas.
        if (attempt === 0){
            alert(`You have lost! The correct word was ${word}!`)
            break;
        }

        // Om de kvarvarande bokstäverna är likamed 0 så har en ju gissat rätt ord! Då dyker det här meddelandet upp. Yay!
        if (remainingLetters === 0){
            alert(`You have won, congratulations! The word was ${word}!`);
        }


      }

      // Slutet av spelets loop.