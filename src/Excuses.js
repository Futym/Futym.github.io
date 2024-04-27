import Axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

export const Excuses = () => {
  const [excuseType, setExcuseType] = useState("office");
  const { data: excuseObj, refetch } = useQuery({
    queryKey: ["excuse"],
    queryFn: async () => {
      return Axios.get(
        `https://excuser-three.vercel.app/v1/excuse/${excuseType}/`
      ).then((res) => res.data[0]);
    },
  });

  const handlePartyExcuse = () => {
    setExcuseType("party");
    refetch();
  };

  const handleFamilyExcuse = () => {
    setExcuseType("family");
    refetch();
  };

  const handleOfficeExcuse = () => {
    setExcuseType("office");
    refetch();
  };

  return (
    <div>
      <h1>Generate An Excuse</h1>
      <button onClick={handlePartyExcuse}>Party</button>
      <button onClick={handleFamilyExcuse}>Family</button>
      <button onClick={handleOfficeExcuse}>Office</button>
      <p>{excuseObj?.excuse}</p>
    </div>
  );
};
