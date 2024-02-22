import { useCallback } from "react";
import styled from "styled-components";

const FrameLoginChild = styled.img`
  height: 100%;
  width: 100%;
  position: absolute;
  margin: 0 !important;
  top: 0px;
  right: -6px;
  bottom: -0.8px;
  max-height: 100%;
  object-fit: contain;
`;
const EllipseIcon = styled.div`
  height: 39px;
  width: 125px;
  position: relative;
  border-radius: 50%;
  background-color: var(--color-white);
`;
const Login = styled.div`
  position: relative;
`;
const AboutUs = styled.div`
  flex: 1;
  position: relative;
  white-space: nowrap;
  cursor: pointer;
`;
const Contact = styled.div`
  flex: 1;
  position: relative;
  cursor: pointer;
`;
const VectorArrowIcon = styled.img`
  height: 28.1px;
  width: 27px;
  position: relative;
`;
const FrameContent = styled.div`
  width: 438px;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: flex-start;
  gap: 0px 38px;
  max-width: 100%;
  @media screen and (max-width: 750px) {
    display: none;
  }
  @media screen and (max-width: 450px) {
    gap: 0px 38px;
  }
`;
const FrameGraph = styled.div`
  flex: 1;
  border-radius: var(--br-mini);
  background-color: var(--color-mediumseagreen-300);
  overflow: hidden;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: var(--padding-xs) var(--padding-xl) var(--padding-sm)
    var(--padding-2xl);
  box-sizing: border-box;
  gap: var(--gap-xl);
  top: 0;
  z-index: 99;
  position: sticky;
  max-width: 100%;
`;
const FrameLoginRoot = styled.header`
  align-self: stretch;
  height: 963px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  padding: var(--padding-xl) var(--padding-5xl) var(--padding-xl)
    var(--padding-4xl);
  box-sizing: border-box;
  position: relative;
  max-width: 100%;
  text-align: left;
  font-size: var(--font-size-2xl);
  color: var(--color-white);
  font-family: var(--font-tenor-sans);
`;

const FrameLogin = () => {
  const onABOUTUSTextClick = useCallback(() => {
    const anchor = document.querySelector(
      "[data-scroll-to='fACESBEHINDKAIZAN']"
    );
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onCONTACTTextClick = useCallback(() => {
    const anchor = document.querySelector(
      "[data-scroll-to='contactUsContainer']"
    );
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  return (
    <FrameLoginRoot>
      <FrameLoginChild alt="" src="/group-369@2x.png" />
      <FrameGraph>
        <EllipseIcon />
        <FrameContent>
          <Login>LOGIN</Login>
          <AboutUs onClick={onABOUTUSTextClick}>ABOUT US</AboutUs>
          <Contact onClick={onCONTACTTextClick}>CONTACT</Contact>
          <VectorArrowIcon loading="eager" alt="" src="/vector.svg" />
        </FrameContent>
      </FrameGraph>
    </FrameLoginRoot>
  );
};

export default FrameLogin;
