import { Button, Col, Form, Input, Row, Select } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import "./SearchForm.scss";
import { useEffect, useState } from "react";
import { getListCity } from "../../services/cityService";
import { useNavigate } from "react-router-dom";

function SearchForm() {
  const navigate = useNavigate();
  const [city, setCity] = useState();
  useEffect(() => {
    const fecthApi = async () => {
      const respone = await getListCity();
      if (respone) {
        const objAll = {
          key: 0,
          value: "Tất cả thành phố",
        };
        setCity([objAll, ...respone]);
      }
    };
    fecthApi();
  }, []);

  const handleFinish = (values) => {
    let city = values.city || "";
    city = values.city === "Tất cả thành phố" ? "" : city;
    navigate(`search?city=${city}&keyword=${values.keyword || ""}`);
  };
  return (
    <>
      <h1 className="title">1000+ IT JOBS FOR DEVELOPERS</h1>
      {city && (
        <Form onFinish={handleFinish} className="custom-form">
          <Row gutter={[12, 12]} className="custom-row">
            <Col xxl={4} xl={4} lg={4} className="custom-col">
              <Form.Item name="city">
                <Select
                  options={city}
                  placeholder="Chọn thành phố"
                  className="custom-select"
                />
              </Form.Item>
            </Col>
            <Col xxl={12} xl={12} lg={12} className="custom-col">
              <Form.Item name="keyword">
                <Input placeholder="Nhập từ khóa..." className="custom-input" />
              </Form.Item>
            </Col>
            <Col xxl={3} xl={3} lg={3} className="custom-col">
              <Form.Item>
                <Button
                  htmlType="submit"
                  icon={<SearchOutlined />}
                  className="custom-button"
                  block
                >
                  Tìm kiếm
                </Button>
              </Form.Item>
            </Col>
          </Row>
        </Form>
      )}
    </>
  );
}
export default SearchForm;
