import { BeatLoader } from "react-spinners";

export const Loader = () => (
  <div
    style={{
      display: "flex",
      width: "100%",
      justifyContent: "center",
      alignItems: "center",
    }}
  >
    <BeatLoader size={15} color="#D63636" />
  </div>
);
