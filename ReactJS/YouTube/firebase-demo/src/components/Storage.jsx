import React, { useState } from 'react'
import { storage } from '../firebase'

function Storage() {

    const [file, setFile] = useState("");

    const upload = () => {

        const uploadTask = storage.ref(`images/${file.name}`).put(file);
        uploadTask.on('state_changed', f1, f2, f3);

        function f1(snapshot) {
            const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            console.log("Progress is " + progress + "%");
        }

        function f2(error) {
            console.log(error);
        }

        function f3() {
            uploadTask.snapshot.ref.getDownloadURL().then((url) => {
                console.log(url);
            });
        }
    }

    return (
        <div>
            <label htmlFor="file">File</label>
            <input type="file" accept='image/*' value={file} onChange={(e) => setFile(e.target.files[0])} />
            <button onClick={upload}>Upload</button>
        </div>
    )
}

export default Storage