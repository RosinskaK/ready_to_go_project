import 'transition-style';
import { useState } from "react";


export default function Instruction() {

    const [showInfo, setShowInfo] = useState(false);

    return (
        <div className="instruction-div">
            <p className="instruction-title">
                💡Pokaż<button className="instruction-btn" onClick={() => setShowInfo(!showInfo)}>wskazówki</button>jak używać <span>ReadyToGo</span></p>
            {
                showInfo &&
                <div className="instruction-hidden-div" transition-style="in:circle:hesitate" > 
                <b>W</b> <span>ReadyToGo</span> <b>możesz:</b>
                    <p className="instruction-line">
                        <span>1.</span> Dodawać każdą nawet najmniejszą rzecz do&nbsp;listy rzeczy do spakowania w&nbsp;podróż przez&nbsp;przycisk <span>Dodaj</span></p>
                    <p className="instruction-line">
                        <span>2.</span> Usuwać każdą błędnie dodaną lub już niepotrzebną rzecz przez przycisk <span>Usuń</span> znajdujący&nbsp;się przy danej rzeczy</p>
                    <p className="instruction-line">
                        <span>3.</span> Skreślać/odhaczać spakowaną już rzecz poprzez kliknięcie na&nbsp;nią</p>
                    <p className="instruction-line">
                        <span>4.</span> Odświeżać widok całej listy przez przycisk <span>Przywróć listę</span>, dzięki czemu Twoja lista będzie gotowa do&nbsp;ponownego odhaczania przy nastepnym pakowaniu</p>
                    <p className="instruction-line">❗️ <span>Pamiętaj!</span> </p>
                    <p className="instruction-line-last instruction-line">
                        Twoja lista jest przechowywana w aplikacji <span>ReadyToGo</span> i&nbsp;czeka na&nbsp;Ciebie aż&nbsp;będzie ponownie potrzebna by ułatwić i&nbsp;przyśpieszyć proces pakowania w&nbsp;kolejną wspaniałą podróż 😊</p>
                </div>
            }
        </div>
    );
}
