export const useAuth = () => {
  const AUTH_TOKEN = "AUTH_TOKEN";

  const authorized = () => {
    const localStorageItem = localStorage.getItem(AUTH_TOKEN);
    const token = localStorageItem && JSON.parse(localStorageItem);

    return token;
  };
  return { authorized };
};
