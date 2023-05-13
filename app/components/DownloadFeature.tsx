export interface Props {
  icon: string;
  text: string;
}
export function links() {
  return [
    {
      rel: "stylesheet",
      href: require("~styles/ComponentCSS/Feature.css"),
    },
  ];
}
export const Feature = (props: Props) => {
  return (
    <div className="feature-container">
      <div className="feature__img">
        <img src={props.icon} alt="feature" />
      </div>
      <p className="feature__text">{props.text}</p>
    </div>
  );
};
