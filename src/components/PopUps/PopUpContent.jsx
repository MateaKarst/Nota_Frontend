import React, { useState } from 'react';
import AttachFileBtn from '../Buttons/AttachFileBtn';
import BasicBtn from '../Buttons/BasicBtn';
import ProBtn from '../Buttons/ProBtn';

import { ReactComponent as ReportIcon } from '../../assets/icons/report-icon.svg';

const PopUpContent = ({ type, data, onClose }) => {
  const [selected, setSelected] = useState('');
  // const isReport = type === 'report';

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

    case 'upload-track':
      return (
        <>
          <h2>Add your track</h2>
          <div className="text-box">
            <p className="hint">The audio file must be MP3 format, up to 50 MB and 128 kbps.</p>
            <p className="hint pink">Explore premium plans to get better quality for your tracks!</p>
          </div>
          <div className="btn-group">
            <AttachFileBtn variant={1} text={'Upload'} />
            <AttachFileBtn variant={1} text={'Record'} />
          </div>
        </>
      );

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