import { Outlet } from "react-router-dom";

/**
 * Main компонент, предназначенный для отображения основного содержимого страницы.
 *
 * Использует Outlet из react-router-dom для рендеринга дочерних маршрутов в текущем маршруте.
 * Элемент <main> обычно используется для основного содержимого документа, который является уникальным для каждого документа и обернут классами Tailwind CSS для стилизации.
 *
 * @returns {JSX.Element} Возвращает JSX элемент, который рендерит элемент <main> включающий Outlet.
 */

export const Main = () => {
  return (
    <main className="min-h-screen grow">
      <Outlet />
    </main>
  );
};
