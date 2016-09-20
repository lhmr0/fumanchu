var rock = 0;
var paper = 1;
var scissors = 2;
var spock = 3;
var lizard = 4;

var opciones = ["Rock", "Paper", "Scissors", "Spock", "Lizard"];

var opcionUser;
var opcionMachine = Math.floor( Math.random() * (4 - 0 + 1) + 0 );
do{
opcionUser = prompt("Escoge la opcion \nRock: 0\nPaper: 1\nScissors: 2 \nSpock: 3 \nLizard: 4", 0);
}while(opcionUser>4)
  
 if(opciones[opcionUser]!=null) {
alert("usted escogió " + opciones[opcionUser] + "\njs escogió " + opciones[opcionMachine]);
  
if(opcionUser == rock)
{
    if(opcionMachine == rock)
    {
        alert("Empate");
    }
    else if(opcionMachine == paper)
    {
        alert("Perdiste : Paper covers rock ");
    }
    else if(opcionMachine == scissors)
    {
        alert("Ganaste : Rock crushes scissors");
    }
     else if(opcionMachine == spock)
    {
        alert("Perdiste : Spock vaporizes rock");
    }
     else if(opcionMachine == lizard)
    {
        alert("Ganaste : Rock crushes lizard");
    }
}
else if(opcionUser == paper)
{
    if(opcionMachine == rock)
    {
       alert("Ganaste : paper covers rock ");
    }
    else if(opcionMachine == paper)
    {
        alert("Empate");
    }
    else if(opcionMachine == scissors)
    {
        alert("Perdiste : scissors cuts paper");
    }
     else if(opcionMachine == spock)
    {
        alert("Ganaste : paper disproves spock");
    }
     else if(opcionMachine == lizard)
    {
        alert("Perdiste : lizard eats paper");
    }
}
else if(opcionUser == scissors)
{
    if(opcionMachine == rock)
    {
       alert("Perdiste : rock crushes scissors");
    }
    else if(opcionMachine == paper)
    {
        alert("Ganaste : scissors cuts paper");
    }
    else if(opcionMachine == scissors)
    {
        alert("Empate");
    }
     else if(opcionMachine == spock)
    {
        alert("Perdiste : spock smashes scissors");
    }
     else if(opcionMachine == lizard)
    {
        alert("Ganaste : scissors decapitates lizard");
    }
}
else if(opcionUser == spock)
{
    if(opcionMachine == rock)
    {
       alert("Ganaste : spock vaporizes rock");
    }
    else if(opcionMachine == paper)
    {
        alert("Perdiste : paper disproves spock");
    }
    else if(opcionMachine == scissors)
    {
        alert("Ganaste : spock smashes scissors");
    }
     else if(opcionMachine == spock)
    {
        alert("Empate");
    }
     else if(opcionMachine == lizard)
    {
        alert("Perdiste : lizard poisons spock");
    }
}
else  if(opcionUser == lizard)
{
    if(opcionMachine == rock)
    {
       alert("Perdiste : rock crushes lizard");
    }
    else if(opcionMachine == paper)
    {
        alert("Ganaste : lizard eats paper");
    }
    else if(opcionMachine == scissors)
    {
        alert("Perdiste : scissors decapitates lizard");
    }
     else if(opcionMachine == spock)
    {
        alert("Ganaste : lizard poisons spock");
    }
     else if(opcionMachine == lizard)
    {
        alert("Empate");
    }
}}
else
  {
    alert("ingrese un numero y no cierre la ventana");
  }
