import styled from "styled-components";

const NameSurnameFrameChild = styled.div`
  height: 63px;
  width: 645px;
  position: relative;
  border-radius: var(--br-11xl) 0px 0px var(--br-11xl);
  background-color: var(--color-gray);
  display: none;
  max-width: 100%;
`;
const Name1 = styled.span``;
const Surname = styled.span`
  color: var(--color-mediumseagreen-200);
`;
const NameSurname = styled.h1`
  margin: 0;
  height: 100%;
  width: 56px;
  position: relative;
  font-size: inherit;
  font-weight: 500;
  font-family: inherit;
  display: flex;
  flex-direction: "column";
  flex-shrink: 0;
  transform: rotate(-90deg);
  max-width: 100%;
  z-index: 2;
  @media screen and (max-width: 1050px) {
    font-size: var(--font-size-37xl);
  }
  @media screen and (max-width: 450px) {
    font-size: var(--font-size-23xl);
  }
`;
const FooterFrame = styled.div`
  align-self: stretch;
  height: 538px;
  position: relative;
  background-color: var(--color-gainsboro);
  z-index: 1;
`;
const Founder = styled.h3`
  margin: 0;
  height: 64px;
  flex: 1;
  position: relative;
  font-size: inherit;
  font-weight: 500;
  font-family: inherit;
  display: inline-block;
  max-width: 100%;
  z-index: 1;
  @media screen and (max-width: 1050px) {
    font-size: var(--font-size-25xl);
  }
  @media screen and (max-width: 450px) {
    font-size: var(--font-size-14xl);
  }
`;
const FounderTitleFrame = styled.div`
  width: 444px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px var(--padding-6xl) 0px 0px;
  box-sizing: border-box;
  max-width: 100%;
`;
const ContactUsFrame = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 22px 0px;
  max-width: 100%;
`;
const CoFounderFrame = styled.div`
  width: 542px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-smi) 0px 0px;
  box-sizing: border-box;
  min-width: 542px;
  max-width: 100%;
  font-size: var(--font-size-36xl);
  color: var(--color-aquamarine);
  font-family: var(--font-lexend-zetta);
  @media screen and (max-width: 1050px) {
    flex: 1;
  }
  @media screen and (max-width: 750px) {
    min-width: 100%;
  }
`;
const NameSurnameFrameRoot = styled.div`
  width: 645px;
  border-radius: var(--br-11xl) 0px 0px var(--br-11xl);
  background-color: var(--color-gray);
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px 0px var(--padding-7xl);
  box-sizing: border-box;
  row-gap: 20px;
  max-width: 100%;
  text-align: left;
  font-size: var(--font-size-51xl);
  color: var(--color-white);
  font-family: var(--font-dm-sans);
  @media screen and (max-width: 1050px) {
    flex-wrap: wrap;
  }
`;

const NameSurnameFrame1 = () => {
  return (
    <NameSurnameFrameRoot>
      <div
        style={{
          display: "flex",
        }}
      >
        <NameSurname>
          <Name1>{`Name `}</Name1>
          <Surname>Surname</Surname>
        </NameSurname>
      </div>
      <CoFounderFrame>
        <ContactUsFrame>
          <FooterFrame />
          <FounderTitleFrame>
            <Founder>{`FOUNDER `}</Founder>
          </FounderTitleFrame>
        </ContactUsFrame>
      </CoFounderFrame>
    </NameSurnameFrameRoot>
  );
};

export default NameSurnameFrame1;
