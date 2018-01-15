  function patrat(n) {
    console.log(n*n);
    document.getElementById('solution').innerHTML = n*n;
  }
  
  function jumatate (n) {
    return Number(n / 2);
  }
  
  function procent (p, n) {
    return Number(n * p / 100);
  }
  
  function ariecerc (raza) {
    return Number(raza * raza * Math.PI);
  }
  
  var rezultat = document.getElementById('solution');

  var input = targetInput.getElementsByTagName('input');

  document.getElementById('square-button').addEventListener('click', patrat(Number(input[0])));
  document.getElementById('half-button').addEventListener('click', jumatate(Number(input[0])));
  document.getElementById('percent-button').addEventListener('click', procent(Number(input[0],input[1])));
  document.getElementById('area-button').addEventListener('click', ariecerc(Number(input[0])));