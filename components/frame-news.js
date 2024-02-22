import styled from "styled-components";

const AnalysisStocksChild = styled.div`
  width: 715px;
  height: 280px;
  position: relative;
  border-radius: var(--br-11xl) 0px 0px 0px;
  background-color: var(--color-gray);
  display: none;
  max-width: 100%;
`;
const Analysis = styled.h1`
  margin: 0;
  height: 88px;
  flex: 1;
  position: relative;
  font-size: inherit;
  font-weight: 500;
  font-family: inherit;
  display: inline-block;
  max-width: 100%;
  z-index: 1;
  @media screen and (max-width: 1050px) {
    font-size: var(--font-size-37xl);
  }
  @media screen and (max-width: 450px) {
    font-size: var(--font-size-23xl);
  }
`;
const AnalysisWrapper = styled.div`
  width: 559px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px var(--padding-4xs) 0px 0px;
  box-sizing: border-box;
  max-width: 100%;
`;
const AnalysisOfStocks = styled.b`
  width: 559px;
  height: 74px;
  position: relative;
  font-size: var(--newz-headline-size);
  display: inline-block;
  font-family: var(--newz-headline);
  color: var(--color-white);
  flex-shrink: 0;
  max-width: 100%;
  z-index: 1;
  @media screen and (max-width: 1050px) {
    font-size: var(--font-size-9xl);
  }
  @media screen and (max-width: 450px) {
    font-size: var(--font-size-2xl);
  }
`;
const AnalysisStocks = styled.div`
  flex: 1;
  border-radius: var(--br-11xl) 0px 0px 0px;
  background-color: var(--color-gray);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: var(--padding-5xl) var(--padding-xl) var(--padding-35xl)
    var(--padding-13xl);
  box-sizing: border-box;
  gap: 40px 0px;
  min-width: 465px;
  max-width: 100%;
  @media screen and (max-width: 750px) {
    gap: 40px 0px;
    min-width: 100%;
  }
`;
const FrameChild = styled.div`
  width: 694px;
  height: 256px;
  position: relative;
  border-radius: 0px var(--br-11xl) 0px 0px;
  background-color: var(--color-gray);
  display: none;
  max-width: 100%;
`;
const TargetSelling = styled.h1`
  margin: 0;
  width: 550px;
  height: 88px;
  position: relative;
  font-size: inherit;
  font-weight: 500;
  font-family: inherit;
  display: inline-block;
  flex-shrink: 0;
  max-width: 100%;
  z-index: 1;
  @media screen and (max-width: 1050px) {
    font-size: var(--font-size-37xl);
  }
  @media screen and (max-width: 450px) {
    font-size: var(--font-size-23xl);
  }
`;
const RectangleParent = styled.div`
  width: 694px;
  border-radius: 0px var(--br-11xl) 0px 0px;
  background-color: var(--color-gray);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-8xl) var(--padding-26xl);
  box-sizing: border-box;
  gap: 40px 0px;
  min-width: 694px;
  max-width: 100%;
  @media screen and (max-width: 1200px) {
    flex: 1;
  }
  @media screen and (max-width: 1050px) {
    min-width: 100%;
  }
  @media screen and (max-width: 750px) {
    gap: 40px 0px;
    padding-left: var(--padding-3xl);
    padding-right: var(--padding-3xl);
    box-sizing: border-box;
  }
`;
const AnalysisStocksParent = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: flex-start;
  gap: 0px 33px;
  max-width: 100%;
  @media screen and (max-width: 1200px) {
    flex-wrap: wrap;
  }
  @media screen and (max-width: 750px) {
    gap: 0px 33px;
  }
`;
const FrameSplitterChild = styled.div`
  width: 694px;
  height: 256px;
  position: relative;
  border-radius: 0px 0px 0px var(--br-11xl);
  background-color: var(--color-gray);
  display: none;
  max-width: 100%;
