export default function ReqLabel({ statement }) {
  return (
    <>
      {statement}
      <span className="animate-ping text-red-500">*</span>
    </>
  );
}
