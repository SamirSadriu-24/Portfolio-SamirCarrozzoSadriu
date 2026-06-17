import { useForm, ValidationError } from '@formspree/react';
import styles from '../styles/ContactForm.module.css';

function ContactForm() {
    const [state, handleSubmit] = useForm('mvznnagb');

    if (state.succeeded) {
        return (<div className={styles.successBox}> <h3>Messaggio inviato!</h3> <p>Ti risponderò il prima possibile.</p> </div>
        );
    }

    return (<form onSubmit={handleSubmit} className={styles.formContainer}> <input
        type="text"
        name="name"
        placeholder="Il tuo nome"
        required
        className={styles.input}
    />

        <input
            id="email"
            type="email"
            name="email"
            placeholder="La tua email"
            required
            className={styles.input}
        />

        <ValidationError
            prefix="Email"
            field="email"
            errors={state.errors}
        />

        <textarea
            id="message"
            name="message"
            rows="6"
            placeholder="Scrivi il tuo messaggio..."
            required
            className={styles.textarea}
        />

        <ValidationError
            prefix="Messaggio"
            field="message"
            errors={state.errors}
        />

        <button
            type="submit"
            disabled={state.submitting}
            className={styles.submitButton}
        >
            {state.submitting ? 'Invio...' : 'Invia messaggio'}
        </button>
    </form>

    );
}

export default ContactForm;
