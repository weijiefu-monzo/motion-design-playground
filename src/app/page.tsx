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

export default function Home() {
  return (
    <div>
      <ThemeToggle />
      <TypographyDemo />
      <ButtonDemo />
      <IconButtonDemo />
      <ChipDemo />
      <CellDemo />
      <CardDemo />
      <CarouselDemo />
      <ClickableCardDemo />
      <AccordionDemo />
    </div>
  );
}
