import { Link } from "react-router-dom";
import React, { HTMLAttributes } from "react";
import { v4 as uuidv4 } from "uuid";

/**
 * Компонент для многоуровневых хлебных крошек.
 *
 * @param {Array} crumbs - Массив объектов, каждый из которых содержит текст и путь для хлебных крошек.
 * @returns {JSX.Element} - Возвращает JSX элемент, который рендерит цепочку хлебных крошек.
 */

interface BreadcrumbItem {
  text: string;
  path?: string;
}

interface BreadCrumbsProps extends HTMLAttributes<HTMLDivElement> {
  crumbs: BreadcrumbItem[];
  current: string;
}

export const NavigationBar: React.FC<BreadCrumbsProps> = ({
  crumbs,
  current,
  ...props
}): JSX.Element => {
  return (
    <div className="flex items-center text-xl gap-1" {...props}>
      {crumbs.map((crumb, index) => (
        <React.Fragment key={uuidv4()}>
          {index > 0 && <span className="mx-1 text-primary">/</span>}
          <Link
            className="text-primary hover:text-violetStroke duration-300 opacity-60"
            to={crumb.path ? crumb.path : "/"}
          >
            {crumb.text}
          </Link>
        </React.Fragment>
      ))}
      <span className="mx-1 text-primary">/</span>
      <span className="text-primary font-bold">{current}</span>
    </div>
  );
};
