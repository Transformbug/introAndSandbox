import React from 'react';
import AddPerson from "./AddPerson.js"
import Persons from "./Persons.js"




//VAŽNO: ovdje se testira obična customHook(useMojaHook.js) i "globalni custom hook"(useGlobalCustomHook). Pazi što treba biti uključeno i isključeno.
function CustomHooksOtac() {
  console.log("ovo je CustomHooksOtac.js")
  //VAŽNO: koje zaključke možemo izvući iz ponašanja ovdje:
  //Ovo je situacija gdje imamo neki custom hook koji koristi useReducer.
  //Kada se pokrene incijalno aplikacija kao uvijek sve će se komponente prikazti tj. rendati i ako stavimo console.log neke kompoente iz useNekaCustomHook onda će se činiti
  //da se customHook rendat prije svake komponete. Zapravo samo je stvar bila u tome što je c.log za neku komponteu bio iz poziva prema useNekaCustomHook. 
  //Znači useNekaCustomHook će se u incijalom redneru uvijek zvati jer je to obična funkcija koju zovemo unutar neke komponente.
  //Također kada promjenimo lokalno state neke komponente sa useState poput situacija sa inputima unutar AddPerson.js onda ćemo primjeti kako će se i customHook re-rendati
  //Opet to je zato jer je to obična funckija i svaki put kada se re-renda neka kompontea koja koristi customHookk i customHook će se re-rendati jer je to obični 
  //function call.Redoslijed hoće li funkcionala kompenta koja korsitit custom hook ili sama custom hook biti prije u c.logu ovisi jer c.log iza fn.call prema custom hook.
  //VAŽNO:Kada iz neke komponente pozovemo neki disptach koji nekaCustomHook() nam vrati iz svoga returna onda će se ta kompontea re-rendati(c.log i redoslijed isto kao
  //za gore navedne slučajeve) i re-rendeti će se nekaCustomHoook.
  //VAŽNO: ono što je čudo je da se ne događa re-render one komponete koja prati to stanje i kada dodamo neku osobu na naš popis ovdje komponenta Persons.js 
  //se ne re-renda.
  //U reduxu možemo dispatchati iz komponete prvaNekoRandomIme111111 i onda se ta komponete neće re-rendati ako mapStateToPorps ne prati taj disptach dok neka druga
  //komponeta drugaNekoRandomIme2222222222 će se re-rendati ako prati to u mapStateToProps.
  //Kod custom hooks/useReducera kombinacije to očito nije slučaj. Ovdje će se re-rendat ona komponeta koja pozove neki disptach, a praćenje stanja i onda ovisno o promjeni stanja
  //napravi neku akciju očito nije moguće. 
  //Ovdje sam praktički(Persons.js i AddPersons nisu ancestor i descendant nego siblings, jedino) rekreira onu situaciju iz useHttp custom hook videa,gdje se Ingredients.js 
  //komponeta koja prati useHttp custom hook return, ne re-renda dok se Search.js re-renda koji pozove taj disptach useHttp (iz min 8 otprilike).
  //Kasnije u tome videu vidimo da se Ingredients.js re-rendea, ali to je zato što unutar Search.js pozovemo putem propsa distachamo useReducer koji je definiran unutar
  //Ingredinets.js i tamo se koristi. (Ingredients.js imat taj svoj useReducer i uz to zove customHook tamo useHtttp).  
  //Uglavnom treba još više istražiti ovo, ovo se tek grubi početni zaključci.
  //VAŽNO: što se tiče React.memo i re-redering ga kad stavimo na addPersons.js recimo ovdje
  //React.memo only checks for prop changes. If your function component wrapped in React.memo has a useState, useReducer or useContext Hook in its implementation, it will 
  //still rerender when state or context change.    
  //VAŽNO: vidi u useMojaHooks.js komentar o useEffectu.

  //Znači ključne stvari su:
  //1.U praktičkom smislu  return custom hook će uvijek biti ispred returna komponete koja koristi custom hook.Koji će c.log prije ovisi o rasporedu
  //jel iznad poziva prema customHook unutar neke kompontete ili ne. Međutim uvijek će taj poziv prema customHook biti iznad returna neke komponte
  //i uz činjenicu da je obično poziv prema customHook na samom vrhu možemo računati da će customHoook izvršitit prije većine code unutar neke komponete
  //, a sigurno prije returna jsx koja ta komponeta returna.
  
  //2.kada neka komponenta koristu customHook koji ima bilo useState ili useReducer fn. onda će se dogoditi re-render fn. koja je zvala fn. neku
  //od tih fn. koja mijenja state uz re-render same customHoook.
  //Neće se aktivirati tj. re-rendati druge komponte koje koristi isti customHook i prati iste varijable jer se ne dijeli stanje, nego reusable logika putem customHooka.

  //3. ako želimo da dijeliti stanje tj. ako želimo da se neke komponete koja koristi customHook re-renda kad imamo disptach ili useState fn. aktivaciju u drugoj onda 
  //možemo to činit na neizravan način. Stvorimo globalni objekt gdje postavimo dispatch ili setState koju neka customHook
  //komponete returna kada se pokrene za svaku komponetu incijalno koja je koristi. Svaki put vrati disptahc ili useState fn. koja vrijedi točno za neku
  //komponetu gdje je ta customHook i samo za tu komponetu.
  //I onda kada imamo promjenu stanju jedne komponete koja korisiti custom hook pa aktivira re-render customHook, putem loopa unutar customHook pozovemo isto sve onde
  //druge dispatch ili useState fn. koje su u nekom globalnom objektu, obično array koju zovemo listeners ili subscribers. I tako biramo koje će komponete koje koriste
  //neku custom hook dijelitit stanje, a koje neće tj. biramo koje će se re-rendati kada se dogodit promjene stanje neke druge komponete koja također koristi
  //customHook.
  //VAŽNO:Sa time smo riješili re-render pitanje, ali da bi doista dijeli stanje trebamo imati uz subribers array i neki globalniState objekt koji će se returati
  //svaki puta kada se re-renda customHoook.
  //Ja se uvijek konceriran na re-render, ali bitana stvar je i dijeljenje globalnog state.

  //4. Vidi useEffect za objašnjenje useEffecta u customHook, ali ključna stvar je u definciji moutinga i customHook se tretira kao dio code kompontee koja je koristi
  //pa zato će se svaki put useEffect aktivirat unutar customHook kada se mounta neka komponeta koja je koristi.

  //5. svaka customHook treba početi sa "use"


  
  return (
    <div>
      <Persons/>
      <AddPerson/>
    </div>
  );
}

export default CustomHooksOtac;


