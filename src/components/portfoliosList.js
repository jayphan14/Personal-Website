// const portfolios = [
//     {
//       id: 1,
//       src: arrayDestruct,
//       title: "",
//       description: "",
//       technologies: [],
//     },
//   ];
import { FaIcons, FaPython, FaReact } from 'react-icons/fa'
import Beats from '..//assets/portfolio/Beats.jpeg'
import Scrblr from '..//assets/portfolio/Scrblr.png'
import Dcf from '..//assets/portfolio/Dcf.png'
import Covrletter from '..//assets/portfolio/Covrletter.png'
import Expense from '..//assets/portfolio/Expense.png'


const portfolios = [
    {
      id: 1,
      src: Beats,
      title: "Beats",
      description: "A Real-time Messaging App that shows each person's emotions by analyzing data captured by Apple Watches and previous conversions.",
      link: "https://devpost.com/software/beats",
      tech: []
    },
    {
      id: 2,
      src: Scrblr,
      title: "Scrblr",
      description: "A Team Meeting Platform that records, transcribe and summerize audio to create synchronized meeting notes. Integrated with Google Slides to seperate notes by slides.",
      link: "https://devpost.com/software/scr-blr",
      tech: []
    },
    {
      id: 3,
      src: Covrletter,
      title: "Covrletter.AI",
      description: "A Machine Learning Application that automatically generate a Cover Letter from a given Resume and Job Description.",
      link: "https://github.com/jayphan14/CovrLetter.AI",
      tech: []
    },
    {
      id: 4,
      src: Dcf,
      title: "DiscountedCashFlow",
      description: "A Web Application value a stock investment using that its expected future cash flows",
      link: "https://github.com/jayphan14/CovrLetter.AI",
      tech: []
    },
    {
      id: 5,
      src: Expense,
      title: "Expense Tracker",
      description: "A Web Application that let users create budgets and track their spendings. Weekly reports are issued via Email or Text to keep them informed of purchases.",
      link: "https://github.com/jayphan14/Etracker",
      tech: []
    },
  ];
export default portfolios;