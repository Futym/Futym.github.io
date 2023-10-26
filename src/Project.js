export const Project = (props) => {
  return (
    <div>
      <h1
        style={true ? { color: true ? "red" : "green" } : { color: "yellow" }}
      >
        {props.title}
      </h1>
      <h1>{props.description}</h1>
      <h1>{props.technologies}</h1>
    </div>
  );
};
