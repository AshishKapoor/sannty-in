import React from 'react';
import NavbarLayout from '@theme-original/Navbar/Layout';
import type NavbarLayoutType from '@theme/Navbar/Layout';
import SearchBlog from '@site/src/components/SearchBlog';
import styles from './styles.module.css';

type NavbarLayoutProps = React.ComponentProps<typeof NavbarLayoutType>;

export default function NavbarLayoutWrapper(props: NavbarLayoutProps): JSX.Element {
  return (
    <div className={styles.navbarWrapper}>
      <NavbarLayout {...props} />
      <div className={styles.searchBarContainer}>
        <SearchBlog isInline={true} />
      </div>
    </div>
  );
}
