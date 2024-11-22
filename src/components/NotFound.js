import { Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();
  const redirectToHome = () => {
    navigate("/movieproject");
  };
  return (
    <>
      <Container className="not-found text-center">
        <p>صفحة غير موجودة</p>
        <button className="btn" onClick={() => redirectToHome()}>
          الصفحة الرئيسية
        </button>
      </Container>
    </>
  );
};

export default NotFound;
