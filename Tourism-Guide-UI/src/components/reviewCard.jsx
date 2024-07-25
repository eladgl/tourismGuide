import styled from "styled-components";
import moment from "moment";

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
const ReviewCard = ({ img, category, date, title, content, ...rest }) => {
  const jsDate = new Date(date._seconds * 1000 + date._nanoseconds / 1000000);
  const formattedDate = moment(jsDate).format("YYYY-MM-DD");
  console.log({ img, category, formattedDate, title, content, ...rest });
  return (
    <div className="reviewCard">
      <Image className="reviewCard-image" src={img} />
      <Wrapper>
        <Row>
          <Label className="reviewCard-tag skew">{category}</Label>
          <Line className="reviewCard-line">|</Line>
          <Label className="reviewCard-date">{formattedDate}</Label>
        </Row>
        <Label className="reviewCard-title">{title}</Label>
        <Label className="reviewCard-content">{content}</Label>
      </Wrapper>
    </div>
  );
};

export default ReviewCard;
