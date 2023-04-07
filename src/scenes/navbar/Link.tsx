import AnchorLink from "react-anchor-link-smooth-scroll";

type Props = {
  page: string;
  selectedPage: string;
  setSelectedPage: (value: string) => void; // function
}

const Link = ({
  page,
  selectedPage,
  setSelectedPage,
}: Props) => {
  // turning name of each link to lower case without any space
  // to conform to the requirement of id names
  const lowerCasePage = page.toLowerCase().replace(/ /g, "");

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