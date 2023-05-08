import React from "react";
import axios from "axios";

const Getdata = () => {
  const axiosInstance = axios.create({
    baseURL:
      "https://repository.veeam.com/backup/linux/agent/rpm/el/8/x86_64/veeam-4.0.1.2365-1.el8.x86_64.rpm",
    responseType: "blob",
  });

  const getfile = () => {
    axiosInstance
      .request("get")
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div>
      <h1>Getdata</h1>
      <button onClick={getfile}>파일 다운로드</button>
    </div>
  );
};

export default Getdata;
