

interface Props {
    textOn: string;
    textOff: string;
    onChange: () => void;
}

function ToggleButton({textOn, textOff, onChange}: Props) {
    return (
        <input type="checkbox" checked data-toggle="toggle" data-on={textOn} data-off={textOff} data-onstyle="primary" data-offstyle="secondary"
               onChange={() => onChange}/>
    );
}

export default ToggleButton;