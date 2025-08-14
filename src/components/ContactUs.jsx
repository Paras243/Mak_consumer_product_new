import React from "react";
import { Box, Typography, Grid, Paper, TextField, Button } from "@mui/material";
import "./ContactUs.css";

const ContactUs = () => {
    return (
        <section className="contact-section" id="contact-us">
            <h2 className="contact-title">Contact Us</h2>
            <div className="contact-container">
                {/* Left: Map */}
                <div className="contact-map">
                    <iframe
                        title="Google Map"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3508.880018547172!2d77.03340377494905!3d28.42287699357143!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d187579660c63%3A0x674a84fc35ac4661!2sVIPUL%20BUSINESS%20PARK%2C%20Central%20Park%20II%2C%20Sector%2048%2C%20Gurugram%2C%20Haryana%20122018!5e0!3m2!1sen!2sin!4v1754891320934!5m2!1sen!2sin"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>

                {/* Right: Form */}
                <div className="contact-form">
                    <Paper elevation={3} className="form-paper">
                        <form>
                            <TextField label="Name" fullWidth required margin="normal" />
                            <TextField label="Phone Number" type="tel" fullWidth margin="normal" />

                            <TextField label="Email" type="email" fullWidth required margin="normal" />

                            <TextField label="Message" multiline rows={4} fullWidth margin="normal" />
                            <Button variant="contained" color="primary" type="submit" sx={{ mt: 2 }}>
                                Submit
                            </Button>
                        </form>
                    </Paper>
                </div>
            </div>
        </section>
    );
};

export default ContactUs;
