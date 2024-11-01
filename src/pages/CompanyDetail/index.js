import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getDetailCompany } from "../../services/companyService";
import { getListJob } from "../../services/jobService";
import {Button, Col, Row } from "antd";

function CompanyDetail() {
  const params = useParams();
  const [infoCompany, setInfoCompany] = useState();
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const fetchApi = async () => {
      const response = await getDetailCompany(params.id);
      setInfoCompany(response);
    };
    fetchApi();
  }, []);
  useEffect(() => {
    const fetchApi = async () => {
      const response = await getListJob(params.id);
      setJobs(response);
    };
    fetchApi();
  }, []);
  return (
    <>
      {infoCompany && (
        <>
          <h1>{infoCompany.companyName}</h1>

          <div className="mb-20">
            Địa chỉ: <strong>{infoCompany.address}</strong>
          </div>
          <div className="mb-20">
            Số lượng nhân sự: <strong>{infoCompany.quantityPeople}</strong>
          </div>
          <div className="mb-20">
            Thời gian làm việc: <strong>{infoCompany.workingTime}</strong>
          </div>
          <div className="mb-20">
            Link website: <strong>{infoCompany.website}</strong>
          </div>
          <div className="mb-10">Mô tả ngắn: </div>
          <div className="mb-20">
            {infoCompany.description}
          </div>
          <div className="mb-10">Mô tả chi tiết: </div>
          <div className="mb-20">
            {infoCompany.detail}
          </div>
        </>
      )}
    </>
  );
}
export default CompanyDetail;
