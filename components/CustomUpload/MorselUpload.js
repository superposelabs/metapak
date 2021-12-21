/*eslint-disable*/
import React from "react";

import defaultImage from "assets/img/morsel-fileupload.png";
import Button from "components/CustomButtons/Button.js";

// hash function
import jsSHA from "jssha";


export default function MorselUpload() {
  const [file, setFile] = React.useState(null);
  const [imagePreviewUrl, setMorselPreviewUrl] = React.useState(defaultImage);

  const handleMorselChange = (e) => {

    e.preventDefault();

    if (!e.target) 
        return;

    let reader = new FileReader();
    reader.fileName = e.target.files[0].name;
    reader.readAsArrayBuffer(e.target.files[0]);
    let newFile = e.target.files[0];


    reader.onloadend = () => {

        // HASHES TEXT hash of the portal that was created
        // const shaObj = new jsSHA("SHA-256", "TEXT", { encoding: "UTF8" });
        // shaObj.update(JSON.stringify(mainPortal));
        // const portalHash = shaObj.getHash("HEX", {"outputUpper" : true});

        // HASHES FILE
        var arrayBuffer = reader.result
        var bytes = new Uint8Array(arrayBuffer);
        const shaObj = new jsSHA("SHA-256", "UINT8ARRAY");
        shaObj.update(bytes);
        const hash = shaObj.getHash("HEX");

        // START MORSEL VALIDATION
        // 
        // 1. USE HASH TO CALL API TO SEE IF ITS EVER BEEN VALIDATED
        // 2. IF NOT VALIDATED, CHECK BLOCKCHAIN DATA
        // 3. IF NOT ON BLOCKCHAIN, PRESENT NOTICE OF SUCH CONDITION
        // 4. IF ON BLOCKCHAIN, AND NOT VALIDATED, UNPACK AND VALIDATE
        // 5. RETURN RESULT
        //
        // END
        console.log("hash: " + hash);
        
      setFile(newFile);
      //setMorselPreviewUrl(reader.result);
    };

    // if (newFile) {
    //   reader.readAsDataURL(newFile);
    // }


  };
  // eslint-disable-next-line
  const handleSubmit = (e) => {
    e.preventDefault();
    // this.state.file is the file/image uploaded
    // in this function you can save the image (this.state.file) on form submit
    // you have to call it yourself
    console.log(file);
  };
  return (
    <div className="picture-container">
      <div className="picture">
        <img src={imagePreviewUrl} className="picture-src" alt="..." />
        <input type="file" onChange={(e) => handleMorselChange(e)} />
      </div>
      <h6 style={{color:"#fff", fontSize:"1.2em"}}>Upload Morsel Pack</h6>
      <Button round color="primary" onClick={handleSubmit}>Validate</Button>
    </div>
  );
}
