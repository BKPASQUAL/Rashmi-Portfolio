import hris1 from "../images/Rashmi/HRIS/hris1.jpg";
import hris2 from "../images/Rashmi/HRIS/hris2.jpg";
import hris3 from "../images/Rashmi/HRIS/hris3.jpg";
import hris4 from "../images/Rashmi/HRIS/hris4.jpg";
import hris5 from "../images/Rashmi/HRIS/hris5.jpg";
import hris6 from "../images/Rashmi/HRIS/hris6.jpg";
import hris7 from "../images/Rashmi/HRIS/hris7.jpg";
import hris8 from "../images/Rashmi/HRIS/hris8.jpg";
import hris9 from "../images/Rashmi/HRIS/hris9.png";

import GPass1 from "../images/Rashmi/GPass/GPass1.jpg";
import GPass2 from "../images/Rashmi/GPass/GPass2.jpg";
import GPass3 from "../images/Rashmi/GPass/GPass3.jpg";
import GPass4 from "../images/Rashmi/GPass/GPass4.jpg";
import GPass5 from "../images/Rashmi/GPass/GPass5.jpg";

import ams1 from "../images/Rashmi/AMS/ams1.png";
import ams2 from "../images/Rashmi/AMS/ams2.png";
import ams3 from "../images/Rashmi/AMS/ams3.png";
import ams4 from "../images/Rashmi/AMS/ams4.png";
import ams5 from "../images/Rashmi/AMS/ams5.png";
import ams6 from "../images/Rashmi/AMS/ams6.png";
import ams7 from "../images/Rashmi/AMS/ams7.png";

import medi1 from "../images/Medicenece/medi1.png";
import medi2 from "../images/Medicenece/medi2.png";

import car1 from "../images/CarStore/car1.png";
import car2 from "../images/CarStore/car2.png";
import car3 from "../images/CarStore/car3.png";
import car4 from "../images/CarStore/car4.png";
import car5 from "../images/CarStore/car5.png";
import car6 from "../images/CarStore/car6.png";
import car7 from "../images/CarStore/car7.png";
import car8 from "../images/CarStore/car8.png";

import event1 from "../images/EventInventory/event1.png";
import event2 from "../images/EventInventory/event2.png";
import event3 from "../images/EventInventory/event3.png";
import event4 from "../images/EventInventory/event4.png";
import event5 from "../images/EventInventory/event5.png";
import event6 from "../images/EventInventory/event6.png";
import event7 from "../images/EventInventory/event7.png";
import event8 from "../images/EventInventory/event8.png";
import event9 from "../images/EventInventory/event9.png";

import green1 from "../images/Green/green1.png";
import green2 from "../images/Green/green2.png";
import green3 from "../images/Green/green3.png";
import green4 from "../images/Green/green4.png";
import green5 from "../images/Green/green5.png";
import green6 from "../images/Green/green6.png";

import ch1 from "../images/Hardware/ch1.png";
import ch2 from "../images/Hardware/ch2.png";
import ch3 from "../images/Hardware/ch3.png";
import ch4 from "../images/Hardware/ch4.png";

import vital1 from "../images/vitalWatch/vital1.png";
import vital2 from "../images/vitalWatch/vital2.png";
import vital3 from "../images/vitalWatch/vital3.png";
import vital4 from "../images/vitalWatch/vital4.png";
import vital5 from "../images/vitalWatch/vital5.png";
import vital6 from "../images/vitalWatch/vital6.png";

import resep1 from "../images/RecepeApp/resep1.png";
import resep2 from "../images/RecepeApp/resep2.png";
import resep3 from "../images/RecepeApp/resep3.png";
import resep4 from "../images/RecepeApp/resep4.png";

import ecorm1 from "../images/e-cormerce/e-corm1.png";
import ecorm2 from "../images/e-cormerce/e-corm2.png";
import ecorm3 from "../images/e-cormerce/e-corm3.png";
import ecorm4 from "../images/e-cormerce/e-corm4.png";
import ecorm5 from "../images/e-cormerce/e-corm5.png";

import emang1 from "../images/e-corm-management/e-mang1.png";
import emang2 from "../images/e-corm-management/e-mang2.png";
import emang3 from "../images/e-corm-management/e-mang3.png";
import emang4 from "../images/e-corm-management/e-mang4.png";

