import React, {useCallback, useState} from 'react'
import {useDropzone} from "react-dropzone";
import { formatSize } from '../lib/utils';

interface FileUploaderProps {
    onFileSelect: (file:File | null) => void;
}

const FileUploader = ({onFileSelect}:FileUploaderProps) => {

    const onDrop = useCallback((acceptedFiles:File[]) => {
        //// do something with the files
        const file = acceptedFiles[0] || null ;

        onFileSelect?.(file);
    } ,[onFileSelect])

    const {getRootProps,getInputProps ,isDragActive , acceptedFiles} = useDropzone({onDrop,
        multiple:false,
        accept: {'application/pdf' :[`.pdf`]},
        maxSize: 20 * 1024 * 1024 ,
    })

    const file = acceptedFiles[0] || null;



    return (
        <div className="w-full gradient-border">
            <div {...getRootProps()}>
                <input {...getInputProps()} />{
                  <div className="space-y-4 cursor-pointer" >

                      {
                          file ? (
                              <div className="uploader-selected-file" onClick={(e) => e.stopPropagation()}>
                                  <img src="/images/pdf.png" alt="pdf" className="w-16 h-16"/>
                                  <div className="flex flex-col items-center">
                                      <div>
                                          <p className="text-lg font-medium text-gray-900 truncate max-w-sx" >{file.name}</p>
                                          <p className="text-sm text-gray-500">{formatSize(file.size)}</p>
                                      </div>
                                  </div>
                                  <button className="p-2 cursor-pointer" onClick={() => onFileSelect?.(null)}>
                                      <img src="/icons/cross.svg" alt="close" className="size-16"/>
                                  </button>
                              </div>

                          ):(
                              <div>
                                  <div className="mx-auto w-16 h-16 flex items-center justify-center ">
                                      <img src="/icons/info.svg" alt="info" className="size-20"/>
                                  </div>
                                  <p className="text-lg text-gray-500">
                                      <span className="font-semibold">
                                            Click to upload
                                      </span> or drag and drop your resume here
                                  </p>
                                  <p className="text-lg text-gray-500">PDF</p>
                              </div>
                          )
                      }
                  </div>
                  }
            </div>
        </div>
    )
}

export default FileUploader
