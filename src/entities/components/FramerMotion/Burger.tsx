import { useCycle, motion, AnimatePresence } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import styled from "styled-components";

const sidebar = {
    open: (width = 1000) => ({
        clipPath: `circle(${width * 2 + 200}px at calc(100% - 40px) 40px)`,
        transition: {
            type: "spring",
            stiffness: 20,
            restDelta: 2,
        },
    }),
    closed: {
        clipPath: "circle(30px at calc(100% - 40px) 40px)",
        transition: {
            delay: 0.5,
            type: "spring",
            stiffness: 400,
            damping: 40,
        },
    },
};

export const TestBurgerFramerMotion = () => {
    const [isOpen, toggleOpen] = useCycle(false, true);
    const containerRef = useRef(null);
    const { height } = useDimensions(containerRef);
    const [animate, setAnimate] = useState(false);

    const BurgerChange = () => {
        if (!animate) {
            toggleOpen();
        }
    };

    return (
        <Nav
            initial={false}
            animate={isOpen ? "open" : "closed"}
            custom={height}
            ref={containerRef}
        >
            <Navigation isOpen={isOpen} />

            <Background
                variants={sidebar}
                onAnimationComplete={(e) => {
                    if (e == "closed") {
                        setAnimate(false);
                    }
                }}
                onAnimationStart={(e) => {
                    if (e == "closed") {
                        setAnimate(true);
                    }
                }}
            />
            <MenuToggle toggle={() => BurgerChange()} />
        </Nav>
    );
};
const Nav = styled(motion.nav)`
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    width: 300px;
    /* transform: scale(-1, 1); */
`;

const useDimensions = (ref: any) => {
    const dimensions = useRef({ width: 0, height: 0 });

    useEffect(() => {
        dimensions.current.width = ref.current.offsetWidth;
        dimensions.current.height = ref.current.offsetHeight;
    }, []);

    return dimensions.current;
};

const Background = styled(motion.div)`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    width: 300px;
    background: #fff;
`;
const colors = ["#FF008C", "#D309E1", "#9C1AFF", "#7700FF", "#4400FF"];

const Livar = {
    initial: {
        y: -50,
        opacity: 0,
    },
    animate: (custom: number) => ({
        y: 0,
        opacity: 1,

        transition: {
            delay: 0.1 * custom,
        },
    }),
    exit: (custom: number) => ({
        y: -50,
        opacity: 0,

        transition: {
            delay: 0.1 * custom,
        },
    }),
};

const MenuItem = ({ i, isOpen }: any) => {
    const style = { border: `2px solid ${colors[i]}` };
    return (
        <div>
            <AnimatePresence>
                {isOpen && (
                    <Li
                        initial={"initial"}
                        animate={"animate"}
                        exit={"exit"}
                        variants={Livar}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        custom={i}
                    >
                        <Icon style={style} />
                        <Text style={style} />
                    </Li>
                )}
            </AnimatePresence>
        </div>
    );
};
const Li = styled(motion.li)`
    margin: 0;
    padding: 0;
    list-style: none;
    margin-bottom: 20px;
    display: flex;
    align-items: center;
    cursor: pointer;
`;
const Icon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    flex: 40px 0;
    margin-right: 20px;
`;
const Text = styled.div`
    border-radius: 5px;
    width: 200px;
    height: 20px;
    flex: 1;
`;
//
const Path = (props: any) => (
    <motion.path
        fill="transparent"
        strokeWidth="3"
        stroke="hsl(0, 0%, 18%)"
        strokeLinecap="round"
        {...props}
    />
);

const MenuToggle = ({ toggle }: any) => (
    <Button onClick={toggle}>
        <svg width="23" height="23" viewBox="0 0 23 23">
            <Path
                variants={{
                    closed: { d: "M 2 2.5 L 20 2.5" },
                    open: { d: "M 3 16.5 L 17 2.5" },
                }}
            />
            <Path
                d="M 2 9.423 L 20 9.423"
                variants={{
                    closed: { opacity: 1 },
                    open: { opacity: 0 },
                }}
                transition={{ duration: 0.1 }}
            />
            <Path
                variants={{
                    closed: { d: "M 2 16.346 L 20 16.346" },
                    open: { d: "M 3 2.5 L 17 16.346" },
                }}
            />
        </svg>
    </Button>
);
const Button = styled.button`
    outline: none;
    border: none;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    cursor: pointer;
    position: absolute;
    top: 18px;
    right: 15px;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: transparent;
`;
//
const variants1 = {
    open: {
        transition: { staggerChildren: 0.07, delayChildren: 0.05 },
    },
    closed: {
        transition: { staggerChildren: 0.05, staggerDirection: -1 },
    },
};

const Navigation = ({ isOpen }: any) => (
    <Ul variants={variants1}>
        {itemIds.map((i) => (
            <MenuItem isOpen={isOpen} i={i} key={i} />
        ))}
    </Ul>
);
const Ul = styled(motion.ul)`
    padding: 25px;
    position: absolute;
    top: 100px;
    width: 230px;
    z-index: 100;
`;
const itemIds = [0, 1, 2, 3, 4];
