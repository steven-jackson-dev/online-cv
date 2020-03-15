import AboutMe from '../templates/pages/AboutMe/AboutMe'
import Experience from '../templates/pages/Experience/Experience'
import Skills from '../templates/pages/Skills/Skills'
import Portfolio from '../templates/pages/Portfolio/Portfolio'
import Projects from '../templates/pages/Projects/Projects'
import Contact from '../templates/pages/Contact/Contact'

export default [ 
    {
        path: '/about',
        component: AboutMe,
    },
     {
        path: '/experience',
        component: Experience,
    },
     {
        path: '/skills',
        component: Skills,
    },
     {
        path: '/portfolio',
        component: Portfolio,
    },
    {
        path: '/projects',
        component: Projects,
    },
    {
        path: '/contact',
        component: Contact,
    },
    
     {
        path: '',
        component: AboutMe,
    },
    ]

