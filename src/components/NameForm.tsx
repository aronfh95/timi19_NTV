import { useEffect, useState } from "react";

export default function NameForm() {
  const [name, setName] = useState("");

  useEffect(() => {
    console.log(name);
  }, [name]);

  return (
    <form action="">
      <label htmlFor="">Nafn </label>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <p>halló {name || "Gestur"}!</p>

      <button onClick={() => setName("")}>Hreinsa</button>
    </form>
  );
}
