import React from "react";
import Carousel from "./Carousel";
import Card from "../Card/Card";

export default function CarouselDemo() {
  const handleSlideChange = (index: number) => {
    console.log(`Carousel moved to slide ${index + 1}`);
  };

  const carouselItems = [
    <div key="card-1" style={{ width: "80vw", height: "auto" }}>
      <Card
        title="First Card"
        description="This is the first card in the carousel. It demonstrates how content can be displayed in a carousel format."
        inverse={false}
        contained={true}
        caption="This is a caption for the first card."
        buttonLabel="Learn More"
        onButtonClick={() => console.log("First card button clicked")}
      />
    </div>,
    <div key="card-2" style={{ width: "80vw", height: "auto" }}>
      <Card
        title="Second Card"
        description="This is the second card with different content. The carousel allows for smooth transitions between different content pieces."
        inverse={true}
        contained={true}
        caption="This is a caption for the second card."
        buttonLabel="Get Started"
        onButtonClick={() => console.log("Second card button clicked")}
      />
    </div>,
    <div key="card-3" style={{ width: "80vw", height: "auto" }}>
      <Card
        title="Third Card"
        description="The third card shows how the carousel can handle multiple content types and maintain consistent spacing and layout."
        inverse={false}
        contained={true}
        caption="This is a caption for the third card."
        buttonLabel="Explore"
        onButtonClick={() => console.log("Third card button clicked")}
      />
    </div>,
    <div key="card-4" style={{ width: "80vw", height: "auto" }}>
      <Card
        title="Fourth Card"
        description="This card demonstrates the carousel's ability to handle different card variants and maintain visual consistency across all slides."
        inverse={true}
        contained={true}
        caption="This is a caption for the fourth card."
        buttonLabel="Discover"
        onButtonClick={() => console.log("Fourth card button clicked")}
      />
    </div>,
    <div key="card-5" style={{ width: "80vw", height: "auto" }}>
      <Card
        title="Fifth Card"
        description="This is the fifth card in the carousel. It demonstrates how content can be displayed in a carousel format."
        inverse={false}
        contained={true}
        caption="This is a caption for the fifth card."
        buttonLabel="Learn More"
        onButtonClick={() => console.log("Fifth card button clicked")}
      />
    </div>,
  ];

  return (
    <div
      style={{
        marginBottom: "var(--spacing-large)",
      }}
    >
      <Carousel
        children={carouselItems}
        autoplay={true}
        autoplayInterval={4000}
        showControls={true}
        showDots={true}
        showAutoplayToggle={true}
        onSlideChange={handleSlideChange}
        data-qa="basic-carousel"
      />
    </div>
  );
}
