import { NavLink } from "react-router-dom";
import styles from "./navigationMenu.styles.module.scss";

const NavigationMenu = ({ items = [], variant = "desktop", onNavigate, ariaLabel = "Primary navigation" }) => {
  const menuClassName = [styles.menu, styles[variant]].filter(Boolean).join(" ");
  const linkVariantClass = styles[`${variant}Link`];

  return (
    <nav className={menuClassName} aria-label={ariaLabel}>
      {items.map((item) => (
        <NavLink
          key={item.path}
          to={item.path}
          onClick={() => onNavigate?.()}
          className={({ isActive }) =>
            [styles.link, linkVariantClass, isActive ? styles.active : ""]
              .filter(Boolean)
              .join(" ")
          }
        >
          {item.label}
        </NavLink>
      ))}
    </nav>
  );
};

export default NavigationMenu;
