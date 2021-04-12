import React,{useState,useRef,Component,useEffect} from 'react';

//VAŽNO: ovdje na ovom primjeru možemo vidjeti kako korismo ref objekt da dobijemo vrijednost varijable count koja je za najnoviji re-render.
//VAŽNO: možemo koristit ref objekt i na drugačiji način, da dobijemo vrijednost neke varijable koja je bila u prošlom re-renderu na način
//da postavimo neku vrijednost  unutar useEffecta na .current ref objekta i onda očitamo tu vrijednost unutar tijela same funckonlnae komponete.
//Suprotou stvar radito ovdje kada želimo najnoviju vrijednost.


//VAŽNO:Klikni tri puta na click me, nakon toga brzo klikni na show alert i onda klikni brzo još dva put na counter.
// Pitanje je hoće li alert pokazti broj 5 ili 3. Pokazati će broj tri u ovoj mojoj verzij sa function Counter(vidi što bude doli kada stavio class based komp) u slučaju
//ako ne koristmo "ref"(countRef.current.count) tj. ako se samo referiamo na count.count
//koristim objekt, ne primtive kao u originalnoj verziji za count.
//Ovo je primjer iz: https://overreacted.io/a-complete-guide-to-useeffect/
//Mislio sam ja napraviti svoju verzija ovoga, ali u običnom vanilla js, ali stvar je da bi u običnom vanilla js svaki put kad bi pozvali ovaj useState kad bi se ponovno
//re-rednala funckija Counter bi dobili taj orignal što smo stavili kao default. Pa izravna usproedba nema smisla.

//React hooks, varijable u funckijama koje se referijau na scope glavna komponted tj. glavne funckije će se referiati na stanje te funckije u trenutku kada je
 //unutarnja funckija pozvana. 
function CounterRefs() {
    const [count, setCount] = useState({count:0});
    //VAŽNO: ovoj count što ubacujemo je opcionalni "intialArgument".Nije nam potreban kad ionako odmah liniju ispod psotvljano svježi count, ali neka stoji...
    const countRef = useRef(count);
    //VAŽNO:Da ne editramo ovako svaki put ovaj current uvijek bi ovaj ref imao originalu vrijednost.
    countRef.current=count
  
    function handleAlertClick() {
      setTimeout(() => {
        alert('You clicked on: ' + count.count);
        
        //Ovo je ref u koji nam služi da dobijmo najnovije stanje count-a u trentuka kada se izvrši ovaj callback unutar setTimouta-s 
        // console.log(countRef)
        // alert('You clicked on: ' + countRef.current.count)
      }, 3000);
    }
  
    return (
      <div>
          Counter function verzija
        <p>You clicked {count.count} times</p>
        <button onClick={() => setCount({count:count.count + 1})}>
          Click me
        </button>
        <button onClick={handleAlertClick}>
          Show alert
        </button>
      </div>
    );
  }

  export default CounterRefs