import React from "react";
import styled from "styled-components";
import BackgroundHero from "./BackgroundHero";
import ForegroundHero from "./ForegroundHero";
import MidgroundHero from "./MidgroundHero";

const StyledSVGWrapper = styled.div`
  position: relative;
  width: 50vw;
  height: 30vh;
`;

function ParallaxHeroSection() {
  return (
    <>
      <StyledSVGWrapper>
        <ForegroundHero />
        <MidgroundHero />
        <BackgroundHero />
      </StyledSVGWrapper>
    </>
  );
}

export default ParallaxHeroSection;
