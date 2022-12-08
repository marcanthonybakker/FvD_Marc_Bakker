# Procesverslag
Markdown is een simpele manier om HTML te schrijven.  
Markdown cheat cheet: [Hulp bij het schrijven van Markdown](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet).

Nb. De standaardstructuur en de spartaanse opmaak van de README.md zijn helemaal prima. Het gaat om de inhoud van je procesverslag. Besteedt de tijd voor pracht en praal aan je website.

Nb. Door *open* toe te voegen aan een *details* element kun je deze standaard open zetten. Fijn om dat steeds voor de relevante stuk(ken) te doen.





## Jij

<details open>
  <summary>uitwerken voor kick-off werkgroep</summary>

  ### Auteur:
  Marc Bakker

  #### Je startniveau:
  Blauw als basis, als het lukt werken aan rood

  #### Je focus:
  Responsive
 
</details>





## Je website

<details open>
  <summary>GEDAAN | uitwerken voor kick-off werkgroep</summary>

  ### Je opdracht:
  https://plamodx.nl/

  #### Screenshot(s) van de eerste pagina (small screen): 
  Modelkit webshop voorpagina  
  <img src="readme-images/plamodx1voorpagina.png" width="375px" alt="Voorpagina van plamodx modelkitwebsite">

  #### Screenshot(s) van de tweede pagina (small screen):
  Modelkit webshop detailpagina
  <img src="readme-images/plamodx2detailpagina.png" width="375px" alt="Detailpagina van plamodx modelkitwebsite">
 
</details>



## Toegankelijkheidstest 1/2 (week 1)

<details>
  <summary>GEDAAN | uitwerken na test in 1e werkgroep</summary>

  ### Bevindingen
  Ik had al verwacht dat deze site wat minder toegankelijk is aangezien het een reletief klein bedrijf is. Maar het viel erg tegen, er was veel te noteren wat niet helemaal werkt voor sommige mensen. Bijvoorbeeld navigeren met tab laat heel veel kleine foutjes zien, zoals: geen styling op focus, en veel herhalende links die hetzelfde doen. Dat is ook irritant voor mensen die een screen reader gebruiken.

  #### Screenreader
  </ul>
    <li>Menu's werken niet, moeten simpler</li>
    <li>Afbeeldingen niet duidelijk beschreven</li>
    <li>Links missen duidelijkheid bijvoorbeeld prijs</li>
    <li>Producten kunnnen beter beschreven worden, zoals textuur, maat, kleur etc.</li>
  <ul>

  #### Muis en Toetsenbord 
  </ul>
    <li>Focus state wordt meestal niet vormgegeven, geen eens basis outlines</li>
    <li>Je hebt geen optie voor skip to content</li>
    <li>Dropdown menu's hebben geen tab optie</li>
  <ul>

  #### Motoriek (shocks, elastiekjes)
  </ul>
    <li>Met shocks kan je met muis (bijna) prima besturen, typen is niet te doen</li>
    <li>Met shocks kan je beter de website zo veel mogelijk muis accesible</li>
    <li>Elastiek met computer gaat het nog wel</li>
    <li>Met elastiek zijn de touchscreen koop buttons te klein</li>
  <ul>

  #### Visueel (brillen, contrast, kleurenblind, dark/light). 
  </ul>
    <li>Geen dark mode</li>
    <li>Blur vision, kleine knopjes die groen, blauw zijn met witte tekst zijn niet te zien</li>
    <li>Zwart wit is prima, kleuren deficienties zijn ook prima</li>
  <ul>


</details>



## Breakdownschets (week 1)

<details>
  <summary>GEDAAN | uitwerken na afloop 2e werkgroep</summary>

  ### de hele pagina: 
  <img src="readme-images/breakdown1.png" width="375px" alt="breakdown van de hele pagina, kort ge-edit">

  ### dynamisch deel (bijv menu): 
  <img src="readme-images/breakdown2.png" width="375px" alt="breakdown van een het menu. Deze heeft meerdere bladzijden als het ware.">

  ### wellicht nog een dynamisch deel (bijv filter): 
  <img src="readme-images/breakdown3.png" width="375px" alt="breakdown van een product. Deze bestaat uit vooral tekst en afbeeldingen. Maar een subtiele navigatie bar sit er boven.">

