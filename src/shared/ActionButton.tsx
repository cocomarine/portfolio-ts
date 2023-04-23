import AnchorLink from "react-anchor-link-smooth-scroll";
import { SelectedPage } from "./types"; // enum

type Props = {
  children: React.ReactNode;
  setSelectedPage: (value: SelectedPage) => void;
}

const ActionButton = ({ children, setSelectedPage }: Props) => {
  return (
    <AnchorLink
      className="rounded-md bg-primary-100 px-10 py-2 hover:bg-primary-300"
      onClick={() => setSelectedPage(SelectedPage.Contact)}
      href={`#${SelectedPage.Contact}`}
    >
      {children}
    </AnchorLink>
  )
}

export default ActionButton;