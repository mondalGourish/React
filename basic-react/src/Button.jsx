function Hello() {
  console.log("Hello");
}
function Bye() {
  console.log("Bye");
}
function Button() {
  return (
    <div>
      <button onClick={Hello}>Click Me!</button>
      &nbsp; &nbsp; &nbsp; &nbsp;
      <button onMouseOver={Bye}>Hover Me~!</button>
    </div>
  );
}
export default Button;