</details>





## Voortgang 1 (week 2)

<details>
  <summary>GEDAAN | uitwerken voor 1e voortgang</summary>

  ### Stand van zaken
  Voor een groot gedeelte gaat het HTMl gedeelte wel goed, alleen heb ik nog wat vraagtekens over dropdown menu's en andere kleine features die de echte site heeft. Maar beide pagina's qua HTML zijn af genoeg om CSS er aan toe te voegen.

  Wat betreft de CSS, ik heb daar al een beginnetje aan gemaakt. Een deel van de header is af. Alleen zit daar een dropdown in die ik niet weet hoe die werkt maar dat komt waarschijnlijk aan bod wanneer we de JAVASCRIPT les hebben. Ander vraag ik dat volgende week. De footer is wel af, voor mobile. Ook heb ik al gespeeld met media querys. Dat is dan op 320px breed en al het andere is een andere stijl. Tot nu toe verranderd er alleen wat sections met grid.

  Ik wil nog eens grondig door alle opdrachten, of op zijn minst de opdrachten waar ik iets van wil gebruiken in mijn eigen opdracht. Ik heb ze wel al gedaan, maar ik begrijp het nog niet helemaal. De opdrachten duren heel lang voor mij. Ik hoop er sneel doorheen te gaan nu ik er les over heb gehad.


  ### Agenda voor meeting
  samen met je groepje opstellen

  | student 1 MARC     | student 2 ROBIN         | student 3 AYA   | student 4 MATS       |
  | ---            | ---                | ---          | ---              |
  | HTML en CSS kort laten zien voor feedback, geen directe vragen  | Kun je grid, flexbox en position door elkaar gebruiken? Of kan het ook anders? | Eigen website: hoe zijn hier de h'tjes verdeeld (h1, h2, etc.)? | "een plan opstellen ivm huiswerk" |
  | ... | Is mijn HTML goed uitgewerkt? Of wat mist er nog of kan beter? | ... | ... |
  | ...            | ...                | ...          | ...              |

  Algemeen, gehele groep
  - Hoe werkt een hamburger menu
  - Feedback voor onze github, vullen we het goed in?


  ### Verslag van meeting
  hier na afloop snel de uitkomsten van de meeting vastleggen


  Feedbaack voor mij
  - Een nav heeft geen section, article etc nodig.
  - Section en artice moet andersom, check even de syntax nog even.
  - Gebruik alleen > als het echt nodig is. De CSS kan korter, dat maakt het meer overzichtelijk.
  - Plaats iets meer plaatjes, dat geeft het prototype wat meer overzicht. Je hoeft niet alle plaatjes te hebben.
  - Zet kopjes onder de foto's.

  Handige feedback die de rest van het groepje heeft gekregen
  - Metadata, Data dat iets over de content zegt: Datum, Publicatie, Art, Design etc. 
  - Je kan tags verwijderen in website inspector om te debuggen.
  - Je kan weglaten wat je wilt in je opdracht, daag jezelf uit met de opdracht, doe dingen die je nog niet weet.
  - Met visually hidden class kan je tags onzichtbaar maken, bijvoorbeeld een H1.


</details>





## Voortgang 2 (week 3)

