const GET_LANDING_PAGE = /* GraphQL */ `
  fragment image on UploadFile {
    alternativeText
    url
  }

  fragment logo on LandingPage {
    logo {
      ...image
    }
  }

  fragment header on LandingPage {
    header {
      title
      description
      button {
        label
        url
      }
      image {
        ...image
      }
    }
  }

  fragment sectionAboutProject on LandingPage {
    sectionAboutProject {
      image {
        ...image
      }
      title
      description
    }
  }

  fragment sectionTech on LandingPage {
    sectionTech {
      title
      TechItem {
        icon {
          ...image
        }
        title
      }
    }
  }

  fragment sectionConcepts on LandingPage {
    sectionConcepts {
      title
      concepts {
        title
      }
    }
  }

  fragment sectionModules on LandingPage {
    sectionModules {
      title
      modules {
        title
        subtitle
        description
      }
    }
  }

  fragment sectionAgenda on LandingPage {
    sectionAgenda {
      title
      description
    }
  }

  fragment pricingBox on LandingPage {
    pricingBox {
      totalPrice
      numberInstallments
      priceInstallment
      benefits
      button {
        label
        url
      }
    }
  }

  fragment sectionAboutUs on LandingPage {
    sectionAuthors {
      title
      authors {
        name
        role
        photo {
          ...image
        }
        description
        socialLinks {
          title
          url
        }
      }
    }
  }

  fragment sectionFaq on LandingPage {
    sectionFaq {
      title
      questions {
        question
        answer
      }
    }
  }

  query GET_LANDING_PAGE {
    landingPage {
      ...logo
      ...header
      ...sectionAboutProject
      ...sectionTech
      ...sectionConcepts
      ...sectionModules
      ...sectionAgenda
      ...pricingBox
      ...sectionAboutUs
      ...sectionFaq
    }
  }
`

export default GET_LANDING_PAGE
