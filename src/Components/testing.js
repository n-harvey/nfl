import { Row, Col, Image } from "react-bootstrap";

const Testing = (props) => {
  const { teams, callRef } = props;

  return (
    <>
      <Row className="">
        {teams.map((team) => {
          console.log(team);
          let data = [];

          for (const property in team) {
            console.log(`${property}: ${team[property]}`);
            if (typeof team[property] !== "object") {
              data.push({ ref: property, info: team[property].toString() });
            } else {
              data.push({ ref: property, info: team[property].$ref });
            }
          }

          return (
            <>
              <Col className="border" xs={"12"}>
                <Row>
                  {data.map((item) => {
                    console.log(item.ref, item.info);
                    if (item.ref === "$ref") {
                      return (
                        <Row>
                          <Col>{item.ref}</Col>
                          <Col>
                            <a
                              href={item.info}
                              target="_blank"
                              rel="noreferrer"
                            >
                              {item.info}
                            </a>
                          </Col>
                        </Row>
                      );
                    }

                    return (
                      <>
                        <Row>
                          <Col>{item.ref}</Col>
                          <Col>{item.info}</Col>
                        </Row>
                      </>
                    );
                  })}
                </Row>
              </Col>
            </>
          );
        })}
      </Row>
    </>
  );
};

export default Testing;

// Extra code that may be reused later

/* {teams.map((team) => {
                let api = []
                for (const key in team) {
                    console.log(`${key}: ${team[key]}`)
                    if (Object.hasOwnProperty.call(team, key)) {
                        api.push(team[key])
                        
                    }
                }
                console.log(api)
                return(
                    <>
                    {api.map((apis) => {
                        // console.log('what is apis', apis)
                        return (
                            <>
                            <a href={apis.$ref}>{apis.$ref}</a> 
                            <br />
                            </>
                        )
                    })}
                    </>
                )
            })} */

// return (
//     <>
//     <Row className="border">
//     {properties.map((item) => {
//         return (
//             <>
//             <Row className="bg-success">
//             {item}
//             </Row>
//             </>
//         )
//     })}
//     {data.map((items) => {
//         return (
//             <>
//             <Row>
//             {items}
//             </Row>
//             </>
//         )
//     })}
//     </Row>
//     </>
// )
