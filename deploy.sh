#!/bin/bash

# deploy.sh — À exécuter dans la branche gh-pages

echo "🚨 Vérification que vous êtes dans gh-pages..."
branch=$(git branch --show-current)
if [ "$branch" != "gh-pages" ]; then
  echo "❌ Vous devez être dans la branche gh-pages pour exécuter ce script."
  exit 1
fi

# Optionnel : déplacer temporairement le dossier public s'il est là
echo "🧹 Nettoyage des anciens fichiers..."
rm -rf css js images fonts index.html

echo "📁 Copie depuis public"
cp -r public/* .

echo "✅ Contenu copié. Commit en cours..."
git add .
git commit -m "🔄 Déploiement depuis main"
git push

echo "🚀 Déploiement terminé sur gh-pages !"
