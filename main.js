

var quotes2 = [
  'NUL STOP, Morning 4 tak nikalna padega return 8 tak aa jayenge',
  "Rihegaon Dam",
  'Buttery Dabeli, RK Burger & Dabeli Point Nigdi',
  "L'Apicio Global Kitchen & Bar, Balewadi High Street",
  "Balaji Chinese, Aurora Towers MG road",
  "CAMP Buurger - VEG",
  "KINI Korean Food, Koregaon Park",
  "Meltish - The Cheese Cafe, Aundh",
  "The Community  Table, Hinjawadi High Street",  
  "Nativ, Baner",
  "Sponge DOSA, FC Road",
  "Batata Bitata, Baner",
  "Coffee & Croissant, Baner",
  "Irani Cafe, Chai with Bun Muska",
  "Cafe CO2"
];

var quotes3 = [
  'Netflix and Chill',
  "Watch Anime",
  "Cuddle and Rest",
  "Cuddle and Instagram Reels",
  "Cuddle and Cuddle",
  "Clean House",
  "Cook a meal together",  
  "Wine Date",
  "Cardio Workout",
  "Play video games",
  "Shower Together",
  "Head massage eachother",
  "Watch Horror Movie"
];



$(document).ready(function() {
  // handle New Quote button click
  $("#getQuote2").on("click", function(){
    // show quote container
    $( "div#quote2:hidden" ).show();
    
    // get random message text
    var random2 = Math.floor(Math.random() * quotes2.length);
    var quote2 = quotes2[random2];
    var msg2 = quote2;
    
    // fill quote element text and author
    $("#quote2 p.text").html(msg2);   
  });
});

$(document).ready(function() {
  // handle New Quote button click
  $("#getQuote3").on("click", function(){
    // show quote container
    $( "div#quote3:hidden" ).show();
    
    // get random message text
    var random3 = Math.floor(Math.random() * quotes2.length);
    var quote3 = quotes3[random3];
    var msg3 = quote3;
    
    // fill quote element text and author
    $("#quote3 p.text").html(msg3);   
  });
});
     