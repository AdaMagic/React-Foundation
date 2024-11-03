import { useParams, useSearchParams } from "react-router-dom";

const Article = () => {
  // 第一种
  //   const [params] = useSearchParams();
  //   let id = params.get("id");
  // 第二种
  const params = useParams();
  const id = params.id;
  return <div>文章页,id:{id}</div>;
};

export default Article;
