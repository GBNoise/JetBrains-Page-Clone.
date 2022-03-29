import "./Tools.css";

export const Tools = ({ arr }) => {
  return (
    <div className="tools_container">
      {arr.map((el) => {
        const { name, description, option, date } = el;
        return (
          <div className="single_tool">
            <span>
              {date && <h4>{date}</h4>}
              <h3>{name}</h3>
              <p>{description}</p>
              <a href="#">{option}</a>
            </span>
          </div>
        );
      })}
    </div>
  );
};
