export {};

declare global {
  interface RoutesType {
    identifier: string;
    name: string;
    layout: string;
    component: ReactNode;
    icon: JSX.Element | string;
    path: string;
    secondary?: boolean;
  }
}
