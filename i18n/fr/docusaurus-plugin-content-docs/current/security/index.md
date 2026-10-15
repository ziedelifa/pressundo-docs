---
title: 'Modèle de sécurité'
---

# Modèle de sécurité

Pressundo 1.0 a été durci avant la stable. La sauvegarde admin combine nonces/capabilities WordPress, sanitization/validation centralisée, restrictions de protocoles, limites legacy sûres et garde de révision contre les formulaires obsolètes.

Valeurs par défaut importantes :

- callbacks legacy PHP arbitraires whitelistés : **désactivés** ;
- fallback d’include PHP legacy non sûr : **désactivé** ;
- protocoles URL/media URL : HTTP/HTTPS uniquement ;
- fallback de type inconnu : sanitization récursive ;
- limite serveur repeater : 250 lignes par défaut ;
- champs Code/CSS/JavaScript : texte normalisé inerte, jamais exécuté par la sanitization.
