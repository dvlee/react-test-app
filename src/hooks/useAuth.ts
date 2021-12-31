import { get } from "lodash";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "./../constants/routes";

export const useAuth = () => {
  const AUTH = "AUTH";
  let navigate = useNavigate();

  const localStorageItem = localStorage.getItem(AUTH);
  const parsedAuth = localStorageItem && JSON.parse(localStorageItem);

  // const [user, setUser] = useState(parsedAuth && parsedAuth.user);

  const user = get(parsedAuth, "user", null);

  const login = (data: Record<string, any>) => {
    const { login, password } = data;
    if (login === "admin" && password === "12345") {
      localStorage.setItem(
        AUTH,
        JSON.stringify({
          token: "SOME_AUTH_TOKEN_STRING",
          user: { id: 1, login, role: "Administrator" },
        })
      );
      navigate(ROUTES.PROFILE, { replace: true });
    } else alert("Неправильные данные");
  };

  const logout = () => {
    localStorage.removeItem(AUTH);
    navigate(ROUTES.HOME);
  };

  return { user, login, logout };
};
