import React from "react";
import { Link } from "react-router-dom";
import FontAwesome from "react-fontawesome";
import { PropTypes } from "prop-types";
const HomepageLink = (props) => {
  const { link, name } = props;

  HomepageLink.propTypes = {
    link: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    colors: PropTypes.object,
  };
  return (
    <div className="HomepageLink text-center my-5">
      <Link to={link}>
        {name}
        <FontAwesome className="arrow-down" name="arrow-right" />
      </Link>
    </div>
  );
};

export default HomepageLink;
