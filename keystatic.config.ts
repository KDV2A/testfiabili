import { config, fields, collection } from '@keystatic/core';
import React from 'react';

export default config({
  storage: import.meta.env.DEV
    ? { kind: 'local' }
    : {
        kind: 'github',
        repo: 'KDV2A/testfiabili',
      },
  ui: {
    brand: {
      name: 'Fiabilis.ai',
      mark: () => React.createElement('img', { src: '/logo.png', height: 24, alt: 'Fiabilis.ai' }),
    },
  },
  collections: {
    services: collection({
      label: 'Services / Solutions',
      slugField: 'title',
      path: 'src/content/services/*',
      format: { contentField: 'content' },
      schema: {
        title: fields.slug({ name: { label: 'Titre' } }),
        description: fields.text({ label: 'Description Courte' }),
        icon: fields.text({ label: 'Icône (Material Symbol name, ex. quiz, analytics)' }),
        url: fields.text({ label: 'URL de redirection (ex. https://...)' }),
        badge: fields.text({ label: 'Badge / Tag (ex. Nouveau, Populaire)' }),
        isFeatured: fields.checkbox({ label: 'Mettre en avant sur la page d\'accueil', defaultValue: true }),
        content: fields.markdoc({ label: 'Contenu détaillé' }),
      },
    }),
  },
});
