import React, { FC } from 'react';
import { useLocation } from 'react-router-dom';
import styles from './styles.module.scss';

import { BreadCrumbItem } from '@/components/Breadcrumbs/components/BreadCrumbItem';
import { createLinkFromArrayByIndex } from '@/components/Breadcrumbs/utils';
import { ROUTE_TRANSLATIONS } from '@/constants/translations';

export const BreadCrumbs: FC = () => {
  const { pathname } = useLocation();

  const pathNames = pathname
    .split('/')
    .filter((path) => path && ROUTE_TRANSLATIONS[path]);
  const isRoute = !!pathNames.length;

  return (
    <div className={styles.Breadcrumbs}>
      <div className={styles.Breadcrumbs__itemsWrapper}>
        <BreadCrumbItem
          text={ROUTE_TRANSLATIONS.main}
          link="/"
          isDisabled={!isRoute}
        />
        {pathNames.map((pathName, index) => (
          <BreadCrumbItem
            text={ROUTE_TRANSLATIONS[pathName]}
            link={createLinkFromArrayByIndex(pathNames, index)}
            isDisabled={index === pathNames.length - 1}
            key={pathName}
          />
        ))}
      </div>
    </div>
  );
};
