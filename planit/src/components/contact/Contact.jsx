import FAQItem from "./FAQItem"
import './Contact.css'

function Contacts () {
    return (
        <div className= "contact-page">
            <h2>Contact Us</h2>

            <section>
                <FAQItem 
                question="What is PlanIT?"
                answer="PlanIt is a planning app that helps you orginize your daily tasks and build healthy routines."
                />

                <FAQItem
                question="Do I need an account?"
                answer="No account is required for basic usage. Your data is stored locally in your browser."
                />

                <FAQItem
                question="How does the daily streak work?"
                answer="If you complete all your todos for the day, your streak increases by one."
                />
            </section>

            <section>
                <h3>Contact us</h3>
                <p><strong>Email:</strong> support@planit.app</p>
                <p><strong>Phone:</strong> +46 07 123 45 67</p>
                <p><strong>Team:</strong> PlanIt Dev Team</p>
            </section>
        </div>
    )
}

export default Contacts