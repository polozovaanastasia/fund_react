import { useState } from "react";
import Button from "../../components/UI/Button/Button";
import Input from "../../components/UI/Input/Input";
import { useAuth } from "../../hooks/useAuth";
import styles from "./Login.module.css";

function Login() {
    const { setIsAuth } = useAuth();

    const [login, setLogin] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    const onChangeLogin = (value: string) => {
        setLogin(value);
    };
    const onChangePassword = (value: string) => {
        setPassword(value);
    };

    const onSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsAuth(true);
    };
    return (
        <div className={styles["login"]}>
            <h2 className={styles["login_title"]}>Страница логина</h2>
            <form className={styles["login_form"]} onSubmit={onSubmit}>
                <Input
                    value={login}
                    placeholder="Введите логин"
                    onChange={onChangeLogin}
                />
                <Input
                    type="password"
                    value={password}
                    placeholder="Введите пароль"
                    onChange={onChangePassword}
                />
                <Button onClick={() => {}}>Войти</Button>
            </form>
        </div>
    );
}

export default Login;
