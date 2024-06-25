// Purpose: This file is used to configure the blog, including the author, title, description, and other settings.
import Intro from "./app/intro.mdx";

const siteData: any = {
  author: "Arthur", // author name
  title: "ArthDev", // website title
  description:
    "Um blog minimalista para artigos e meu desenvolvimento pessoal como desenvolvedor", // website description
  theme: "light", // light | dark
  language: "pt-BR", // zh-CN | en
  githubRepo: "https://github.com/arthcc/arth.dev", // your blog's github repo

  // how to change the favicon of the website?
  // change the app/favicon.ico file directly，or refer to the document below
  // https://nextjs.org/docs/app/api-reference/file-conventions/metadata/app-icons

  //header config
  header: {
    logo: "/logo.png", //  /public/logo.png
    title: "ArthDev", // header title

    // navigation bar
    routes: [
      {
        name: "Artigos",
        value: "/blog",
      },
      {
        name: "Projetos",
        value: "/projects",
      },

      {
        name: "Currículo",
        value:
          "https://drive.google.com/file/d/1InT7WK2GuoojV6PvS_ZAu1roJg83Z0YX/view?usp=sharing",
      },
    ],
  },

  home: {
    title: "Bem vindo ao ArthDev",

    // introduction or about me
    intro: Intro, // file path of the introduction
    socials: {
      email: "arthurdaconceicaocunha@gmail.com",
      github: "https://github.com/arthcc",
      linkedin: "https://linkedin.com/in/arthcc",
      facebook: "",
      instagram: "",
      youtube: "",
    },
  },

  blog: {
    title: "Portifólio",
    description: "Toda a minha vida tech, documentada",
  },

  project: {
    title: "O que eu tenho feito e contribuido:",
    description:
      "Um resumo de todos os projetos e de participacoes ativas na comunidade Tech ao longo dos anos",

    // name, description, link are required
    // github: the address of the project's github repo
    // status: active | inactive
    // and so on
    // you can add more fields according to your needs ,but you need to modify the code in the projects/page.tsx file
    projects: [
        {
            name: "Tech Ears",
            description:
              "Projeto OpenSource que criei com o objetivo de ajudar desenvolvedores a melhorarem seu inglês técnico por meio de um jogo estilo Wordle",
            link: "https://techears.vercel.app",
            github: "https://github.com/arthcc/tech-ears",
            status: "active",
          },
          {
            name: "TrilhaInfo",
            description:
              "Projeto OpenSource que participo com o objetivo de agregar e organizar conteúdos gratuitos em português para pessoas que querem ingressar na área de Tecnologia.",
            link: "https://trilha.info/",
            github: "https://github.com/flaviojmendes/trilhainfo",
            status: "active",
          },
      {
        name: "DentalDash",
        description:
          "UM ERP completo para a industria de odontologia, utlizando NestJs para a API  e front em NextJs",
        link: "",
        github: "https://github.com/DentalDash/dental-dash",
        status: "dev",
      },
      {
        name: "WooviChallenge",
        description: "Resolucao dos desafios propostos pela fintech Woovi",
        link: "https://woovi.com",
        github: "",
        status: "dev",
      },
    
     
    ],
    // status color and text
    getStatus: (status: string) => {
      switch (status) {
        case "active":
          return {
            variant: "default",
            text: "ACTIVE",
          };
        case "inactive":
          return {
            variant: "secondary",
            text: "INACTIVE",
          };
        case "bug":
          return {
            variant: "destructive",
            text: "BUG",
          };
        case "dev":
          return {
            variant: "outline",
            text: "DEV",
          };
        default:
          return {
            variant: "default",
            text: "ACTIVE",
          };
      }
    },

    view: "list", // grid | list

    target: "_blank", // _blank | _self | _parent | _top
  },
};

export default siteData;
