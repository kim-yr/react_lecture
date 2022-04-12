// function UserName(props) { props.userName
// 구조분해할당, 넘어온 값 바로 분해
function UserName({ userName }) {
  console.log(userName);
  return <p>Hello {userName}</p>;
}
export default UserName;
