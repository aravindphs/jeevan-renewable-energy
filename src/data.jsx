import { IoCallOutline, IoLocationOutline } from "react-icons/io5";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { FaYoutube, FaInstagram } from "react-icons/fa";
import { CiLinkedin, CiFacebook } from "react-icons/ci";
import {
  profile2,
  profile3,
  profile4,
  profile5,
  panel,
  turbine,
  batteries,
  member1,
  member2,
  member3,
  member4,
} from "./assets";

export const navTabs = [
  { name: "Home", id: "header" },
  { name: "About Us", id: "about" },
  { name: "Services", id: "services" },
  // { name: "Team", id: "team" },
  { name: "Project", id: "project" },
  { name: "Clients", id: "testimonial" },
  { name: "FAQ", id: "faq" },
  { name: "Contact", id: "contact" },
];

export const services = [
  {
    name: "Residential Solars",
    image: "./src/assets/residential-01.jpeg",
    description: `One of our core services is the design and installation of residential solar power systems, tailored to meet the unique energy needs of homeowners.`,
  },
  {
    name: "Commercial Solars",
    image: "./src/assets/commercial-01.jpeg",
    description: `Not only homes but we also specialize in providing commercial solar solutions for businesses looking to reduce their energy costs and carbon footprint.`,
  },
  {
    name: "Industrial Solars",
    image: "./src/assets/industrial-01.jpeg",
    description: `We do Mega watt solar installations for industries aiming to achieve significant energy savings and sustainability goals through renewable energy adoption.`,
  },
];

export const teams = [
  {
    name: "Oluoma James",
    title: "Technician",
    profile: member1,
    social: [
      { name: "Facebook", icon: <CiFacebook />, url: "http://facebook.com" },
      { name: "LinkedIn", icon: <CiLinkedin />, url: "http://linkedin.com" },
      {
        name: "Youtube",
        icon: <FaYoutube />,
        url: "https://www.youtube.com/channel/UCEtnsPZQEd0l1tbr_nDQd5Q?sub_confirmation=1",
      },
      { name: "Instagram", icon: <FaInstagram />, url: "http://instagram.com" },
    ],
  },
  {
    name: "Mary Brown",
    title: "Technician",
    profile: member2,
    social: [
      { name: "Facebook", icon: <CiFacebook />, url: "http://facebook.com" },
      { name: "LinkedIn", icon: <CiLinkedin />, url: "http://linkedin.com" },
      {
        name: "Youtube",
        icon: <FaYoutube />,
        url: "https://www.youtube.com/channel/UCEtnsPZQEd0l1tbr_nDQd5Q?sub_confirmation=1",
      },
      { name: "Instagram", icon: <FaInstagram />, url: "http://instagram.com" },
    ],
  },
  {
    name: "Lawrence Onu",
    title: "Technician",
    profile: member3,
    social: [
      { name: "Facebook", icon: <CiFacebook />, url: "http://facebook.com" },
      { name: "LinkedIn", icon: <CiLinkedin />, url: "http://linkedin.com" },
      {
        name: "Youtube",
        icon: <FaYoutube />,
        url: "https://www.youtube.com/channel/UCEtnsPZQEd0l1tbr_nDQd5Q?sub_confirmation=1",
      },
      { name: "Instagram", icon: <FaInstagram />, url: "http://instagram.com" },
    ],
  },
  {
    name: "Joy Eze",
    title: "Technician",
    profile: member4,
    social: [
      { name: "Facebook", icon: <CiFacebook />, url: "http://facebook.com" },
      { name: "LinkedIn", icon: <CiLinkedin />, url: "http://linkedin.com" },
      {
        name: "Youtube",
        icon: <FaYoutube />,
        url: "https://www.youtube.com/channel/UCEtnsPZQEd0l1tbr_nDQd5Q?sub_confirmation=1",
      },
      { name: "Instagram", icon: <FaInstagram />, url: "http://instagram.com" },
    ],
  },
];

export const projects = [
  {
    title: "Residential Installation",
    image:
      "./src/assets/residential-01.jpeg",
    category: "Residential",
    description: `Success fully installed 3 KW Residential solar system for a family in Coimbatore, Tamil Nadu, India. This system is designed to meet the energy needs of the household while reducing their carbon footprint.`,
  },
  // {
  //   title: "Empowering Communities: Solar Solutions for a Sustainable Future",
  //   image:
  //     "https://www.solarpowerworldonline.com/wp-content/uploads/2019/07/ips1.jpg",
  //   category: "Residential",
  //   description: `We bring solar energy to communities, promoting sustainable living while reducing dependency on traditional power sources.`,
  // },
  // {
  //   title: "Harvesting Sunshine: The Green Energy Initiative Project",
  //   image: "https://www.biscaynetimes.com/downloads/2317/download/6.jpg",
  //   category: "Residential",
  //   description: `Join the green revolution with our innovative solar projects, capturing sunlight to create reliable, eco-friendly energy solutions.`,
  // },
  {
    title: "Industrial Installation",
    image:
      "./src/assets/industrial-01.jpeg",
    category: "Industrial",
    description: `Success fully installed 30KW industrial solar system for a manufacturing unit in Tiruppur, Tamil Nadu, India. This installation is aimed at significantly reducing the facility's energy costs and environmental impact.`,
  },
  // {
  //   title: "Power Vault: Solar Battery Storage Solutions",
  //   image:
  //     "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgd_ThhlfShBjbodGPZOKZR2v_IvCIMc1FRu8t9VFNAmGZttNxdVlMX87FUZ4Rk7m6eGS3OLKep06Fbr_IGpdN4zVJR1pPUKH5z2fiC9J3ThLwWotIn5PPBW3H_ezvr3xlPpDD30lD8JyGSFyDzkOEbgXHUEhXgiY1_hR93mwHQCzhKXPkyOWJ-FRbBHg/s1000/mumti%20power.jpg",
  //   category: "Industrial",
  //   description: `Store your solar energy efficiently with our high-performance battery solutions, ensuring backup power whenever you need it.`,
  // },
  {
    title: "Commercial Installation",
    image:
      "./src/assets/commercial-01.jpeg",
    category: "Commercial",
    description: `Success fully installed 20KW commercial solar for a housing community in Coimbatore, Tamil Nadu, India. This project aims to provide sustainable energy solutions to the community while lowering overall electricity expenses.`,
  },
];

