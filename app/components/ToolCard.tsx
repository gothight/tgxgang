import { Link } from "@remix-run/react";

export const cssToolCard = () => [
  { rel: "stylesheet", href: require("~styles/ComponentCSS/toolcard.css") },
];

export interface Props {
  img: string;
  title: string;
  author: string;
  description: string;
  download: string;
  tutorial: string;
}

export const ToolCard = (props: Props) => {
  return (
    <>
      <div className="card-container">
        <img src={props.img} alt="Card Image" className="card-image" />
        <div className="card-text-container">
          <h2 className="card-title">{props.title}</h2>
          <p className="card-author">{props.author}</p>
          <p className="card-description">{props.description}</p>
        </div>

       <div className="card-buttons-container">
       <Link className="card-button" to={props.download}>
       <img src={require("~assets/IconsSvg/download.svg")} alt="" />

          Descargar
        </Link>
        <Link className="card-button" to={props.tutorial}>
          <img src={require("~assets/IconsSvg/play.svg")} alt="" />
          Tutorial
        </Link>
       </div>
      </div>
    </>
  );
};
