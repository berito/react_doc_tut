import { useState } from "react";
let nextId = 0;
export default function Artist() {
  let initalArtists = [
    { id: 0, name: "Marta Colvin Andrade" },
    { id: 1, name: "Lamidi Olonade Fakeye" },
    { id: 2, name: "Louise Nevelson" },
  ];
  const [name, setName] = useState("");
  const [artists, setArtists] = useState(initalArtists);

  return (
    <>
      <h1>Inspiring sculptures:</h1>
      <u>
        {artists.map((artist) => {
          return (
            <li key={artist.id}>
              {artist.name}{" "}
              <button
                onClick={() => {
                  setArtists(artists.filter((a) => a.id !== artist.id));
                }}
              >
                delete
              </button>
            </li>
          );
        })}
        ;
      </u>
    
        <input
          value={name}
          type="text"
          onChange={(e) => setName(e.target.value)}
        />
        {/* <button onClick={() => {
                setName('')
                artists.push({
                    id: nextId++,
                    name: name
                })
            }} >Add</button> */}
        <button
          onClick={() => {
            setName("");
            // setArtists([...artists, { id: nextId, name: name }]); //appending
            nextId=artists.length+1
            setArtists([{ id: nextId, name: name }, ...artists]); //prepending
          }}
        >
          Add
        </button>
      
    </>
  );
}
