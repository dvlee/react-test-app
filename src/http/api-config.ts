export const ApiFetch = async (path: string, params?: Record<string, any>) =>
  await fetch(path, {
    ...params,
    headers: { "Content-Type": "application/json" },
  })
    .then((response) => response.json())
    .then((val) => val)
    .catch((error) => {
      console.warn(error.message);
      return error.message;
    });
