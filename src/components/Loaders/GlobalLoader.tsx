import { Backdrop, CircularProgress } from "@mui/material";

export const GlobalLoader = () => {
  return (
    <>
      <Backdrop
        sx={{
          color: "#333",
          zIndex: (theme: any) => theme.zIndex.drawer + 1,
        }}
        style={{ backgroundColor: "rgba(255, 255, 255)" }}
        open={true}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    </>
  );
};
