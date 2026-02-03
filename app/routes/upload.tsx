import React, {type FormEvent} from 'react'
import NavBar from "~/directory/navBar"
import {useState} from 'react'
import FileUploader from "~/directory/FileUploader"

const Upload = () => {
    const [isProcessing , setIsProcessing] = useState(false)
    const [status , setStatus] = useState("")

    /// set file state :
    const [file , setFile] = useState<File | null>()

    const handleFileSelect = (file:File | null) => {
        setFile(file)
    }

    const handleSubmit = (e:FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const form =e.currentTarget.closest('form');
        if(!form) return ;
        const formData = new FormData(form);

        const companyName = formData.get('company-name') ;
        const jobTitle = formData.get('job-title') ;
        const jobDescription = formData.get('job-description') ;
        console.log({
            companyName,jobTitle,jobDescription,file
        })

    }

    return (
        <main className="bg-[url('/images/bg-main.svg')] bg-cover ">
            <NavBar></NavBar>

            <section className="main-section">
                <div className="page-heading">
                    <h1>Smart Feedback For Your Dream Job</h1>
                    {isProcessing ? (
                        <>
                            <h2>{status}</h2>
                            <img src="/images/resume-scan.gif" className="w-full"/>
                        </>
                    ) :(
                        <h2>Upload Your Resume</h2>
                    )}
                    {!(isProcessing) && (
                        <form id="upload-form" onSubmit={handleSubmit} className="flex flex-col gap-4">
                            <div className="form-div">
                                <label htmlFor="company-name">
                                    Company Name
                                </label>
                                <input type="text" id="company-name" name="company-name" placeholder="Enter Company Name"/>
                            </div>
                            <div className="form-div">
                                <label htmlFor=" job-description">
                                    job description
                                </label>
                                <textarea rows={5} id="job-description" name="job-description" placeholder="Enter job-description"/>
                            </div>
                            <div className="form-div">
                                <label htmlFor=" uploader ">
                                    upload resume
                                </label>
                                <FileUploader onFileSelect={handleFileSelect}/>
                            </div>
                            <button className="primaryButton" type="submit">
                                Analyze
                            </button>
                        </form>
                    )

                    }
                </div>
            </section>
        </main>
    )
}
export default Upload
