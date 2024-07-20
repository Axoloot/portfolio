interface CreditsProps {
  onClick: () => void;
}

const Credits = (props: CreditsProps) => {
  return (
    <div>
      <button onClick={props.onClick}>top</button>
      <h1>Made with ❤️ by Cyril de Lajudie </h1>
      <h4>Using React, TypeScript, Styled Components, framer-motion</h4>
    </div>
  );
};

export default Credits;
