import { Alert } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

interface RedirectNotificationProps {
  seconds: number;
  redirectTo: string;
}

export const RedirectNotification: React.FC<RedirectNotificationProps> = ({
  seconds,
  redirectTo,
}) => {
  const [timer, setTimer] = useState(seconds);
  const navigate = useNavigate();

  useEffect(() => {
    const countdown = setInterval(() => {
      setTimer((prevTimer) => prevTimer - 1);
    }, 1000);

    return () => clearInterval(countdown);
  }, []);

  useEffect(() => {
    if (timer === 0) {
      navigate(redirectTo);
    }
  }, [timer, navigate, redirectTo]);

  return (
    <Alert severity="success">
      Redirecting in <span className="text-orange-600">{timer}</span> seconds...
    </Alert>
  );
};
