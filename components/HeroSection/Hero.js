import Image from "next/image.js";
import alwinImage from "../../public/img/al1.jpeg";
import GitHub from "../footer/GitHub";
import Mail from "../footer/Mail";
import Linkedin from "../footer/Linkedin";


function Hero() {
    return (
        <section className="flex items-center justify-start">

            {/* <div className="w-56 h-56 border border-slate-200 rounded-tl-3xl rounded-br-3xl mr-12 overflow-hidden">
                <Image src={alwinImage} alt="Alwin Paul" />

            </div> */}

            <div className="h-[95vh] flex flex-col items-start justify-center">
                <div className="text-lg text-slate-200">Hello There, My name is</div>
                <div className="text-4xl sm:text-7xl font-bold pt-4 text-highlight">Alwin Abraham</div>
                <div className="text-3xl sm:text-5xl font-bold pt-4 text-slate-400 ">I am a Front-end Developer</div>
                <div className="text-lg text-slate-200 pt-4">I love stunning and intuitive web experiences,
                    <br />building them one component at a time.
                </div>
                <div className="flex my-4 gap-6 h-8">
                    <GitHub />
                    <Mail />
                    <Linkedin />
                </div>

            </div>
        </section>
    )
}

export default Hero