import React, { useState } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import AppErrorFallback from '../components/AppErrorFallback';
import {
  displayErrorToast,
  displaySuccessToast,
  axiosInstance,
  allowUploadTypes,
} from './Constants';
import ProgressBar from './ProgressBar';

const DisplayTable = (props) => {
  const selectedFiles = props.data;
  return (
    <div
      style={{
        width: '80%',
        margin: '20px 0px',
      }}
    >
      <h5>Selected Files:</h5>
      <table>
        <thead>
          <tr>
            <th>File Name</th>
            <th>Size (Kb)</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {selectedFiles.length > 0 &&
            selectedFiles.map((file) => {
              return (
                <tr key={file.name}>
                  <td>{file.name}</td>
                  <td>{file.size / 1024}</td>
                  <td>
                    {`${ file.progress || 0 }%  `}
                    <ProgressBar percentage={file.progress || 0} />
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

const UploadFiles = () => {
  const [ selectedFiles, setSelectedFiles ] = useState([]);
  const [ progress, setProgress ] = useState();
  const [ error, setError ] = useState();

  const fileValidations = () => {
    setError('');
    const errMsgs = [];
    if (selectedFiles.length <= 0) {
      errMsgs.push('Select a file before uploading!');
    }
    let totalSize = 0;
    let isNotAllowed = false;
    selectedFiles.forEach((currentFile) => {
      totalSize += currentFile.size || 0;
      console.log('currentFile.type', currentFile.type);
      if (!allowUploadTypes[ currentFile.type ]) {
        isNotAllowed = true;
      }
    });

    if (isNotAllowed) {
      const allowedTypes = Object.keys(allowUploadTypes).filter(
        (type) => allowUploadTypes[ type ]
      );

      errMsgs.push(
        'Upload only allowed file types ' +
          Object.values(allowUploadTypes).sort().join(', ')
      );
    }

    if (totalSize > 209715201) {
      errMsgs.push('File size is too large. Please upload files below 200MB!');
    }

    if (errMsgs.length > 0) {
      const errMsg = errMsgs.join(',');
      displayErrorToast(errMsg);
      setError(errMsg);
      return false;
    }

    return true;
  };

  const submitHandler = (evt) => {
    evt.preventDefault();

    if (fileValidations()) {
      const fileList = [ ...selectedFiles ];
      fileList.forEach((currentFile) => {
        // eslint-disable-next-line
        const formData = new FormData();
        formData.append('UserId', 'abc.xyz@abc.com');
        formData.append('file', currentFile);

        axiosInstance
          .post('/fileupload', formData, {
            headers: {
              'Content-Type': 'multipart/form-data',
            },
            onUploadProgress: (data) => {
              //Set the progress value to show the progress bar
              const pg = Math.round((100 * data.loaded) / data.total);
              setProgress(pg);
              currentFile.progress = pg;
              setSelectedFiles([ ...fileList ]);
              if (pg === 100) {
                displaySuccessToast(
                  `Files ${ currentFile.name } uploaded successfully`
                );
              }
            },
          })
          .catch((err) => {
            displayErrorToast(
              `Failed to upload file ${
                currentFile ? currentFile.name : ''
              } with error ${ err }`
            );
          });
      });

      setSelectedFiles([]);
    }
    evt.target.reset();
  };

  return (
    <div
      id="upload-file"
      style={{
        margin: '20px',
      }}
    >
      <ErrorBoundary FallbackComponent={AppErrorFallback}>
        <form
          method="post"
          encType="multipart/form-data"
          onSubmit={submitHandler}
        >
          <div className="button-green">
            <label
              style={{
                display: ' inline-block',
              }}
            >
              <input
                type="file"
                id="fileUpload"
                name="file"
                title=" "
                multiple={true}
                onChange={(evt) => {
                  const newSelectedFiles = [
                    ...selectedFiles,
                    ...evt.target.files,
                  ];
                  console.log('selectedFiles', newSelectedFiles);
                  setSelectedFiles(newSelectedFiles);
                }}
                style={{
                  display: 'none',
                }}
              />
              Select Files
            </label>
          </div>
          <div>
            {/* {!error && progress > 0 && (
              <>
                {`${progress}%`} <ProgressBar percentage={progress || 0} />
              </>
            )} */}
          </div>
          <div>
            <DisplayTable data={selectedFiles} />
          </div>
          <div>
            <button
              variant="info"
              type="submit"
              className="button-grey"
              style={{
                marginRight: '50px',
              }}
            >
              Upload
            </button>
            <button
              type="reset"
              className="button-grey"
              onClick={() => {
                setSelectedFiles([]);
                setProgress(0);
              }}
            >
              Reset
            </button>
          </div>
        </form>
      </ErrorBoundary>
    </div>
  );
};

export default UploadFiles;
