import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiMoon, FiSun } from "react-icons/fi";
import { TfiSearch } from "react-icons/tfi";
import { LuCalendar } from "react-icons/lu";

import siteLogo from "../../../assets/icons/home-page-bookshelter-logo.svg";
import styles from "./side-header.module.scss";
import clsx from "clsx";

function Header({ setSearch, search }: any) {
    const getInitialTheme = (): "light" | "dark" => {
        if (typeof window === "undefined") return "light";
        return (localStorage.getItem("theme") as "light" | "dark") || "light";
    };

    const [theme, setTheme] = useState<"light" | "dark">(getInitialTheme);
    const [isLoggingOut, setIsLoggingOut] = useState(false);

    useEffect(() => {
        document.body.classList.toggle("dark-mode", theme === "dark");
        localStorage.setItem("theme", theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme((prev) => (prev === "light" ? "dark" : "light"));
    };

    const logout = () => {
        setIsLoggingOut(true);
        setTimeout(() => {
            localStorage.removeItem("accessToken");
            window.location.reload();
        }, 1000);
    };

    return (
        <header className={styles.header} aria-label="Site header">
            <div className={styles.header__container}>
                <div className={styles.header__top}>
                    <a href="/" aria-label="Go to homepage" className={styles.header__logo}>
                        <img src={siteLogo} alt="Bookshelter logo" loading="lazy" />
                    </a>

                    <div className={styles["search-panel"]}>
                        <form
                            className={styles.header__search}
                            role="search"
                            aria-label="Search books"
                            onSubmit={(e) => e.preventDefault()}
                        >
                            <TfiSearch aria-hidden="true" color="#B8B9BE" size={18} />
                            <input
                                id="search-books"
                                type="text"
                                name="query"
                                placeholder="Search books..."
                                autoComplete="off"
                                className={styles.header__searchInput}
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                            />
                        </form>
                    </div>

                    <div className={styles.header__actions}>
                        <button
                            type="button"
                            className={styles.header__themeToggle}
                            aria-label="Toggle light and dark mode"
                            onClick={toggleTheme}
                        >
                            <AnimatePresence mode="wait" initial={false}>
                                {theme === "dark" ? (
                                    <motion.div
                                        key="sun"
                                        initial={{ scale: 0.6, opacity: 0 }}
                                        animate={{ scale: 1, opacity: 1 }}
                                        exit={{ scale: 0.6, opacity: 0 }}
                                        transition={{ duration: 0.3, ease: "easeInOut" }}
                                    >
                                        <FiSun size={22} color="var(--grey)" />
                                    </motion.div>
                                ) : (
                                    <motion.div
                                        key="moon"
                                        initial={{ scale: 0.6, opacity: 0 }}
                                        animate={{ scale: 1, opacity: 1 }}
                                        exit={{ scale: 0.6, opacity: 0 }}
                                        transition={{ duration: 0.3, ease: "easeInOut" }}
                                    >
                                        <FiMoon size={22} color="var(--grey)" />
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </button>

                        <button
                            type="button"
                            className={clsx(styles.header__logoutBtn, isLoggingOut && styles.loading)}
                            aria-label="Log out of your account"
                            onClick={logout}
                            disabled={isLoggingOut}
                        >
                            {isLoggingOut ? (
                                <span className={styles["loading-dots"]}>
                                    Loading<span>.</span>
                                    <span>.</span>
                                    <span>.</span>
                                </span>
                            ) : (
                                "Logout"
                            )}
                        </button>
                    </div>
                </div>

                <div className={styles.header__bottom}>
                    <h3 className={styles.header__results} aria-live="polite">
                        Showing 9 result(s)
                    </h3>
                    <button type="button" className={styles.header__sortBtn} aria-label="Sort books by newest">
                        <LuCalendar aria-hidden="true" size={25} /> <span>Order by newest</span>
                    </button>
                </div>
            </div>
        </header>
    );
}

export default Header;
