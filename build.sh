#!/bin/bash

# build.sh — À exécuter dans la branche main

echo "🛠️ Compilation du SCSS..."
# sass scss/:css/

echo "🧹 Nettoyage du dossier public..."
rm -rf public/
mkdir public
mkdir public/css

echo "📁 Copie des fichiers vers public/..."
cp index.html public/
cp css/styles.min.css public/css/
cp -r js/ public/
cp -r images/ public/
cp -r fonts/ public/

echo "✅ Build terminé. Contenu prêt dans /public"
