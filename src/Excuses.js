import Axios from "axios";
import { useState } from "react";

export const Excuses = () => {
  const [excuse, setExcuse] = useState("");

  const handlePartyExcuse = () => {
    fetchExcuse("party");
  };

  const handleFamilyExcuse = () => {
    fetchExcuse("family");
  };

  const handleOfficeExcuse = () => {
    fetchExcuse("office");
  };

  const fetchExcuse = (excuseType) => {
    Axios.get(`https://excuser-three.vercel.app/v1/excuse/${excuseType}/`).then(
      (res) => {
        setExcuse(res.data[0].excuse);
      }
    );
  };

  return (
    <div>
      <h1>Generate An Excuse</h1>
      <button onClick={handlePartyExcuse}>Party</button>
      <button onClick={handleFamilyExcuse}>Family</button>
      <button onClick={handleOfficeExcuse}>Office</button>
      <p>{excuse}</p>
    </div>
  );
};
