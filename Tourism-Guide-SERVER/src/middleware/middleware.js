import cors from "cors";
import bodyParser from "body-parser";

export default function applyMiddleware(app) {
  app.use(cors());
  app.use(bodyParser.json());
}
