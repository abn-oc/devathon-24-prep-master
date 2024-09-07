import Button from "../Components/Button";
import { IoIosAddCircleOutline } from "react-icons/io";
import Separator from "../Components/Separator";

export default function TeacherDashboard() {

    return(
        <div className="bg-neutral-900 h-[100vh] p-10 flex flex-col text-white">
            <div className="mx-5">
            <h1 className="text-3xl font-bold">Teachers Dashboard</h1>
            <Separator className="mt-5"/>
            <Button className="w-fit mt-5 px-5"><div className="flex flex-row items-center"><IoIosAddCircleOutline className="size-6 mr-1"/> Add New Test</div></Button>
            <h2 className="text-2xl font-bold mt-5">Your Tests:</h2>
            </div>
        </div>
    )
}