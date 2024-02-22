import { useCallback } from "react";
import { Button } from "@mui/material";
import styled from "styled-components";
import FrameComponent from "./frame-component";
import SliderComponent from "./slider";

const TrandingTrads = styled.div`
  width: 493px;
  height: 64px;
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
const NewsChild = styled.div`
  width: 374px;
  height: 383.5px;
  position: relative;
  border-radius: var(--br-mini);
  border: 3px solid var(--color-aquamarine);
  box-sizing: border-box;
  display: none;
  max-width: 100%;
`;
const HeadLinesFor = styled.b`
  width: 316.4px;
  height: 92.7px;
  position: relative;
  display: inline-block;
  flex-shrink: 0;
  z-index: 1;
  @media screen and (max-width: 1050px) {
    font-size: var(--font-size-9xl);
  }
  @media screen and (max-width: 450px) {
    font-size: var(--font-size-2xl);
  }
`;
const LoremIpsumDolor = styled.div`
  align-self: stretch;
  height: 208.5px;
  position: relative;
  font-size: var(--font-size-mini);
  font-family: var(--font-tenor-sans);
  text-align: justify;
  display: inline-block;
  flex-shrink: 0;
  z-index: 1;
`;
const News = styled.div`
  width: 374px;
  border-radius: var(--br-mini);
  border: 3px solid var(--color-aquamarine);
  box-sizing: border-box;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: var(--padding-10xl) var(--padding-xs) var(--padding-24xl)
    var(--padding-xl);
  gap: var(--gap-2xs);
  max-width: 100%;
  text-align: center;
  color: var(--color-mediumseagreen-100);
  @media screen and (max-width: 450px) {
    padding-top: var(--padding-xl);
    padding-bottom: var(--padding-9xl);
    box-sizing: border-box;
  }
`;
const FrameParent = styled.div`
  width: 1552px;
  overflow-x: auto;
  flex-shrink: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: 0px var(--padding-xl) 0px 0px;
  box-sizing: border-box;
  gap: 0px 22px;
  max-width: 100%;
`;
const VectorFrame = styled.div`
  width: 1685px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px 0px 0px 0px;
  box-sizing: border-box;
  max-width: 110%;
  flex-shrink: 0;
`;
const RectangleFrame = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-end;
  padding: 0px 0px 0px 0px;
  box-sizing: border-box;
  max-width: 100%;
  flex-shrink: 0;
  font-size: var(--newz-headline-size);
  color: var(--color-white);
  font-family: var(--newz-headline);
`;
const NameSurnameFrameChild = styled.div`
  height: calc(100% - 1px);
  width: 40px;
  position: absolute;
  margin: 0 !important;
  top: -1px;
  bottom: 2px;
  left: 40px;
  border-radius: var(--br-3xs);
  background-color: var(--color-mediumseagreen-100);
`;
const NameSurnameFrameItem = styled.div`
  height: calc(100% - 1px);
  width: 40px;
  position: absolute;
  margin: 0 !important;
  top: -1px;
  right: 40px;
  bottom: 2px;
  border-radius: var(--br-3xs);
  background-color: var(--color-mediumseagreen-100);
`;
const VectorContainer = styled.div`
  height: 10px;
  width: 30px;
  position: relative;
  border-radius: var(--br-3xs);
  background-color: var(--color-mediumseagreen-100);
`;
const FrameChild = styled.img`
  align-self: stretch;
  width: 70px;
  position: relative;
  border-radius: var(--br-3xs);
  max-height: 100%;
  min-height: 10px;
`;
const VectorContainerParent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  gap: var(--gap-xl);
`;
const NameSurnameFrame = styled.div`
  height: 11px;
  width: 250px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  position: relative;
`;
const Button1 = styled(Button)`
  height: 45px;
  width: 124px;
  cursor: pointer;
`;
const ContactUsFrame = styled.div`
  width: 840px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: var(--gap-xl);
  max-width: 100%;
  @media screen and (max-width: 450px) {
    flex-wrap: wrap;
  }
`;
const FounderFrame = styled.div`
  width: 1473px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-end;
  padding: 0px var(--padding-xl);
  box-sizing: border-box;
  max-width: 100%;
  flex-shrink: 0;
`;
const News1 = styled.div`
  flex: 1;
  background-color: var(--color-gray);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: var(--padding-43xl) 0px var(--padding-57xl);
  box-sizing: border-box;
  gap: 15px 0px;
  max-width: 100%;
  @media screen and (max-width: 750px) {
    padding-top: var(--padding-21xl);
    padding-bottom: var(--padding-30xl);
    box-sizing: border-box;
  }
`;
const NewsFrameRoot = styled.section`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-end;
  padding: 0px 0px var(--padding-20xl) 0px;
  box-sizing: border-box;
  max-width: 100%;
  text-align: left;
  font-size: var(--font-size-15xl);
  color: var(--color-aquamarine);
  font-family: var(--font-lexend-zetta);
`;

const NewsFrame = () => {
  const onButton02Click = useCallback(() => {
    // Please sync "News" to the project
  }, []);

  return (
    <NewsFrameRoot>
      <News1>
        <TrandingTrads>{`TRANDING TRADS `}</TrandingTrads>
        <RectangleFrame>
          <VectorFrame>
            <FrameParent>
              <FrameComponent />
              <FrameComponent />

              <FrameComponent />
              {/* <SwiperSlider> */}
              <FrameComponent />
              {/* </SwiperSlider> */}
            </FrameParent>
          </VectorFrame>
        </RectangleFrame>
        <FounderFrame>
          <ContactUsFrame>
            <NameSurnameFrame>
              <NameSurnameFrameChild />
              <NameSurnameFrameItem />
              <VectorContainerParent>
                <VectorContainer />
                <FrameChild loading="eager" alt="" src="/rectangle-26.svg" />
                <VectorContainer />
              </VectorContainerParent>
            </NameSurnameFrame>
            <Button1
              endIcon={
                <img width="7.8px" height="12.7px" src="/vector-1.svg" />
              }
              disableElevation={true}
              variant="contained"
              sx={{
                textTransform: "none",
                color: "#b3f5d1",
                fontSize: "21",
                background: "rgba(255, 255, 255, 0.1)",
                borderRadius: "8px",
                "&:hover": { background: "rgba(255, 255, 255, 0.1)" },
                width: 124,
                height: 45,
              }}
              onClick={onButton02Click}
            >
              See All
            </Button1>
          </ContactUsFrame>
        </FounderFrame>
      </News1>
    </NewsFrameRoot>
  );
};

export default NewsFrame;
