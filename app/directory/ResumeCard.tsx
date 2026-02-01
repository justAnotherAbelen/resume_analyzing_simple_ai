import {Link} from "react-router";
import ScoreCircle from "~/directory/scoreCircles";

const ResumeCard = ({resume : {id,companyName,jobTitle, feedback,imagePath}}: {resume : Resume}) => {
    return(
        <Link to={`/resume/${id}`} className="resume-card animate-in fade-in duration-500 hover:shadow-md transition-shadow">
            <div className="resume-card-header">
                <div className="resume-card-info">
                    <h2 className="text-2xl font-bold text-black">
                        {companyName}
                    </h2>
                    <h3 className="text-sm text-gray-500 font-medium">
                        {jobTitle}
                    </h3>
                </div>
                <div className="shrink-0 scale-75 origin-top-right">
                    <ScoreCircle score={feedback.overallScore}/>
                </div>
            </div>

            <div className="resume-card-image-container">
                <img
                    src={imagePath}
                    alt={`${companyName} resume`}
                    className="w-full h-full object-cover object-top"
                />
            </div>
        </Link>
    )
}

export default ResumeCard;