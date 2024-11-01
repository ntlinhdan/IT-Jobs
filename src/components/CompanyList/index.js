import { useEffect, useState } from "react";
import { getAllCompany } from "../../services/companyService";
import { Button, Card, Col, Row } from "antd";
import {Link} from "react-router-dom";
import "./CompanyList.scss";
import {DoubleRightOutlined} from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

function CompanyList() {
   const navigate = useNavigate();
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchApi = async () => {
      const response = await getAllCompany();
      if (response) {
        setData(response);
      }
    };
    fetchApi();
  }, []);
  const handleView = () => {
    navigate("/company");
  }
  return (
    <>
      <h3 className="title">DANH SÁCH MỘT SỐ CÔNG TY</h3>
      <Row gutter={[20, 20]} className="custom-row">
        {data.map((item) => (
          <Col span={8} key={item.id}>
            <Link to={`/company/${item.id}`}>
              <Card className="main">
                <div className="card">
                  <div className="card__left">
                    <img src={item.thumbnail} alt={item.companyName} />
                  </div>
                  <div className="card__right">
                    <div className="mb-10">
                      Công ty: <strong>{item.companyName}</strong>
                    </div>
                    <div className="mb-10">
                      Số nhân sự: <strong>{item.quantityPeople}</strong>
                    </div>
                    <div className="mb-10">
                      Địa chỉ: <strong>{item.address}</strong>
                    </div>
                    <div className="mb-10">
                      Số điện thoại: <strong>{item.phone}</strong>
                    </div>
                  </div>
                </div>
              </Card>
            </Link>
          </Col>
        ))}
      </Row>
        <Button className="button mt-20" onClick={handleView}>Xem thêm <DoubleRightOutlined /></Button>
    </>
  );
}
export default CompanyList;
