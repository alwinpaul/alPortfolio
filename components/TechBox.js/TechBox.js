import { skillsData } from "../../data/skillsData.js";
import SkillCard from "../about/SkillCard.js";

function TechBox() {

    const allSkills = skillsData.map((skill) => (
        <SkillCard {...skill} key={skill.caption} />
    ));

    return (
        <section>
            <div className="text-3xl text-highlight py-3 text-center">Tech stack I work on</div>
            <div className='w-full p-2 flex items-centre justify-center gap-8'>
                {allSkills}
            </div>
        </section>

    )
}

export default TechBox