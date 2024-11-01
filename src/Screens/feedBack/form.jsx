import React, { useState } from "react";
import "./form.scss";
import { Link } from 'react-router-dom';

const FeedbackForm = (props) => {
    // Get fields configuration, defaulting to an empty array if not available
    let fieldsConfig = props?.data?.program_name || [];

    // Initialize formData with empty values for each field name
    const [formData, setFormData] = useState(
        fieldsConfig.reduce((acc, field) => ({ ...acc, [field.name]: "" }), {})
    );

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Feedback submitted:", formData);
    };

    const checkIsDependent = (field) => {
        console.log("csdcbsdbj");
        
        if (!field.dependentField) {
            return true;
        }
        return formData[field.dependentField] === field.dependentvalue;
    };

    return (
        <div className="feedback-form-wrapper">
            <div className="cover">
                <h2 className="feedback-title">Your feedback today can make a difference tomorrow.</h2>
                <form onSubmit={handleSubmit} className="feedback-form">
                    {fieldsConfig.map((field, index) => (
                        // Render field only if it meets the dependency condition
                        checkIsDependent(field) && (
                            <div key={index} className={`form-group ${field.fullWidth ? "full-width" : ""}`}>
                                <label htmlFor={field.name}>{field.label}:</label>
                                {field.type === "select" ? (
                                    <select
                                        id={field.name}
                                        name={field.name}
                                        onChange={handleChange}
                                        value={formData[field.name]}
                                        required={field.required}
                                    >
                                        {field.options.map((option, idx) => (
                                            <option key={idx} value={option.value} className="options">
                                                {option.text}
                                            </option>
                                        ))}
                                    </select>
                                ) : field.type === "textarea" ? (
                                    <textarea
                                        id={field.name}
                                        name={field.name}
                                        placeholder={field.placeholder}
                                        onChange={handleChange}
                                        value={formData[field.name]}
                                        required={field.required}
                                    />
                                ) : (
                                    <input
                                        type={field.type}
                                        id={field.name}
                                        name={field.name}
                                        placeholder={field.placeholder}
                                        onChange={handleChange}
                                        value={formData[field.name]}
                                        required={field.required}
                                    />
                                )}
                            </div>
                        )
                    ))}
                    <button type="submit" className="submit-button">
                        <Link to="/" style={{ color: 'white' }}>Submit Feedback</Link>
                    </button>
                </form>
            </div>
        </div>
    );
};

export default FeedbackForm;
