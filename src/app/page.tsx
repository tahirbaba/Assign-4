import React from "react";
import Navbar from "./components/Navbar";
import Card from "@/app/components/Card";
export default function Page() {
    return (
        <div>
            <Navbar />
            <br />
            <h1 className="font-bold" color="blue">Welcome to the Assignment</h1>
            <Card
                title="Special Item"
                description="This is a different fruits like Cheery , Badam & Strawbery."
                link="/details" />
                            <Card
                title="My Second Card"
                description="This is a description for the second card."
                link="/another-details"
            />
            
        </div>
    );
}
