# Internationalisation (i18n)

Configuration pour la traduction multilingue de l'application.

## Langues supportées

- Français (fr)
- Anglais (en)

## Utilisation

```typescript
import { useTranslation } from 'react-i18next';

const { t } = useTranslation();
return <h1>{t('welcome')}</h1>;
```
