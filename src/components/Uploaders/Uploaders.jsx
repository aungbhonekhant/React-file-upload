import React, { useState } from 'react'
import "./Uploader.css";
import uploadIcon from "../../icons/folder.png"
import API from '../../Services';
import { Progress } from 'reactstrap';

export const SingleUploader = (props) => {
    const {id, label, endpoint} = props;

    const [progress, setProgress] = useState(0);
    const [isUploading, setIsUploading] = useState(false);
    const [uploadedImg, setIsLoadingUploaedImg] = useState("");

    const onChange = async e => {
      console.log('event', e.target.files[0]);
      let formData = new FormData();
      formData.append('file', e.target.files[0]);
      setIsLoadingUploaedImg("");
      setIsUploading(true);
      const {data} = await API.post(endpoint, formData, {
        onUploadProgress: ({total, loaded})=>{
          setProgress(((total/loaded) * 100).toFixed(2));
        }
      });
      setIsUploading(false);
      setProgress(0);
      setIsLoadingUploaedImg(`http://localhost:3030/${data.imageUrl}`);
    }
  return (
    <div className='form-group' style={{ padding: '0 1rem' }}>
        <label htmlFor={id} className="text-primary font-weight-bold form-label" style={{ marginBottom: '1rem' }}>{label}</label>
        <div className='uploader-container'>
          <div>
            <input className="form-control uploader-input" type="file" id={id} onChange={onChange} />
            <div className='mask'>
              <img src={uploadIcon} alt="uploadIcon" />
            </div>
          </div>
          {
            isUploading ?
            <div className='flex-grow-1' style={{ margin: "0 1rem" }} >
              <div className="text-center">
                {progress} %
              </div>
              <Progress
                animated
                color="info"
                value={progress}
              />
            </div>
            :
            uploadedImg && 
              <img src={uploadedImg} alt="uploadedImg" className='uploaded-img' />
          }
          
        </div>
        
        
    </div>
  )
};

export const MultiUploader = (props) => {
  const {id, label, endpoint} = props;

  const [progress, setProgress] = useState(0);
  const [isUploading, setIsUploading] = useState(false);
  const [uploadedImgs, setIsLoadingUploaedImgs] = useState([]);

  const onChange = async e => {
    
    for(let i = 0; i < e.target.files.length; i++){
        let formData = new FormData();
        formData.append('file', e.target.files[i]);
        setIsUploading(true);
        const {data} = await API.post(endpoint, formData, {
          onUploadProgress: ({total, loaded})=>{
            setProgress(((total/loaded) * 100).toFixed(2));
          }
        });
        setIsUploading(false);
        setProgress(0);
        setIsLoadingUploaedImgs(prev => [...prev,data.imageUrl]);
    }
    
  }
return (
  <div className='form-group' style={{ padding: '0 1rem' }}>
      <label htmlFor={id} className="text-primary font-weight-bold form-label" style={{ marginBottom: '1rem' }}>{label}</label>
      <div className='uploader-container'>
        <div>
          <input multiple className="form-control uploader-input" type="file" id={id} onChange={onChange} />
          <div className='mask'>
            <img src={uploadIcon} alt="uploadIcon" />
          </div>
        </div>
        {
          isUploading ?
          <div className='flex-grow-1' style={{ margin: "0 1rem" }} >
            <div className="text-center">
              {progress} %
            </div>
            <Progress
              animated
              color="info"
              value={progress}
            />
          </div> : null
            
        }
        
      </div>
      <div className='d-flex flex-wrap mt-2'>
        {
           !isUploading && uploadedImgs.map(img => (
                <img key={img} src={`http://localhost:3030/${img}`} alt="uploadedImg " style={{ marginLeft: "0px" }} className='uploaded-img'  />
            ))
        }
      </div>
      
      
  </div>
)
}

export const DropZone = (props) => {
  const {id, label, endpoint} = props;
  const [progress, setProgress] = useState(0);
  const [isUploading, setIsUploading] = useState(false);
  const [uploadedImgs, setUploadedImgs] = useState([]);

  const onChange = async e => {;
    let formData = new FormData();
    formData.append('file', e.target.files[0]);
    setIsUploading(true);
    const {data} = await API.post(endpoint, formData, {
      onUploadProgress: ({total, loaded})=>{
        setProgress(((total/loaded) * 100).toFixed(2));
      }
    });
    setIsUploading(false);
    setProgress(0);
    setUploadedImgs(prev => [...prev,data.imageUrl]);
  };

  return (
    <div className='form-group dropzone' style={{ padding: '0 1rem' }}>
        <label htmlFor={id} className="text-primary font-weight-bold form-label" style={{ marginBottom: '1rem' }}>{label}</label>
        <div className='uploader-container'>
          <div style={{ width: "100%" }}>
            <input className="form-control uploader-input" type="file" id={id} onChange={onChange} />
            <div className='mask flex-column '>
              <img src={uploadIcon} alt="uploadIcon" />
              <p className='text-muted'>Drop your file here ...</p>
            </div>
          </div>
          {
            isUploading ?
            <div className='flex-grow-1' style={{ margin: "0 1rem" }} >
              <div className="text-center">
                {progress} %
              </div>
              <Progress
                animated
                color="info"
                value={progress}
              />
            </div>
            : null
          }
          
        </div>

        <div className='d-flex flex-wrap mt-2'>
          {
            uploadedImgs.map(img => (
                <img key={img} src={`http://localhost:3030/${img}`} alt="uploadedImg " style={{ marginLeft: "0px" }} className='uploaded-img'  />
            ))
          }
        </div>
        
        
    </div>
  )  
}