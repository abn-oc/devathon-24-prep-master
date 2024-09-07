import { MouseEventHandler, useState } from "react";
import Button from "../Components/Button";
import Separator from "../Components/Separator";
import { IoIosAddCircleOutline } from "react-icons/io";
import { MdOutlineCancel } from "react-icons/md";
import { TiTickOutline } from "react-icons/ti";
import { motion } from "framer-motion";
import { MdOutlineDeleteOutline } from "react-icons/md";
import { MCQ } from "../../../prep-master-types/types";

const fadeInFromAbove: any = {
    initial: { opacity: 0, y: -30 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 0 },
    transition: { duration: 0.5 }
};

interface MCQFormProps {
    back: () => void;
    onAddMCQ: (mcq: MCQ) => void;
}

export function MCQForm({ back, onAddMCQ }: MCQFormProps) {
    const [q, setQ] = useState<string>("");
    const [a, setA] = useState<string>("");
    const [b, setB] = useState<string>("");
    const [c, setC] = useState<string>("");
    const [d, setD] = useState<string>("");
    const [correct, setCorrect] = useState<"" | "A" | "B" | "C" | "D">("");

    const [msg, setmsg] = useState<string>("")

    const handleDone = () => {
        if (a == "" || b == "" || c == "" || d == "" || correct == "" || q == "") {
            setmsg("Don't leave anything blank")
            return;
        }
        const newMCQ: MCQ = {
            statement: q,
            optionA: a,
            optionB: b,
            optionC: c,
            optionD: d,
            correct: correct
        };
        onAddMCQ(newMCQ);
        back();
    };

    return (
        <motion.div
            className="p-5 w-90 bg-neutral-900 my-5 rounded-lg"
            variants={fadeInFromAbove}
            initial="initial"
            animate="animate"
            exit="exit"
        >
            <div className="p-5 w-90 bg-neutral-900 border my-5 rounded-lg">
                <p className="text-red-500">{msg}</p>
                <form className="flex flex-col">
                    <div className="flex flex-row items-center my-3">
                        <label className="mr-5">Question Statement: </label>
                        <input id="q" value={q} onChange={e => setQ(e.target.value)} type="text" className="w-96 bg-neutral-700 rounded p-2" />
                    </div>
                    <div className="flex flex-row items-center my-3">
                        <label className="mr-5">Option a: </label>
                        <input value={a} onChange={e => setA(e.target.value)} type="text" className="w-96 bg-neutral-700 rounded p-2" />
                    </div>
                    <div className="flex flex-row items-center my-3">
                        <label className="mr-5">Option b: </label>
                        <input value={b} onChange={e => setB(e.target.value)} type="text" className="w-96 bg-neutral-700 rounded p-2" />
                    </div>
                    <div className="flex flex-row items-center my-3">
                        <label className="mr-5">Option c: </label>
                        <input value={c} onChange={e => setC(e.target.value)} type="text" className="w-96 bg-neutral-700 rounded p-2" />
                    </div>
                    <div className="flex flex-row items-center my-3">
                        <label className="mr-5">Option d: </label>
                        <input value={d} onChange={e => setD(e.target.value)} type="text" className="w-96 bg-neutral-700 rounded p-2" />
                    </div>
                    <div className="flex flex-row items-center my-3">
                        <label htmlFor="correct-answer" className="mr-5">Correct Answer: </label>
                        <select value={correct} onChange={e => setCorrect(e.target.value as "" | "A" | "B" | "C" | "D")} id="correct-answer" className="w-96 bg-neutral-700 rounded p-2">
                            <option value="">Select the correct answer</option>
                            <option value="A">Option a</option>
                            <option value="B">Option b</option>
                            <option value="C">Option c</option>
                            <option value="D">Option d</option>
                        </select>
                    </div>
                </form>
                <div className="flex flex-row w-[30%] justify-around ml-auto">
                    <Button className="mr-1 w-36 mt-5 px-5 hover:bg-red-400" onClick={back}>
                        <div className="flex flex-row items-center">
                            <MdOutlineCancel className="size-6 mr-1" /> Cancel
                        </div>
                    </Button>
                    <Button className="w-36 ml-1 mt-5 px-5 hover:bg-green-500" onClick={handleDone}>
                        <div className="flex flex-row items-center">
                            <TiTickOutline className="size-6 mr-1" /> Done
                        </div>
                    </Button>
                </div>
            </div>
        </motion.div>
    );
}

export function AddNewMCQ({ onAddMCQ }: { onAddMCQ: (mcq: MCQ) => void }) {
    const [active, setActive] = useState<boolean>(false);

    return (
        <div>
            {active ? <MCQForm back={() => { setActive(false) }} onAddMCQ={onAddMCQ} /> :
                <Button className="w-fit mt-5 px-5" onClick={() => { setActive(true) }}>
                    <div className="flex flex-row items-center">
                        <IoIosAddCircleOutline className="size-6 mr-1" /> Add New MCQ
                    </div>
                </Button>}
        </div>
    );
}

export function MCQcomp({ mcq, del }: { mcq: MCQ, del: (arg0: MCQ) => void }) {

    return (
        <div className="p-5 w-90 bg-neutral-900 border my-5 rounded-lg flex flex-col">
            <p className="text-xl">Q. {mcq.statement}</p>
            {mcq.correct == 'A' ? <p className="text-green-400">a. {mcq.optionA}</p> : <p className="text-neutral-400">a. {mcq.optionA}</p>}
            {mcq.correct == 'B' ? <p className="text-green-400">b. {mcq.optionB}</p> : <p className="text-neutral-400">b. {mcq.optionB}</p>}
            {mcq.correct == 'C' ? <p className="text-green-400">c. {mcq.optionC}</p> : <p className="text-neutral-400">c. {mcq.optionC}</p>}
            {mcq.correct == 'D' ? <p className="text-green-400">d. {mcq.optionD}</p> : <p className="text-neutral-400">d. {mcq.optionD}</p>}
            <Button onClick={() => del(mcq)} className="ml-auto mt-2 w-min px-5 hover:bg-red-400"><div className="flex flex-row items-center"><MdOutlineDeleteOutline className="size-6" />Delete</div></Button>
        </div>
    )
}

export default function CreateTest() {
    const [mcqList, setMcqList] = useState<MCQ[]>([]);

    const handleAddMCQ = (mcq: MCQ) => {
        setMcqList(prevList => [...prevList, mcq]);
    };

    function del(mcq: MCQ) {
        setMcqList(prevlist => prevlist.filter(a => a.statement !== mcq.statement))
    }

    const mcqMarkup = mcqList.map(a =>
        <MCQcomp mcq={a} del={del} />
    )

    function handletestsubmit() {
        if (mcqList.length == 0) {
            return;
        }
    }



    return (
        <div className="bg-neutral-900 min-h-[100vh] p-10 flex flex-col text-white">
            <div className="mx-5">
                <h1 className="text-3xl font-bold">Creating New Test</h1>
                <Separator className="mt-5" />
                <p className="text-red-500">{msg1}</p>
                <AddNewMCQ onAddMCQ={handleAddMCQ} />
                {mcqMarkup}
                <Button className="mt-5" onClick={handletestsubmit}>Submit Test</Button>
            </div>
        </div>
    );
}

