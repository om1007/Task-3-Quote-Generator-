 let Quote = [{"q":"Think positive,surround yourself by winners",
 "a":"Arnold Schwarzenegger"
 },
 {"q":"The single most powerful asset we all have is our mind.","a":"Robert Kiyosaki"},
 {"q":"Try all things, hold fast that which is good.","a":"John Locke"},
 {"q":"Don't Let Yesterday Take Up Too Much Of Today.","a":"Will Rogers"},
 {"q":"You are not stuck where you are unless you decide to be.  ","a":"Wayne Dyer"},
 {"q":"Live in the sunshine, swim the sea, drink the wild air.","a":"Ralph Waldo Emerson"}];

 let btn = document.getElementById("btn")
 let output = document.getElementById("output")
 let title = document.getElementById("title")

 btn.addEventListener('click',function(){
    let randomQuote = Quote[Math.floor(Math.random()*Quote.length)]
    output.innerHTML = randomQuote.q
    title.innerHTML = randomQuote.a
 })