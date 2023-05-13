export const LoaderCSS = () => {
  return [
    {
      rel: "stylesheet",
      href: require("~styles/ComponentCSS/Loader.css"),
    },
  ];
};
export const Soader = () => {
  return (
    <div className="center">
      <div className="loader"></div>
    </div>
  );
};
