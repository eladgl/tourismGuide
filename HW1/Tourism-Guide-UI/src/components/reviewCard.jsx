import styled from "styled-components";
import Image from "./image";
import Label from "./label";
import Line from "./line";

const Row = styled.div`
  display: flex;
  flex-direction: row;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.9375rem;
  margin: 0 2.38rem 2.84rem 0;
`;
const ReviewCard = ({ src, tag, date, title, content, ...rest }) => {
  return (
    <div className="reviewCard">
      <Image className="reviewCard-image" src={src} />
      <Wrapper>
        <Row>
          <Label className="reviewCard-tag skew">{tag}</Label>
          <Line className="reviewCard-line">|</Line>
          <Label className="reviewCard-date">{date}</Label>
        </Row>
        <Label className="reviewCard-title">{title}</Label>
        <Label className="reviewCard-content">{content}</Label>
      </Wrapper>
    </div>
  );
};

export default ReviewCard;
