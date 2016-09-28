var quotes = [{
  "content": "Don't count the days; make the days dount",
  "author": "Mohamad Ali"
}, {
  "content": "Freedom is not worth having if it does not include the freesom to make mistakes",
  "author": "Mahatma Gandhi"
}, {
  "content": "Love as if your were to die tomorrow. Learn as if your were to live forever",
  "author": "Mahatma Gandhi"
}, {
  "content": "A man's ethical behavior should be based effectually on sympathy, education, and social ties; no religious basis is necessary. Man would indeeded be in a poor way if he had to be restrained by fear of punishment and hope of reward after death.",
  "author": "Albert Einstein"
}, {
  "content": "Wise men talk because they have something to say; fools, because they have to say something.",
  "author": "Plato"
}, {
  "content": "Explaining a joke is like dissecting a frog: you understand it better, but the frog dies in the process. ",
  "author": "Mark Twain"
}, {
  "content": "It's better to give than receive. Especially advice",
  "author": "Mark Twain"
}, {
  "content": "Be a yardstick of quality. Some people aren't used to an environment where excellence is expected. ",
  "author": "Steve Jobs"
}, {
  "content": "Courage is the first of human qualities because it is the quality which guarantees the others. ",
  "author": "Aristotle"
}, {
  "content": "Courage is the first of human qualities because it is the quality which guarantees the others. ",
  "author": "Ernest Hemingway"
}, {
  "content": "Education is the best friend. An educated person is respected everywhere. Education beats the beauty and the youth.",
  "author": "Chanakya"
}, {
  "content": "A person should not be too honest. Straight trees are cut first and honest people are screwed first. ",
  "author": "Chanakya"
}, {
  "content": "Even if a snake is not poisonous, it should pretend to be venomous. ",
  "author": "Chanakya"
}, {
  "content": "It is dangerous to be sincere unless you are also stupid. ",
  "author": "George Bernard Shaw"
}, {
  "content": "I’ve never played for a draw in my life.",
  "author": "Sir Alex Ferguson"
}, {
  "content": "Some people tell me that we professional players are soccer slaves. Well, if this is slavery, give me a life sentence.",
  "author": "Sir Bobby Charlton"
}, {
  "content": "What you do speaks so loudly that I cannot hear what you say. ",
  "author": "Ralph Waldo Emerson"
}, {
  "content": "You must be the change you wish to see in the world.",
  "author": "Mahatma Gandhi"
}, ];
var usedNumbers = [];
$(document).ready(function() {
  /*$.ajaxSetup({cache: false//needed in order to update quotes*/
  var randomNumber = Math.floor(Math.random() * quotes.length);
  $(".quote").html("&ldquo;" + quotes[randomNumber].content + "&rdquo;");
  $(".author").html("- " + quotes[randomNumber].author);
  $(".tweet").attr("href", "https://twitter.com/intent/tweet?text=" + '"' + quotes[randomNumber].content + '"' + " – " + quotes[randomNumber].author);

  $(document).on("click", "button", function() {

    var randomNumber = Math.floor(Math.random() * quotes.length);
    $(".quote").html("&ldquo;" + quotes[randomNumber].content + "&rdquo;");
    $(".author").html("— " + quotes[randomNumber].author);
    $(".container").addClass("fadein")
    setTimeout(function() {
      $(".container").removeClass("fadein");
    }, 300);
    $(".tweet").attr("href", "https://twitter.com/intent/tweet?text=" + '"' + quotes[randomNumber].content + '"' + " – " + quotes[randomNumber].author);
  });
});