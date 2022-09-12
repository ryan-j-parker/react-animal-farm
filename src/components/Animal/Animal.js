export default function Animal(props) {
  return (
    <div className="animal" style={{ top: props.top, left: props.left }}>
      <span className="name">{props.name}</span>
      <span >{props.says}</span>
      <img src={props.name.svg} /> 
    </div>
  ); 
}
