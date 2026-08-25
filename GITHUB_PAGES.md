# GitHub Pages — portfolio public

## Sites disponibles

| Projet | Dépôt public | Site GitHub Pages | Publication |
|---|---|---|---|
| MailFlow | [mailflow-demo](https://github.com/Medi20197/mailflow-demo) | [Ouvrir](https://medi20197.github.io/mailflow-demo/) | GitHub Actions |
| GovFlow AI | [govflow-ai-portfolio](https://github.com/Medi20197/govflow-ai-portfolio) | [Ouvrir](https://medi20197.github.io/govflow-ai-portfolio/) | Branche `main` |
| Garde Tranquille | [garde-tranquille-portfolio](https://github.com/Medi20197/garde-tranquille-portfolio) | [Ouvrir](https://medi20197.github.io/garde-tranquille-portfolio/) | Branche `main` |

Les trois sites utilisent exclusivement des contenus publics fictifs et indépendants.

## MailFlow

Le workflow `.github/workflows/deploy-pages.yml` compile automatiquement le projet Vite situé dans `frontend` après chaque envoi sur `main`, puis publie `frontend/dist`.

```bash
git add .
git commit -m "Mettre à jour le portfolio"
git push
```

Le résultat du déploiement est visible dans **Actions → Déployer la démonstration sur GitHub Pages**.

## GovFlow AI et Garde Tranquille

Ces deux vitrines sont des sites HTML statiques publiés directement depuis la branche `main`. Toute modification de `index.html` déclenche une nouvelle publication Pages.

## Configuration GitHub

Dans chaque dépôt, ouvrir **Settings → Pages** :

- MailFlow : source **GitHub Actions** ;
- GovFlow AI et Garde Tranquille : source **Deploy from a branch**, branche `main`, dossier `/ (root)`.

## Vérification

Après une mise à jour :

1. contrôler l’exécution dans l’onglet **Actions** ;
2. ouvrir l’URL GitHub Pages correspondante ;
3. effectuer un rechargement forcé si l’ancien contenu reste en cache ;
4. vérifier que le site ne contient que des données fictives autorisées.

Documentation officielle : [Configuration d’une source de publication GitHub Pages](https://docs.github.com/fr/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site).
