import React, {useState} from "react";
import emailjs from 'emailjs-com'
// import dotenv from 'dotenv';


// dotenv.config();


function ContactForm() {
  const service_id = 'process.env.REACT_APP_SERVICE_ID'
  const user_id = 'process.env.REACT_APP_USER_ID'
  const template_id = 'process.env.REACT_APP_TEMPLATE_ID'
  console.log(`service_id: ${service_id}, user_id: ${user_id}, template_id: ${template_id}`)
  const [formData, setFormData] = useState({
    from_name: '',
    phone: '',
    email: '',
    message: ''
  });
  const handleChange = (e)=>{
    setFormData({...formData, [e.target.name]: e.target.value});
  }
  const handleSubmit = (e)=>{
    e.preventDefault();
    emailjs.sendForm( service_id, template_id, e.target, user_id).then((result)=>{
      console.log('Email sent successfully:', result.text);
        alert('Email sent successfully!');
        setFormData({
          from_name: '',
          phone: '',
          email: '',
          message:''
        });
    }, (error)=>{
      console.error('Error occurred:', error)
      alert("An error occured While sending the message please try again later")
    });
  }
  const imageAssets = [
    {
      id: "email",
      alt: "Email Address",
      placeholder: "Enter Email Address",
      name: "email",
      value: formData.email
    },
    {
      id: "fullname",
      alt: "Full Name",
      placeholder: "Enter Full Name",
      name: "name",
      value: formData.name
    },
    {
      id: "phone",
      alt: "Phone Number",
      placeholder: "Enter Phone Number",
      name: "phone",
      value: formData.phone
    },
    {
      id: "message",
      alt: "Message",
      placeholder: "Enter Message",
      name: "message",
      value: formData.message
    }
  ];

  return (
    <>
      <section className="contact-form-section">
        <div className="contact-form-container">
          <aside className="image-gallery">
            <img loading="lazy" srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/1f2227a918cf215e0b1439046021ae9db497966c2e1e4d81fc2b0ce3741ec11d?apiKey=c79a152b41e64f7db55346c2899c15e3&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/1f2227a918cf215e0b1439046021ae9db497966c2e1e4d81fc2b0ce3741ec11d?apiKey=c79a152b41e64f7db55346c2899c15e3&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/1f2227a918cf215e0b1439046021ae9db497966c2e1e4d81fc2b0ce3741ec11d?apiKey=c79a152b41e64f7db55346c2899c15e3&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/1f2227a918cf215e0b1439046021ae9db497966c2e1e4d81fc2b0ce3741ec11d?apiKey=c79a152b41e64f7db55346c2899c15e3&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/1f2227a918cf215e0b1439046021ae9db497966c2e1e4d81fc2b0ce3741ec11d?apiKey=c79a152b41e64f7db55346c2899c15e3&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/1f2227a918cf215e0b1439046021ae9db497966c2e1e4d81fc2b0ce3741ec11d?apiKey=c79a152b41e64f7db55346c2899c15e3&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/1f2227a918cf215e0b1439046021ae9db497966c2e1e4d81fc2b0ce3741ec11d?apiKey=c79a152b41e64f7db55346c2899c15e3&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/1f2227a918cf215e0b1439046021ae9db497966c2e1e4d81fc2b0ce3741ec11d?apiKey=c79a152b41e64f7db55346c2899c15e3&"className="banner-image" alt="Banner" />
          </aside>
          <main className="form-container">
            <header className="form-header">Contact Us!</header>
            <form onSubmit={handleSubmit}>
              {imageAssets.map(({ id, placeholder, alt, name, value }) => (
                <div key={id} className="input-group">
                  <label htmlFor={id} className="input-label">{alt}</label>
                  {id === "message" ? (<input 
                  type="text" 
                  id={id}
                  name={name}
                  value={value}
                  onChange={handleChange}
                  className="input-field message" 
                  placeholder={placeholder} 
                  aria-label={alt} />) : (<input 
                  type="text" 
                  id={id}
                  name={name}
                  value={value}
                  onChange={handleChange}
                  className="input-field " 
                  placeholder={placeholder} 
                  aria-label={alt} /> )}
                </div>
              ))}
              <button type="submit" className="submit-button">Send</button>
            </form>
          </main>
        </div>
      </section>
      <style jsx>{`
        .contact-form-section {
          display: flex;
          justify-content: center;
          align-items: center;
          background-color: #131212;
          padding: 26px;
          border-radius: 32px;
          border: 1px solid #fff;
          margin-left: auto;
          margin-right: auto;
          max-width: 1200px;
        }
        .contact-form-container {
          display: flex;
          gap: 20px;
          // flex-wrap: wrap;
        }
        .image-gallery {
          display: flex;
          flex-direction: column;
          width: 50%;
        }
        .banner-image, .decorative-image {
          width: 100%;
          height: auto;
          object-fit: cover;
          border-radius: 20px;
        }
        .form-container {
          display: flex;
          flex-direction: column;
          width: 50%;
          background-color: #151515;
          border-radius: 12px;
          padding: 22px 26px;
          color: #fff;
          font-size: 20px;
          font-weight: 700;
        }
        .form-header {
          font-size: 40px;
          margin-bottom: 30px;
        }
        .input-group {
          margin-bottom: 50px;
        }
        .input-field {
          width: 100%;
          padding: 10px;
          margin-top: 8px;
          border-radius: 8px;
          border: 1.252px solid rgba(190, 137, 243, 0.22);
          background: rgba(190, 190, 190, 0.29);
          width: 100%;
          height: 40px;
          color: #787878;

          font-family: "Plus Jakarta Sans";
          font-size: 18px;
          font-style: normal;
          font-weight: 500;
          line-height: normal;
          letter-spacing: -0.8px;
        }
        .message {
          height: 120px;
          padding-bottom: 73px;
        }
        .submit-button {
          padding: 15px 30px;
          border-radius: 16px;
          background-color: #ba7975;
          color: white;
          font-size: 18px;
          cursor: pointer;
          border: none;
        }
        .input-label {
          position: absolute;
          margin-top: -18px;
          padding: 0;
          color: #FFF;
          font-family: "Plus Jakarta Sans";
          font-size: 20px;
          font-style: normal;
          font-weight: 700;
          line-height: normal;
          letter-spacing: -0.8px;
          
          }
          @media (max-width: 991px) {
            .contact-form-container{
              display: flex;
              flex-wrap: wrap;
            }
            .contact-form-section{
              border: none;

            }
            .form-container{
              border: 1px solid #fff;
            }
            .image-gallery{
              width: 100%;
            }
            .form-container{
              width: 100%;
            }
           
            .banner-image, .decorative-image{
              height: 250px;
            }
            .form-header {
              font-size: 22px;
              margin-bottom: 51px;
            }
            .input-label{
              font-size: 16px;
            }

          }
        }
      `}</style>
    </>
  );
}
export default ContactForm;