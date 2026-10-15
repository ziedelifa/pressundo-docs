---
title: 'Performance'
---

# Performance

Pressundo ne charge les assets d’administration que lorsqu’un schéma Pressundo est rendu. Les assets de la médiathèque WordPress ne sont demandés que si le schéma contient un champ média, y compris lorsqu’il est imbriqué.

Le benchmark 0.13 utilisé pendant le développement rendait 500 champs simples en quelques millisecondes de temps PHP sur l’environnement de test. Ces chiffres servent à comparer les versions, pas à promettre un temps universel car le matériel d’hébergement varie.

Pour les gros schémas :

- Organisez les longues pages en sections.
- Utilisez les options dynamiques avec mesure ; le cache par requête évite les callbacks répétés.
- Évitez les repeaters non bornés.
- Préférez les sélecteurs WordPress dédiés aux requêtes répétées personnalisées.
