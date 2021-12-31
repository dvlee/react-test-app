import { ComponentType, createElement } from "react";
import { Navigate } from "react-router-dom";
import { ROUTES } from "../constants/routes";
import { useAuth } from "./../hooks/useAuth";

export const authorized =
  () =>
  <T>(Component: ComponentType<T>) => {
    const WrapComponent: ComponentType = (props: any) => {
      const { user } = useAuth();

      if (!user) {
        console.warn("not authorized");
        return createElement(Navigate, { to: ROUTES.LOGIN });
      }

      return createElement(Component, props);
    };

    return WrapComponent;
  };
