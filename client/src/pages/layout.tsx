import { Navigate, Outlet } from "react-router-dom";

type IProps = {
  children: React.ReactNode;
};

export const PrivateRoute = ({ children }: IProps) => {
  const user = true;

  if (!user) {
    return <Navigate to="/login" />;
  }

  return children;
};

export const Layout = () => {
  return (
    <PrivateRoute>
      <Outlet />
    </PrivateRoute>
  );
};
