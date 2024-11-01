import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getDetailJob } from "../../services/jobService";
import { changeStatusCV, getDetailCV } from "../../services/cvService";

function CVDetail() {
  const params = useParams();
  const [cv, setCV] = useState();
  const [job, setJob] = useState();
  useEffect(() => {
    const fetchApi = async () => {
      const response = await getDetailCV(params.id);
      if (response) {
        const responsejob = await getDetailJob(response.idJob);
        if (responsejob) {
          setCV(response);
          setJob(responsejob);
        }
      }
      changeStatusCV(params.id, {statusRead: true});
    };
  }, []);
  return (
    <>
      <h1>Chưa làm xong!</h1>
    </>
  );
}
export default CVDetail;
