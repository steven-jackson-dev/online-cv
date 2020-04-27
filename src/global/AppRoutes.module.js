import Homepage from "pages/Homepage"
import AboutMe from '../pages/AboutMe';
import Experience from '../pages/Experience';
import Skills from '../pages/Skills';
import Portfolio from "pages/Portfolio/Portfolio";
import Projects from '../pages/Projects';

const AppRoutes = [
    {
        id: 'homepage',
        name: 'Home',
        path: '/',
        page: Homepage
    },
    {
        id: 'about',
        name: 'About',
        path: '/about',
        page: AboutMe
    },
    {
        id: 'experience',
        name: 'Experience',
        path: '/experience',
        page: Experience
    },
    {
        id: 'skills',
        name: 'Skills',
        path: '/skills',
        page: Skills
    },
    {
        id: 'portfolio',
        name: 'Portfolio',
        path: '/portfolio',
        page: Portfolio
    },
    {
        id: 'projects',
        name: 'Projects',
        path: '/projects',
        page: Projects
    },
]

export default AppRoutes
