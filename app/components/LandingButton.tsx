import { Link } from "@remix-run/react";

export const Lbtncss = () => [
  {
    rel: "stylesheet",
    href: require("~styles/ComponentCSS/LandingButton.css"),
  },
];
export const LandingButton = (props: { text: any; hreff: any }) => {
  return (
    <Link to={props.hreff} className="button-component">
      <img src={require("~assets/toolsbtn.svg")} alt="option"  /> <span>{props.text}</span>
    </Link>
  );
};
