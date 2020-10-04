import React from "react";

const SectionName = ({ category, changeCategory }) => {
  return (
    <nav className="navbar">
      <ul>
        <li>
          <a
            style={{
              color: `${category === "breakfast" ? " #f50057" : "#000000"}`,
            }}
            className="underline"
            href="#breakfast"
            type="button"
            onClick={() => changeCategory("breakfast")}
          >
            Breakfast
          </a>
        </li>
        <li>
          <a
            style={{
              color: `${category === "lunch" ? " #f50057" : "#000000"}`,
            }}
            className="underline"
            href="#lunch"
            type="button"
            onClick={() => changeCategory("lunch")}
          >
            Lunch
          </a>
        </li>
        <li>
          <a
            style={{
              color: `${category === "dinner" ? " #f50057" : "#000000"}`,
            }}
            className="underline"
            href="#dinner"
            type="button"
            onClick={() => changeCategory("dinner")}
          >
            Dinner
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default SectionName;
