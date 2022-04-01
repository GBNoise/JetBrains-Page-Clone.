import "./Tools.css";

export const Tools = ({ arr }) => {
  return (
    <div className="tools_container">
      {arr.map((el, i) => {
        const { name, description, option, date, image } = el;
        return (
          <div className="single_tool" key={i}>
            <span>
              {image && <img src={image} alt="img" />}
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
