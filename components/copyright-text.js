import styled from "styled-components";

const ContactUs = styled.div`
  width: 340px;
  height: 64px;
  position: relative;
  font-weight: 500;
  font-family: var(--font-lexend-zetta);
  text-align: left;
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
const Service = styled.div`
  width: 88.2px;
  position: relative;
  letter-spacing: 0.3px;
  line-height: 24px;
  font-weight: 600;
  display: inline-block;
  flex-shrink: 0;
`;
const Support = styled.div`
  width: 93.8px;
  position: relative;
  letter-spacing: 0.3px;
  line-height: 24px;
  font-weight: 600;
  display: inline-block;
  flex-shrink: 0;
`;
const Company = styled.div`
  width: 110.6px;
  position: relative;
  letter-spacing: 0.3px;
  line-height: 24px;
  font-weight: 600;
  display: inline-block;
  flex-shrink: 0;
`;
const Legal = styled.div`
  width: 64.4px;
  position: relative;
  letter-spacing: 0.3px;
  line-height: 24px;
  font-weight: 600;
  display: inline-block;
  flex-shrink: 0;
`;
const JoinUs = styled.div`
  width: 82.6px;
  position: relative;
  letter-spacing: 0.3px;
  line-height: 24px;
  font-weight: 600;
  display: inline-block;
  flex-shrink: 0;
`;
const LegalJoinUsFrame = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: space-between;
  padding: 0px var(--padding-9xs) 0px 0px;
  box-sizing: border-box;
  min-height: 25px;
  gap: var(--gap-xl);
  @media screen and (max-width: 750px) {
    flex-wrap: wrap;
  }
`;
const ButtonIcon = styled.img`
  width: 492px;
  position: relative;
  max-height: 100%;
  object-fit: contain;
  max-width: 100%;
`;
const ServicesSupportFrame = styled.div`
  width: 620px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 23px 0px;
  max-width: 100%;
  font-size: var(--font-size-lg);
  color: var(--color-white);
`;
const Copyright = styled.div`
  width: 422px;
  height: 24px;
  position: relative;
  font-size: var(--font-size-mini);
  letter-spacing: 0.26px;
  line-height: 16px;
  color: var(--color-darkgray);
  display: inline-block;
  flex-shrink: 0;
  max-width: 100%;
`;
const ContactUs1 = styled.div`
  flex: 1;
  border-radius: 0px 0px var(--br-36xl) var(--br-36xl);
  background-color: var(--color-gray);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: var(--padding-29xl) var(--padding-xl) var(--padding-30xl)
    var(--padding-3xl);
  box-sizing: border-box;
  gap: 32px 0px;
  max-width: 100%;
  @media screen and (max-width: 750px) {
    gap: 32px 0px;
  }
  @media screen and (max-width: 450px) {
    padding-top: var(--padding-12xl);
    padding-bottom: var(--padding-13xl);
    box-sizing: border-box;
  }
`;
const CopyrightTextRoot = styled.footer`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-end;
  padding: 0px var(--padding-12xs) 0px 0px;
  box-sizing: border-box;
  max-width: 100%;
  text-align: center;
  font-size: var(--font-size-15xl);
  color: var(--color-aquamarine);
  font-family: var(--font-jost);
`;

const CopyrightText = () => {
  return (
    <CopyrightTextRoot>
      <ContactUs1 data-scroll-to="contactUsContainer">
        <ContactUs>{`CONTACT US `}</ContactUs>
        <ServicesSupportFrame>
          <LegalJoinUsFrame>
            <Service>Service</Service>
            <Support>Support</Support>
            <Company>Company</Company>
            <Legal>Legal</Legal>
            <JoinUs>Join Us</JoinUs>
          </LegalJoinUsFrame>
          <ButtonIcon loading="eager" alt="" src="/button-icon@2x.png" />
        </ServicesSupportFrame>
        <Copyright>
          Any text © Kaizanuniversal 2020. All right reserved
        </Copyright>
      </ContactUs1>
    </CopyrightTextRoot>
  );
};

export default CopyrightText;
