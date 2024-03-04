Tämä projekti on yksinkertainen korttipelin simulaatio, jossa on yksi pelaaja ja yksi jakaja. Peli käyttää tavallista korttipakkaa, jossa on neljä maata (hertta, risti, ruutu, pata) ja numerot 1-13.

Pelin toiminta:

Kun käyttäjä klikkaa "uudenpeli" -painiketta, korttipakka luodaan uudelleen ja sekoitetaan.
Pelaajalle ja jakajalle jaetaan aluksi kaksi korttia kullekin.
Pelaajalla on mahdollisuus ottaa lisää kortteja ("nosta-kortti" -painike) ja pyrkiä saamaan lähemmäs 21 pistettä kuin jakaja.
Jakaja ottaa kortteja automaattisesti niin kauan kuin hänen pistemääränsä on alle 17.
Pelaaja voittaa, jos hän saa täsmälleen 21 pistettä tai vähemmän kuin jakaja, mutta yli jakajan pistemäärän. Jakaja voittaa, jos hän saa enemmän pisteitä kuin pelaaja tai jos pelaajan pistemäärä menee yli 21:n.
Koodi käyttää HTML:ää, CSS:ää ja JavaScriptiä toteuttaakseen pelin toiminnallisuuden selaimessa. Se käyttää myös DOM:ia (Document Object Model) muokatakseen HTML-elementtejä dynaamisesti pelin eri vaiheissa.
