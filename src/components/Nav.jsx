//Nav 컴포넌트
function Nav({ data }) {
  //lists에 출력할 코드 생성
  const lists = data.map(d => (
    <li key={d.id}>
      <a href="">{d.title}</a>
    </li>
  ));

  return (
    <nav>
      <ul>{lists}</ul>
    </nav>
  );
}
export default Nav;
