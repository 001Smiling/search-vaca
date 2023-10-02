import React, { useState } from 'react';
import InputMask from 'react-input-mask';
const Form = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        comment: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Проверка, что все обязательные поля заполнены
        if (formData.name && formData.email && formData.phone) {
            alert(`Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nComment: ${formData.comment}`);
            setFormData({ name: '', email: '', phone: '', comment: '' }); // Сброс значений полей формы
        } else {
            alert('Please fill in all required fields');
        }
    };
    return (
        <div className='main-form'>
            <div className='main-form__head'>
                <p className='main-form__head-title'>Leave a request</p>
                <p className='main-form__head-text'>We will advise you and help you start  a new project</p>
            </div>
            <form className="form-container" onSubmit={handleSubmit}>
                <div className="form-container__point">
                    <label className="form-container__point-lable">Your Name</label>
                    <input
                        className="form-container__point-input"
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder='Please introduce yourself'
                    />
                </div>
                <div className="form-container__point">
                    <label className="form-container__point-lable">Email</label>
                    <input
                        className="form-container__point-input"
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder='ivanov@gmail.com'
                    />
                </div>
                <div className="form-container__point">
                    <label className="form-container__point-lable">Phone number</label>
                    <InputMask
                        className="form-container__point-input"
                        mask='+7 (999) 999 99 99'
                        value={formData.value}
                        placeholder="+7 (999) 000 00 00"
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-container__point">
                    <label className="form-container__point-lable">Comment</label>
                    <textarea
                        className=" form-container__point-textarea"
                        name="comment"
                        value={formData.comment}
                        onChange={handleChange}
                        placeholder='Message text'
                    />
                </div>
                <div className='form-container__bottom'>
                    <button className='form-container__bottom-btn global-btn blue-button' type="submit">Send</button>
                    <p className='form-container__bottom-text'>By clicking "Send" you confirm your consent to the
                        <a className='form-container__bottom-a'> processing of personal data</a>
                    </p>
                </div>

            </form>
        </div>
    );
};
export default Form;

