import { useEffect, useState } from "react";
import { getListTags } from "../../services/tagsService";
import { Link } from "react-router-dom";
import {Tag } from "antd";
import "./SkillList.scss";

function SkillList() {
  const [tags, setTags] = useState([]);
  useEffect(() => {
    const fecthApi = async () => {
      const response = await getListTags();
      if (response) {
        setTags(response);
      }
    };
    fecthApi();
  }, []);
  return (
    <>
      <div className="tag mb-20">
        {tags.map((item) => (
          <Link to={`/search?keyword=${item.value || ""}`} key={item.id}>
            <Tag color="blue" className="mb-5"> 
              {item.value}
            </Tag>
          </Link>
        ))}
      </div>
    </>
  );
}
export default SkillList;
