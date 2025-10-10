import React, { useState } from "react";
import { FiUser, FiLock } from "react-icons/fi";
import { LuEye, LuEyeClosed } from "react-icons/lu";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

import loginPageBookshelterLogo from "../../assets/icons/login-page-bookshelter-logo.svg";
import { loginUser } from "../../api/auth-login";
import styles from "./login-page.module.scss";
import toast from "react-hot-toast";

function Login() {
    const [showPassword, setShowPassword] = useState(false);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const togglePasswordVisibility = () => setShowPassword(!showPassword);

    const mutation = useMutation({
        mutationFn: loginUser,
        onSuccess: (data) => {
            setTimeout(() => {
                toast.success("Login successful!");
            }, 2000);
            localStorage.setItem("accessToken", data.accessToken);
            navigate("/", { replace: true });
        },
        onError: () => {
            toast.error("Something went wrong!");
        },
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        mutation.mutate({ username, password });
    };

    return (
        <section className={styles["login"]} aria-label="User login section">
            <div className={styles["login__container"]}>
                <header className={styles["login__header"]}>
                    <img
                        src={loginPageBookshelterLogo}
                        alt="Bookshelter logo"
                        className={styles["login__logo"]}
                        loading="lazy"
                    />
                </header>

                <main>
                    <form className={styles["login__form"]} aria-label="Login form" onSubmit={handleSubmit}>
                        <fieldset className={styles["login__fields"]}>
                            <label htmlFor="username" className={styles["login__label"]}>
                                <FiUser size={20} aria-hidden="true" />
                                <input
                                    id="username"
                                    name="username"
                                    type="text"
                                    placeholder="Username"
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                    autoComplete="username"
                                    required
                                    className={styles["login__input"]}
                                />
                            </label>

                            <label htmlFor="password" className={styles["login__label"]}>
                                <FiLock size={20} aria-hidden="true" />
                                <input
                                    id="password"
                                    name="password"
                                    type={showPassword ? "text" : "password"}
                                    placeholder="Password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    autoComplete="current-password"
                                    required
                                    className={styles["login__input"]}
                                />
                                <button
                                    type="button"
                                    className={styles["login__toggle-password"]}
                                    onClick={togglePasswordVisibility}
                                    aria-label={showPassword ? "Hide password" : "Show password"}
                                >
                                    {showPassword ? <LuEyeClosed /> : <LuEye />}
                                </button>
                            </label>
                        </fieldset>

                        <button type="submit" className={styles["login__button"]}>
                            Login
                        </button>
                    </form>
                </main>
            </div>
        </section>
    );
}

export default Login;
