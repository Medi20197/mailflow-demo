# GitHub Pages — documentation des projets publics

Cette documentation décrit uniquement les fonctionnalités réellement disponibles dans les démonstrations publiques.

## Index des sites

| Projet | Site public | Démonstration |
|---|---|---|
| Portfolio central | [Ouvrir](https://medi20197.github.io/mailflow-demo/) | Navigation entre les trois études de cas |
| GovFlow AI | [Étude de cas](https://medi20197.github.io/govflow-ai-portfolio/) | [Démo interactive](https://medi20197.github.io/govflow-ai-portfolio/demo.html) |
| Garde Tranquille | [Étude de cas](https://medi20197.github.io/garde-tranquille-portfolio/) | [Démo interactive](https://medi20197.github.io/garde-tranquille-portfolio/demo.html) |

## Portfolio central et MailFlow

### Fonctionnalités publiques exactes

- page d’accueil présentant MailFlow, GovFlow et Garde Tranquille ;
- navigation responsive entre les trois pages avec URLs dédiées par fragment `#/…` ;
- page MailFlow avec description, compétences frontend et indicateurs fictifs ;
- page GovFlow avec aperçu générique de pilotage ;
- page Garde Tranquille avec aperçu générique d’organisation d’équipe ;
- cartes d’activité et barres de progression illustratives ;
- lien direct vers le profil GitHub ;
- avertissements explicites sur les données fictives et la confidentialité.

Le portfolio central ne communique avec aucun backend et ne conserve aucune saisie.

### Publication

Le workflow `.github/workflows/deploy-pages.yml` :

1. installe Node.js et les dépendances du dossier `frontend` ;
2. compile l’application Vite avec `npm run build` ;
3. publie `frontend/dist` avec GitHub Pages.

La publication est déclenchée automatiquement après un envoi sur `main`.

## GovFlow AI

La démonstration publique propose exactement :

- un tableau de bord avec quatre indicateurs fictifs ;
- une liste de documents fictifs récents ;
- une vue Documents avec recherche et filtres par statut ;
- la création locale d’un brouillon fictif ;
- un assistant simulé avec suggestions et réponses prédéfinies ;
- un circuit générique à quatre étapes pouvant avancer ;
- une navigation responsive entre les vues.

Documentation détaillée : [GovFlow AI — GitHub Pages](https://github.com/Medi20197/govflow-ai-portfolio/blob/main/GITHUB_PAGES.md).

## Garde Tranquille

La démonstration publique propose exactement :

- un tableau de bord et des indicateurs fictifs ;
- une vue du personnel avec recherche et filtres ;
- un planning mensuel interactif avec déplacement local des éléments ;
- l’ajout et la réinitialisation d’éléments fictifs ;
- des vues Absences, Exemptions et Services opérationnels ;
- des rapports, graphiques et historiques simulés ;
- des boutons d’export qui simulent l’action sans produire de données réelles ;
- une navigation responsive entre les six espaces.

Documentation détaillée : [Garde Tranquille — GitHub Pages](https://github.com/Medi20197/garde-tranquille-portfolio/blob/main/GITHUB_PAGES.md).

## Vérification et sécurité

Après chaque mise à jour :

1. vérifier l’exécution dans l’onglet **Actions** ;
2. tester l’étude de cas et la page `demo.html` ;
3. contrôler la navigation sur ordinateur et mobile ;
4. confirmer que toutes les données restent fictives ;
5. ne publier aucun backend, fichier `.env`, export réel ou règle interne.

Documentation officielle : [Configuration d’une source de publication GitHub Pages](https://docs.github.com/fr/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site).