const ProjectData = [
  {
    title: "Medisense Laboratory Pvt Ltd",
    shortDescription:
      "A web-based platform to manage diagnostics operations, offering secure access to records, test results, and reports.",
    description:
      "This web-based platform streamlines the operations of Medisense Laboratory Pvt Ltd, a diagnostics company. It connects all departments and allows efficient management of customer and doctor records, patient data, and test results, facilitating a role-based system for secure data access.",
    stack: [
      "React",
      "RTK Query",
      "RTK",
      "HTML",
      "CSS",
      "RSuite",
      "Bootstrap",
      "Node.js",
      "Express",
      "Sequelize",
      "MySQL",
    ],
    features: [
      "Role-based access control for data security",
      "Customer and doctor record management",
      "Patient database maintenance",
      "Test result management",
      "Detailed reporting and analytics",
      "Receipts and billing management",
    ],
    images: [medi1, medi2],
    github_fe: "https://github.com/BKPASQUAL/Medisense_FE.git",
    github_be: "https://github.com/BKPASQUAL/medisense_be.git",
  },
  {
    title: "Green Light - Car Inspection Platform",
    shortDescription:
      "A platform providing detailed vehicle inspections with automated report generation and role-based access.",
    description:
      "Green Light is a car inspection platform developed for a car inspection company. It provides users with detailed inspection reports on various parts of a vehicle, offering a comprehensive assessment of its overall condition. This web-based application aims to simplify the inspection process for users and administrators, generating in-depth documentation for every vehicle inspected.",
    stack: ["React", "CSS", "Bootstrap", "RSuite", "Vercel"],
    features: [
      "Detailed inspection reports for each vehicle part",
      "Automated document generation for comprehensive inspections",
      "User-friendly web-based platform for both customers and inspectors",
      "Role-based access for inspectors and administrators",
    ],
    images: [green1, green2, green3, green4, green5, green6],
    github_fe: "https://github.com/BKPASQUAL/GreenLight.git",
    demo: "https://green-light-neon.vercel.app/home",
  },
  {
    title: "HRIS System",
    shortDescription:
      "An advanced Human Resource Information System (HRIS) built with PHP and MySQL, designed to streamline employee data management and HR processes",
    description:
      "This comprehensive HRIS system aims to optimize human resource management within organizations. Built using PHP as the server-side language, the system utilizes MySQL for robust employee data storage and management. The frontend leverages HTML, CSS, jQuery, and JavaScript to create an intuitive and user-friendly interface. The HRIS automates various HR tasks, enhancing data accuracy, reducing errors, and ensuring easy access to reports. By eliminating manual paperwork, it contributes to a paperless and environmentally sustainable work environment, while improving overall productivity. The system also allows seamless integration with other organizational systems to ensure smooth data flow.",
    stack: [
      "PHP",
      "MySQL",
      "HTML",
      "CSS",
      "jQuery",
      "JavaScript",
      "DBeaver (Database Management)",
      "SQL",
    ],
    features: [
      "Centralized employee data storage, ensuring accuracy and easy access.",
      "Automates HR tasks like attendance tracking, leave management, and payroll.",
      "User-friendly interface with intuitive navigation for HR professionals and employees.",
      "Quick and easy report generation for data-driven decision making.",
      "Eliminates paper-based processes, fostering a more sustainable and eco-friendly workplace.",
      "Secure database management using MySQL and DBeaver for scalable and reliable data handling.",
      "Seamless integration with other organizational systems for smooth data flow.",
      "Supports employee self-service for viewing personal data, leave requests, and payroll information.",
    ],
    images: [hris1, hris2, hris3, hris4, hris5, hris6, hris7, hris8, hris9],
    // github_fe: "https://github.com/BKPASQUAL/TPP_FE.git",
    // github_be: "https://github.com/BKPASQUAL/DialogFlow_BE.git",
  },
  {
    title: "Luxury Ride - Premium Car Store",
    shortDescription:
      "A sophisticated platform for exploring luxury cars with real-time updates and an admin dashboard.",
    description:
      "Luxury Ride is a sophisticated car dealership platform where users can explore and obtain details about luxury cars. This web application includes both a user-facing site and a management dashboard. Users can view car listings, request more details via an email-based inquiry system, and get real-time updates. The management dashboard allows administrators to manage car listings, inquiries, and site updates effectively, providing a seamless admin experience.",
    stack: [
      "React",
      "RTK Query",
      "ApexCharts",
      "MUI",
      "Bootstrap",
      "Google Icons",
      "Node.js",
      "Sequelize",
      "Express",
      "MySQL",
      "AWS EC2",
      "Vercel",
      "GitHub",
    ],
    features: [
      "Email-based inquiry system",
      "Detailed car information and specifications",
      "Real-time updates and site management",
      "Role-based access for user and admin functionality",
      "Admin dashboard for managing car listings and site data",
    ],
    images: [car1, car2, car3, car4, car5, car6, car7, car8],
    github_fe: "https://github.com/BKPASQUAL/Car-Store-FE.git",
    github_be: "https://github.com/BKPASQUAL/Car-Store-BE.git",
    github_management: "https://github.com/BKPASQUAL/Car-Store-Management.git",
    // demo: "https://luxuryrides.vercel.app/",
  },
  {
    title: "Agreement Management System (AMS)",
    shortDescription:
      "A system for managing and tracking various agreements within an organization.",
    description:
      "The Agreement Management System (AMS) is designed to simplify the creation, tracking, management, and analysis of agreements. This system centralizes all agreements in a single location and automates the workflows involved in the agreement process, ensuring reduced errors, faster approvals, and compliance management. It is an essential tool for organizations managing large volumes of agreements across different departments.",
    stack: ["PHP", "MySQL", "HTML", "CSS", "jQuery", "JavaScript", "Bootstrap"],
    features: [
      "Centralized repository for all agreements",
      "Workflow automation for faster approval cycles",
      "Error reduction through automated data entry and revisions",
      "Time and cost savings by streamlining processes",
      "Compliance management for legal and regulatory requirements",
      "Faster decision-making with real-time information",
      "Data analytics and reporting for agreement performance insights",
      "Client management in FIRE and AC sections",
      "Filtering and search functionalities for easy navigation",
      "Record management per client with service details, warranty due dates, and more",
    ],
    images: [ams2, ams1, ams3, ams4, ams5, ams6, ams7],
    github_fe: "https://github.com/yourusername/ams-fe.git",
    github_be: "https://github.com/yourusername/ams-be.git",
  },

  {
    title: "Gate Pass Management System",
    shortDescription:
      "A system to optimize and simplify gate pass management within an organization.",
    description:
      "Gate Pass Management System is a sophisticated platform designed to streamline and simplify gate pass management. It enables users to easily create, view, edit, and manage gate passes. Supervisors can approve or reject requests with a single click, promoting a transparent and efficient workflow. This system ensures seamless communication, improves productivity, and contributes to a paperless work environment.",
    stack: ["PHP", "MySQL", "HTML", "CSS", "jQuery", "JavaScript", "Bootstrap"],
    features: [
      "User-friendly Registration Page",
      "Efficient gate pass creation and management",
      "Supervisor dashboard for easy approval/rejection",
      "Item addition and messaging capabilities",
      "Paperless and environmentally friendly system",
      "Automatic error reduction",
      "Streamlined workflow for users and supervisors",
      "Detailed reports for analysis and decision-making",
    ],
    images: [GPass1, GPass2, GPass3, GPass4, GPass5], // Replace with actual image URLs
    // "github_fe": "https://github.com/yourusername/gatepass-fe.git",
    // "github_be": "https://github.com/yourusername/gatepass-be.git"
  },

  // {
  //   title: "Champika Hardware - Retail & Inventory Management System",
  //   shortDescription:
  //     "A platform for managing hardware distribution, retail operations, and inventory management.",
  //   description:
  //     "Champika Hardware is an ongoing project designed for managing hardware distribution and retail operations. It includes a comprehensive inventory system to handle stock management, customer records, supplier relationships, and billing processes. With a centralized database, the platform helps streamline inventory, billing, and data maintenance, enhancing efficiency for both wholesale and retail activities.",
  //   stack: [
  //     "React",
  //     "RTK Query",
  //     "Node.js",
  //     "Sequelize",
  //     "Express",
  //     "Tailwind CSS",
  //     "Figma",
  //     "MUI",
  //     "RSuite",
  //   ],
  //   features: [
  //     "Inventory management for hardware items",
  //     "Billing and receipt generation",
  //     "Customer and supplier management",
  //     "Database maintenance for customer and supplier records",
  //     "Centralized system for efficient retail and distribution operations",
  //   ],
  //   images: [ch1, ch2, ch3, ch4],
  //   github_fe: "https://github.com/BKPASQUAL/Champika-Hardware-FE.git",
  //   github_be: "https://github.com/YourRepo/ChampikaHardware_BE",
  // },

  {
    title: "Recipe App",
    shortDescription:
      "A platform for discovering and saving favorite recipes, with user account management and protected routes.",
    description:
      "The Recipe App is a self-learning project designed to help users discover and save their favorite recipes. It integrates OpenAPI to fetch a variety of recipes and allows users to create accounts, add recipes to their favorites, and remove them when desired. The app also includes protected routes using context for managing user sessions. This project focuses on developing a robust front-end with React and implementing user authentication features to provide a personalized experience.",
    stack: [
      "React",
      "Context API",
      "Node.js",
      "OpenAPI",
      "Tailwind CSS",
      "MUI",
    ],
    features: [
      "Fetch recipes from OpenAPI Data set",
      "User account creation and login",
      "Add and remove recipes from favorites",
      "Protected routes for authenticated users",
      "Personalized recipe management",
    ],
    images: [resep1, resep2, resep3, resep4],
    github_fe: "https://github.com/BKPASQUAL/RecipeApp_FE.git",
    github_be: "https://github.com/BKPASQUAL/RecipeApp_BE.git",
    demo: "https://recipe-app-fe-gilt.vercel.app/",
  },
  {
    title: "E-Commerce Site (Shoes Shop)",
    shortDescription:
      "A platform for discovering and purchasing shoes, with a cart feature and user session management.",
    description:
      "The E-Commerce Shoes Shop is a self-learning project where users can browse various shoes, add them to their cart, and manage their shopping experience. The app uses React.js for the front-end development and Context API for state management. The user can view available shoes, select items, and add them to the shopping cart. This project focuses on building a smooth shopping experience with personalized cart management features.",
    stack: ["React.js", "Context API", "Tailwind CSS", "MUI"],
    features: [
      "Browse a variety of shoes",
      "Search shoes by name",
      "Filter shoes by category",
      "Add shoes to the shopping cart",
      "View cart and manage selected items",
      "Responsive and user-friendly UI",
    ],
    images: [ecorm1, ecorm2, ecorm3, ecorm4, ecorm5],
    github_fe: "https://github.com/BKPASQUAL/E-Commerce-Site.git",
    demo: "https://e-commerce-site-rho-five.vercel.app/",
  },
  {
    title: "E-Commerce Site Management",
    shortDescription:
      "A full-stack platform for managing products and sales with a powerful dashboard and analytics.",
    description:
      "The E-Commerce Site Management is a self-learning project built with the MERN stack. It allows admins to manage products by adding, editing, updating, and deleting them. The app features a dashboard that provides insights into total users, total items, and total customers, along with product analytics visualized using Apex Charts. The project focuses on creating a seamless admin experience with responsive UI and efficient product management.\n\nLogin Credentials:\nEmail: admin@gmail.com\nPassword: 000000",
    stack: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Context API",
      "Apex Charts",
      "Tailwind CSS",
      "MUI",
      "RSuite",
    ],
    features: [
      "Admin dashboard with analytics",
      "Add, edit, update, and delete products",
      "Display total users, items, and customers",
      "Product quantity and pricing insights",
      "Responsive and user-friendly UI",
      "Charts and data visualization using Apex Charts",
    ],
    images: [emang1, emang2, emang3, emang4],
    github_fe: "https://github.com/BKPASQUAL/E-Commerce-Management-FE.git",
    github_be: "https://github.com/BKPASQUAL/E-Commerce-Management-BE.git",
    demo: "https://e-commerce-management-fe.vercel.app/",
  },
];

export default ProjectData;
