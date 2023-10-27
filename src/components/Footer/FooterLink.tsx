/**
 * Компонент для отображения ссылки в подвале.
 *
 * @param {string} text - Текст ссылки.
 * @param {string} route - URL-адрес, на который ссылается ссылка.
 * @returns {JSX.Element} - JSX элемент для ссылки в подвале.
 */

interface FooterLinkProps {
  text: string;
  route: string;
}

export const FooterLink: React.FC<FooterLinkProps> = ({
  text,
  route,
}): JSX.Element => {
  return (
    <li className="hover:text-wave duration-300">
      <a href={route} target="_blank" rel="noreferrer">
        {text}
      </a>
    </li>
  );
};
