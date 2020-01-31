const PlayPage = () => <div>This is the play page</div>;

PlayPage.getInitialProps = ({ req, res, query }) => {
  return { playerName: "", partnerName: "" };
};

export default PlayPage;
