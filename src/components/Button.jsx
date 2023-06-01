export default function Button({ text }) {
    return (
        <button
            className="btn btn-primary"
            onClick={event => event.target.innerText = 'You clicked me!'}
        >
            {text}
        </button>
    )
}
