import { useNavigate, useSearchParams } from "react-router-dom";

const Edit = () => {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();

  const id = searchParams.get("id");

  console.log(id);

  const mode = searchParams.get("mode");

  console.log(mode);

  return (
    <div>
      <h1>Edit</h1>
      <p>이곳은 일기 수정 입니다.</p>
      <button onClick={() => setSearchParams({ who: "9utae" })}>
        QS 바꾸기
      </button>
      <button
        onClick={() => {
          navigate("/home");
        }}
      >
        홈으로
      </button>
      <button
        onClick={() => {
          navigate(-1);
        }}
      >
        뒤로가기
      </button>
    </div>
  );
};

export default Edit;
