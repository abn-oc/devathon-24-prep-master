import { motion } from "framer-motion"
import bubbles from "../Assets/Bubbles.jpg";
import { useState } from "react";
import { ChevronRight } from 'lucide-react';
import Separator from "../Components/Separator"


export default function Home() {
    const [cardIndex, setCardIndex] = useState<number | null>(null)

    const cards = [
        {
            title: "MDCAT Biology Essentials",
            desc: "Master the core concepts of Biology required for the MDCAT with this comprehensive course. Includes detailed lectures, practice questions, and quizzes.",
            link: "#",
            img: bubbles,
        },
        {
            title: "MDCAT Chemistry Fundamentals",
            desc: "Dive into the fundamental principles of Chemistry. This course covers key topics and problem-solving strategies to help you excel in the MDCAT Chemistry section.",
            link: "#",
            img: bubbles,
        },
        {
            title: "MDCAT Physics for Success",
            desc: "A focused course on Physics concepts essential for the MDCAT. Includes interactive lessons and practice problems to reinforce your understanding.",
            link: "#",
            img: bubbles,
        },
        {
            title: "MDCAT English Language Skills",
            desc: "Enhance your English language skills with targeted exercises and strategies to tackle the language section of the MDCAT effectively.",
            link: "#",
            img: bubbles,
        },
        {
            title: "MDCAT Critical Thinking and Reasoning",
            desc: "Develop critical thinking and reasoning skills with this course designed to improve your problem-solving abilities and test-taking strategies for the MDCAT.",
            link: "#",
            img: bubbles,
        },
        {
            title: "MDCAT Full Practice Tests",
            desc: "Take full-length practice tests that simulate the actual MDCAT exam experience. Review detailed solutions and explanations to enhance your test performance.",
            link: "#",
            img: bubbles,
        }
    ];


    const blurEffect = {
        blur: {
            x: 120,
            y: 140,
            scale: 1.8,
            filter: "blur(10px)",
            transition: {
                duration: 0.3,
                ease: "easeInOut",
            },
        },
        unblur: {
            scale: 1.1,
            x: 0,
            y: 0,
            filter: "blur(0px)",
            transition: {
                duration: 0.5,
                ease: "easeInOut",
            },
        },
    };

    const description = {
        visible: {
            x: 0,
            transition: {
                duration: 0.3,
                ease: "easeInOut",
            },
        },
        hidden: {
            x: 350,
            transition: {
                duration: 0.3,
                ease: "easeInOut",
            },
        },
    };

    const expand = {
        visible: {
            y: 0,
            transition: {
                duration: 0.3,
                ease: "easeInOut",
            },
        },
        hidden: {
            y: 250,
            transition: {
                duration: 0.3,
                ease: "easeInOut",
            },
        },
    };

    return (
        <div className="bg-neutral-900 text-white pt-14 pb-8">
            <div className="mx-32 mb-6">
                <div className="text-[44px] font-bold">Available Courses</div>
                <Separator />
            </div>
            <div className="px-28 flex flex-row flex-wrap justify-center items-center">
                {cards.map((card, index) => (
                    <motion.div
                        key={index}
                        onHoverStart={() => {
                            setCardIndex(index);
                        }}
                        onHoverEnd={() => {
                            setCardIndex(null);
                        }}
                        className="cursor-pointer overflow-hidden relative m-6"
                    >
                        <motion.img
                            src={card.img}
                            alt="Background"
                            className="h-[465px] w-[368px] object-cover"
                            variants={blurEffect}
                            animate={cardIndex === index ? "blur" : "unblur"}
                        />
                        <div className="flex flex-col absolute inset-0 p-8 z-10">
                            <motion.div className="font-bold mb-7 text-2xl text-black">
                                {card.title}
                            </motion.div>
                            <div className="flex flex-col justify-between h-full">
                                <motion.div
                                    variants={description}
                                    animate={cardIndex === index ? "visible" : "hidden"}
                                    className="text-xl h-full text-black"
                                >
                                    {card.desc}
                                </motion.div>
                                <a className="flex justify-end" href={card.link}>
                                    <motion.div
                                        variants={expand}
                                        animate={cardIndex === index ? "visible" : "hidden"}
                                        className="a h-full font-bold text-xl relative group"
                                    >
                                        <div className="flex flex-row w-full text-black">
                                            Go to Details <ChevronRight />
                                        </div>
                                    </motion.div>
                                </a>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    )
}