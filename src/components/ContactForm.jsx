import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Container, Form, Button, Alert } from 'react-bootstrap';

function ContactForm() {
  const form = useRef();
  const [status, setStatus] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('pending');

    // EmailJS service, template, and public keys
    const serviceId = 'service_bfp1ter';
    const templateId = 'template_c8tt3ig';
    const publicKey = 'cfNKfeSjTBVJsWL41';

    emailjs
      .sendForm(serviceId, templateId, form.current, {
        publicKey: publicKey,
      })
      .then(
        () => {
          console.log('SUCCESS!');
          setStatus('success');
          form.current.reset();
        },
        (error) => {
          console.log('FAILED...', error.text);
          setStatus('error');
        }
      );
  };

  return (
    <Container className="my-5">
      <Form ref={form} onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formName">
          <Form.Control className="contact-form-placeholder" type="text" placeholder="Full Name *" name="user_name" required />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formEmail">
          <Form.Control className="contact-form-placeholder" type="email" placeholder="Email *" name="user_email" required />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formMessage">
          <Form.Control className="contact-form-placeholder" as="textarea" rows={4} placeholder="Message *" name="user_message" required />
        </Form.Group>

        {status === 'success' && (
          <Alert variant="success" className="mt-3">
            Thank you! Your message has been sent successfully.
          </Alert>
        )}
        {status === 'error' && (
          <Alert variant="danger" className="mt-3">
            Something went wrong. Please try again later.
          </Alert>
        )}
        <p className='front-page-paragraph'>You may receive marketing and promotional materials. Contact us for our privacy practices.</p>
        <Button className='order-button' type="submit" disabled={status === 'pending'}>
          {status === 'pending' ? 'Sending...' : 'SEND MESSAGE'}
        </Button>
      </Form>
    </Container>
  );
}

export default ContactForm;