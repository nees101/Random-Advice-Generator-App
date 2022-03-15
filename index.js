newAdvice();

function newAdvice() {
  const request = new XMLHttpRequest();
  request.open('GET', 'https://api.adviceslip.com/advice', true);
  request.send();
  request.onload = function() {
    const data = JSON.parse(this.response); //Accessing JSON data

    if (request.status >= 200 && request.status < 400) {
      $(".card-title").html("ADVICE # " + data.slip.id);
      $(".advice").html(data.slip.advice);
    } else {
      console.log('error');
    }
  }

}
