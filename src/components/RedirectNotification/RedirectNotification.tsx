import { Alert } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

/**
 * `RedirectNotification` - функциональный компонент, который отображает обратный таймер и перенаправляет пользователя на указанный путь, когда таймер достигает нуля.
 *
 * @component
 * @example
 * // Пример использования:
 * <RedirectNotification seconds={3} redirectTo="/home" />
 *
 * @param {Object} props - Свойства, переданные компоненту.
 * @param {number} props.seconds - Длительность (в секундах), в течение которой уведомление отображается перед перенаправлением.
 * @param {string} props.redirectTo - Путь, на который будет выполнено перенаправление пользователя после обратного отсчета.
 *
 * @returns {JSX.Element} Сообщение с уведомлением, отображающее таймер обратного отсчета.
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
