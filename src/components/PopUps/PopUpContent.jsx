import React, { useState } from 'react';
import AttachFileBtn from '../Buttons/AttachFileBtn';
import BasicBtn from '../Buttons/BasicBtn';
import ProBtn from '../Buttons/ProBtn';
import Record from '../../pages/Record';
import API_ENDPOINTS from '../../routes/apiEndpoints';
import { useAuth } from '../../context/AuthProvider';

import { useNavigate } from 'react-router-dom';

import { ReactComponent as ReportIcon } from '../../assets/icons/report-icon.svg';

const PopUpContent = ({ type, data, onClose }) => {
  const navigate = useNavigate();
  const [selected, setSelected] = useState('');
  const [file, setFile] = useState(null);

  const { user } = useAuth()

  // const isReport = type === 'report';

  const handleUploadTrack = () => {
    //
  };

  switch (type) {
    case 'upload-picture':
      return (
        <>
          <h2>Add your pictures</h2>
          <p className="hint pink">Explore premium plans to generate special cover with AI</p>
          <div className="btn-group">
            <AttachFileBtn variant={1} text={'Upload'} />
            <ProBtn text={'Generate'} />
          </div>
        </>
      );

    case 'upload-track': {
      const handleFileChange = (e) => {
        const uploadedFile = e.target.files[0];
        setFile(uploadedFile);
      };
      

      const handleUpload = async () => {
        if (!file) return alert('Please choose a file');

        const formData = new FormData();
        formData.append('file', file); // must be "file" to match the backend
        formData.append('song_id', data.id); // pass the song ID
        
        console.log("userid", user.id)
        formData.append('user_id', user.id); // pass the user ID

        try {
          const res = await fetch(API_ENDPOINTS.TRACKS.MULTIPLE, {
            method: 'POST',
            body: formData,
          });

          if (res.ok) {
            const result = await res.json();
            navigate(`/editor?songId=${result.song.id}`);
            onClose();
          } else {
            const error = await res.json();
            console.error('Upload failed:', error);
          }
        } catch (err) {
          console.error('Error uploading file:', err);
        }
      };

      return (
        <>
          <h2>Upload track to your song</h2>
          <p className="hint">Only MP3 files, up to 50 MB</p>
          <input type="file" accept="audio/mp3" onChange={handleFileChange} />
          <div className="btn-group">
            <BasicBtn text="Upload" onClick={handleUpload} />
          </div>
        </>
      );
    }


    case 'upload-to-editor':
      return (
        <>
          <h2>Add your track</h2>
          <div className="track-info">
            <span className="icon">🔴</span> {data?.name || 'MoonshineTry521.mp3'}<br />
            <small>{data?.length || '4:24'} | {data?.size || '4.1 MB'}</small>
          </div>
          <BasicBtn type="tiny" text="Upload to editor" />

        </>
      );

    case 'report':
      return (
        <>
          <div className='header'>
            <ReportIcon />
            <h2>Report Form</h2>
          </div>
          <div className='track-info'>
            <p className="subtitle">{data?.title || 'Track Title'}</p>
            <p className="subtitle-author">{data?.title || 'Author'}</p>
          </div>
          <div className="checkbox-group">
            <h1 className='report-checkbox'>Report Reason:</h1>
            {[
              'Copyright Infringement',
              'Inappropriate or Offensive Content',
              'Technical Issues (low sound quality, errors)',
              'Other (text field for explanation)'
            ].map((reason, i) => (
              <label className="custom-checkbox" key={i}>
                <input
                  type="checkbox"
                  name="report"
                  onChange={() => setSelected(reason)}
                />
                <span className="checkmark"></span>
                <span className="label-text">{reason}</span>
              </label>
            ))}

            {selected.includes('Other') && (
              <input className="input-text" placeholder="Describe report reason" />
            )}
          </div>
          <div className="btn-group">

            <BasicBtn type="tinyOutline" text="Cancel" />
            <BasicBtn type="tiny" text="Send" />

          </div>
        </>
      );

    default:
      return <p>Unknown popup type</p>;
  }
};

export default PopUpContent;