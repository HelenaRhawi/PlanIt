import { useState } from "react";

function FAQItem({ question, answer}) {
    const [open, setOpen] = useState(false)

    return (
        <div style={{marginBottom: '1rem'}}>
            <button onClick={() =>setOpen(!open)}
                style={{
                    background: 'none',
                    border: 'none',
                    fontWeight: 'bold',
                    cursor: 'pointer'
                }}
            >
                {open ? '-' : '+'} {question}
            </button>

            {open && <p style={{marginLeft: '1rem'}}>{answer}</p>}

        </div>
    )
}


export default FAQItem