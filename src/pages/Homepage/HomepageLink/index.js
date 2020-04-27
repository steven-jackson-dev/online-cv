import React from 'react'
import { Link } from "react-router-dom"
import FontAwesome from 'react-fontawesome'
import { PropTypes } from 'prop-types';
import './HomepageLink.scss'
const HomepageLink = props => {
    const { link, name, colors = { bgColor: '#313131', color: '#fff' } } = props;
    const { bgColor, color } = colors;

    HomepageLink.propTypes = {
        link: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        colors: PropTypes.object
    }
    return (
        <div className="HomepageLink text-center my-5">
            <Link to={link} style={colors && { color: color, backgroundColor: bgColor }} >{name}<FontAwesome className="arrow-down" name="arrow-right" /></Link>
        </div>
    )
}

export default HomepageLink
