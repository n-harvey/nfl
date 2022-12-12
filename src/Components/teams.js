import { Row, Col, Image } from "react-bootstrap";
import { Link } from "react-router-dom";

const Teams = (props) => {
  const { teams } = props;

  document.title = "NFL Teams";

  return (
    <>
      <Row
        xs={"4"}
        sm={"4"}
        className="h-100 overflow-auto text-center hide-scroll"
      >
        {teams.map((team) => {
          return (
            <>
              <Col className="">
                <Link to={"/team/" + team.guid}>
                  <Image fluid className="" src={team.logos[0].href} />
                </Link>
              </Col>
            </>
          );
        })}
      </Row>
    </>
  );
};

export default Teams;
