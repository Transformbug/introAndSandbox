import React, { useEffect,useRef,useLayoutEffect } from 'react';

function  SINuseLayoutEffect({boxRef, children}) {

  //VAŽNO: useLayoutEffect se izvršava nakon returna tj. rendera ove funckonalne komponente. To odmah mora biti jasno tu se ponašao isto kao useEffect.
  //Sve što returanamo kao inače će biti već na ekranu prije nego što se useLayout pokrene.
  //Ključna je razlika ti nekoliko milisekundi gdje nakon što se returna i renda komponeta kada u konzoli vidimo što se događa umjesto da se ode u react filove
  //ide se odmah na izrvašvanje callback fn. unutar useLayoutEffect.
  //Izbjegne se filcker efekt. Naravno, stavi ovdje useEffect pa kasnije vrati na useLayoutEffect da vidiš razliku.
  //Korisiti ćemo ga svaki puta kada želimo da se neka funckonalna komponente renda i pokaže na ekranu i onda tamo u zadnji tenutak želimo napraviti
  //neke vizualne DOM promjene. Tako na ovom primjeru nam želimo da se ovaj span renda, pokaže na ekranu i saznamo njegeove dimezije,lokaciju i onda nakon 
  //toga želimo primjeniti na njega određenu css klasu. Želimo da se ta tranczija na incijalnu poziciju gore i efekte pojavljivanja dolje koje dobijemo sa css klasom obavi 
  //što prije i bez flickeringa.
  //Znači kada imamo bilo koji code koji će promjeniti DOM u odnosu na to što se rendalo na ekran u returnu neke komponente treba korisiti useLayoutEffect, za sve
  //ostale side effects treba korisitit useEffect. 
  //Praktički kada ti padne na pamet da ćeš u useEffectu imati neki code koji vizulano utječe na DOM koristi useLayoutEffect. 
  //useLayoutEffect je syncronous za razliku od useEffect i pokrene se prije tzv. browser paint(), u svemu ostalom je isti kao useEffect što se tiče
  //depndencies i clean up return funkije koju možemo vratiti iz callback fn.
  //useLayoutEffect je prakitčki isti kao componenteDidMount/componetedtDidUpadate, dok je useEffect async tj. pokreće se nakon browser painta.
  //Dobar članak:
  //https://kentcdodds.com/blog/useeffect-vs-uselayouteffect

     const msgRef = useRef(null);
     useLayoutEffect(() => {
      const rect = boxRef.current.getBoundingClientRect();
      msgRef.current.style.top = `${rect.height + rect.top}px`;
    }, [boxRef]);
  
    return <span ref={msgRef} className="msg">{children}</span>;
  
}

export default  SINuseLayoutEffect;