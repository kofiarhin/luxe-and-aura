import { useEffect } from "react";
import styles from "./sideDrawer.styles.module.scss";

const joinClassNames = (...classNames) => classNames.filter(Boolean).join(" ");

const SideDrawer = ({ isOpen, onClose, id, title = "Menu", children }) => {
  useEffect(() => {
    if (typeof document === "undefined") {
      return undefined;
    }

    if (!isOpen) {
      document.body.style.removeProperty("overflow");
      return undefined;
    }

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [isOpen]);

  const handleClose = () => {
    if (!onClose) {
      return;
    }

    onClose();
  };

  return (
    <>
      <div
        className={joinClassNames(styles.overlay, isOpen ? styles.overlayOpen : "")}
        role="presentation"
        onClick={handleClose}
      />
      <aside
        id={id}
        className={joinClassNames(styles.drawer, isOpen ? styles.drawerOpen : "")}
        role="dialog"
        aria-modal={isOpen ? "true" : "false"}
        aria-hidden={!isOpen}
      >
        <div className={styles.drawerHeader}>
          <span className={styles.drawerTitle}>{title}</span>
          <button
            type="button"
            className={styles.closeButton}
            onClick={handleClose}
            aria-label="Close navigation menu"
          >
            <span className={styles.closeIcon} aria-hidden="true">
              &times;
            </span>
          </button>
        </div>
        <div className={styles.drawerContent}>{children}</div>
      </aside>
    </>
  );
};

export default SideDrawer;
