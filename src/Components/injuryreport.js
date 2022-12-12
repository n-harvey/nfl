import { useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";

const InjuryReport = (props) => {
  //Variables
  const { callRef, team } = props;
  let inactive = [];
  const [report, setReport] = useState([]);

  document.title = team.name;

  const team_data = async () => {
    let response = await callRef(team.injuries.$ref);
    response = await callRef(team.injuries.$ref + "&limit=" + response.count);
    for (let index = 0; index < response.items.length; index++) {
      let data = await callRef(response.items[index].$ref);
      if (data.type.name !== "INJURY_STATUS_ACTIVE") {
        let athlete = await callRef(data.athlete.$ref);
        inactive.push({
          name: athlete.fullName,
          comment: data.longComment,
          date: data.date,
        });
      }
    }
    setReport(inactive);
    console.log("finished injury calls");
  };

  //On load get team data
  useEffect(() => {
    console.log("injuryreport.js useEffect");

    team_data();

    return () => {
      console.log("running cleanup");
    };
  });

  console.log("Running InjuryReport.js");

  return (
    <>
      <Row className="overflow-auto">
        {report.map((report) => {
          return (
            <>
              <Row className="mb-1">
                <Col sm="3">
                  <Row>
                    <Col className="fw-bold">{report.name}</Col>
                  </Row>
                  <Row>
                    <Col>{report.date.slice(0, report.date.indexOf("T"))}</Col>
                  </Row>
                </Col>
                <Col sm="auto" lg="9" className="">
                  {report.comment}
                </Col>
              </Row>
            </>
          );
        })}
      </Row>
    </>
  );
};

export default InjuryReport;
