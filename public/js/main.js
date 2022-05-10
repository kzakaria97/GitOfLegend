let enigme1;
let enigme2;
let enigme3;
class Boss {
    constructor(nom,vie,attaque){
        this.nom = nom;
        this.vie = vie;
        this.attaque = attaque;
        this.enigme=()=>{
            if(Boss.vie<=this.vie*0.2){
                 enigme1 = prompt("Une fois que l'on me prononce, je n'existe plus. Qui suis-je ?");
                 enigme2 = prompt("Je suis d'eau,je suis d'air,et je suis d'électricité. Qui suis-je ?");
                 enigme3 = prompt("Quel est le meilleur club de football au monde ?");


            }
        }
    }
}
let Sauron = new Boss("Sauron",150,150);
let Chronos = new Boss("Chronos",250,200);
let Lilith = new Boss("lilith",400,280);

class Heros {
    constructor(nom,pv,pa,pr){
        this.nom = nom;
        this.pv = pv;
        this.pa = pa;
        this.pr = pr;
        this.defense=()=>{

        }
        this.attaque=()=>{

        }
    }
}

class Guerrier extends Heros {
    constructor(rage){
        this.rage = rage;
        this.bonusAttaque=()=>{

        }
    }
}
class Mage extends Heros {
    constructor(mana){
        this.mana = mana;
        this.defense=()=>{

        }
        this.attaque=()=>{

        }
    }
}
class Archer extends Heros {
    constructor(nbrFleches){
        this.nbrFleches = nbrFleches;
        this.defense=()=>{

        }
        this.attaque=()=>{
            
        }

    }
}