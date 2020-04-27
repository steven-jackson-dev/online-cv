import React, { useEffect } from 'react'
import AppPageDivider from 'components/AppPageDivider';
import PortfolioRecent from './PortfolioRecent'
import PortfolioPrevious from './PortfolioPrevious'
import PortfolioClientList from './PortfolioClientList'
import './Portfolio.scss'


const Portfolio = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    return (
        <section id="Portfolio" className="py-5 mt-5">
            <PortfolioRecent />
            <AppPageDivider />
            <PortfolioPrevious />
            <AppPageDivider />
            <PortfolioClientList />
        </section>
    )
}

export default Portfolio
