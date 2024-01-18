import { SelectPage } from "@/shared/Types";
import AnchorLink from "react-anchor-link-smooth-scroll";
import styles from "./page.module.css"

type Props = {
  page: string,
  selectPage: string,
  setSelectedPage: (value: SelectPage) => void;
}

function Link({
  page,
  selectPage,
  setSelectedPage,
}: Props) {

  const selectedPage = page as SelectPage

  return (
    <AnchorLink
      className={`${selectPage === selectedPage ? styles.activeLink : ""} ${styles.link}`}
      href={`#${selectedPage}`} 
      onClick={() => setSelectedPage(selectedPage) }
    >
      {page}
    </AnchorLink>
  )
} 

export default Link