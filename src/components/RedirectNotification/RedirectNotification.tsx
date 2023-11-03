import { Alert } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

/**
 * `RedirectNotification` is a functional component that displays a countdown timer and redirects the user to a specified path once the timer reaches zero.
 *
 * @component
 * @example
 * // Example usage:
 * <RedirectNotification seconds={5} redirectTo="/home" />
 *
 * @param {Object} props - The properties passed to the component.
 * @param {number} props.seconds - The duration (in seconds) for which the notification is displayed before redirecting.
 * @param {string} props.redirectTo - The path to which the user will be redirected after the countdown.
 *
 * @returns {JSX.Element} An alert message displaying the countdown timer.
 */

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
