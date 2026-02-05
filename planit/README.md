# PlanIt - React SPA

## Beskrivning
PlanIt är en Single Page Application (SPA) byggd i React som hjälper användaren planera sina dagliga uppgifter (todos).
Appen innehåller funktioner för att skapa och bocka av todos, visa historik över tidigare dagar samt följa en daglig streak för att se hur många dagar i rad användaren har slutfört sina uppgifter.

Projektet är byggt som en client-side routad applikation med React Router och använder ett externt API för att hämta exempeldata.

## Starta Projektet
1. Klona repot: 'git clone <repo-url>'
2. Installera: 'npm install'
3. Starta appen: 'npm run dev'
4. Appen körs då på länken som kommer upp.

## Tekniska val - reflektion 
Jag valde att dela upp appen i flera komponenter för att öka användbarheten och göra koden mer läsbar. Routing via React Router gör det möjligt att navigera utan reload. 
TodoItem tar emot props från TodoList, vilket visar dataflöde från förälder till barn. 
state hanteras lokalt med useState för input och todos, vilket gör det enkelt att testa komponenterna.
API:t JSONPlaceholder valdes eftersom att det är bra för att hämta datahämtning i en SPA.
Daily streak och historik visar interaktivitet. 