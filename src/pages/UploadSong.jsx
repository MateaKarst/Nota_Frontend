import HeaderVariants from "../components/Headers/HeaderVariants";
import Buttons from "../components/Buttons/BasicBtn";

const UploadSong = () => {
  return (
    <div className="criteria-container">
      <header>
        <HeaderVariants mode="text" title="Preview" />
      </header>

      <div>
        <h3>Your track</h3>
      </div>

      <div className="song-info" style={{ marginBottom: "20px" }}>
        <h3>Song name</h3>
        <input type="text" name="Name" id="name" />
        <h3>Song description</h3>
        <input type="text" name="Name" id="name" />
        <h3>Genre tag</h3>
        <input type="text" name="Name" id="name" />
        <h3>Instrument tag</h3>
        <input type="text" name="Name" id="name" />
      </div>

      <div className="upload-soong-btn">
        <Buttons type="main" text="Post" />
        {/* <FileUpload onUpload={() => {}} /> */}
      </div>
    </div>
  );
};

export default UploadSong;
