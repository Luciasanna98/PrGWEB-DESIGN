function Card(img,titolo,prezzo,disponibilita){
this.img=img;
this.titolo=titolo;
this.prezzo=prezzo;
this.disponibilita=disponibilita;

this.esponi = function(){
var immagine= " <div class='container'><img src='" + this.img +"'>"+"<br>"+
          "<h3>"+this.titolo+"</h3>"+"<br>"+
          "<p> Prezzo: " + this.prezzo +"</p>"+"<br>"+
          "<input class='disponibili' value =' "+ this.disponibilita +"'>"+"<br>"+
          "<div><button onclick='"+this.innerHTML+ "'>Acquista</button></div>"+"<br></div>"
          return immagine

}

this.pulsante= function(){
  var numero=0;
 numero =this.disponibilita-1;
  return numero
  
}
}



var galleria = [
          new Card("./img/img1.JPG","Volto di donna a colori","€ 200",5),
          new Card("./img/img2.JPG","Volto di donna in B/W","€ 300",4),
          new Card("./img/img3.JPG","Bambini sorridenti in B/W","€ 250",6),
          new Card("./img/img4.JPG","Bambini seduti in B/W","€ 250",3)

];
 var galleriaImmagini = document.getElementById("galleriaImmagini");
 galleria.forEach(element => {
          galleriaImmagini.innerHTML+= element.esponi() 
 });

 function acquista(){
  for(i in galleria){
  if(galleria[i].disponibilita != 0){
galleria[i].disponibilita.value=galleria[i].pulsante();
console.log(galleria[i].pulsante());
  }else{
    galleria[i].disponibilita.value="-";
  }

}
}

acquista();

