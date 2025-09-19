import { useCallback, useState } from "react";
import { useSelector } from "../../lib/reactRedux.js";
import {
  selectMeta,
  selectNavigation,
} from "../../store/slices/contentSlice.js";
import NavigationMenu from "../NavigationMenu/NavigationMenu.jsx";
import SideDrawer from "../SideDrawer/SideDrawer.jsx";
import styles from "./header.styles.module.scss";

const Header = () => {
  const navigation = useSelector(selectNavigation);
  const meta = useSelector(selectMeta);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const drawerId = "primary-navigation-drawer";

  const toggleDrawer = () => {
    setIsDrawerOpen((prev) => !prev);
  };

  const closeDrawer = useCallback(() => {
    setIsDrawerOpen(false);
  }, []);

  return (
    <header className={styles.header}>
      <div className={styles.branding}>
        <span className={styles.logo}>LuxeAura</span>
        <span className={styles.tagline}>{meta.tagline}</span>
      </div>
      <div className={styles.desktopNavigation}>
        <NavigationMenu items={navigation} variant="desktop" />
      </div>
      <button
        type="button"
        className={styles.menuToggle}
        onClick={toggleDrawer}
        aria-expanded={isDrawerOpen}
        aria-controls={drawerId}
      >
        <span className={styles.toggleLabel}>Menu</span>
        <span className={styles.toggleIcon} aria-hidden="true">
          <span />
          <span />
          <span />
        </span>
      </button>
      <SideDrawer
        id={drawerId}
        isOpen={isDrawerOpen}
        onClose={closeDrawer}
        title="Menu"
      >
        <NavigationMenu
          items={navigation}
          variant="mobile"
          onNavigate={closeDrawer}
          ariaLabel="Mobile navigation"
        />
      </SideDrawer>
    </header>
  );
};

export default Header;
