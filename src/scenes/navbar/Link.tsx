import AnchorLink from "react-anchor-link-smooth-scroll";
import { SelectedPage } from "@/shared/types";

type Props = {
  page: string;
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void; // function
}

const Link = ({
  page,
  selectedPage,
  setSelectedPage,
}: Props) => {
  // turning name of each link to lower case without any space
  // to conform to the requirement of id names
  const lowerCasePage = page.toLowerCase().replace(/ /g, "") as SelectedPage; // telling TS to treat this as the enum value

  return (
    <AnchorLink 
      className={`${selectedPage === lowerCasePage ? "text-primary-500" : ""}
        transition duration-500 hover:text-primary-300
      `} // when selected, color changed. when hover over it, again color changed with transition
      href={`#${lowerCasePage}`}
      onClick={() => setSelectedPage(lowerCasePage)}
    >
      {page}
    </AnchorLink>
  )
}

export default Link;