import { useState } from "react";
let nextId = 3;
const initialArtists = [
    { id: 0, name: "Marta Colvin Andrade" },
    { id: 1, name: "Lamidi Olonade Fakeye" },
    { id: 2, name: "Louise Nevelson" },
];
export default function ArtistsList() {
    const [name, setName] = useState("");
    const [artists, setArtists] = useState(initialArtists);
    function handleClick() {
        const insertAt = 1;
        const nextArtists = [
            ...artists.slice(0, insertAt),
            { id: nextId++, name: name },...artists.slice(insertAt)
        ];
        setArtists(nextArtists)
        setName('')
    }
    function handleReverseClick(){
        const nextList=[...artists]  //copy array
        nextList.reverse()
        setArtists(nextList)
    }
    function handleSortClick(){
        const nextList=[...artists]  //copy array
        const sortedList=nextList.sort()
        setArtists(sortedList)
    }
    return (
        <>
            <h1>Inspiring sculptors:</h1>
        <input value={name} onChange={e => setName(e.target.value)}
            />
            <button onClick={handleClick}>
                Insert
            </button>
            <button onClick={handleReverseClick}>
                Reverse
            </button>
            <button onClick={handleSortClick}>
                Sort
            </button>
            <ul>
                {artists.map(artist => (
                    <li key={artist.id}>{artist.name}</li>
                ))}
            </ul>
        </>
    )
}
