
import profile from './profile.jpeg';
import { faAppStore, faGithub, faGooglePlay } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons/faLinkedin';
import { } from '@fortawesome/free-solid-svg-icons';

export const navigation = {
  name: "Naga Venkata Dedeepya Padmanabhuni",
  links: [
    {
      title: "About",
      link: "#about",
    },

    {
      title: "Projects",
      link: "#projects",
    },
    {
      title: "Contact",
      link: "#contact",
    },
    {
      title: "Links",
      link: "/links",
    }
  ],
}
export const intro = {
  title: "Hey, I'm Dedeepya",
  //description: "A Computer Science Engineer creating mobile apps and static websites.",
  image: profile.src,
  icons: [
    {
      icon: faLinkedin,
      link: "https://in.linkedin.com/in/dedeepya-padmanabhuni",
    },
    {
      icon: faGithub,
      link: "https://github.com/Dedeepyapnv",
    },
  ]



}

export const about = {
  title: "Who I am",
  description: [
    "Hello! I'm Naga Venkata Dedeepya Padmanabhuni, a passionate and driven software engineer specializing in full-stack development ",
    "with a keen interest in Machine Learning (ML) and Artificial Intelligence (AI). With a solid foundation in",
    " Computer Science from Texas A\&M University-Kingsville and hands-on experience spanning various tech stacks,",
    "I thrive on tackling complex challenges and creating innovative solutions that make a real-world impact."
  ],
}



export const projects = {
  title: "Projects",
  cards: [
    {
      title: "Slash",
      description: "An e-commerce web application designed to aggregate and provide the best deals from multiple websites, offering users a streamlined platform to discover and purchase products at competitive prices across various online retailers",
      icons: [

        {
          icon: faGithub,
          link: "https://github.com/Dedeepyapnv",
        },
      ]
    },

    {
      title: "Portfolio",
      description: "A portfolio website template that helps you showcase your work, projects and skills as a software developer",
      icons: [
        {
          icon: faGithub,
          link: "https://github.com/Dedeepyapnv",
        },
      ]
    },
  ],
}

export const contact = {
  title: "Get in touch",
  description: "You can reach out by email at pnvdedeepya@gmail.com.",
  buttons: [
    {
      title: "Email Me",
      link: "mailto:pnvdedeepya@gmail.com",
      isPrimary: true,
    },

  ]
}

// SEARCH ENGINE 
export const SEO = {
  // 50 - 60 char  
  title: "Dedeepya Padmanabhuni ",
  //description: "I create mobile apps and static websites. I graduated from National University of Sciences and Technology (NUST) in 2020 with a degree in Computer Engineering.",
  image: profile.src,
}


