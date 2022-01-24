export const animation = {
  in: {
    opacity: 1,
    x: 0,
    // transition: { delay: 2 },
  },
  out: {
    opacity: 0.5,
    x: "-100vw",
  },
  end: {
    opacity: 0.5,
    x: "100vw",
  },
};

export const transition = {
  duration: 0.8,
  ease: [0.6, 0.05, -0.01, 0.9],
};
