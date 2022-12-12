import { useParams } from "react-router-dom";
import { Row, Col, Image, Button, Accordion } from "react-bootstrap";
import InjuryReport from "./injuryreport";
import { Link } from "react-router-dom";

const TeamInfo = (props) => {
  const { teams, callRef } = props;
  const { teamID } = useParams();
  // const navigate = useNavigate();
  const team = teams.find((team) => team.guid === teamID);
  const show = false;

  console.log("Logging team from teaminfo: ", team);

  console.log("Running teaminfo.js");

  // if (team.name === 'Eagles'){
  //   team.name = 'Shitbirds'
  // }

  return (
    <>
      <Row className="">
        <Col xs="2" className="">
          <Image fluid src={team.logos[0].href} />
        </Col>
        <Col className="fs-1 fw-bold align-self-center">{team.name}</Col>
        <Col className="align-self-center text-center">
          <Link to={"/"}>
            <Button>Go Back</Button>
          </Link>
        </Col>
      </Row>
      <Row className="h-75 overflow-auto">
        <Col lg="" className="">
          <Accordion>
            <Accordion.Item eventKey="0">
              <Accordion.Header>Injury Report</Accordion.Header>
              <Accordion.Body className="">
                <InjuryReport show={show} callRef={callRef} team={team} />
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Col>
      </Row>
    </>
  );
};

export default TeamInfo;
