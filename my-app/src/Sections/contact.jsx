import React, { useRef, useState, useEffect } from "react";

const Contact = () => {

    // Form reference and state variables
    const formRef = useRef(null);
    const [validated, setValidated] = useState(false);
    const [alert, setAlert] = useState(null); // { type: 'success'|'danger', message }
    const [sending, setSending] = useState(false);

    // Base API URL from environment variable or default
    const API_BASE = import.meta.env.VITE_API_URL ?? 'http://127.0.0.1:8000';

    // Function to send email via backend API
    const sendEmail = async (payload) => {
        try {
            console.log('sendEmail payload (for testing):', payload);

            const response = await fetch(`${API_BASE}/api/send-email/`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(payload)
            });

            if (!response.ok) {
                const errText = await response.text();
                console.error('sendEmail server error:', response.status, errText);
                throw new Error(`Server responded ${response.status}: ${errText}`);
            }

            // Try to parse JSON; some endpoints may return no content (204)
            let result = null;
            try {
                result = await response.json();
            } catch (err) {
                console.warn('sendEmail: response has no JSON body or failed to parse:', err);
                result = { status: response.status };
            }

            console.log("Email sent successfully:", result);
            return result;
        } catch (error) {
            console.error("Error sending email:", error);
            throw error;
        }
    };


    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = formRef.current;
        if (form.checkValidity()) {
            const formData = new FormData(form);
            const payload = Object.fromEntries(formData);

            console.log('Form payload:', payload);

            try {
                setSending(true);
                const res = await sendEmail(payload);
                console.log('sendEmail result in handleSubmit:', res);
                form.reset();
                setValidated(false);
                setAlert({ type: 'success', message: 'Message sent — thank you!' });
                console.log('Alert set to success');
            } catch (err) {
                console.error('handleSubmit send error:', err);
                setAlert({ type: 'danger', message: 'Failed to send message. Please try again later.' });
                console.log('Alert set to danger');
            } finally {
                setSending(false);
            }
        } else {
            setValidated(true);
        }
    };

    // Auto-dismiss alerts after 7 seconds
    useEffect(() => {
        if (!alert) return;
        const t = setTimeout(() => setAlert(null), 7000);
        return () => clearTimeout(t);
    }, [alert]);

    return (
        <section id="contact" className="container py-5">
            <h3 className=" text-center mb-4 border-bottom border-danger pb-2">Contact</h3>

            <div className="row justify-content-center">
                <div className="col-12 col-md-10 col-lg-8">
                    {alert && (
                        <div
                            className={`alert alert-${alert.type} alert-dismissible fade show`}
                            role="alert"
                            aria-live="polite"
                            style={{ backgroundColor: '#212529', color: '#ffffff' }}
                        >
                            {alert.message}
                            <button type="button" className="btn-close btn-close-white" data-bs-dismiss="alert" aria-label="Close" onClick={() => setAlert(null)}></button>
                        </div>
                    )}

                    <form
                        ref={formRef}
                        noValidate
                        className={validated ? 'needs-validation was-validated' : 'needs-validation'}
                        onSubmit={handleSubmit}
                    >
                        <div className="row g-3">
                            <div className="col-12 col-md-6">
                                <label htmlFor="subject" className="form-label">Subject</label>
                                <input id="subject" name="subject" type="text" className="form-control text-white" placeholder="Your subject" required />
                                <div className="invalid-feedback">Please enter your subject.</div>
                            </div>

                            <div className="col-12 col-md-6">
                                <label htmlFor="email" className="form-label">Email</label>
                                <input id="email" name="email" type="email" className="form-control text-white" placeholder="you@example.com" required />
                                <div className="invalid-feedback">Please provide a valid email.</div>
                            </div>

                            <div className="col-12">
                                <label htmlFor="message" className="form-label">Message</label>
                                <textarea id="message" name="message" className="form-control text-white" rows={5} placeholder="How can I help?" required />
                                <div className="invalid-feedback">Please enter a message.</div>
                            </div>

                            <div className="col-12 text-center">
                                <button type="submit" className="btn btn-primary px-4" disabled={sending}>
                                    {sending ? (
                                        <>
                                            <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                                            Sending...
                                        </>
                                    ) : (
                                        "Let's Collaborate"
                                    )}
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;