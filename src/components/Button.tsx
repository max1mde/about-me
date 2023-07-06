

interface Props {
  children: string;
  onClick: () => void;
  color?: "primary" | "secondary" | "danger";
  buttonURL: string;
}

export const Button = ({ children, onClick, color = "primary", buttonURL }: Props) => {
    const handleClick = () => {
        window.location.href = buttonURL;
        onClick();
    };
  return (
    <>
      <button type="button" onClick={handleClick} className={"btn btn-" + color}>
        {children}
      </button>
    </>
  );
};

export default Button;
