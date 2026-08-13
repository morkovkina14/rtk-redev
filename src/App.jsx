import UserCard from "./components/UserCard";
import React from "react";

const App = () => {
  return (
    <div>
     <UserCard
  name="Павел"
  role="Frontend-разработчик"
  experience={3}
  location={{ city: "Минск", country: "Беларусь" }}
  isAvailable={true}
/>
     <UserCard
  name="Оля"
  role="Frontend-разработчик"
  experience={1}
  location={{ city: "Гродно", country: "Беларусь" }}
  isAvailable={true}
/>
     <UserCard
  name="Валентина"
  role="Врач"
  experience={2}
  location={{ city: "Брест", country: "Беларусь" }}
  isAvailable={false}
/>
    </div>
  );
};

export default App;