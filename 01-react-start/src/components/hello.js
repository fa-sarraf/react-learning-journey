import "./hello.css";
function Hello(props) {
  return (
    <div className="hello-box">
      <h2>سلام {props.name}</h2>
      <p>Welcome to React World!</p>
    </div>
  );
}

export default Hello;
