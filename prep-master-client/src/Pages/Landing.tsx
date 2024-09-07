import { motion } from "framer-motion"
import Button from "../Components/Button"
import TypingEffect from "../Components/TypingEffect"


export default function Landing() {

    console.log("inlanding")


    return (
        <div className="bg-neutral-900 text-white overflow-x-hidden">
            <div id="hero" className="h-[28rem] bg neutral-200 flex flex-col justify-center items-center">
            <h1 className="text-6xl mb-5 z-10">Prep Master</h1>
            <TypingEffect text="Education is not preparation for life; education is life itself..."/>
            </div>
            <div id="section-1" className="mb-16 relative z-10 bg-neutral-900 flex flex-row justify-around mx-5 pt-24">
                <img src="mcqs-hero.png" className="rounded-md w-[30rem] h-auto"/>
                <div className="flex flex-col">
                <h2 className="text-violet-500 text-3xl mb-5 font-bold">About: </h2>
                <p className="w-[30rem]">Prep Master is a convenient platform designed for students preparing for major entrance exams such as MDCAT, NTS, ECAT, and SAT. It allows users to browse and purchase practice tests tailored to each specific exam, offering a variety of mock tests that simulate real exam conditions. The interface is user-friendly, providing instant access to a wide range of subjects and topics, helping students gauge their readiness and improve their test-taking skills. With features like instant scoring, detailed explanations, and performance tracking, this app is a valuable tool for exam preparation.</p>
                </div>
            </div>
            <div id="section-2" className="h-[14rem] bg-neutral-800 flex flex-col justify-evenly items-center">
                <p className="text-xl">Dive into all our practice tests now and supercharge your prep!🚀</p>
                <Button className="mb-5 w-fit px-7 hover:bg-neutral-900">View Tests</Button>
            </div>
            <div id="circle" className="z-0 w-[95vw] absolute top-[40%] opacity-50 blur-3xl flex justify-center items-center">
                <div className="z-0 bg-violet-700 rounded-full w-[150vw] h-[15rem] opacity-70"></div>
                <div className="z-0 bg-violet-700 rounded-full w-[30vw] opacity-20 h-[15rem] relative bottom-24"></div>
                <div className="z-0 bg-violet-700 rounded-full w-[30vw] h-[15rem]"></div>
                <div className="z-0 bg-violet-700 rounded-full w-[30vw] h-[15rem] relative top-80"></div>
                <div className="z-0 bg-violet-700 rounded-full w-[30vw] h-[15rem] relative top-40"></div>
                <div className="z-0 bg-violet-700 rounded-full w-[30vw] opacity-20 h-[15rem] relative top-24"></div>
                <div className="z-0 bg-violet-700 rounded-full w-[200vw] h-[15rem] opacity-80"></div>
            </div>
        </div>
    )
}