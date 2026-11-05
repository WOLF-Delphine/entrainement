# Exercices JavaScript — HTML — CSS

Toutes les consignes au même endroit : ce qui est fait, et ce qui reste à faire.

| # | Partie | Statut |
|---|---|---|
| 1 | Variables et texte (exercices 1 à 8) | ✅ fait |
| 2 | Maths et modulo (exercices 9 à 15) | ✅ fait |
| 3 | Projet : Billet de train (dossier `Train/`) | ✅ fait |
| 4 | Projet : Réservation de cinéma (dossier `Cinema/`) | ✅ fait |
| 5 | Les conditions (exercices 16 à 22) | ⏭️ prochaine étape |
| 6 | Les fonctions (exercices 23 à 30) | à faire |
| 7 | Incrémentation et boucles (exercices 31 à 40) | à faire |
| 8 | Grand projet (HTML + CSS + conditions + fonctions) | à faire |
| — | Entraînements ciblés (Math, `Number()`, « je lis, je prédis ») | à glisser en échauffement |

**Méthode pour chaque exercice :** à la main d'abord (3 ou 4 exemples) → pseudo-code en commentaires → une ligne à la fois → `console.log` → commentaire de valeur au bout de la ligne (`// 1372`) → affichage.

---

## 1. Variables et texte (exercices 1 à 8) ✅

> **Rappel.** `let` crée une variable qui peut changer, `const` une variable fixe. `prompt()` pose une question et renvoie toujours du texte. `alert()` affiche un message, `console.log()` écrit dans la console.
> Méthodes utiles : `toUpperCase()`, `toLowerCase()`, `slice()`, `charAt()`, `trim()`, `length`.

