import { RotateLoader } from "react-spinners";

export const Loader = () => (
  <div
    style={{
      display: "flex",
      width: "100%",
      justifyContent: "center",
      alignItems: "center",
    }}
  >
    <RotateLoader size={15} color="#D63636" />
  </div>
);
