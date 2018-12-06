const Event = (props) => {
  let date = props.event.date;
  if(props.event.date[0] === '-') {
    date = props.event.date.slice(1) + ' BC'
  }
  return (
    <div>
      <h3>{date}</h3>
      <div>{props.event.description}</div>
    </div>
  )
}

export default Event;