export const faq = [
  {
    title: "How do solar panels work?",
    description: [
      "Solar panels convert sunlight into electricity using photovoltaic (PV) cells.",
      "When sunlight hits the cells, it creates an electric field that generates direct current (DC) electricity.",
      "This DC electricity is then converted to alternating current (AC) electricity using an inverter, making it usable for your home or business.",
    ],
  },
  {
    title: "What are the benefits of installing solar panels?",
    description: [
      "Installing solar panels can reduce or eliminate your electricity bills.",
      "Increase the value of your property.",
      "Decrease your carbon footprint and provide a renewable source of energy.",
      "Additionally, many regions offer incentives and rebates for solar installations.",
    ],
  },
  {
    title: "How much does a solar power system cost?",
    description: [
      "The cost of a solar power system varies depending on the size of the system, the type of equipment used, and your location.",
      "On average, a residential solar panel system can range from $15,000 to $25,000 before incentives and rebates.",
    ],
  },
  {
    title: "How long will it take for my solar panels to pay for themselves?",
    description: [
      "The payback period for solar panels typically ranges from 6 to 10 years.",
      "This depends on factors such as your energy usage, the cost of electricity in your area, and the available financial incentives.",
    ],
  },
  {
    title: "Will my solar panels work during a power outage?",
    description: [
      "Most grid-tied solar power systems will not function during a power outage for safety reasons.",
      "Exceptions apply if they are paired with a battery storage system or a solar generator that allows for off-grid operation.",
    ],
  },
  {
    title: "How much maintenance do solar panels require?",
    description: [
      "Solar panels require minimal maintenance.",
      "Regular cleaning to remove dust, dirt, and debris is generally sufficient.",
      "Periodic inspections to ensure everything is functioning properly are recommended.",
      "Most panels come with a 25-year warranty.",
    ],
  },
  {
    title: "Do I need a battery storage system?",
    description: [
      "While a battery storage system is not required, it can be beneficial.",
      "It allows for storing excess energy generated during the day for use at night or during power outages.",
      "Batteries can also help you become more energy independent.",
    ],
  },
];

export const testimonial = [
  {
    image: profile2,
    name: "Ramdas",
    review: ` Choosing Jeevan Renewable Energy was the best decision for my home. The installation was smooth, the team was professional, and my electricity bills have dropped significantly. Highly recommended!`,
  },
  {
    image: profile3,
    name: "Kishore",
    review: `I'm incredibly impressed with the quality of service provided. From consultation to final setup, everything was seamless. The solar panels are working perfectly and saving me money every month`,
  },
  {
    image: profile4,
    name: "Selvaraj",
    review: `The team did an outstanding job installing our solar system. They explained the entire process clearly and ensured everything was up and running in no time. We’re happy to be using clean energy now!`,
  },
  {
    image: profile5,
    name: "Aravind",
    review: `Fantastic experience from start to finish! The staff was knowledgeable, installation was quick, and the support team answered all my questions. I'm proud to be contributing to a greener future.`,
  },
];

export const contacts = [
  {
    name: "Email",
    value: "info.jeevan02@gmail.com",
    icon: <MdOutlineAlternateEmail />,
  },
  {
    name: "Phone Number",
    value: "+91 9500362308",
    icon: <IoCallOutline />,
  },
  {
    name: "Address",
    value: "Saravanampatti, Coimbatore",
    icon: <IoLocationOutline />,
  },
  {
    name: "Instagram",
    value: "jeevan_renewable_energy",
    icon: <FaInstagram />,
  },
];

export const footer = [
  {
    name: "Explore",
    routes: [
      { name: "Home", id: "header" },
      { name: "About Us", id: "about" },
      { name: "Services", id: "services" },
      // { name: "Team", id: "team" },
      { name: "Project", id: "project" },
      { name: "Clients", id: "testimonial" },
      { name: "FAQ", id: "faq" },
      { name: "Contact", id: "contact" },
    ],
  },
  {
    name: "Gallery",
    routes: [
      { name: "Privacy Policy" },
      { name: "Terms and Conditions" },
      { name: "Cookie Policy" },
    ],
  },
];
