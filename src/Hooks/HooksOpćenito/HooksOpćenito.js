import React from 'react';
import {NavLink} from 'react-router-dom';  


function HooksOpćenito(props) {
    return (
        <React.Fragment>
              <div>
                  <div style={{textAlign: "center", marginTop: "30px"}}><NavLink to="/" >Home link</NavLink></div>
          <h2 style={{textAlign: "center"}}>Općenita rules of hooks:</h2>
          <ul>
              <li>Only call Hooks at the top level. Don’t call Hooks inside loops, conditions, or nested functions.</li>
              <li>Only call Hooks from React function components. Don’t call Hooks from regular JavaScript functions. (There is just one other valid place to call Hooks — your own 
                  custom Hooks. We’ll learn about them in a moment.)</li>
             <li>Ja bih još dodao napomenu da customHooks naziv treba započeti sa "use"</li>
          </ul>
          <h4 style={{textAlign: "center"}}>Random points:</h4>
          <ul>
              <li >Dependency tj. depencecies su varijable koje nisu definirane unutar callback funkcija(niti su parametar) u nekoj React hook 
                  koja očekuje callback fn. kao prvi argumnet i dependencies array kao drugi.
              </li>
              <li> exhaustive-deps rule u ESlintu u vscode je po default aktivno i upzorava  kada fale dependencies. Ekstremno je bitno ih navesti inače
                  ćemo imati stare vrijedosti za te varijable.
              </li>
          </ul>
      </div>

      <div style={{display: 'flex'}}>
            <ul>
                <h4>Hooks koje su ovdje obrađene:</h4>
                <li>useState</li>
                <li>useReducer</li>
                <li> useEffect</li>
                <li>useLayoutEffect</li>
                <li>useCallback</li>
                <li>useMemo </li>
                <li>Još su obrađene customHooks</li>
               
            </ul>
            <ul>
               <h4>Hooks koje nisu ovdje obrađene nego u ref sintezi ili context sintezi:</h4> 
                <li>useContext</li>
                <li>useRef</li>
            </ul>
            <ul>
                <h4>Hooks koje nisu obrađene jer se skoro nikad ne koriste:</h4>
                <li>useImperativeHandle</li>
                <li>useDebugValue</li>
                <li>Klikni za dodatni info:
                    <a href="https://stackoverflow.com/questions/57005663/when-to-use-useimperativehandle-uselayouteffect-and-usedebugvalue">Prvi Link</a><span> </span>
                    <a href="https://www.youtube.com/watch?v=HxY7SzIN44o">Drugi link</a>
                </li>
            </ul>
      </div>
    
      </React.Fragment>
    );
}

export default HooksOpćenito;