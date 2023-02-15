import { useState } from "react";
import { useImmer } from "use-immer";
let nextId = 3;
const initialList = [
    { id: 0, title: 'Big Bellies', seen: false },
    { id: 1, title: 'Lunar Landscape', seen: false },
    { id: 2, title: 'Terracotta Army', seen: true },
];
function ItemList({ artworks, onToggle }) {
    return (
        <ul>
            {artworks.map(artwork => (
                <li key={artwork.id}>
                    <label>
                        <input type="checkbox" checked={artwork.seen} onChange={e => {
                            onToggle(artwork.id, e.target.checked)
                        }} />
                        {artwork.title}
                    </label>
                </li>
            ))}
        </ul>
    )
}
export default function BucketList() {
    const [mylist, setMyList] = useState(initialList)
    const [yourList, setYourList] = useState(initialList)
    // using immer
    const [imylist, updateMyList] = useImmer(initialList)
    const [iyourList, updateYourList] = useImmer(initialList)
    function handleToggleMyList(artworkId, nextSeen) {
        // //objects are same though the array is new 
        // const myNextList = [...mylist]
        // const artwork = myNextList.find(a => a.id === artworkId)
        // artwork.seen = nextSeen
        // setMyList(myNextList)
        setMyList(mylist.map(artwork => {
            if (artwork.id === artworkId) {
                // create a new object with changes
                return { ...artwork, seen: nextSeen }
            } else {
                return artwork
            }
        }))

    }
    function handleToggleYourList(artworkId, nextSeen) {
        // //objects are same though the array is new 
        // const nextYourList = [...yourList]
        // const artwork = nextYourList.find(a => a.id === artworkId)
        // artwork.seen = nextSeen
        // setYourList(nextYourList)
        setYourList(yourList.map(artwork => {
            if (artwork.id === artworkId) {
                // create a new object with changes
                return { ...artwork, seen: nextSeen }
            } else {
                return artwork
            }
        }))
    }
    function handleToggleMyListImmer(id, nextSeen) {
        updateMyList(draft => {
            const artwork = draft.find(a => a.id === id)
            artwork.seen = nextSeen
        })
    }
    function handleToggleYourListImmer(artworkId, nextSeen) {
        updateYourList(draft => {
            const artwork = draft.find(a => a.id === artworkId)
            artwork.seen = nextSeen
        })
    }
  
    return (
        <>
            <h1>Art Bucket List</h1>
            <h2>My list of art to see:</h2>
            <ItemList artworks={mylist} onToggle={handleToggleMyList} />
            <h2>your list of art to see:</h2>
            <ItemList artworks={yourList} onToggle={handleToggleYourList} />
            <h1>Art Bucket List with Immer</h1>
            <h2>My list of art to see:</h2>
            <ItemList artworks={imylist} onToggle={handleToggleMyListImmer} />
            <h2>your list of art to see:</h2>
            <ItemList artworks={iyourList} onToggle={handleToggleYourListImmer} />
        </>
    )
}
