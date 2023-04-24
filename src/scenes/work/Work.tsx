import { SelectedPage } from "@/shared/types";

type Props = {
  title: string, 
  description: string,
  setSelectedPage: (value: SelectedPage) => void;
}

const Work = ({ title, description, setSelectedPage }: Props) => {
  return (
    <div className="mt-5 rounded-md border-2 border-gray-100 px-5 py-8 text-center">
      <h4 className="font-bold pb-4">{title}</h4>
      <p className="my-3">{description}</p>
    </div>
  )
}

export default Work;