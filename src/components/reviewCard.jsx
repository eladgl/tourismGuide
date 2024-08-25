import moment from "moment";

import Image from "./image";
import Label from "./label";
import Line from "./line";

import { StyledRow, StyledColumn } from "../styles/common/containers";

// ReviewCard is a stateless functional component that displays a review card with an image, category, date, title, and content.

// Props:
// - img (string): The URL of the image to display for the review.
// - category (string): The category tag for the review, e.g., "Travel", "Food", etc.
// - date (object): A Firestore timestamp object with `_seconds` and `_nanoseconds` properties, representing the review date.
// - title (string): The title of the review.
// - content (string): The content or body of the review.
// - rest (object): Any additional props, which can be utilized or passed down if needed.

const ReviewCard = ({ img, category, date, title, content, ...rest }) => {
  const jsDate = new Date(date._seconds * 1000 + date._nanoseconds / 1000000);
  const formattedDate = moment(jsDate).format("YYYY-MM-DD");

  // Returns:
  // - A div element styled as a review card containing the image, category tag, formatted date, title, and content of the review.
  return (
    <div className="reviewCard">
      <Image className="reviewCard-image" src={img} />
      <StyledColumn
        alignItems="flex-start"
        gap="0.9375rem"
        margin="1rem auto"
        textAlign="center"
      >
        <StyledRow margin="0 auto">
          <Label className="reviewCard-tag skew">{category}</Label>
          <Line className="reviewCard-line">|</Line>
          <Label className="reviewCard-date">{formattedDate}</Label>
        </StyledRow>

        <Label className="reviewCard-title">{title}</Label>
        <Label className="reviewCard-content">{content}</Label>
      </StyledColumn>
    </div>
  );
};

export default ReviewCard;
