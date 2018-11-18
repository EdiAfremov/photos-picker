import styled from 'styled-components';

export const GalleryContainer = styled.div`
  max-width: 1420px;
  height: 100%;
  margin: 0 auto;
  margin-top: 60px;
  padding: 10px 4px 4px 4px;
  box-sizing: border-box;
`;
export const GalleryGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  background: #f7f8fa;
  width: 100%;
  height: 100%;
`;
export const TotalHints = styled.div`
  height: 15px;
  line-height: 15px;
  width: 100%;
  text-align: center;
  font-size: 12px;
  color: rgba(0, 0, 0, 0.45);
  font-size: 14px;
  margin: 10px 0;
`;

export const Loader = styled.div`
  width: 100%;
  height: ${(props) => (props.primary ? `200px` : `40px`)};
  text-align: center;
  box-sizing: border-box;
  padding: 5px 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const NodataMarkup = styled.div`
  width: 100%;
  height: 200px;
  text-align: center;
  box-sizing: border-box;
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  font-size: 20px;
`;
