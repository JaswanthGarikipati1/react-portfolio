import image1 from '../src/password-manager.png';
import image2 from '../src/waste-sorting.jpg';
import image3 from '../src/smart-attendance.png';

const logotext = "JASWANTH";
const meta = {
    title: "Jaswanth G",
    description: "Hello. I'm Jaswanth Garikipati, a recent Computer Science graduate.",
};

const introdata = {
    title: "I’m Jaswanth",
    animated: {
        first: "I love coding",
        second: "I code cool websites",
        third: "I develop mobile apps",
    },
    description: "Let's collaborate!",
    your_img_url: "https://images.unsplash.com/photo-1514790193030-c89d266d5a9d",
};

const dataabout = {
    title: "Get to know me!",
    aboutme: "I am a recent Computer Science graduate with a Master's degree from Kent State University. I am skilled in Python, JavaScript, Java, C++, HTML, CSS, React, and various databases. My notable projects include a Waste Sorting Assistance System, Secure Password Manager, Smart Attendance System, and a Smart Trolley Billing System, the latter of which I have also published a paper on. I excel in identifying system deficiencies, collaborating with teams, and developing custom applications, always striving for innovation and excellence.",
};
// const worktimeline = [{
//         jobtitle: "Designer of week",
//         where: "YAdfi",
//         date: "2020",
//     },
// ];

const skills = [{
        name: "Python",
        value: 85,
    },
    {
        name: "Java",
        value: 85,
    },
    {
        name: "Javascript",
        value: 80,
    },
    {
        name: "Flask",
        value: 75,
    },
    {
        name: "MongoDB",
        value: 85,
    },
];

const services = [{
        title: "Full Stack Web Development",
        description: "Creating responsive, user-friendly web applications using technologies like HTML, CSS, JavaScript, React, and Spring Boot, with a focus on clean code and seamless user experiences.",
    },
    {
        title: "Database Management and Design",
        description: "Developing and managing databases with MySQL and MongoDB, ensuring efficient data storage and retrieval, and implementing secure database solutions.",
    },
    {
        title: "Cybersecurity and Password Management",
        description: "Implementing secure systems for sensitive data, including encryption techniques and user authentication protocols, as applied in projects like the Secure Password Manager.",
    },
];

const dataportfolio = [{
        img: image2,
        description: "Waste Sorting Assistance System",
        link: "https://github.com/JaswanthGarikipati1/Waste_Sorting_Capstone_Group03",
    },
    // {
    //     img: "https://picsum.photos/400/800/?grayscale",
    //     description: "Secure Password Manager",
    //     link: "#",
    // },
    {
        img: image3,
        description: "Smart Attendance System",
        link: "https://github.com/JaswanthGarikipati1",
    },
    {
        img: image1,
        description: "Secure Password Manager",
        link: "https://github.com/JaswanthGarikipati1/password_manager",
    },
    // {
    //     img: "https://picsum.photos/400/700/?grayscale",
    //     description: "The wisdom of life consists in the elimination of non-essentials.",
    //     link: "#",
    // },
];

const contactConfig = {
    YOUR_EMAIL: "jaswanthgarikipati6@gmail.com",
    YOUR_FONE: "(330)459-2628",
    description: "Feel free to reach out if you have any questions, project opportunities, or just want to connect! Whether it's about a potential collaboration or exploring creative ideas, I’m always open to new conversations. Drop me a message, and I'll get back to you as soon as possible! ",
    // creat an emailjs.com account 
    // check out this tutorial https://www.emailjs.com/docs/examples/reactjs/
    YOUR_SERVICE_ID: "service_ndn6lnb",
    YOUR_TEMPLATE_ID: "template_sksmkii",
    YOUR_USER_ID: "gPU0ShnlAjuk0KyZz",
};

const socialprofils = {
    github: "https://github.com/JaswanthGarikipati1",
    //facebook: "https://facebook.com",
    linkedin: "http://linkedin.com/in/jaswanth-g-083515198",
    //twitter: "https://twitter.com",
};
export {
    meta,
    dataabout,
    dataportfolio,
    // worktimeline,
    skills,
    services,
    introdata,
    contactConfig,
    socialprofils,
    logotext,
};