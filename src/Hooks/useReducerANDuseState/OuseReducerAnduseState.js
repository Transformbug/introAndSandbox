import React from 'react';

function OuseReducerAnduseState(props) {
    //1.useState() returna array gdje dobijemo početni state i funckiju za promjeniti state:
    //const [state, setState] = useState(initialState);
    //2.možemo ga zvati više puta i tako podijelitit state u nekoj fn. komponeti
    //3.kada promjenimo state treba sa napraviti sa spread operatoram (...ostatakStariState) jer nema automski spajanja kao u this.setState()
    //4.Možemo postaviti bilo koju vrijednost da bude state, ne mora biti glavni state objekt kao u class based kompontama
    //5. Ako želimo imati najnoviji prijašnji state onda u setNekiState fn. koju useState() returna treba ubaciti funkciju koja će imati svjež lastState i lastProps
    //6. Također možemo ubaciti funkciju incijalno u useState() kao intialState i returnat nešto iz te funckije. Onda će return biti taj default state, a ako
    //je duga kalkulacija biti će obavljena sam jedan put jer će se ta funckija jedino pozvati kada se postvlja početni state.
    //7.VAŽNO: Kada imamo više pozive prema setNekiState fn. koju useState returna unutar neke fn. koja nije async onda će se dogoditi state batching
    //tj. ako recimo imamo dva poziva prema setNekiState() registrirati će se prvi i drugi poziv i onda u jednom re-renderu će se napraviti promjene
    //koje smo naveli u dva setNekiState poziva. Kad su setNekiState pozivi unutar async funkcija biti će re-render za svaki setNekiState poziv. 
    //8.VAŽNO: Ukoliko mijenjamo neki state sa setNekiState fn. i nova vrijednost je ista kao prošla vrijednost(ako su vrijednosti objekti gleda se jednostvna
    //reference equality usporedba) onda se neće dogoditi re-render ili će se djelomično dogoditi pa će se samo parent komponeta re-rendati jedan put
    //i neće više ako opet promjenimo state sa istom vrijednosti dok se ostale descendents komponenti neće aktivirati niti taj jedan put.
    // Vidi Object comaprison sintezu,Counter komponetu tamo i video lekciju za primjer i obješnjenje. To je ovo:
    //Bailing out of a state update:
    //If you update a State Hook to the same value as the current state, React will bail out without rendering the children or firing effects.
    // (React uses the Object.is comparison algorithm.)
    //Note that React may still need to render that specific component again before bailing out. That shouldn’t be a concern because React won’t unnecessarily 
    //go “deeper” into the tree. If you’re doing expensive calculations while rendering, you can optimize them with useMemo.
    //9. React guarantees that setState function identity is stable and won’t change on re-renders. 
    //This is why it’s safe to omit from the useEffect or useCallback dependency list.

   // const [state, dispatch] = useReducer(reducerFn, initialArg, init);
   //Note: ne razumijem cijelu ovu stvar sa init fn. u trećem argumentu. Ali to skoro nitko ne koristi.
   //useReducer je alterntaiva useState, preporučuje se kada imamo jako kompleksan i dubok state.
   //Isto kao useState ima stabilanu functiona identitty pa mi nije jasno zašto su to naglasili u React documtaion prilikom opisa useReducera.
   //VAŽNO: kad se re-renda komponeta, neće se zvati ponovno useReducer.To je očito, ali na početnku lekcije 497. Max to potvrdi.
   //useReducer se korisiti na način da u prvi argument ubacimo neku reducer fn. koja je obično zapisana u globalnom scope,izvan komponete kao u našem slučaju.U drugi argumnet
   //ubacimo inicijalni state. useReducer() spremimo tako da korismo destructuring i onda prvi varijabala u array bude to incijalno stanje, druga pute dispatch fn. koja će pozvati
   //reducder fn. gdje će se dogoditi promjena stanja.U reducer fn.(ingredientReducer npr) prvi parametar će imati automatski pristup trenutom state za taj disptch() koji je pozvao reducer. 
   //Naravno, ono što ubacimo kao argumnet tj. payload u dispatch() će biti vrijednost action parametar tj. drugoga parametara u reducer fn.
   //JAKO VAŽNO:  svaki put kad reducer returna nakon disptacha() dogditi će se re-render jer smo updajtali state
   //Kao što vidimo možemo staviti array kao početni state, ne mora biti objekt.
   //VAŽNO: useReducer također imam state batching kada fn. nije async i ima "bailout" ako je isto stanje kao i prošlo.Vidi gori useState točke pod broj 8 i 9.
   //Note:Vidi ovdje unutar customHooks foldera file useMojaHook.js gdje iako je riječ o customHook vidimo tipičnu upotrebu useReducra.
   //VAŽNO: kao što možemo vidjeti kada koristimo useGlobalCustomHook  i AddPeron komponnetu u customHook folderu kliknemo na "add" i kada imamo dva dispatch poziva unutar 
   //loopa gdje je svaki disptach pripada drugačijoj komponeti može se dogoditi neobična siutacija gdje se odmah dogodi da se reducer fn. aktivira nakon prvog disptcah unutar loopa
   //i onda drugi put se reducer fn. aktivirat tek kada se samo customHookk tj. useGlaobalCustomHook gdje je useReducer počeme re-rendati.
   //To je mala neobična situacija, ali na kraju se code ponaša po očekivanju.




    //   
      
    return (
        <div>
          
            Ovo je useReducer i useState. Samo su komentare ovdje treba pročitati.
        </div>
    );
}

export default OuseReducerAnduseState;