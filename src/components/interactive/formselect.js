import { useState } from "react";
export default function FormSelect() {
    const people = [{ id: 1, name: 'Alice' }, { id: 2, name: 'Bob' },]
    const [to, setTo] = useState('Alice')
    const [message, setMessage] = useState('Hello')
    function handleSubmit(e) {
        e.preventDefault();
        setTimeout(() => {
            alert(`You said ${message} to ${to}`)
        }, 3000)
    }
    return (

        <form onSubmit={handleSubmit}>
            <div>
                <label>To:{' '}
                    <select value={to} onChange={e => setTo(e.target.value)}>
                        {people.map((person) => { return (<option key={person.id} value={person.name}>{person.name}</option>) })}
                    </select>
                </label>
            </div>
            <div>
                <textarea placeholder="Message" value={message} onChange={e => setMessage(e.target.value)} />
            </div>
            <button type="submit">Send</button>
        </form>
    )

}