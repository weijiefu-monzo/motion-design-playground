import React from "react";
import Card from "./Card";

export default function CardDemo() {
  const handleButtonClick = (variant: string) => {
    console.log(`Button clicked for ${variant} card`);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "32px",
        padding: "32px",
      }}
    >
      <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
        <Card
          title="Horizontal Light Card"
          description="This is a horizontal card with light theme and contained background."
          direction="horizontal"
          inverse={false}
          contained={true}
          onButtonClick={() => handleButtonClick("horizontal-light")}
          buttonLabel="Learn More"
          caption="This is a caption below the button."
          data-qa="horizontal-light-card"
        />

        <Card
          title="Horizontal Dark Card"
          description="This is a horizontal card with dark theme and contained background."
          direction="horizontal"
          inverse={true}
          contained={true}
          onButtonClick={() => handleButtonClick("horizontal-dark")}
          buttonLabel="Get Started"
          caption="This is a caption below the button."
          data-qa="horizontal-dark-card"
        />
      </div>

      <div style={{ display: "flex", gap: "24px" }}>
        <Card
          title="Vertical Light Card"
          description="This is a vertical card with light theme and contained background."
          direction="vertical"
          inverse={false}
          contained={true}
          onButtonClick={() => handleButtonClick("vertical-light")}
          buttonLabel="Explore"
          caption="This is a caption below the button."
          data-qa="vertical-light-card"
        />

        <Card
          title="Vertical Dark Card"
          description="This is a vertical card with dark theme and contained background."
          direction="vertical"
          inverse={true}
          contained={true}
          onButtonClick={() => handleButtonClick("vertical-dark")}
          buttonLabel="Discover"
          caption="This is a caption below the button."
          data-qa="vertical-dark-card"
        />
      </div>
      <div style={{ display: "flex", gap: "24px", width: "50%" }}>
        <Card
          title="Non-contained"
          description="This is a non-contained card with light theme."
          direction="vertical"
          inverse={false}
          contained={false}
          onButtonClick={() => handleButtonClick("non-contained-light")}
          buttonLabel="View Details"
          caption="This is a caption below the button."
          data-qa="non-contained-light-card"
        />
      </div>
    </div>
  );
}
