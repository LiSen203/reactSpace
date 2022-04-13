import styled from "styled-components";

export const AnchorRecommendWrapper = styled.div`
  width: 425px;
  height: 60px;
  padding: 10px 20px;
  display: flex;
  align-items: center;
  &:hover {
    background: #eee;
  }
  .image {
    position: relative;
    width: 40px;
    height: 40px;
    .hover {
      position: absolute;
      top: 10px;
      left: 10px;
      width: 24px;
      z-index: 1;
      background-position: -43px -53px;
      height: 24px;
      display: none;
    }
  }
  &:hover {
    .image .hover {
      display: block;
    }
  }
  .content {
    box-sizing: border-box;
    margin-left: 5px;
    height: 40px;
    width: 285px;
    margin-right: 5px;
    .text {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      width: 100%;
      height: 50%;
      line-height: 20px;
      :nth-child(2) {
        color: #999;
      }
    }
  }
  .tag {
    border: 1px solid #999;
    color: #999;
    text-align: center;
    width: 50px;
    height: 20px;
  }
`;
