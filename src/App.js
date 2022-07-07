import logo from "./assets/logo.svg";
import styled from "styled-components";
import ParallaxHeroSection from "./components/ParallaxHeroSection/ParallaxHeroSection";
import ContentSection from "./components/ContentSection";

const StyledHeroSection = styled.section`
  position: relative;
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-between: center;
  img {
    height: 25vmin;
    pointer-events: none;
  }
`;

const StylesTitle = styled.h1`
  color: black;
  font-size: 2rem;
  font-weight: 400;
  letter-spacing: 4px;
  text-align: center;
  text-transform: uppercase;
  padding-top: 4rem;
`;

function App() {
  return (
    <>
      <StyledHeroSection>
        <img src={logo} alt="Logo" />
        <StylesTitle>Back to smooth and firm skin</StylesTitle>
        <ParallaxHeroSection />
      </StyledHeroSection>
      <ContentSection
        title={"Lorem"}
        text={
          "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam"
        }
      />
    </>
  );
}

export default App;