<details>
  <summary>GEDAAN | uitwerken voor 2e voortgang</summary>

  ### Stand van zaken
  Deze week heb ik minder berijkt dan ik wilde. Dus tot nu toe heb ik nauwelijks de css af van de 1e pagina. Wel heb ik alle opdrachten tenminste geprobeerd.


  ### Agenda voor meeting
  samen met je groepje opstellen

  | student 1 Marc     | student 2 Robin         | student 3 Aya    | student 4 Mats       |
  | ---            | ---                | ---          | ---              |
  | Ik wil alleen maar mijn code effe snel laten zien. Geen specifieke vragen  | Ik wil ook mijn code laten zien en checken of het haalbaar is om responsive & animaties te doen             | Je kan de content veranderen zoals bijvoorbeeld een hamburgermenu img naar een kruisje door 'content: url()' in je css te zetten. Alleen hoe doe je dat als je geen url hebt maar een svg afbeelding?    | en dan ik dat    |
  | en dat ook nog | dit als er tijd is | nog een punt | dit wil ik zeker |
  | ...            | ...                | ...          | ...              |

  ### Verslag van meeting
  hier na afloop snel de uitkomsten van de meeting vastleggen

  Feedback voor mij
  - Gebruik de summary en details tag voor dropdown menu's.
  - Je kan twee plaatjes over elkaar zetten om met een hoover de afbeelding te verranderen.
  - Aria label helpt met het defininieren van tags die niet goed vertolkt worden met de screenreader.
  - Check de syntax van :focus-within, je kan er leuke dingen mee doen.

</details>





## Toegankelijkheidstest 2/2 (week 4)

<details>
  <summary>uitwerken na test in 8e werkgroep</summary>

  ### Bevindingen
  Lijst met je bevindingen die in de test naar voren kwamen (geef ook aan wat er verbeterd is):

  ### SCREENREADER
  </ul>
    <li>De buttons, links en images zijn beter beschreven met door de toegevoegde alt tekst.</li>
    <li>De menu links worden meteen gelezen, maar dit is het enigste punt om naar deze categoriën te gaan.</li>
    <li>De knop wordt twee keer verteld, zie afbeelding.</li>
    <li>Language staat in de HTML op NL, dat kan helpen met de screenreader.</li>
  <ul>

  ### MUIS & TOETSENBORD
  </ul>
    <li>Er zijn nog geen states zoals hoover ,active , focus kan het navigeren sterk verduidelijken.</li>
    <li>Er is ook nog niet veel variatie in interactive tags, zoals forms, maar de buttons en links werken wel.</li>
  <ul>

  ### SLECHTE MOTORIEK
  </ul>
    <li>De a's zijn net iets te klein. De icoon buttons zijn net op het randje qua formaat.</li>
  <ul>

  ### VISUELE BEPERKINGEN
  </ul>
    <li>Periphal field loss, prima te doen.</li>
    <li>Color #0779p (geel beeld), Genoeg kleur contrast om verschil te kunnen zien.</li>
    <li>Low contrast, de grijze letters van de huisstijl zijn onleesbaar.</li>
  <ul>

  ### CONCETRATIE PROBLEMEN
  </ul>
    <li>Erg moeilijk om de footer te navigeren, misschien helpen iconen die de onderwerpen visueel</li>
    <li>Maar ik vindt het moeilijk om iets te verzinnen dat dit verhelpt. </li>
  <ul>

  </ul>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
  <ul>

  #### Screenreader
  Hier korte omschrijving (met indien nodig afbeeldingen)
  De echte site had een menu dat niet ge read werd, afbeeldingen werden niet duidelijk beschreven, en links missen duidelijke beschrijvingen. Dat heb ik met mijn 

  Hier een omschrijving van hoe het opgelost kan worden (met indien nodig afbeeldingen)


  #### Muis en Toetsenbord 
  Hier korte omschrijving (met indien nodig afbeeldingen)

  Hier een omschrijving van hoe het opgelost kan worden (met indien nodig afbeeldingen)


  #### Motoriek (shocks, elastiekjes)
  Hier korte omschrijving (met indien nodig afbeeldingen)

  Hier een omschrijving van hoe het opgelost kan worden (met indien nodig afbeeldingen)


  #### Visueel (brillen, contrast, kleurenblind, dark/light). 
  Hier korte omschrijving (met indien nodig afbeeldingen)

  Hier een omschrijving van hoe het opgelost kan worden (met indien nodig afbeeldingen)

</details>





## Voortgang 3 (week 4)

