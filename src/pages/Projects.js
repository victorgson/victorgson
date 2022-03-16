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
          text="Fitness app were you can track your workouts. As this is a serious hobby project, the source code is not public."
          link="https://www.fitly.victorgson.com"
        />
        <Card
          title="FITLY WEBSITE"
          subtitle="Created with Bootstrap."
          text="Landing page for Fitly App."
          link="https://www.fitly.victorgson.com"
        />
        <Card
          title="UBER CLONE"
          subtitle="React Native"
          text="Uber Clone to demonstrate knowledge in React Native & Redux"
          link="https://github.com/victorgson/react-native-uber-clone"
        />
        <Card
          title="REST API - WIP"
          subtitle="MERN Stack"
          text="Example Restful API"
          link="www.fitly.victorgson.com"
        />

        <Card
          title="VAMOS"
          subtitle="Java + XML + Android Studio"
          text="School project where we were tasked with creating a food order app."
          link="https://github.com/victorgson/ProjektArbete"
        />
        <Card
          title="Westcoast Education"
          subtitle="Swift + Storyboard + SwiftUI"
          text="School project where we were tasked with creating a list of classes"
          link="https://github.com/victorgson/ProjektArbete"
        />
      </div>
    </>
  );
}
