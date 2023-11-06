import { Header } from "../Header/Header";
import { Footer } from "../Footer/Footer";
import { Main } from "../Main/Main";

/**
 * Layout компонент, который служит в качестве основного шаблона страницы, включая в себя Header, Main и Footer.
 *
 * Этот компонент используется для оборачивания основного содержимого страницы и обеспечения общей структуры.
 * Компоненты Header и Footer обычно содержат навигацию и копирайт соответственно, в то время как Main оборачивает основное содержимое.
 *
 * @returns {JSX.Element} Возвращает JSX элемент, который рендерит шаблон страницы с header, main и footer.
 */

export function Layout() {
  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  );
}
