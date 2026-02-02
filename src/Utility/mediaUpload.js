import { createClient } from "@supabase/supabase-js";

const supaBaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5qcW5vb2FxdHFka2d5Y2d1aHR1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Njk4NDA5NzEsImV4cCI6MjA4NTQxNjk3MX0.XoJvRMIm_WP-RJKepuja4aYDcMo51CRA0T3Ga9jZcMg";

const supaBaseURL = "https://njqnooaqtqdkgycguhtu.supabase.co"

const supaBase = createClient(supaBaseURL, supaBaseKey);

export default function uploadFile(file){
    return new Promise((resolve, reject) => {
        if(file == null){
            reject("No File Selected")
            return;
        }

        const timeStamp = new Date().getTime();
        const fileName = timeStamp + "-" + file.name

        supaBase.storage.from("images").upload(fileName, file, {
            upsert : false,
            cacheControl : 3600
        }).then(()=>{
            const url = supaBase.storage.from("images").getPublicUrl(fileName).data.publicUrl
            resolve(url);
        }).catch(
            ()=>{
            reject("Failed to upload file");
        })
    })
}