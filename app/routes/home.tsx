import type { Route } from "./+types/home";
import NavBar from "~/directory/navBar";
import {resumes} from "~/constants";
import ResumeCard from "~/directory/ResumeCard";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Resumind" },
    { name: "description", content: "Your Dream Job" },
  ];
}

export default function Home() {
  return <main className="bg-[url('/images/bg-main.svg')] bg-cover ">
    <NavBar ></NavBar>


    <section className="main-section">
      <div className="page-heading">
        <h1>Track Your Application & Resume Ratings</h1>
        <h2>Review Your submissions and check AI-powered feedback</h2>
      </div>

      {resumes.length > 0 &&(
          <div className="resumes-section">
            {resumes.map((item) => (
                <ResumeCard key={item.id} resume={item}/>
            ))}
          </div>
      )}

    </section>



  </main>
}
