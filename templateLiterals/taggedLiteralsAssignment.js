// Option 2: With the template provided, write a tagged template literal that returns a function that will drop the user's entry into the correct div.

// The HTML provided contains an input box for a cryptocurrency, and 3 radio buttons, one for "want to own", "already own", and "don't want to own." On page load, an axios request is made to crpyocompare.com's api. The data for all coins is stored inside the response. Once the AJAX promise is fulfilled, a template tag is called. A template literal with html tags, all coin data are passed, and the function to be run after. You need to:

// Write the coinTemplate tag that returns a function. 
// The function it returns should accept an individual coin symbol (Example is btc for bitcoin, or eth for ethereum), and a DOM selector. 
// Build out the HTML via a template literal, making sure to include the html tags sent to the tag template.
// Include the Name of the coin, the image, and the algorithm 
// Once the HTML is built, append it to the location that was passed in. 
// If there was no error, run the callback.

// You will need to unblock cors somehow
// If you get the error and are using Chrome, Check out this extension: https://chrome.google.com/webstore/detail/allow-control-allow-origi/nlfbmbojpeacfghkpbjhddihlkkiljbi?utm_source=gmail

function uploadToDB(){
  console.log('Uploading to DB.');
}

axios.get('https://www.cryptocompare.com/api/data/coinlist/')
  .then(function (response) {
    // //////////////////
    const getCoins = ``; //Finish this line. it needs 1. tags 2.ajax data, and 3. callback to uploadToDB()
    // //////////////////

    document.querySelector('#add-button').addEventListener('click', function(){
      let coin = document.querySelector('#coin').value.toUpperCase();
      let radios = document.getElementsByName('interest');
      // we cant map, because this is a nodelist, not an array. Good old for loop.
      let domEl;
      for(let i = 0; i < radios.length; i++){
        if (radios[i].checked){
          domEl = `#${radios[i].id}-content`;
          break;
        }
      };
       getCoins(coin, domEl); //this line is all set. It calls the function returned by your tag
    })
  })
  .catch(function (error) {
      console.log("ERROR!!!")
      console.log(error);
  });


var coinTemplate = function(elems, coinData, callback){
    // pre-parse the tags to make sure they are valid
    // Optionally also check for a valid tags
    return function(coin,location){
      try {
        // //////////////////
        // your stuff here...
        // //////////////////
      }catch(error) {
        console.log(error);
      }
    }
}