`;
const RectangleBackground = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px var(--padding-4xs) 0px 0px;
  box-sizing: border-box;
  max-width: 100%;
`;
const AnalysisOfStocks1 = styled.b`
  align-self: stretch;
  height: 74px;
  position: relative;
  font-size: var(--newz-headline-size);
  display: inline-block;
  font-family: var(--newz-headline);
  color: var(--color-white);
  flex-shrink: 0;
  z-index: 1;
  @media screen and (max-width: 1050px) {
    font-size: var(--font-size-9xl);
  }
  @media screen and (max-width: 450px) {
    font-size: var(--font-size-2xl);
  }
`;
const FrameSplitter = styled.div`
  flex: 0.9255;
  border-radius: 0px 0px 0px var(--br-11xl);
  background-color: var(--color-gray);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: var(--padding-8xl) var(--padding-57xl) var(--padding-8xl)
    var(--padding-40xl);
  box-sizing: border-box;
  gap: 40px 0px;
  min-width: 451px;
  max-width: 100%;
  @media screen and (max-width: 1200px) {
    flex: 1;
  }
  @media screen and (max-width: 750px) {
    gap: 40px 0px;
    padding-left: var(--padding-10xl);
    padding-right: var(--padding-19xl);
    box-sizing: border-box;
    min-width: 100%;
  }
`;
const FrameSplitterItem = styled.div`
  width: 694px;
  height: 256px;
  position: relative;
  border-radius: 0px 0px var(--br-11xl) 0px;
  background-color: var(--color-gray);
  display: none;
  max-width: 100%;
`;
const FrameSplitter1 = styled.div`
  flex: 1;
  border-radius: 0px 0px var(--br-11xl) 0px;
  background-color: var(--color-gray);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-8xl) var(--padding-26xl);
  box-sizing: border-box;
  gap: 40px 0px;
  min-width: 451px;
  max-width: 100%;
  @media screen and (max-width: 1200px) {
    flex: 1;
  }
  @media screen and (max-width: 750px) {
    gap: 40px 0px;
    padding-left: var(--padding-3xl);
    padding-right: var(--padding-3xl);
    box-sizing: border-box;
    min-width: 100%;
  }
`;
const FrameSplitterParent = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 0px 33px;
  max-width: 100%;
  @media screen and (max-width: 1200px) {
    flex-wrap: wrap;
  }
  @media screen and (max-width: 750px) {
    gap: 0px 33px;
  }
`;
const FrameHeadlines = styled.div`
  width: 1442px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-start;
  gap: 33px 0px;
  max-width: 100%;
  @media screen and (max-width: 750px) {
    gap: 33px 0px;
  }
`;
const FrameNewsRoot = styled.section`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px var(--padding-4xl) var(--padding-69xl);
  box-sizing: border-box;
  max-width: 100%;
  text-align: left;
  font-size: var(--font-size-51xl);
  color: var(--color-mediumseagreen-200);
  font-family: var(--font-dm-sans);
  @media screen and (max-width: 750px) {
    padding-bottom: var(--padding-38xl);
    box-sizing: border-box;
  }
`;

const FrameNews = () => {
  return (
    <FrameNewsRoot>
      <FrameHeadlines>
        <AnalysisStocksParent>
          <AnalysisStocks>
            <AnalysisStocksChild />
            <AnalysisWrapper>
              <Analysis>Analysis</Analysis>
            </AnalysisWrapper>
            <AnalysisOfStocks>Analysis of stocks....</AnalysisOfStocks>
          </AnalysisStocks>
          <RectangleParent>
            <FrameChild />
            <TargetSelling>Target Selling</TargetSelling>
            <AnalysisOfStocks>Analysis of stocks....</AnalysisOfStocks>
          </RectangleParent>
        </AnalysisStocksParent>
        <FrameSplitterParent>
          <FrameSplitter>
            <FrameSplitterChild />
            <RectangleBackground>
              <Analysis>{`Stock Price `}</Analysis>
            </RectangleBackground>
            <AnalysisOfStocks1>Analysis of stocks....</AnalysisOfStocks1>
          </FrameSplitter>
          <FrameSplitter1>
            <FrameSplitterItem />
            <TargetSelling>Historical data</TargetSelling>
            <AnalysisOfStocks>Analysis of stocks....</AnalysisOfStocks>
          </FrameSplitter1>
        </FrameSplitterParent>
      </FrameHeadlines>
    </FrameNewsRoot>
  );
};

export default FrameNews;
