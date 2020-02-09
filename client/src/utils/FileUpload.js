import React from 'react'
import DropZone from 'react-dropzone'

const FileUpload = () => {
  const onDrop = (files) => {
    let formData = new FormData()
    const config = {
      header: { 'content-type': 'multipart/form-data' }
    }
  }
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'space-between'
    }}>
      <DropZone onDrop={onDrop} multiple maxSize>
        {({ getRootProps, getInputProps }) => (
          <div style={{
            marginTop: '10px',
            marginBottom: '10px',
            width: '300px',
            height: '240px',
            border: '1px solid lightgrey',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }} {...getRootProps()}>
            <input {...getInputProps()} />
            <i className="material-icons">insert_photo</i></div>
        )}
      </DropZone>

      <div style={{
        display: 'flex',
        width: '350px',
        height: '240px',
        overflowX: 'scroll'
      }}>
        <div onClick>
          <img />
        </div>
      </div>
    </div>
  )
}

export default FileUpload
