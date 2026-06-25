import { memo } from "react";

//Nav 컴포넌트
const Nav = memo(function Nav({ data, onChangeMode }) {
  console.log("Nav render");
  //lists에 출력할 코드 생성
  const lists = data.map(d => (
    <li key={d.id}>
      <a
        href={`/${d.id}`}
        // data-id={d.id}
        onClick={e => {
          // console.log(e.target.dataset.id);
          e.preventDefault();
          onChangeMode(d.id);
        }}
      >
        {d.title}
      </a>
    </li>
  ));

  return (
    <nav>
      <ul>{lists}</ul>
    </nav>
  );
});
export default Nav;
