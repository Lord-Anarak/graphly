"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { FollowerPointerCard } from "./following-pointer";

const CardContent = ({ card, hovered, index }) => (
  <>
    <div
      className={cn(
        "rounded-lg relative bg-gray-100 hover:rounded-[50%] dark:bg-neutral-900 overflow-hidden aspect-square w-full transition-all duration-300 ease-out",
        hovered !== null &&
          hovered !== index &&
          "blur-sm grayscale scale-[0.98]"
      )}>
      <Image
        src={card.src}
        alt={card.title}
        fill
        className="object-cover absolute inset-0"
      />
    </div>
    {/* <div
      className={cn(
        "py-8 px-4 transition-opacity duration-300",
        hovered !== null &&
          hovered !== index &&
          "blur-sm grayscale scale-[0.98]"
      )}>
      <div className="text-[calc(theme(fontSize.desc)*0.5)] font-medium bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-200">
        {card.title}
      </div>
      <p className="text-zinc-400">{card.desc}</p>
    </div> */}
  </>
);

export const Card = React.memo(
  ({ card, index, hovered, setHovered, className }) => {
    const mouseEventProps = {
      onMouseEnter: () => setHovered(index),
      onMouseLeave: () => setHovered(null),
    };

    if (card.link) {
      return (
        <Link
          href={card.link}
          className="block cursor-pointer"
          {...mouseEventProps}>
          <FollowerPointerCard title={"View"}>
            <CardContent card={card} hovered={hovered} index={index} />
          </FollowerPointerCard>
        </Link>
      );
    }

    return (
      <div {...mouseEventProps}>
        <CardContent card={card} hovered={hovered} index={index} />
      </div>
    );
  }
);

Card.displayName = "Card";

export function FocusCards({ cards, className, link }) {
  const [hovered, setHovered] = useState(null);

  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-2 gap-[calc(theme(gap.base)*2)] w-full",
        className
      )}>
      {cards.map((card, index) => {
        if (link) {
          return (
            <Link href={link}>
              <Card
                key={index}
                card={card}
                index={index}
                hovered={hovered}
                setHovered={setHovered}
              />
            </Link>
          );
        }
        return (
          <Card
            key={index}
            card={card}
            index={index}
            hovered={hovered}
            setHovered={setHovered}
          />
        );
      })}
    </div>
  );
}
