import moment from "moment";

import Image from "./image";
import Label from "./label";
import Line from "./line";

import { Row, StyledColumn } from "../styles/common/containers";

const ReviewCard = ({ img, category, date, title, content, ...rest }) => {
  const jsDate = new Date(date._seconds * 1000 + date._nanoseconds / 1000000);
  const formattedDate = moment(jsDate).format("YYYY-MM-DD");

  return (
    <div className="reviewCard">
      <Image className="reviewCard-image" src={img} />
      <StyledColumn
        alignItems="flex-start"
        gap="0.9375rem"
        margin="0 2.38rem 2.84rem 0"
      >
        <Row>
          <Label className="reviewCard-tag skew">{category}</Label>
          <Line className="reviewCard-line">|</Line>
          <Label className="reviewCard-date">{formattedDate}</Label>
        </Row>
        <Label className="reviewCard-title">{title}</Label>
        <Label className="reviewCard-content">{content}</Label>
      </StyledColumn>
    </div>
  );
};

export default ReviewCard;
