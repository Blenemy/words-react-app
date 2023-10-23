import { Backdrop, CircularProgress } from "@mui/material";

export const GlobalLoader = () => {
  return (
    <>
      <Backdrop
        sx={{
          color: "#333",
          zIndex: (theme: any) => theme.zIndex.drawer + 1,
        }}
        style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
        open={true}
        onClick={() => {}}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    </>
  );
};
