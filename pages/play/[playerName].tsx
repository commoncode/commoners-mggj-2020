import Game from "../../components/core/Game";
import { PageHead } from "../index";

const PlayPage = () => (
  <>
    <PageHead />
    <Game />
  </>
);

PlayPage.getInitialProps = ({ req, res, query }) => {
  return { playerName: "", partnerName: "" };
};

export default PlayPage;
