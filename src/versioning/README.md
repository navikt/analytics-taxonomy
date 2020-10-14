# Versjonering

Dette er en enkel "pakke" for å kunne undersøke om ting
har endret seg så mye at vi må kjøre en oppgradering og
om det er en minor eller major(breaking).

Det er mulig det finnes noe slikt som man kunne tatt
fra en annen pakke, men vi har ikke klart å funnet det.


### Gangen i det
 1. finner ut hvilken pakke man står i (package.name)
 2. laster ned den publiserte `latest` av den pakken man står i fra
 remote
 3. kjører diff
 4. hvis det er diff applyer ny versjon.
 
Bumping is ment to be run in pipeline. So remote
