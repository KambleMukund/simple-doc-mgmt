import {
  faDownload,
  faEye,
  faFile,
  faFileExcel,
  faFilePdf,
  faFileWord,
  faUpload,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import { AgGridReact } from 'ag-grid-react';
import axios from 'axios';
import { format } from 'date-fns';
import React from 'react';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';
import Loading from '../components/Loading';
import ApplicationContext from '../context/ApplicationContext';
import { DATA_FORMAT, ICON_COLOR } from './Constants';
import PrevewModel from './PreviewModel';

const fileIconMappings = {
  docx: faFileWord,
  xlsx: faFileExcel,
  xlsm: faFileExcel,
  pdf: faFilePdf,
  others: faFile,
};

const DateRenderer = (props) => {
  const dateFormat = DATA_FORMAT;
  const date = new Date(props.value);
  return <>{format(date, dateFormat)}</>;
};

const DocTypeRenderer = (props) => {
  return (
    <>
      <FontAwesomeIcon
        icon={fileIconMappings[ props.value ] || fileIconMappings.others}
        color={'black'}
        enableBackground={true}
        size="lg"
      />
    </>
  );
};

const PreviewRenderer = (props) => {
  const url = props.value;
  return (
    <>
      <PrevewModel
        buttonRenderer={(onClick) => {
          return (
            <FontAwesomeIcon
              icon={faEye}
              color={'black'}
              size="lg"
              onClick={onClick}
            />
          );
        }}
        contentRenderer={() => {
          return (
            <iframe src={url} width="700px" height="420px">
              contents
            </iframe>
          );
        }}
      />
    </>
  );
};

const DownloadRenderer = (props) => {
  const url = props.value;
  return (
    <>
      <a href={url} target="_blank" download rel="noreferrer">
        <FontAwesomeIcon icon={faDownload} color={'black'} size="lg" />
      </a>
    </>
  );
};

const columnDefs = [
  {
    field: 'id',
    editable: true,
    resizable: true,
    sortable: true,
    width: 80,
  },
  {
    field: 'uploadeName',
    resizable: true,
    cellClass: 'align-right',
    editable: true,
    sortable: true,
  },
  {
    field: 'uploadeType',
    resizable: true,
    cellClass: 'align-right',
    cellRendererFramework: DocTypeRenderer,
    editable: true,
    sortable: true,
    cellStyle: {
      textAlign: 'center',
    },
    width: 140,
  },
  {
    field: 'uploadeBy',
    resizable: true,
    cellClass: 'align-right',
    editable: true,
    sortable: true,
  },
  {
    field: 'uploadeOn',
    resizable: true,
    cellClass: 'align-right',
    editable: true,
    sortable: true,
    cellRendererFramework: DateRenderer,
  },
  {
    field: 'preview',
    resizable: true,
    cellClass: 'align-right',
    cellRendererFramework: PreviewRenderer,
    editable: true,
    sortable: true,
    cellStyle: {
      textAlign: 'center',
    },
    width: 110,
  },
  {
    field: 'download',
    resizable: true,
    cellClass: 'align-right',
    cellRendererFramework: DownloadRenderer,
    editable: true,
    sortable: true,
    cellStyle: {
      textAlign: 'center',
    },
    width: 120,
  },
];

const onGridReady = (params) => {
  params.api.sizeColumnsToFit();
};

const fetchDocuments = async (qname, params) => {
  console.log('qname', qname);
  const res = await axios.get(`${ params.apiBaseUrl }/documents`);
  return res.data;
};

const DocumentList = () => {
  const appContext = React.useContext(ApplicationContext);

  const { isLoading, isError, data, error } = useQuery(
    [
      'documents',
      {
        apiBaseUrl: appContext.appEnv.API_BASE_URL,
      },
    ],
    fetchDocuments
  );

  let display;
  if (isLoading) {
    display = <Loading />;
  }
  if (isError || error) {
    display = <span>Error: {error.message}</span>;
  } else {
    display = (
      <AgGridReact
        columnDefs={columnDefs}
        rowData={data}
        defaultColDef={{
          filter: true,
        }}
        onGridReady={onGridReady}
      ></AgGridReact>
    );
  }

  return (
    <div id="doc-list-page">
      <div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginLeft: '19px',
            marginRight: '10px',
          }}
        >
          <h4>Found {data ? data.length : 0} documents</h4>
          <h2>Document List</h2>

          <span>
            <Link to="/documents/upload">
              <span>
                <FontAwesomeIcon
                  icon={faUpload}
                  color={ICON_COLOR}
                  size="lg"
                  className="fa-fw"
                />
                <span className="menuIcon">Upload New</span>
              </span>
            </Link>
          </span>
        </div>
      </div>
      <div
        className="ag-theme-alpine"
        style={{
          height: '437px',
          width: '1056px',
          overflow: 'auto',
        }}
      >
        {display}
      </div>
    </div>
  );
};

export default DocumentList;
