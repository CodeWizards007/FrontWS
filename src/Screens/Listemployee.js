import React, { useState, useEffect } from "react";
import axios from "axios";
import { Table } from "react-bootstrap";
const Listemployee = () => {
  const [listingenieur, setListingenieur] = useState([]);
  const [listtechnicien, setListtechnicien] = useState([]);
  const [listcomptable, setListcomptable] = useState([]);
  const [listdirecteur, setListdirecteur] = useState([]);
  const [listresponsable, setListresponsable] = useState([]);
  useEffect(async () => {
    await axios
      .get(
          "http://localhost:8095/ingenieur"
      )
      .then((res) => {
        setListingenieur(res.data.results.bindings);
      });

    await axios
      .get(
          "http://localhost:8095/directeur"
      )
      .then((res) => {
        setListdirecteur(res.data.results.bindings);
      });

    await axios
      .get(
      "http://localhost:8095/comptable"
      )
      .then((res) => {
        setListcomptable(res.data.results.bindings);
        console.log(setListcomptable ,"sdgsxgfde")
      });

    await axios
      .get(
          "http://localhost:8095/technicien"
      )
      .then((res) => {
        setListtechnicien(res.data.results.bindings);
      });

    await axios
      .get(
          "http://localhost:8095/responsable"
      )
      .then((res) => {
        setListresponsable(res.data.results.bindings);
        console.log("object", listresponsable);
      });
  }, []);

  return (
    <>
      <h1 className="text-center">directeur</h1>
      <Table striped hover responsive className="table-sm">
        <thead>
          <tr>
            <th>Name</th>
            <th>CIN</th>
            <th>FUNCTION</th>
          </tr>
        </thead>
        <tbody>
          {listdirecteur?.map((x) => (
            <tr key={x.CIN.value}>
              <td>{x.NOMComplet.value}</td>
              <td>{x.CIN.value}</td>

              <td>{x.Fonction.value}</td>
            </tr>
          ))}
        </tbody>
      </Table>

      <h1 className="text-center">responsable</h1>

      <Table striped hover responsive className="table-sm">
        <thead>
          <tr>
            <th>Name</th>
            <th>CIN</th>
            <th>FUNCTION</th>
          </tr>
        </thead>
        <tbody>
          {listresponsable?.map((x) => (
            <tr key={x.CIN.value}>
              <td>{x.NOMComplet.value}</td>
              <td>{x.CIN.value}</td>

              <td>{x.Fonction.value}</td>
            </tr>
          ))}
        </tbody>
      </Table>
      <h1 className="text-center">Ingenieur</h1>

      <Table striped hover responsive className="table-sm">
        <thead>
          <tr>
            <th>Name</th>
            <th>CIN</th>
            <th>FUNCTION</th>
          </tr>
        </thead>
        <tbody>
          {listingenieur?.map((x) => (
            <tr key={x.CIN.value}>
              <td>{x.NOMComplet.value}</td>
              <td>{x.CIN.value}</td>

              <td>{x.Fonction.value}</td>
            </tr>
          ))}
        </tbody>
      </Table>

      <h1 className="text-center">Comptable</h1>

      <Table striped hover responsive className="table-sm">
        <thead>
          <tr>
            <th>Name</th>
            <th>CIN</th>
            <th>FUNCTION</th>
          </tr>
        </thead>
        <tbody>
          {listcomptable?.map((x) => (
            <tr key={x.CIN.value}>
              <td>{x.NOMComplet.value}</td>
              <td>{x.CIN.value}</td>

              <td>{x.Fonction.value}</td>
            </tr>
          ))}
        </tbody>
      </Table>

      <h1 className="text-center"> technicien</h1>

      <Table striped hover responsive className="table-sm">
        <thead>
          <tr>
            <th>Name</th>
            <th>CIN</th>
            <th>FUNCTION</th>
          </tr>
        </thead>
        <tbody>
          {listtechnicien?.map((x) => (
            <tr key={x.CIN.value}>
              <td>{x.NOMComplet.value}</td>
              <td>{x.CIN.value}</td>

              <td>{x.Fonction.value}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
};

export default Listemployee;
