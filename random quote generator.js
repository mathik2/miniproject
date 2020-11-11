var g = ["All our dreams can come true, if we have the courage to pursue them",
    "The secret of getting ahead is getting started",
    "Don’t limit yourself. Many people limit themselves to what they think they can do. You can go as far as your mind lets you. What you believe, remember, you can achieve ", "It’s hard to beat a person who never gives up",
    "I wake up every morning and think to myself, ‘how far can I push this company in the next 24 hours.",
    "If people are doubting how far you can go, go so far that you can’t hear them anymore",
    "We need to accept that we won’t always make the right decisions, that we’ll screw up royally sometimes – understanding that failure is not the opposite of success, it’s part of success",
    "Fairy tales are more than true: not because they tell us that dragons exist, but because they tell us that dragons can be beaten",
    "Everything you can imagine is real",
    "Do what you feel in your heart to be right – for you’ll be criticized anyway.",
    "Happiness is not something ready made. It comes from your own actions",
    "Whatever you are, be a good one."
]

var l = g.length;



function on() {




    var t = Math.floor((Math.random() * l));
    document.getElementById("quote").innerHTML = g[t];



}