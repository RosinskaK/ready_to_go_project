import { useState } from "react";

export default function Instruction() {

    const [showInfo, setShowInfo] = useState(false);

    return (
        <div className="instruction-div">
            <p className="instruction-title">
                💡 Pokaż<button className="instruction-btn" onClick={() => setShowInfo(!showInfo)}>wskazówki</button>jak używać <span>ReadyToGo</span></p>
            {
                showInfo &&
                <div className="instruction-hidden-div"> W <span>ReadyToGo</span> możesz:
                    <p className="instruction-line">
                        <span>1.</span> Dodawać każdą nawet najmniejszą rzecz do listy do spakowania w podróż przez przycisk <span>Dodaj
                        </span></p>
                    <p className="instruction-line">
                        <span>2.</span> Usuwać każdą błędnie dodaną lub już niepotrzebną rzecz przez przycisk <span>Usuń</span> znajdujący się przy danej rzeczy</p>
                    <p className="instruction-line">
                        <span>3.</span> Skreślać/odhaczać spakowaną już rzecz poprzez kliknięcie na nią</p>
                    <p className="instruction-line">
                        <span>4.</span> Odświeżać widok całej listy przez przycisk <span>Przywróć listę</span>, dzięki czemu Twoja lista będzie gotowa do ponownego odhaczania przy nastepnym pakowaniu</p>
                    <p className="instruction-line-last instruction-line">
                        ❗️ Pamiętaj! Twoja lista jest przechowywana w aplikacji <span>ReadyToGo</span> i czeka na Ciebie aż będzie ponownie potrzebna by ułatwić i przyśpieszyć proces pakowania w kolejną wspaniałą podróż 😊</p>
                </div>
            }
        </div>
    );
}
