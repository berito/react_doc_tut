import { useState } from "react";

export default function Form() {
    const [isSent, setIsSent] = useState(false);
    const [message, setMessage] = useState('Hi');
    if (isSent) {
        return <h1>{message} your message is on its way </h1>
    }
    function sendMessage(message) {

    }
    function handleSubmit(e) {
        e.preventDefault();
        setIsSent(true);
        sendMessage(message)
    }
    return (
        <form onSubmit={handleSubmit}>
            <textarea placeholder="Message" value={message} onChange={e => setMessage(e.target.value)}></textarea>
            <textarea value={message}></textarea>
            <button type="submit">Send</button>
        </form>
    )


}