interface Props {
  children: string;
  color?: "primary" | "secondary" | "danger" | "succesful";
  onPress: () => void;
}

function Button({ children, color = "primary", onPress }: Props) {
  return (
    <button className={"btn btn-" + color} onClick={onPress}>
      {children}
    </button>
  );
}

export default Button;
