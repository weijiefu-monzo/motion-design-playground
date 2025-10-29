"use client";
import ButtonDemo from "../components/Button/ButtonDemo";
import { TypographyDemo } from "../components/Typography/TypographyDemo";
import { ThemeToggle } from "../components/ThemeToggle";
import IconButtonDemo from "@/components/IconButton/IconButtonDemo";
import ChipDemo from "@/components/Chip/ChipDemo";
import CellDemo from "@/components/Cell/CellDemo";
import CardDemo from "@/components/Card/CardDemo";
import CarouselDemo from "@/components/Carousel/CarouselDemo";
import { ClickableCardDemo } from "@/components";
import { AccordionDemo } from "@/components";
import { RemountWrapper } from "@/components/RemountWrapper";
import { SpringConfigProvider } from "@/contexts/SpringConfigContext";

export default function Home() {
  return (
    <div>
      <SpringConfigProvider>
        <RemountWrapper>
          <TypographyDemo />
          <ButtonDemo />
          <IconButtonDemo />
          <ChipDemo />
          <CellDemo />
          <CardDemo />
          <CarouselDemo />
          <ClickableCardDemo />
          <AccordionDemo />
        </RemountWrapper>
      </SpringConfigProvider>
    </div>
  );
}
