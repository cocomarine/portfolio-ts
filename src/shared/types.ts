// PascalCase for enum
export enum SelectedPage {
  Home = "home",
  About = "about",
  Work = "work",
  Contact = "contact",
  LinkedIn = "linkedin",
  GitHub = "github",
}

export interface WorkType {
  title: string,
  description: string,
  demo: string,
  github: string,
}

export interface ContactType {
  icon: JSX.Element,
  mode: string,
  link: string,
}