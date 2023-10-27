import { Backdrop, CircularProgress } from "@mui/material";

/**
 * Глобальный компонент загрузки.
 *
 * @returns {JSX.Element} - JSX элемент для отображения загрузки.
 */

export const GlobalLoader = (): JSX.Element => {
  return (
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
  );
};
