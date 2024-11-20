import React from "react";
import "@/app/styles/Footer.css";

const Footer = () => {
    return (
        <footer className="footer">
            <p>&copy; {new Date().getFullYear()} Your Name. All rights reserved.</p>
        </footer>
    );
};

export default Footer;