<details>
  <summary>uitwerken voor 3e voortgang</summary>

  ### Stand van zaken
  hier dit ging goed & dit was lastig (neem ook screenshots op van delen van je website en code)


  ### Agenda voor meeting
  samen met je groepje opstellen

  | MARC student 1      | AYA student 2          | ROBIN student 3    | MATSstudent 4        |
  | Snel door mijn code website heen kijken.           | ---                | 1. mag ik een class gebruiken om een h1 visually hidden te maken          | even mijn code bekijken              |
  | Vragen of mijn website voldoende variatie heeft.'  | en dit             | en ik dit    | 2. responsiveness op mijn 2e pagina werkt niet helemaal   | En vragen of het gebruik van div’s correct is
  | Mag ik var gebruiken als container rondom tags die wel syntax hebben.| dit als er tijd is | nog een punt | dit wil ik zeker |
  | ...            | ...                | 3. is er genoeg variatie voor het service deel of moet ik nog meer toevoegen
4. waarom ik maar op 1 button kan klikken en de andere buttons dan niet werken terwijl ze hetzelfde doen          | ...              |


  ### Verslag van meeting
  hier na afloop snel de uitkomsten van de meeting vastleggen

  - punt 1
  - punt 2
  - nog een punt
  - ...

</details>





## Eindgesprek (week 5)

<details>
  <summary>uitwerken voor eindgesprek</summary>

  ### Je uitkomst - karakteristiek screenshots:
  <img src="readme-images/dummy-plaatje.jpg" width="375px" alt="uitomst opdracht 1">


  ### Dit ging goed/Heb ik geleerd: 
  Korte omschrijving met plaatjes

  <img src="readme-images/dummy-plaatje.jpg" width="375px" alt="top">


  ### Dit was lastig/Is niet gelukt:
  Korte omschrijving met plaatjes

  <img src="readme-images/dummy-plaatje.jpg" width="375px" alt="bummer">
</details>





## Bronnenlijst

<details open>
  <summary>continu bijhouden terwijl je werkt</summary>

  Nb. Wees specifiek ('css-tricks' als bron is bijv. niet specifiek genoeg).

</ol>
  <li>Bron: HTML select element <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/select">https://developer.mozilla.org/en-US/docs/Web/HTML/Element/select</a></li>
  <li>Bron: Icon instagram<a href="https://www.iconfinder.com/search?q=instagram">https://www.iconfinder.com/search?q=instagram</a></li>
  <li>Bron: Icon facebook<a href="https://www.iconfinder.com/search?q=facebook">https://www.iconfinder.com/search?q=facebook</a></li>
  <li>Bron: Icon ideal<a href="https://www.autolakstift.nl/ideal-logo/">https://www.autolakstift.nl/ideal-logo/</a></li>
  <li>Bron: Icon bancontact<a href="https://www.autolakstift.nl/bancontact/">https://www.autolakstift.nl/bancontact/</a></li>
  <li>Bron: Icon paypal<a href="https://nl.m.wikipedia.org/wiki/Bestand:PayPal.svg">https://nl.m.wikipedia.org/wiki/Bestand:PayPal.svg</a></li>
  <li>Bron: Icon giropay<a href="https://en.wikipedia.org/wiki/Giropay">https://en.wikipedia.org/wiki/Giropay</a></li>
  <li>Bron: Logo +Iconset plamodx<a href="https://plamodx.nl/">https://plamodx.nl/</a></li>
  <li>Bron: Product foto's plamodx<a href="https://plamodx.nl/">https://plamodx.nl/</a></li>
  <li>Bron: SVG header icons<a href="https://www.iconfinder.com/search?q=profile">https://www.iconfinder.com</a></li>
  <li>Bron: MDN docs<a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/summary">https://developer.mozilla.org/en-US/docs/Web/HTML/Element/summary</a></li>
  <li>Bron: <a href=""></a></li>
  <li>Bron: <a href=""></a></li>
  <li>Bron: <a href=""></a></li>
  <li>Bron: <a href=""></a></li>
  <li>Bron: <a href=""></a></li>
  



<ol>

</details>