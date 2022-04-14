export default function Button(props) {
  const { styles, children } = props;
  const { OnClicked } = props;

  return (
    <div
      onClick={OnClicked}
      style={{
        ...styles,
        cursor: "pointer",
        userSelect: "none",
        MozUserSelect: "none",
      }}
    >
      {children}
    </div>
  );
}
