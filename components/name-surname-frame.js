import styled from "styled-components";

const NameSurnameFrameChild = styled.div`
  align-self: stretch;
  height: 663px;
  position: relative;
  border-radius: 0px var(--br-11xl) var(--br-11xl) 0px;
  background-color: var(--color-gray);
  display: none;
`;
const BackgroundRectangle = styled.div`
  align-self: stretch;
  flex: 1;
  position: relative;
  background-color: var(--color-gainsboro);
  z-index: 1;
`;
const PersonalInfoFrame = styled.div`
  height: 553px;
  width: 542px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px 0px var(--padding-mini);
  box-sizing: border-box;
  min-width: 542px;
  max-width: 100%;
  @media screen and (max-width: 1200px) {
    flex: 1;
  }
  @media screen and (max-width: 750px) {
    min-width: 100%;
  }
`;
const Name1 = styled.span``;
const Surname = styled.span`
  color: var(--color-mediumseagreen-200);
`;
const NameSurname = styled.h1`
  margin: 0;
  height: 91px;
  width: 536px;
  position: relative;
  font-size: inherit;
  font-weight: 500;
  font-family: inherit;
  display: inline-block;
  flex-shrink: 0;
  transform: rotate(90deg);
  max-width: 100%;
  z-index: 2;
  @media screen and (max-width: 1050px) {
    font-size: var(--font-size-37xl);
  }
  @media screen and (max-width: 450px) {
    font-size: var(--font-size-23xl);
  }
`;
const PersonalInfoFrameParent = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: flex-start;
  row-gap: 20px;
  max-width: 100%;
  @media screen and (max-width: 1200px) {
    flex-wrap: wrap;
  }
`;
const CoFounder = styled.h3`
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
const CoFounderWrapper = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px var(--padding-9xl) 0px var(--padding-mid);
  box-sizing: border-box;
  max-width: 100%;
  font-size: var(--font-size-36xl);
  color: var(--color-aquamarine);
  font-family: var(--font-lexend-zetta);
`;
const NameSurnameFrameRoot = styled.div`
  flex: 1;
  border-radius: 0px var(--br-11xl) var(--br-11xl) 0px;
  background-color: var(--color-gray);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: var(--padding-smi) 0px var(--padding-7xl) var(--padding-xs);
  box-sizing: border-box;
  gap: 7px 0px;
  min-width: 419px;
  max-width: 100%;
  text-align: left;
  font-size: var(--font-size-51xl);
  color: var(--color-white);
  font-family: var(--font-dm-sans);
  @media screen and (max-width: 750px) {
    min-width: 100%;
  }
`;

const NameSurnameFrame = () => {
  return (
    <NameSurnameFrameRoot>
      <NameSurnameFrameChild />
      <PersonalInfoFrameParent>
        <PersonalInfoFrame>
          <BackgroundRectangle />
        </PersonalInfoFrame>
        <NameSurname>
          <Name1>{`Name `}</Name1>
          <Surname>Surname</Surname>
        </NameSurname>
      </PersonalInfoFrameParent>
      <CoFounderWrapper>
        <CoFounder>{`CO-FOUNDER `}</CoFounder>
      </CoFounderWrapper>
    </NameSurnameFrameRoot>
  );
};

export default NameSurnameFrame;
