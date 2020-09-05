import React from 'react';
import { useTranslation } from 'react-i18next';

function MyFirstComponent() {
  const { t } = useTranslation();
  return <h1>{t('sections.main.title')}</h1>;
}

export default MyFirstComponent;
