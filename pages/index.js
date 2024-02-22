import FrameLogin from "../components/frame-login";
import FrameNews from "../components/frame-news";
import NewsFrame from "../components/news-frame";
import styled from "styled-components";
import NameSurnameFrame1 from "../components/name-surname-frame1";
import NameSurnameFrame from "../components/name-surname-frame";
import CopyrightText from "../components/copyright-text";

const FacesBehindKaizan = styled.div`
  height: 64px;
  width: 618px;
  position: relative;
  font-weight: 500;
  display: inline-block;
  flex-shrink: 0;
  max-width: 100%;
  @media screen and (max-width: 1050px) {
    font-size: var(--font-size-8xl);
  }
  @media screen and (max-width: 450px) {
    font-size: var(--font-size-xl);
  }
`;
const FounderFrame = styled.div`
  width: 687px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-end;
  max-width: 100%;
`;
const NameSurnameFrame2 = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 0px 65px;
  max-width: 100%;
  @media screen and (max-width: 750px) {
    gap: 0px 65px;
  }
  @media screen and (max-width: 450px) {
    gap: 0px 65px;
  }
`;
const ContactInfoFrame = styled.section`
  width: 1395px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 0px var(--padding-xl) 72px;
  box-sizing: border-box;
  gap: 24px 0px;
  max-width: 100%;
  text-align: left;
  font-size: var(--font-size-15xl);
  color: #000;
  font-family: var(--font-lexend-zetta);
  @media screen and (max-width: 1050px) {
    padding-bottom: 47px;
    box-sizing: border-box;
  }
  @media screen and (max-width: 450px) {
    padding-bottom: var(--padding-12xl);
    box-sizing: border-box;
  }
`;
const WebsiteRoot = styled.div`
  width: 100%;
  position: relative;
  background-color: #ecfdf3;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 0px 0px var(--padding-3xl);
  box-sizing: border-box;
  gap: 14px 0px;
  letter-spacing: normal;
`;

const Website = () => {
  return (
    <WebsiteRoot>
      <FrameLogin />
      <FrameNews />
      <NewsFrame />
      <ContactInfoFrame>
        <FounderFrame>
          <FacesBehindKaizan data-scroll-to="fACESBEHINDKAIZAN">
            FACES BEHIND KAIZAN
          </FacesBehindKaizan>
        </FounderFrame>
        <NameSurnameFrame2>
          <NameSurnameFrame1 />
          {/* <NameSurnameFrame /> */}
        </NameSurnameFrame2>
      </ContactInfoFrame>
      <CopyrightText />
    </WebsiteRoot>
  );
};

export default Website;
