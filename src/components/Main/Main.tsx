import { Outlet } from "react-router-dom";

export const Main = () => {
  return (
    <main className="min-h-screen grow">
      <Outlet />
    </main>
  );
};
