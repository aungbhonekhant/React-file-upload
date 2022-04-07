import "./App.css";
import { Footer, Navbar } from "./components/Layouts/Layout";
import { DropZone, MultiUploader, SingleUploader } from "./components/Uploaders/Uploaders";
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <div className="wrapper d-flex flex-column justify-content-between">
      <Navbar />
      <div className="container flex-grow-1 mt-2">
        <div className="row">
          <div className="col-md-6 col-sm-12 mx-auto">
            <div className="card">
              <div className="card-header">
                <h3 className="text-primary font-weight-bold">
                  Upload your files
                </h3>
              </div>
              <div className="card-body">
                <form className="form-group">
                  <SingleUploader endpoint="/file/admin/upload" id="single-upload" label="Upolad Single File" />
                  <MultiUploader endpoint="/file/admin/upload" id="multi-upload"  label="Upolad Multiple Files" />
                  <DropZone endpoint="/file/admin/upload" id="multi-upload"  label="Drop your file" />
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
