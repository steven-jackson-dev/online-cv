import React, { useEffect } from 'react'
import './Homepage.scss'
import HomepageProfile from './HomepageProfile/HomepageProfile'
import HomepageAboutMe from './HomepageAboutMe/HomepageAboutMe';
import HomepageSkills from './HomepageSkills/HomepageSkills';
import Divider from '../../components/Divider/Divider';
import HomepageExperience from './HomepageExperience/HomepageExperience';
import HomepageEducation from './HomepageEducation/HomepageEducation';
import HomepagePortfolio from './HomepagePorfolio/HomepagePortfolio';
import HomepageProjects from './HomepageProjects/HomepageProjects';
import { HomepageContactMe } from './HomepageContactMe/HomepageContactMe';


const Homepage = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])


    return (
        <div className="Homepage">
            <HomepageProfile />
            <HomepageAboutMe />
            <HomepageSkills />
            <Divider />
            <HomepageExperience />
            <Divider />
            <HomepageEducation />
            <HomepagePortfolio />
            <HomepageProjects />
            <HomepageContactMe />
        </div >
    )
}

export default Homepage
