import React from 'react';
import "./običniCssFile.css"
import styles from "./nekiModulCss.module.css"
import {DivStyledKomponenta} from './styledKomponeta';

//VAŽNO: browser prefix create react app ne daje automatski za inline styles PAZI

function ReactStyling(props) {
     
    const višeKlasaNaJednomElementuIzCssModula=[styles.brojJedan, styles.brojDva].join(" ")

    return (
        <div>
            ReactStyling.js

            <div className="običnaGlobalnaKlasa">Obična klasa iz običnog css file</div>
            <div className={styles.nekaKlasaUnutarCssModula}>Css module stil obična lokalna klasa</div>
            <div className="bezveze">Css moudle klasa sa :global prefixom,primjeti kako se ne pristupa sa styles nego se tretira kao obična klasa što zapravo i je.</div>
            <div className={višeKlasaNaJednomElementuIzCssModula}>više klasa iz css modula na jednom elementu</div>
            <div style={{color: "red"}}>Ovo je inline style verzija, VAŽNO: browser prefixe create react app ne daje automatski za inline styles PAZI</div>
             <DivStyledKomponenta>Ovo je styled komponeta</DivStyledKomponenta>
        </div>
    );
}

export default ReactStyling;