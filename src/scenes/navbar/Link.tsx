import AnchorLink from "react-anchor-link-smooth-scroll";
import { SelectedPage } from "@/shared/types";

type Props = {
  page: string;
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
}

const Link = ({
  page,
  selectedPage,
  setSelectedPage,
}: Props) => {
  // removing space from page nam and making it lower case
  const lowerCasePage = page.toLowerCase().replace(/ /g, "") as SelectedPage;

  return (
    <AnchorLink 
      className={`${selectedPage === lowerCasePage ? "text-taupe" : ""}
        transition duration-500 hover:text-primary-300
      `} 
      href={`#${lowerCasePage}`}
      onClick={() => setSelectedPage(lowerCasePage)}
    >
      {page}
    </AnchorLink>
  )
}

export default Link;