import React, { useEffect } from "react";
import AppPageDivider from "components/AppPageDivider";
import HomepageProfile from "./HomepageProfile";
import HomepageAboutMe from "./HomepageAboutMe";
import HomepageSkills from "./HomepageSkills";
import HomepageExperience from "./HomepageExperience";
import HomepagePortfolio from "./HomepagePorfolio";
import HomepageProjects from "./HomepageProjects";

const Homepage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="Homepage">
      <HomepageProfile />
      <HomepageAboutMe />
      <HomepageSkills />
      <HomepagePortfolio />
      <HomepageProjects />
    </div>
  );
};

export default Homepage;
