//lisätään napin kuuntelijafunktio
document.querySelector("button").addEventListener("click", addNote);
//haetaan dokumentin elementit
let body = document.querySelector("body");
let checkbox = document.getElementById("important");


//luodaan funktio addNote
function addNote(){
    //luodaan otsikko johon tulee nimi-kentästä nimi ja lisäksi aikaleima
    let h3 = document.createElement("h3");
    //h3.textContent = user.value + " " + new Date().toLocaleString();
    //itse note lisätään tekstinä p-elementtiin textareasta
    let p = document.createElement("p");
    let o = document.createElement("o");
    let today = new Date().toLocaleDateString()
    
    p.textContent = viesti.value; 
    o.textContent = toinenviesti.value;
   

    //onko checkbox valittu -> lisätään important muotoilu
    if(checkbox.checked){
        h3.classList.add("important");
        p.classList.add("important");
        o.classList.add("important");
    }

    //kaikki elementit bodyn sisälle
    body.append(h3,p,o,today,document.createElement("hr"));

}