import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [alert, setAlert] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const sendEmail = async (e) => {
    e.preventDefault();

    try {
      await emailjs.send(
        'service_bwhv55s',
        'template_b8zkcmg',
        formData,
        'yJBCEfYLLYyRuMnFo'
      );
      setAlert('Message sent successfully!');

      // Automatically dismiss the alert after 5 seconds
      setTimeout(() => {
        setAlert('');
      }, 5000);
    } catch (error) {
      setAlert('An error occurred, please try again.');
      console.error('EmailJS Error:', error);

      // Automatically dismiss the alert after 5 seconds
      setTimeout(() => {
        setAlert('');
      }, 5000);
    }

    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  return (
    <section id="contact" style={styles.container} >
      <h2 style={styles.heading}>Let's Talk</h2>
      {alert && (
        <div style={{ ...styles.alert, ...(alert.includes('error') ? styles.alertError : styles.alertSuccess) }}>
          {alert}
        </div>
      )}
      <div style={styles.formWrapper}>
        <form onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder='Your Name'
            value={formData.name}
            onChange={handleInputChange}
            style={styles.inputField}
            required
          />
          <input
            type="email"
            name="email"
            placeholder='Your Email'
            value={formData.email}
            onChange={handleInputChange}
            style={styles.inputField}
            required
          />
          <input
            type="text"
            name="subject"
            placeholder='Subject'
            value={formData.subject}
            onChange={handleInputChange}
            style={styles.inputField}
            required
          />
          <textarea
            name="message"
            rows={5}
            placeholder='Your Message'
            value={formData.message}
            onChange={handleInputChange}
            style={styles.textarea}
            required
          />
          <button
            type="submit"
            style={styles.button}
            onMouseEnter={(e) => e.target.style.backgroundColor = styles.buttonHover.backgroundColor}
            onMouseLeave={(e) => e.target.style.backgroundColor = styles.button.backgroundColor}
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

const styles = {
  container: {
    padding: '4rem 1rem',
    maxWidth: '900px',
    margin: '0 auto',
    backgroundColor: '#87CEEB', // Sky blue background
    borderRadius: '12px',
    boxShadow: '0 8px 20px rgba(0, 0, 0, 0.15)',
    overflow: 'hidden',
  },
  heading: {
    color: '#ffffff',
    fontWeight: '700',
    fontSize: '2.5rem',
    marginBottom: '1rem',
    textAlign: 'center',
  },
  formWrapper: {
    padding: '2rem',
    backgroundColor: 'rgba(255, 255, 255, 0.9)', // Slight transparency for the form
    borderRadius: '8px',
  },
  inputField: {
    marginBottom: '1rem',
    padding: '0.75rem',
    borderRadius: '8px',
    border: '1px solid #ddd',
    width: '100%',
    boxSizing: 'border-box',
    outline: 'none',
    fontSize: '1rem',
    transition: 'border-color 0.3s ease',
  },
  textarea: {
    marginBottom: '1rem',
    padding: '0.75rem',
    borderRadius: '8px',
    border: '1px solid #ddd',
    width: '100%',
    boxSizing: 'border-box',
    outline: 'none',
    fontSize: '1rem',
    resize: 'vertical',
    transition: 'border-color 0.3s ease',
  },
  button: {
    padding: '0.75rem',
    borderRadius: '8px',
    backgroundColor: '#ff4081', // Vibrant pink
    color: '#fff',
    border: 'none',
    width: '100%',
    fontSize: '1rem',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  },
  buttonHover: {
    backgroundColor: '#e91e63', // Darker pink
  },
  alert: {
    padding: '1rem',
    borderRadius: '8px',
    marginBottom: '1rem',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  alertSuccess: {
    backgroundColor: '#d4edda',
    color: '#155724',
  },
  alertError: {
    backgroundColor: '#f8d7da',
    color: '#721c24',
  },
};

export default Contact;
