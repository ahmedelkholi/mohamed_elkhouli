import self from "../img/self.png"
import mock1 from "../img/mock1.png"
import mock2 from "../img/mock2.png"


/* Hi there! Thanks for checking out my portfolio template. Be sure to read the comments to get a better understanding of
how to make this template work best for you! */

export let colors = ["rgb(0,255,164)", "rgb(166,104,255)"];
/*
I highly recommend using a gradient generator like https://gradientgenerator.paytonpierce.dev/ to generate a pair of colors that you like.
These colors will be used to style your name on the homepage, the background of your picture, and some other accents throughout
the site.
 */

/* 
This variable will change the layout of the website from multipage to single, scrollable page
*/
export let singlePage = false;

/*
So let's get started! Some of the info below is pretty self-explanatory, like 'firstName' and 'bio'. I'll try to explain anything
that might not be obvious right off the bat :) I recommend looking at the template example live using "npm start" to get an idea
of what each of the values mean.
 */

export const info = {
  firstName: "Mohamed",
  lastName: "El Khouli",
  initials: "js", // the example uses first and last, but feel free to use three or more if you like.
  position: "a Full Stack Developer",
  selfPortrait: self, // don't change this unless you want to name your self-portrait in the "img" folder something else!
  gradient: `-webkit-linear-gradient(135deg, ${colors})`, // don't change this either
  baseColor: colors[0],
  miniBio: [
    // these are just some "tidbits" about yourself. You can look at mine https://paytonjewell.github.io/#/ for an example if you'd like
    {
      emoji: "☕",
      text: "fueled by coffee",
    },
    {
      emoji: "🌎",
      text: "based in Morocco",
    },
    {
      emoji: "🏫",
      text: "ISTA NTIC 2 Student",
    },
    {
      emoji: "📧",
      text: "elkhoulimohameddev@gmail.com",
    },
  ],
  socials: [
    {
      link: "hhttps://www.facebook.com/profile.php?id=100011216927314",
      icon: "fa fa-facebook",
      label: "facebook",
    },
    {
      link: "https://www.instagram.com/moha_elkhouli/",
      icon: "fa fa-instagram",
      label: "instagram",
    },
    {
      link: "https://github.com/ahmedelkholi",
      icon: "fa fa-github",
      label: "github",
    },
    {
      link: "https://www.linkedin.com/in/mohamed-elkhouli/",
      icon: "fa fa-linkedin",
      label: "linkedin",
    },
    {
      link: "https://twitter.com",
      icon: "fa fa-twitter",
      label: "twitter",
    },
    // Feel free to remove any of these that you don't have. I'll write an FAQ on how to add new ones later, let me know if you have a request for an icon!
    // Just change the links so that they lead to your social profiles.
  ],
  bio: "Hi! I'm Mohamed ElKhouli, a Full Stack Developer passionate about crafting scalable web and desktop apps. I studied computer science and love solving complex problems creatively. When I'm not coding, I'm probably imagining the next big tech disruption. You should definitely hire me!",
  skills: {
    proficientWith: [
      "javascript",
      "react",
      "react native",
      "Redux",
      "node.js",
      "express",
      "mongoDB",
      "python",
      "java",
      "Jira",
      "Jenkins",
      "docker",
      "kubernetes",
      "php",
      "laravel",
      "git",
      "github",
      "bootstrap",
      "tailwind",
      "material-ui",
      "Dolibarr",
      "Odoo",

      "html5",
      "css3",
      "figma",
      "wordpress",
    ],
    exposedTo: ["Elctron js", "adobe illustrator"],
  },
  hobbies: [
    {
      label: "reading",
      emoji: "📖",
    },
    {
      label: "Gaming",
      emoji: "🎮",
    },
    {
      label: "movies",
      emoji: "🎥",
    },
    {
      label: "cooking",
      emoji: "🌶",
    },
    // Same as above, change the emojis to match / relate to your hobbies or interests.
    // You can also remove the emojis if you'd like, I just think they look cute :P
  ],
  portfolio: [
    // This is where your portfolio projects will be detailed
    {
      title: "Project 1",
      live: "http://mohamedelkhouli.free.nf/project/phpecom/index.php", //this should be a link to the live version of your project, think github pages, netlify, heroku, etc. Or your own domain, if you have it.
      source: "https://github.com/", // this should be a link to the **repository** of the project, where the code is hosted.
      image: mock1,
    },
    {
      title: "Project 2",
      live: "http://mohamedelkhouli.free.nf/",
      source: "https://github.com/",
      image: mock2,
    },
  ],
  certificates: [
    {
      name: "Developing Front-End Apps with React",
    },
    {
      name: "Mastering Laravel Framework and PHP",
    },
    {
      name: "Web Development in React.js: Build a Web App",
    },
    {
      name: "Getting Started with Git and GitHub",
    },
    {
      name: "Introduction to Cloud Computing",
    },
    {
      name: "Introduction to HTML, CSS, & JavaScript",
    },
    {
      name: "Introduction to Software Engineering",
    },
  ],
  cours: [
    {
      link: "https://www.coursera.org/user/d275b85eb86ce5f20e43b02aff6db98b",
    },
  ],
};