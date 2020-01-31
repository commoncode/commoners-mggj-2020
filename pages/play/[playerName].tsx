import Game from "../../components/core/Game";

const PlayPage = () => <Game />;

PlayPage.getInitialProps = ({ req, res, query }) => {
  return { playerName: "", partnerName: "" };
};

export default PlayPage;
