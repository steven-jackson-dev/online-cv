import React, { useEffect } from 'react'
import Divider from './../../components/Divider/Divider';
import PortfolioRecent from './PortfolioRecent/PortfolioRecent';
import PortfolioPrevious from './PortfolioPrevious/PortfolioPrevious';
import PortfolioClientList from './PortfolioClientList/PortfolioClientList';
import './Portfolio.scss'


const Portfolio = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    return (
        <section id="Portfolio" className="py-5 mt-5">
            <PortfolioRecent />
            <Divider />
            <PortfolioPrevious />
            <Divider />
            <PortfolioClientList />
        </section>
    )
}

export default Portfolio
