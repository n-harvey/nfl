import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import Teams from "./Components/teams.js";
import TeamInfo from "./Components/teaminfo.js";
import Testing from "./Components/testing.js";
import { useEffect, useState } from "react";
import { teamAPI } from "./REST/API.js";
import { Route, Routes } from "react-router-dom";

const App = () => {
  //Variable for state to contain the NFL teams from fetchTeams
  const [teams, setTeams] = useState([]);

  const get = async ($ref) => {
    const response = await teamAPI.get($ref);
    return response;
  };

  //API call to retreive NFL teams and set teams in state to returned value
  const fetchTeams = async () => {
    const response = await teamAPI.getTeams();
    setTeams(response.filter((team) => team.name !== undefined));
  };

  //On load call fetchTeams to get NFL teams from API
  useEffect(() => {
    console.log("Running useEffect fetchTeams from main page");
    fetchTeams();
  }, []);

  return (
    <Container className="vh-100 ">
      <Routes>
        <Route path="/" element={<Teams teams={teams} callRef={get} />} />
        <Route
          path="/team/:teamID/*"
          element={<TeamInfo teams={teams} callRef={get} />}
        />
        <Route
          path="/apilearning"
          element={<Testing teams={teams} callRef={get} />}
        />
      </Routes>
    </Container>
  );
};

export default App;
