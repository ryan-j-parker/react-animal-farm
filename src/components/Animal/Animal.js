import './Animal.css';

export default function Animal(props) {
  return (
    <div className="animal" style={{ top: props.top, left: props.left }}>
      <img src={`${process.env.PUBLIC_URL}/animals/${props.type}.svg`} />
      <div className="name">{props.name}</div>
      {props.type}
      {props.says}
    </div>
  ); 
}