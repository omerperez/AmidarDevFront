interface FieldValueProp {
  label: string;
  value: string | number;
}
export default function FieldValue({ label, value }: FieldValueProp) {
  return (
    <>
      <div className="label-pos">
        <span className="card-body-text-label">{label ?? ""}</span>
      </div>
      <span className="card-body-text-value">{value ?? "-"}</span>
    </>
  );
}
