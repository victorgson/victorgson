import React from "react";
import Card from "../components/Card/Card";
import "./projects.css";

export default function Projects() {
  return (
    <>
      <div className="container">
        <Card
          title="FITLY APP"
          subtitle="Created with React Native."
          text="Fitness app were you can track your workouts."
          link="www.fitly.victorgson.com"
        />
        <Card
          title="UBER CLONE"
          subtitle="React Native"
          text="Uber Clone to demonstrate knowledge in React Native & Redux"
          link="www.fitly.victorgson.com"
        />
        <Card
          title="REST API"
          subtitle="MERN Stack"
          text="Example Restful API"
          link="www.fitly.victorgson.com"
        />

        <Card
          title="VAMOS"
          subtitle="Java + XML + Android Studio"
          text="School project where we were tasked with creating a food order app."
          link="www.fitly.victorgson.com"
        />
      </div>
    </>
  );
}
