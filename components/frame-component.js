import styled from "styled-components";

const FrameChild = styled.div`
  width: 344px;
  height: 331px;
  position: relative;
  border-radius: var(--br-mini);
  border: 3px solid var(--color-aquamarine);
  box-sizing: border-box;
  display: none;
  max-width: 100%;
`;
const HeadLinesFor = styled.b`
  align-self: stretch;
  flex: 1;
  position: relative;
  z-index: 1;
  @media screen and (max-width: 1050px) {
    font-size: var(--font-size-9xl);
  }
  @media screen and (max-width: 450px) {
    font-size: var(--font-size-2xl);
  }
`;
const HeadLinesForTheSelectedNeWrapper = styled.div`
  align-self: stretch;
  height: 81px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px var(--padding-6xs) 0px var(--padding-2xs);
  box-sizing: border-box;
`;
const LoremIpsumDolor = styled.div`
  align-self: stretch;
  position: relative;
  font-size: var(--font-size-mini);
  font-family: var(--font-tenor-sans);
  text-align: justify;
  z-index: 1;
`;
const RectangleParent = styled.div`
  align-self: stretch;
  border-radius: var(--br-mini);
  border: 3px solid var(--color-aquamarine);
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: var(--padding-6xl) var(--padding-base) var(--padding-5xl)
    var(--padding-smi);
  gap: 22px 0px;
  max-width: 100%;
`;
const FrameWrapperRoot = styled.div`
  width: 344px;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-base) 0px 0px;
  box-sizing: border-box;
  max-width: 100%;
  text-align: left;
  font-size: var(--newz-headline-size);
  color: var(--color-white);
  font-family: var(--newz-headline);
`;

const FrameComponent = () => {
  return (
    <FrameWrapperRoot>
      <RectangleParent>
        <FrameChild />
        <HeadLinesForTheSelectedNeWrapper>
          <HeadLinesFor>Head lines for the selected news....</HeadLinesFor>
        </HeadLinesForTheSelectedNeWrapper>
        <LoremIpsumDolor>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
          facilisi. Vestibulum ante ipsum primis in faucibus orci luctus et
          ultrices posuere cubilia Curae; sed ut perspiciatis unde omnis iste
          natus error sit voluptatem accusantium doloremque laudantium. Duis
          aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur. Quisque rutrum. Aenean imperdiet.
        </LoremIpsumDolor>
      </RectangleParent>
    </FrameWrapperRoot>
  );
};

export default FrameComponent;
