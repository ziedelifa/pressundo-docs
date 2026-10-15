---
title: 'Dépannage'
---

# Dépannage

## Un champ n’apparaît pas

- Vérifiez que la configuration s’exécute après le chargement de Pressundo.
- Vérifiez que l’ID du champ est unique dans son scope.
- Vérifiez les conditions `show_if` / `hide_if`.

## Les choix Legacy sont vides

Pressundo parse de manière sûre les templates Vafpress courants, y compris les affectations de variables simples. Si le template dépend d’une exécution PHP arbitraire, migrez cette datasource plutôt que d’activer globalement les includes non sûrs.

## Sauvegarde refusée

La protection contre les sauvegardes concurrentes a peut-être détecté des données plus récentes. Rechargez l’écran, vérifiez les changements et enregistrez de nouveau.

## Besoin du diagnostic de compatibilité ?

Activez le [mode Debug](./debug-mode.md).
