import React, { useState } from "react";
import bg1 from "../images/bg3.jpg";
import { Select } from "antd";

import * as Yup from "yup";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
import axios from "axios";

const Travailledanslamemeequipe = () => {
  const [value, setValue] = useState("");

  const [yosra, setYosra] = useState([]);

  const handleSelect = (e) => {
    console.log(e);
    setValue(e);

    axios
      .get(
          "http://localhost:8095/equipe/"+e
      )
      .then((res) => {
        setYosra(res.data.results.bindings);
        console.log("res", res.data);
      });
  };

  return (
    <>
      <div
        className="text-center"
        style={{
          backgroundImage: `url(${bg1})`,
          // backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          // backgroundColor: "#CAB8FF",
          width: "100%",
          opacity: 0.7,
          // display: "flex",
          // justifyContent: "center",
          height: "625px",
          position: "absolute",
        }}
      >
        <div className="my-3">
          <div className="container my-5">
            <div className=" my-5">
              <DropdownButton
                alignRight
                title="Employé"
                id="dropdown-menu-align-right"
                onSelect={handleSelect}
              >
                <Dropdown.Item eventKey="aLI kAMOUN">aLI kAMOUN</Dropdown.Item>
                <Dropdown.Item eventKey="khawla Gessmi">
                  khawla Gessmi
                </Dropdown.Item>
                <Dropdown.Item eventKey="mourad tbib">
                  mourad tbib
                </Dropdown.Item>
                <Dropdown.Item eventKey="achref ayari">
                  achref ayari
                </Dropdown.Item>
                <Dropdown.Item eventKey="alya louti">alya louti</Dropdown.Item>
                <Dropdown.Item eventKey="mouldi Lakhel">
                  mouldi Lakhel
                </Dropdown.Item>
                <Dropdown.Divider />
              </DropdownButton>
            </div>
            {value && (
              <h4>
                Les employés qui travailent avec {value} dans la meme equipe
                sont :
              </h4>
            )}

            {yosra.map((x) => (
              <h4>{x.nom.value}</h4>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
const yupSchema = Yup.object({});
export default Travailledanslamemeequipe;
