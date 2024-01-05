export default function FormInput({
  inputLabel,
  inputType,
  inputValue,
  inputSetter,
}) {
  return (
    <div className="m-2 p-2">
      <div
        style={{ fontSize: 12, textAlign: "start", fontWeight: "bold" }}
        className="py-1"
      >
        {inputLabel}
      </div>
      <div style={{ width: "100%", border: "1px solid black" }}>
        <input
          className="p-2"
          style={{ width: "100%", border: 0 }}
          type={inputType}
          value={inputValue}
          onChange={(event) => inputSetter(event.target.value)}
        />
      </div>
    </div>
  );
}
