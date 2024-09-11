export const menuSlide = {
	initial: { x: "calc(100% + 100px)" },
	enter: { x: 0, transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } },
	exit: {
		x: "calc(100% + 100px)",
		transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] },
	},
};

export const linkSlide = {
	initial: { x: 150 },
	enter: (i) => ({
		x: 0,
		transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.07 * i },
	}),
	exit: (i) => ({
		x: 80,
		transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.07 * i },
	}),
};

export const scaleAnimation = {
	initial: { scale: 0, x: "-50%", y: "-50%" },
	enter: {
		scale: 1,
		x: "-50%",
		y: "-50%",
		transition: { duration: 0.4, ease: [0.76, 0, 0.24, 1] },
	},
	exit: {
		scale: 0,
		x: "-50%",
		y: "-50%",
		transition: { duration: 0.4, ease: [0.32, 0, 0.67, 0] },
	},
};
