import "./App.css";
import Myheader from "./components/Myheader";
import Nav from "./components/Nav";
import MyArticle from "./components/MyArticle";

function App() {
  return (
    <>
      <Myheader />
      <Nav />
      <MyArticle title="UI/UX 개발" desc="사용자 경험을 고려한 직관적이고 반응성 높은 화면 구현" />
    </>
  );
}

export default App;

// UI/UX 개발
// 사용자 경험을 고려한 직관적이고 반응성 높은 화면 구현
// 재사용이 가능한 UI 개발
// 컴포넌트 기반으로 동일한 UI를 효율적으로 재사용 가능
// 애니메이션 구현
// 상태 변화에 따른 자연스럽고 동적인 화면 효과 구현
