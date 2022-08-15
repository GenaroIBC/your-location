import { useFetch } from "../../hooks/useFetch";

export function Select({ url, handleChange, selectValue }) {
  const [data, error, loading] = useFetch(url);

  if (!data) return;
  console.log({ data });

  return (
    <select onChange={handleChange}>
      {data[selectValue].length === 0 ? (
        <option>No data</option>
      ) : (
        data[selectValue].map(({ id, nombre }) => (
          <option value={id}>{nombre}</option>
        ))
      )}
    </select>
  );
}