1. Crée une variable `prenom` avec ton prénom et affiche-la dans la console.
2. Demande le prénom de l'utilisateur avec `prompt` et affiche « Bonjour » + prénom dans une alerte.
3. Demande le prénom, puis affiche « Bonjour Prénom » avec seulement la première lettre en majuscule (même si l'utilisateur tape « bERTRAND »).
4. Demande le prénom et le nom. Affiche « Bonjour Prénom NOM » : prénom avec une majuscule, nom tout en majuscules.
5. Demande un mot et affiche son nombre de lettres.
6. Demande un mot et affiche sa première et sa dernière lettre.
7. Demande un prénom, enlève les espaces en trop avec `trim()`, puis mets la première lettre en majuscule.
8. Demande un prénom et un nom, et affiche les initiales (« marie dupont » donne « M.D. »).

## 2. Maths et modulo (exercices 9 à 15) ✅

> **Rappel.** Les opérateurs : `+`, `-`, `*`, `/`, `**` (puissance) et `%` (modulo = le reste d'une division : `10 % 3` vaut 1). Comme `prompt` renvoie du texte, `"5" + "3"` donne `"53"` : convertis avec `Number()`.
> Méthodes utiles : `Math.floor()` (arrondi vers le bas), `Math.round()`, `toFixed(2)`.

9. Demande deux nombres et affiche leur somme. Essaie d'abord sans `Number()` pour voir le problème.
10. Demande deux nombres et affiche dans une seule alerte le résultat des 4 opérations.
11. Demande l'année de naissance et affiche « Prénom, tu as X ans » (le prénom avec une majuscule, comme à l'étape 1).
12. Demande un prix et affiche le prix après 20 % de réduction, avec 2 chiffres après la virgule.
13. Demande deux nombres et affiche le quotient entier et le reste (17 et 5 donnent « 3, reste 2 »).
14. Demande un nombre de minutes et convertis-le en heures et minutes (135 donne « 2 h 15 min »).
15. Demande un mot et affiche combien de fois il faudrait le répéter pour arriver à au moins 20 lettres (utilise `length` et `Math.ceil()`, l'arrondi vers le haut).

---

## 3. Projet : Billet de train ✅

**Le but :** créer une page web qui affiche un billet de train. Les informations du passager arrivent en texte « brut » (espaces en trop, majuscules au mauvais endroit), et ton JavaScript doit les nettoyer, faire les calculs et les afficher proprement sur le billet.

### Partie 1 : préparer le projet
1. Crée un dossier pour le projet.
2. Dans ce dossier, crée trois fichiers vides : `index.html`, `style.css` et `script.js`.

### Partie 2 : le HTML
3. Écris la structure de base d'une page HTML, avec le titre « Billet de train ».
4. Relie ton fichier CSS à la page, dans le `<head>`.
5. Relie ton fichier JS à la page, juste avant la fermeture du `<body>`.
6. Dans le `<body>`, crée un grand bloc qui représentera le billet.
7. Dans ce bloc, crée un en-tête avec le nom de la compagnie : RAIL ÉCOLE.
8. Crée une partie « trajet » avec : une zone pour le code de la gare de départ et une pour la ville de départ ; une zone pour la durée du trajet ; une zone pour le code de la gare d'arrivée et une pour la ville d'arrivée.
9. Crée une partie « passager » avec une zone pour chacune de ces informations : nom, initiales, âge, voiture, place, nombre de voyageurs.
10. Crée une partie « prix » avec trois lignes : prix total, réduction, à payer.
11. Crée un pied de billet avec une zone pour la référence.
12. Donne un id unique à chaque zone qui recevra une information. Écris un « ? » dans chaque zone pour l'instant.
13. Ouvre la page dans ton navigateur. Tu dois voir toutes tes zones avec des « ? ».

### Partie 3 : le CSS
14. Donne une couleur de fond à la page.
15. Donne au billet un fond blanc, des coins arrondis, une largeur maximale, et centre-le sur la page.
16. Mets l'en-tête dans un bandeau de couleur, avec le texte en blanc.
17. Affiche les codes des gares en gros et en gras.
18. Sépare les parties du billet avec une ligne (par exemple en pointillés).
19. Mets en valeur la ligne « à payer » (plus grande, en gras).
20. Recharge la page et vérifie que ça ressemble à un billet.

### Partie 4 : le JavaScript
21. En haut du fichier JS, crée une variable pour chaque donnée, exactement comme ci-dessous :

| Donnée | Valeur |
|---|---|
| nom complet | `" mARIE duPONT "` |
| année de naissance | `"1990"` |
| ville de départ | `" paris"` |
| ville d'arrivée | `"MARSEILLE "` |
| durée en minutes | `"195"` |
| numéro de place | `"47"` |
| nombre de voyageurs | `"3"` |
| prix d'un billet | `"39.90"` |

22. Le nouvel outil, pour écrire dans une zone de la page : `document.getElementById("nomPassager").textContent = maVariable;`. Pour tester, affiche « RAIL ÉCOLE » dans l'en-tête avec cet outil.
23. Le nom : affiche Marie DUPONT. *(Révise les exercices 4 et 7.)*
24. Les initiales : affiche M.D. *(Révise l'exercice 8.)*
25. L'âge : affiche 36 ans (en 2026). *(Révise l'exercice 11.)*
26. Les villes : affiche Paris et Marseille, avec une majuscule. *(Révise les exercices 3 et 7.)*
27. Les codes des gares : les 3 premières lettres de chaque ville en majuscules, PAR et MAR. *(Révise `slice`.)*
28. La durée : affiche 3 h 15 min. *(Révise l'exercice 14.)*
29. La voiture et la place : chaque voiture a 10 places (1 à 10 en voiture 1, 11 à 20 en voiture 2…). Affiche voiture 5 et place 7. *(Révise `Math.ceil` et `%`. Ne teste pas avec 10, 20, 30…)*
30. Le prix, avec 2 chiffres après la virgule : nombre de voyageurs 3, prix total 119.70 €, réduction de 20 % - 23.94 €, à payer 95.76 €. *(Révise les exercices 9, 10 et 12.)*
31. **Bonus** — la référence : 1re lettre de la ville de départ + dernière lettre de la ville d'arrivée + un tiret + nombre de lettres du nom de famille, en majuscules : PE-6. *(Révise `length - 1`.)*

### Partie 5 : le test final
32. Change toutes les données en haut du fichier JS et recharge la page. Si ton code est bien fait, tout le billet se met à jour tout seul.

**Les règles :** uniquement ce que tu as vu dans les exercices 1 à 15, plus l'outil de l'étape 22. Pas de `prompt` ni d'`alert`. Ne jamais écrire « Marie » ou « 36 » directement : tout doit être calculé à partir des données.

---

## 4. Projet : Réservation de cinéma ✅

**Le but :** une page de cinéma avec une barre de navigation qui reste en haut, des films à l'affiche, et un billet de réservation. Comme pour le train, les données arrivent « en vrac » et le JavaScript les nettoie.

### Partie 1 : préparer le projet
1. Crée un dossier `Cinema`.
2. Crée dedans un fichier HTML, un CSS et un JS, puis relie-les.

### Partie 2 : le HTML
3. Une barre de navigation (`<nav>`) avec, à gauche, le nom du cinéma et, à droite, 3 liens : Accueil, Films, Réservation.
4. Une partie « À l'affiche » avec 3 cartes de films (titre, durée, petit texte).
5. Une partie « Ma réservation » : un billet avec une zone (id + « ? ») pour : prénom, nom, identifiant, titre du film, nombre de mots du titre, dernier mot du titre, durée, heure de début, heure de fin, rangée, siège, nombre de places, prix total, réduction, à payer, code de réservation.
6. Un pied de page (`<footer>`).
7. Beaucoup de texte (section « À propos ») pour que la page défile.

### Partie 3 : le CSS
8. Le modèle de boîte : une bordure de 2px sur le billet, puis un `padding` de 20px. Où apparaît l'espace ?
9. Ajoute une `margin` de 40px. Où apparaît l'espace cette fois ?
10. Écris en commentaire la différence entre `margin` et `padding`.
11. Largeur maximale de 500px et billet centré.
12. Une ombre avec `box-shadow` (essaie plusieurs valeurs).
13. Flexbox : le nom du cinéma et les liens sur une seule ligne.
14. Le nom à gauche, les liens à droite (`justify-content: space-between`).
15. Alignés verticalement au milieu (`align-items: center`).
16. Les 3 cartes côte à côte, avec un espace entre elles (`gap`).
17. Dans le billet : l'étiquette à gauche, la valeur à droite.
18. La `<nav>` reste collée en haut quand on fait défiler (`position: sticky` + `top: 0`).

### Partie 4 : le JavaScript
Les données, exactement comme ça :

| Donnée | Valeur |
|---|---|
| nom complet | `" lUCAS bERNARD  "` |
| email | `" Lucas.Bernard@Mail.com "` |
| titre du film | `"  le GRAND voyage"` |
| durée en minutes | `"142"` |
| début de séance (minutes après minuit) | `"1230"` |
| numéro de siège | `"38"` |
| nombre de places | `"4"` |
| prix d'une place | `"9.50"` |

19. Prénom et nom : Lucas et BERNARD.
20. Identifiant : tout ce qui est avant le @, en minuscules → lucas.bernard.
21. Titre du film : LE GRAND VOYAGE.
22. Nombre de mots du titre : 3. *(Texte ou tableau ? Que compte `length` dans chaque cas ?)*
23. Dernier mot du titre : VOYAGE. *(`length - 1` sur un tableau.)*
24. Durée : 2 h 22 min.
25. Heure de début : 20 h 30.
26. Heure de fin : 22 h 52. *(Additionne d'abord. Attention à `Number()` !)*
27. Rangée et siège : 12 sièges par rangée. Le siège 38 est en rangée 4, siège 2. *(Remplis d'abord un tableau à la main avec les sièges 5, 14 et 30.)*
28. Prix : total 38.00 €, réduction de 15 % - 5.70 €, à payer 32.30 €.
29. Code de réservation : 2 premières lettres du titre + dernière lettre du nom + tiret + nombre de lettres du prénom → LED-5.
30. Test final : change toutes les données et vérifie que tout suit.

**Les règles :** pas de `prompt` ni d'`alert`. Ne jamais écrire « Lucas » ou « 38 » directement. Évite les sièges multiples de 12.

---

## 5. Les conditions (exercices 16 à 22) ⏭️

> **Rappel.** Une condition exécute du code seulement si quelque chose est vrai :
> ```js
> let age = Number(prompt("Ton âge ?"));
> if (age >= 18) {
>   alert("Tu es majeur");
> } else {
>   alert("Tu es mineur");
> }
> ```
> Comparaisons : `===` (égal), `!==` (différent), `>`, `<`, `>=`, `<=`. Pour combiner : `&&` (et), `||` (ou). On peut enchaîner avec `else if`.

16. Demande un nombre et indique s'il est pair ou impair (modulo !).
17. Demande l'âge et affiche « majeur » ou « mineur ».
18. Demande un prénom. Si l'utilisateur ne tape rien ou clique sur Annuler, affiche « Bonjour inconnu », sinon « Bonjour » + prénom avec une majuscule.
19. Demande un mot de passe et affiche « trop court » s'il fait moins de 8 caractères, sinon « accepté ».
20. Demande une note sur 20 et affiche « insuffisant » (moins de 10), « bien » (10 à 15) ou « très bien » (plus de 15).
21. Demande un nombre et indique s'il est divisible par 3, par 5, par les deux ou par aucun.
22. Mini-calculatrice : demande deux nombres puis une opération (+, -, *, /) et affiche le résultat. Si l'utilisateur veut diviser par 0, affiche un message d'erreur.

**Bonus — corriger les cas limites de tes projets :**
- **Cinéma, siège multiple de 12** : le siège 36 donne « place 0 ». Si le reste vaut 0, la place est 12.
- **Train, place multiple de 10** : la place 50 donne « place 0 ». Même correction avec 10.
- **Cinéma, le zéro des minutes** : refais l'ajout du « 0 » devant les minutes (18 h 05) avec un `if` au lieu de `padStart`.

## 6. Les fonctions (exercices 23 à 30)

> **Rappel.** Une fonction est une recette qu'on écrit une fois et qu'on réutilise :
> ```js
> function direBonjour(prenom) {
>   return "Bonjour " + prenom;
> }
> console.log(direBonjour("Marie")); // Bonjour Marie
> ```
> `prenom` est un **paramètre** (la valeur qu'on donne à la fonction), `return` renvoie le résultat, et `direBonjour("Marie")` **appelle** la fonction.

23. Crée une fonction `doubler(nombre)` qui renvoie le nombre multiplié par 2. Teste-la avec 3 valeurs.
24. Crée une fonction `additionner(a, b)` qui renvoie la somme.
25. Transforme l'exercice 3 en fonction `majuscule(mot)` qui renvoie le mot avec seulement la première lettre en majuscule. Utilise-la avec un `prompt`.
26. Crée une fonction `estPair(nombre)` qui renvoie `true` ou `false`.
27. Crée une fonction `aireRectangle(longueur, largeur)` et une fonction `perimetreRectangle(longueur, largeur)`.
28. Crée une fonction `celsiusVersFahrenheit(c)` (formule : c × 9 / 5 + 32).
29. Crée une fonction `appreciation(note)` qui renvoie « insuffisant », « bien » ou « très bien » (reprends l'exercice 20).
30. Crée une fonction `presenter(prenom, nom, age)` qui utilise ta fonction `majuscule` et renvoie « Je m'appelle Marie DUPONT et j'ai 25 ans ».

**Bonus :** dans le cinéma, le calcul « minutes → heures » est écrit 3 fois. Remplace-le par une seule fonction `convertirEnHeures(minutes)`.

## 7. Incrémentation et boucles (exercices 31 à 40)

> **Rappel.** Incrémenter, c'est augmenter une variable ; décrémenter, c'est la diminuer.
> ```js
> let n = 5;
> n++;     // 6  (ajoute 1)
> n--;     // 5  (enlève 1)
> n += 10; // 15
> n -= 3;  // 12
> n *= 2;  // 24
> ```
> La boucle `for` répète un nombre de fois précis, la boucle `while` répète tant qu'une condition est vraie :
> ```js
> for (let i = 1; i <= 5; i++) {
>   console.log(i); // 1, 2, 3, 4, 5
> }
>
> let j = 3;
> while (j > 0) {
>   console.log(j); // 3, 2, 1
>   j--;
> }
> ```
> Attention : dans un `while`, si tu oublies de changer la variable, la boucle ne s'arrête jamais.

31. Crée une variable `score = 0`. Ajoute 10, puis 25, puis enlève 5, en affichant le score après chaque étape.
32. Affiche les nombres de 1 à 10 avec une boucle `for`, puis de 10 à 1.
33. Affiche les nombres de 1 à 20 avec « pair » ou « impair » à côté de chacun.
34. Demande un nombre et affiche sa table de multiplication (« 7 x 1 = 7 »… jusqu'à 10).
35. Calcule la somme des nombres de 1 à 100 avec `total += i`. Tu dois trouver 5050.
36. Compte à rebours avec `while` : de 10 à 0, puis « Décollage ! ».
37. Demande un mot et compte ses voyelles en parcourant chaque lettre (`mot[i]`) avec un compteur.
38. Crée une fonction `inverser(mot)` qui renvoie le mot à l'envers en parcourant les lettres avec `i--`. Utilise-la pour dire si un mot est un palindrome (« kayak »).
39. FizzBuzz : de 1 à 30, affiche « Fizz » si le nombre est divisible par 3, « Buzz » par 5, « FizzBuzz » par les deux, sinon le nombre.
40. Le juste prix : l'ordinateur choisit un nombre entre 1 et 100 (`Math.floor(Math.random() * 100) + 1`). L'utilisateur propose des nombres avec `prompt` et l'alerte répond « plus grand » ou « plus petit ». À la fin, affiche « Bravo Prénom, trouvé en X essais » (compteur avec `++`).

---

## 8. Grand projet (à choisir)

Une page complète qui utilise **tout** ce qui a été vu : HTML, CSS (nav `sticky`, Flexbox, **Grid**, variables CSS, modèle de boîte) et JavaScript (texte, calculs, **conditions**, **fonctions**). Les consignes détaillées seront écrites ici une fois le thème choisi.

**À intégrer dans tous les cas :** un en-tête, une barre de navigation `sticky`, une **grille** de cartes (CSS Grid), un **formulaire** (fait de mémoire, sans modèle), un pied de page en plusieurs colonnes, des variables CSS, et des fonctions pour les calculs répétés.

| Thème | La page | Conditions | Fonctions |
|---|---|---|---|
| 🍕 Commande au restaurant | grille de plats + ticket de commande | livraison gratuite si plus de 30 € ; menu enfant si moins de 12 ans ; majoration après 22 h | `calculerTotal()`, `formaterPrix()` |
| 🏋️ Abonnement salle de sport | grille des formules + fiche membre | tarif réduit si étudiant ou senior ; alerte si expiration dans moins de 7 jours ; niveau selon le nombre de séances | `calculerAge()`, `calculerPrixAbonnement()` |
| 🚲 Location de vélos | grille des vélos + reçu de location | tarif horaire ou forfait journée ; caution si vélo électrique ; pénalité si retard | `convertirEnHeures()`, `calculerPrixLocation()` |

---

## Entraînements ciblés (en échauffement)

- **Outils Math** : quand utiliser `%`, `Math.floor`, `Math.ceil`, `Math.round` ; découvrir `Math.random`.
- **`Number()`** : `Number(` doit toucher directement la variable texte, avant le calcul.
- **« Je lis, je prédis »** : lire quelques lignes de code et écrire, sans les lancer, ce que contient chaque variable, puis vérifier avec la console.
