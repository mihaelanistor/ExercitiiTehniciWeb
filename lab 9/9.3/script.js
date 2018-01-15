var filme = [
    {
      "titlu": "The Notebook",
      "durata": 123,
      "actori": [
        "Gena Rowlands",
        "James Garner",
        "Rachel McAdams"
      ],
      "vazut": true
    },
    
    {
      "titlu": "Fight Club",
      "durata": 139,
      "actori": [
        "Brad Pitt",
        " Edward Norton",
        " Meat Loaf"
      ],
      "vazut": false
    },
    
    {
      "titlu": "Spirited Away",
      "durata": 109,
      "actori": [
        "Daveigh Chase",
        "Suzanne Pleshette",
        "Miyu Irino"
      ],
      "vazut": true
    }
  ];
  
  var lista = document.body.appendChild(document.createElement("ul"));
  for (var f of filme) {
    var p = document.createElement("p");
    p.innerHTML = f.titlu;
   
    lista.appendChild(p);
  }