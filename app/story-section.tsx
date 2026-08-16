"use client";

import Image from "next/image";
import { useState } from "react";

const storyParagraphs = [
  "Elganowo ma historię starszą niż wiele miejsc, które dziś wydają się bardziej oczywiste na mapie Mazur. Dawne Gilgenau przez stulecia było związane z majątkiem ziemskim, folwarkami i rozproszonymi gospodarstwami, których ślady do dziś można odnaleźć w krajobrazie. Wśród pól, starych dróg i zabudowań wciąż da się wyczuć rytm dawnej wsi.",
  "Właśnie takiego miejsca długo szukałam. Domu z duszą, z własną historią, z przedwojenną architekturą, której nie zatarto kolejnymi remontami. Domu, który nie udaje starego, tylko naprawdę pamięta inne czasy.",
  "Elganowo 33 stoi nieco na uboczu, na wzgórzu, z dala od centrum wsi. Wokół rozciągają się pola, na których od lat gniazdują żurawie. Ich klangor jest tutaj jednym z najbardziej charakterystycznych dźwięków poranka. Z czasem zrozumiałam, że ten dom nie stoi po prostu wśród natury. On jest jej częścią.",
  "Przychodzą tu sarny, lisy, borsuki, słychać rechot żab i jesienne ryki jeleni, „śmiech” zielonych dzięciołów. Pojawiają się owady, których wcześniej nawet nie potrafiłam nazwać. Na strychu mieszkają nietoperze, a sąsiedzkie koty regularnie wpadają po pieszczoty i przysmaki. Staramy się nikomu nie przeszkadzać. Nie porządkujemy przyrody na siłę i ingerujemy tylko wtedy, kiedy naprawdę jest to konieczne. Zbieramy zioła, poznajemy rośliny, odkrywamy nowe gatunki jadalnych grzybów i uczymy się miejsca, w którym zamieszkaliśmy.",
  "Sam dom również opowiada swoją historię.",
  "W jego wnętrzu zachował się wyraźny, przedwojenny charakter. W dawnej kuchni pozostała ceglana podłoga, a w niej wgłębienia po starym piecu — drobny ślad codzienności ludzi, którzy mieszkali tu przed nami. Dzisiejszy salon i kuchnia powstały w przestrzeni dawnej obory i chlewu. Różnica poziomów podłogi w tej części domu nadal zdradza jego pierwotny układ i przypomina, że kiedyś życie ludzi i zwierząt toczyło się tutaj pod jednym dachem.",
  "Nie chcieliśmy tej historii wygładzić ani ukryć. Przeciwnie — zależało nam, żeby ją zachować.",
  "Dlatego Elganowo 33 nie jest dla nas projektem „starego domu po remoncie”. To miejsce, które ma własną pamięć, własne niedoskonałości i własny rytm. My jesteśmy tylko kolejnymi gospodarzami.",
  "Czasem mam wrażenie, że długo szukałam tego domu, a on po prostu cierpliwie czekał na mnie — na wzgórzu, pośród pól i żurawi.",
];

export function StorySection() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section className={`story section${isExpanded ? " story-expanded" : ""}`} id="historia">
      <div className="story-photo">
        <Image
          className="story-image"
          src="/images/elganowo33-historia.webp"
          alt="Dom Elganowo 33 na wzgórzu pośród mazurskiego krajobrazu"
          fill
          sizes="(max-width: 760px) 100vw, 55vw"
          quality={82}
        />
      </div>
      <div className="story-copy">
        <p className="eyebrow dark">Nasza historia</p>
        <h2>Dom, który wyrósł z zachwytu</h2>
        <div className={`story-text${isExpanded ? " is-expanded" : ""}`} id="story-full-text">
          {storyParagraphs.map((paragraph, index) => (
            <p className="story-paragraph" key={index}>{paragraph}</p>
          ))}
        </div>
        <button
          className="story-link story-toggle"
          type="button"
          aria-expanded={isExpanded}
          aria-controls="story-full-text"
          onClick={() => setIsExpanded((current) => !current)}
        >
          {isExpanded ? "Zwiń" : "Czytaj dalej"} <span aria-hidden="true">{isExpanded ? "↑" : "↓"}</span>
        </button>
      </div>
    </section>
  );
}
