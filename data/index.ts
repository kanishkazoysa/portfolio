export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Experience", link: "#experience" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "I prioritize client collaboration, fostering open communication ",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[50vh]",
    imgClassName: "w-150 h-100 ",
    titleClassName: "justify-start",
    spareImg: "/bulb.png",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start ",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently building a Application like Uber",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "Land Measuring and Management Application",
    des: "Fieldmaster is an innovative software solution designed to streamline land management by integrating advanced mapping technology with robust calculation algorithms. This comprehensive application consolidates multiple essential functions into a single, user-friendly platform, making land measurement and planning more efficient and accessible.",
    img: "/fieldmaster.png",
    iconLists: ["/re.svg", "/tail.svg", "/js.png", "/expo.png", "/nodejs.png", "/mongoDb.png","/GCP.png","/css.png"],
    githubLink: "https://github.com/kanishkazoysa/FieldMaster.git",
    liveLink: "https://field-master-frontend.vercel.app/",
  },
  {
    id: 2,
    title: "Insta - Social Media Web App",
    des: "I'm a diligent professional with a passion for continual learning and growth. Leveraging my expertise in React, Node.js, TypeScript, and Express, I recently developed a social media web application on the Appwrite cloud platform. By incorporating Tailwind CSS and ShadowCSS libraries, I ensured seamless responsiveness across all devices.",
    img: "/insta.png",
    iconLists: ["/nodejs.png", "/tail.svg", "/ts.svg", "/react.png", "/appwrite.png","/vite.png"],
    githubLink: "https://github.com/kanishkazoysa/Insta.git",
    liveLink: "https://insta-mocha.vercel.app/",
    
  },
  {
    id: 3,
    title: "Automated Hydroponic Farming Chamber",
    des: "The integration of automation systems into indoor hydroponic setups holds the key to unlocking even greater agricultural efficiency. By harnessing the power of automation,we can met culously fine-tune the conditions in which plants grow, ensuring optimal nutrient delivery, precise pH control, and a table, controlled environment(temperature,tds,light etc.).",
    img: "/hardware.png",
    iconLists: ["/arduino.png","/c.png"],
    // githubLink: "https://www.linkedin.com/in/kanishka-zoysa-2279422a7/details/projects/",
    // liveLink: "https://www.linkedin.com/in/kanishka-zoysa-2279422a7/details/projects/",
    
  },
  {
    id: 4,
    title: "Expense Tracker Web Application",
    des: "The Expense Tracker Web Application is a user-friendly tool designed to simplify personal finance management. The application allows users to,Add Incomes and Expenses,Automatic Balance Calculation,Graphical Charts to visualize your financial health with clear and intuitive charts that make understanding your spending patterns easier.",
    img: "/e-tracker.png",
    iconLists: ["/c1.png", "/net.png", "/tail.svg","/mysql.png"],
    githubLink: "https://github.com/kanishkazoysa/Expense-Tracker.git",
    
  },
  {
    id: 5,
    title: "3D - Tshirt Design Web Application",
    des: "I developed an interactive 3D T-shirt customization web application using Three.js, React, and Valtio for state management. The application allows users to personalize a T-shirt by changing its color, adding logos, and applying textures. The 3D models are dynamically rendered, providing a seamless user experience.",
    img: "/3d-tshirt.png",
    iconLists: ["/js.png", "/tail.svg", "/nodejs.png", "/three.svg"],
    githubLink: "https://github.com/kanishkazoysa/three.js-product-app.git",
    
  },
  {
    id: 6,
    title: "Ride - Passenger Transportation Mobile Application",
    des: "I'm working on this project. this project same as the Uber/Pick-me platforms. This project is a mobile application that connects passengers with drivers for safe and convenient transportation. The application features real-time tracking, secure payment processing, and user-friendly interfaces for both passengers and drivers.",
    img: "/workingontext.png ",
    iconLists: ["/ts.png", "/tail.svg", "/react.png", "/expo.png", "/postgresql.png","/nodejs.png"],
    githubLink: "https://github.com/kanishkazoysa?tab=repositories",
    
  },
];


export const workExperience = [
  {
    id: 1,
    title: "Web Development",
    desc: "Developed and maintained user-facing features using modern frontend technologies.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Mobile App Dev",
    desc: "Designed and developed mobile app for both iOS & Android platforms using React Native with Expo.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Hardware System Integrate with Arduino",
    desc: "As university 1st year project, we developed a hardware system that integrates with Arduino to automate hydroponic system.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Control and successfully complete Projects as a team leader",
    desc: "Successfully completed projects as a team leader in university indrustry-based software project and hardware project ",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
  {
    id: 5,
    title: "Dockerize and deploy applications",
    desc: "Dockerized and deployed applications to cloud platforms like AWS, Azure.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
  },
  {
    id: 6,
    title: "Work with google maps API",
    desc: "Worked with google maps API to develop a location-based service.like live path tracking ,measure area etc.",
    className: "md:col-span-2",
    thumbnail: "/exp3.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
  },
  {
    id: 2,
    img: "/twit.svg",
  },
  {
    id: 3,
    img: "/link.svg",
  },
];