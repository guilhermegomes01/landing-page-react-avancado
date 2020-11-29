type TechIcons = {
  icon: LogoProps
  title: string
}

type Concepts = {
  title: string
}

type Modules = {
  title: string
  subtitle: string
  description: string
}

type SocialLinks = {
  title: string
  url: string
}

export type Authors = {
  name: string
  role: string
  photo: LogoProps
  description: string
  socialLinks: SocialLinks[]
}

type Questions = {
  question: string
  answer: string
}

export type ButtonProps = {
  label: string
  url: string
}

export type LogoProps = {
  alternativeText: string
  url: string
}

export type HeaderProps = {
  title: string
  description: string
  button: ButtonProps
  image: LogoProps
}

export type SectionAboutProjectProps = {
  image: LogoProps
  title: string
  description: string
}

export type SectionTechProps = {
  title: string
  TechItem: TechIcons[]
}

export type SectionConceptsProps = {
  title: string
  concepts: Concepts[]
}

export type SectionModulesProps = {
  title: string
  modules: Modules[]
}

export type SectionAgendaProps = {
  title: string
  description: string
}

export type PricingBoxProps = {
  totalPrice: number
  numberInstallments: number
  priceInstallment: number
  benefits: string
  button: ButtonProps
}

export type SectionAuthorsProps = {
  title: string
  authors: Authors[]
}

export type SectionFaqProps = {
  title: string
  questions: Questions[]
}

export type LandingPageProps = {
  logo: LogoProps
  header: HeaderProps
  sectionAboutProject: SectionAboutProjectProps
  sectionTech: SectionTechProps
  sectionConcepts: SectionConceptsProps
  sectionModules: SectionModulesProps
  sectionAgenda: SectionAgendaProps
  pricingBox: PricingBoxProps
  sectionAuthors: SectionAuthorsProps
  sectionFaq: SectionFaqProps
}
