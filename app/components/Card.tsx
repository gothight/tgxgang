import { Link } from "@remix-run/react";

export const cssCard = () => [
  { rel: "stylesheet", href: require("~styles/ComponentCSS/card.css") },
];

export interface Props {
  img: string;
  title: string;
  author: string;
  description: string;
  to?: string;
  working?: boolean | true;
}

export const Card = (props: Props) => {
  return (
    <>
      <div className="card-container">
        <img src={props.img} alt="card" className="card-image" />
        <div className="card-text-container">
          <h2 className="card-title">{props.title}</h2>
          <p className="card-author">{props.author}</p>
          <p className="card-description">{props.description}</p>
        </div>

        <Link
          className="card-button"
          to={props.working === true ? props.to! : "/"}
        >
          {props.working === true ? "Descargar" : "Parcheado"}
        </Link>
      </div>
    </>
  );
};
