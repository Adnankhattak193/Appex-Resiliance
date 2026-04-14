import React from "react";
import { motion, Variants } from "framer-motion";

interface Props {
  text: string | string[];
  el?: React.ElementType;
  className?: string;
  delay?: number;
  duration?: number;
  stagger?: number;
  once?: boolean;
  accentWords?: { word: string; className: string }[];
  variant?: "characters" | "fade";
}

const defaultVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.21, 0.47, 0.32, 0.98],
    },
  },
};

export const AnimatedText: React.FC<Props> = ({
  text,
  el: Wrapper = "p",
  className,
  delay = 0,
  duration = 0.8,
  stagger = 0.05,
  once = true,
  accentWords = [],
  variant = "characters",
}) => {
  const textArray = Array.isArray(text) ? text : [text];

  const getWordDetails = (word: string) => {
    const accent = accentWords.find(
      (a) => a.word === word || word.includes(a.word),
    );
    return {
      className: accent ? accent.className : "",
      isAccent: !!accent,
    };
  };

  if (variant === "fade") {
    return (
      <Wrapper className={className}>
        <motion.span
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once, margin: "-100px" }}
          transition={{ duration: 0.8, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="block"
        >
          {textArray.map((line, i) => (
            <span key={i} className="block">
              {line}
            </span>
          ))}
        </motion.span>
      </Wrapper>
    );
  }

  return (
    <Wrapper className={className}>
      <motion.span
        initial="hidden"
        whileInView="visible"
        viewport={{ once, margin: "-100px" }}
        transition={{ staggerChildren: stagger, delayChildren: delay }}
        aria-hidden
      >
        {textArray.map((line, lineIndex) => (
          <span className="block" key={`${line}-${lineIndex}`}>
            {line.split(" ").map((word, wordIndex) => {
              const { className: wordClassName } = getWordDetails(word);
              return (
                <span
                  className={`inline-block whitespace-nowrap ${wordClassName}`}
                  key={`${word}-${wordIndex}`}
                >
                  {word.split("").map((char, charIndex) => (
                    <motion.span
                      className="inline-block"
                      variants={defaultVariants}
                      key={`${char}-${charIndex}`}
                    >
                      {char}
                    </motion.span>
                  ))}
                  <span className="inline-block">&nbsp;</span>
                </span>
              );
            })}
          </span>
        ))}
      </motion.span>
      <span className="sr-only">{textArray.join(" ")}</span>
    </Wrapper>
  );
};
