
import { useState } from "react";
import uploadFile from "../Utility/mediaUpload";



export default function Test() {
   const [files, setFiles] = useState(null);

    async function upload(){
      try{
        const url = await uploadFile(files);
        console.log(url);
      }catch(err){
        console.log(err);
      }
    }

    return (
        <div className="w-full h-full flex justify-center items-center gap-4">
           <input onChange={
            (e)=>{
                setFiles(e.target.files[0]);
            }
           } type="file" className="py-3 px-3 rounded-3xl h-[50px] border border-secondary/40 text-secondary hover:bg-secondary hover:text-white " />
           <button onClick={upload} className="rounded-full w-[120px] h-[50px] bg-secondary text-white">Upload</button>
        </div>
    )
}