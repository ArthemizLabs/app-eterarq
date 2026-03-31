"use client";

import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useCallback } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

const Card = ({
  className,
  image,
  children,
  onClick,
}: {
  className?: string;
  image?: string;
  children?: React.ReactNode;
  onClick?: () => void;
}) => {
  return (
    <div
      className={cn("relative w-full h-full rounded-2xl overflow-hidden", onClick && "cursor-pointer", className)}
      onClick={onClick}
    >
      {image && (
        <div className="absolute inset-0">
          <img src={image} alt="" className="w-full h-full object-cover" loading="lazy" />
        </div>
      )}
      {children && (
        <div className="relative z-10 p-6">{children}</div>
      )}
    </div>
  );
};

interface CardData {
  image: string;
  title: string;
  description: string;
}

const StackedCardsInteraction = ({
  cards,
  spreadDistance = 40,
  rotationAngle = 5,
  animationDelay = 0.1,
}: {
  cards: CardData[];
  spreadDistance?: number;
  rotationAngle?: number;
  animationDelay?: number;
}) => {
  const [isHovering, setIsHovering] = useState(false);
  const [lightboxIdx, setLightboxIdx] = useState<number | null>(null);

  const limitedCards = cards.slice(0, 3);

  const navigate = useCallback((dir: 1 | -1) => {
    if (lightboxIdx === null) return;
    setLightboxIdx((lightboxIdx + dir + cards.length) % cards.length);
  }, [lightboxIdx, cards.length]);

  return (
    <>
      <div className="w-full flex items-center justify-center">
        <div className="relative w-[320px] h-[420px] sm:w-[380px] sm:h-[480px]">
          {limitedCards.map((card, index) => {
            const isFirst = index === 0;

            let xOffset = 0;
            let rotation = 0;

            if (limitedCards.length > 1) {
              if (index === 1) {
                xOffset = -spreadDistance;
                rotation = -rotationAngle;
              } else if (index === 2) {
                xOffset = spreadDistance;
                rotation = rotationAngle;
              }
            }

            return (
              <motion.div
                key={index}
                className="absolute inset-0"
                initial={{ x: 0, rotate: 0 }}
                animate={{
                  x: isHovering ? xOffset : 0,
                  rotate: isHovering ? rotation : 0,
                  zIndex: isFirst ? 30 : 30 - index * 10,
                }}
                transition={{
                  type: "spring",
                  stiffness: 200,
                  damping: 20,
                  delay: isHovering ? index * animationDelay : 0,
                }}
                {...(isFirst && {
                  onHoverStart: () => setIsHovering(true),
                  onHoverEnd: () => setIsHovering(false),
                })}
              >
                <Card image={card.image} className="shadow-xl" onClick={() => setLightboxIdx(index)}>
                  <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/60 to-transparent">
                    <h3 className="font-display text-xl text-white">{card.title}</h3>
                    <p className="font-body text-sm text-white/70 mt-1">{card.description}</p>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>

      <AnimatePresence>
        {lightboxIdx !== null && (
          <motion.div
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/85 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightboxIdx(null)}
          >
            {/* Close */}
            <button
              className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors z-10"
              onClick={() => setLightboxIdx(null)}
            >
              <X size={32} />
            </button>

            {/* Prev */}
            {cards.length > 1 && (
              <button
                className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 z-10 w-12 h-12 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
                onClick={(e) => { e.stopPropagation(); navigate(-1); }}
              >
                <ChevronLeft size={28} />
              </button>
            )}

            {/* Next */}
            {cards.length > 1 && (
              <button
                className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 z-10 w-12 h-12 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
                onClick={(e) => { e.stopPropagation(); navigate(1); }}
              >
                <ChevronRight size={28} />
              </button>
            )}

            {/* Image */}
            <motion.img
              key={lightboxIdx}
              src={cards[lightboxIdx].image}
              alt=""
              className="max-w-[80vw] max-h-[80vh] object-contain rounded-2xl"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              onClick={(e) => e.stopPropagation()}
            />

            {/* Counter */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/60 font-body text-sm">
              {lightboxIdx + 1} / {cards.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export { StackedCardsInteraction, Card };
