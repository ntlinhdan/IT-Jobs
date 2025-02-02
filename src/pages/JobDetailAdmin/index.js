import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getDetailJob } from "../../services/jobService";
import { Tag } from "antd";
import Item from "antd/es/list/Item";

function JobDetailAdmin() {
  const params = useParams();
  const [data, setData] = useState();

  useEffect(() => {
    const fetchApi = async () => {
      const response = await getDetailJob(params.id);
      if (response) {
        setData(response);
      }
    };
    fetchApi();
  }, []);
  return (
    <>
      {data && (
        <>
          <h1>Tên job: {data.name}</h1>
          <div className="mb-20">
            <span>Trạng thái: </span>
            {data.status ? (
              <Tag color="green">Đang bật</Tag>
            ) : (
              <Tag color="red">Đang tắt</Tag>
            )}
          </div>
          <div className="mb-20">
            <span>Tags:</span>
            <Tag color="blue" className="mb-5">
              {data.tags}
            </Tag>
          </div>
          <div>
            Mức lương: <strong>{data.salary}$</strong>
          </div>
          <div>
            Ngày tạo: <strong>{data.createAt}</strong>
          </div>
          <div>
            Cập nhật: <strong>{data.updateAt}</strong>
          </div>
          <div className="mb-10">
            <span>Thành phố: </span>
            {data.city.map((item, index) => (
              <Tag color="orange" className="mb-5" key={index}>
                {item}
              </Tag>
            ))}
          </div>
          <div>
            Mô tả: <strong>{data.descriptions}</strong>
          </div>
        </>
      )}
    </>
  );
}
export default JobDetailAdmin;
