# praxis-dorafaludi

Dora Faludi (pszichológus MSc, Heilpraktikerin für Psychotherapie) német nyelvű
online praxis-honlapja. Statikus oldal — nincs build lépés, nincs futásidejű
függőség: ami a repóban van, az megy ki élesre.

## Mi van itt

```
index.html          a teljes egyoldalas honlap (Hero · Leitbild · Über mich ·
                    Leistungen · Ablauf · FAQ · Kontakt)
impressum.html      Impressum — VÁZLAT, kitöltendő (lásd lent)
datenschutz.html    Datenschutzerklärung — VÁZLAT, kitöltendő
robots.txt          keresőknek
sitemap.xml         három URL

assets/css/         styles.css — a design-tokenek + a teljes elrendezés,
                    breakpointok: 1024 / 900 / 760 / 520 px
assets/js/          site.js — mobil menü + a kapcsolati űrlap mailto-ra kötése
assets/fonts/       Inter + Funnel Display, ÖNHOSZTOLVA (4 woff2, 168 KB)
assets/img/         logó, portré, favicon, OG-kép

design/             a Claude Design canvas eredeti exportja (.dc.html + design
                    system). Ez a FORRÁS: ha újratervezés kell, ezt kell
                    visszanyitni a canvas-ban, nem az index.html-t szerkeszteni
                    kézzel.
```

## Hogyan nézzem meg helyben

```bash
python3 -m http.server 4173
```

Aztán `http://127.0.0.1:4173/`. (Bármelyik statikus szerver jó.)

## Amit tudni kell róla

- **Nincs cookie, nincs tracking, nincs külső kérés.** A betűtípusok önhosztoltak
  — a Google Fonts CDN-beágyazás Németországban DSGVO-kockázat (Abmahnung), ezért
  a woff2 fájlok itt vannak a repóban. Emiatt nem kell cookie-banner sem.
- **A kapcsolati űrlap nem küld szervernek adatot.** Kitöltés után a „Nachricht
  senden" gomb a látogató saját levelezőjét nyitja meg előre megírt levéllel
  (`mailto:`). Ez a canvas eredeti viselkedése. Ha valódi űrlapküldés kell,
  az külön munka (backend vagy űrlap-szolgáltatás).
- **A FAQ natív `<details>`** — JavaScript nélkül is működik.
- Reszponzív 320 px-től felfelé; 900 px alatt hamburger menü.

## Élesítés előtt kötelező

1. **Impressum kitöltése** (`impressum.html`) — a `[… …]` helyek: cím,
   telefonszám, illetékes Gesundheitsamt, Bundesland, adószám/ÁFA-státusz,
   felelősségbiztosítás. Enélkül a német jog szerint abmahnolható.
2. **Datenschutz kiegészítése** (`datenschutz.html`) — a tárhelyszolgáltató neve
   és címe (adatfeldolgozói szerződéssel), a foglalási eszköz adatai.
   Mindkét szöveg **ügyvédi ellenőrzést igényel** — a bennük lévő narancssárga
   figyelmeztető dobozt is törölni kell.
3. **Domain.** Jelenleg `https://dorafaludi.de/` szerepel a canonical, az OG-tag,
   a `sitemap.xml` és a `robots.txt` értékeként (az e-mail-cím alapján tippelve).
   Ha más lesz a domain, ezen a négy helyen kell átírni.
4. **Calendly link** ellenőrzése: `https://calendly.com/dora-faludi/erstgespraech`
   — a canvasból jött, létező naptárra kell mutatnia.
5. **A portréfotó jogtisztasága** — a `design/uploads/` mappából származik.

## Tartalom szerkesztése

A szövegek közvetlenül az `index.html`-ben vannak, magyarázó HTML-kommentekkel
szekciónként. A `design/` mappa canvas-verziója ettől függetlenül él: ha ott
változik a dizájn, az `index.html`-t kézzel kell utána húzni.
