import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { List, ListItem, ListItemText, ListItemIcon } from '@material-ui/core'
import FileIcon from '@material-ui/icons/InsertDriveFile'
import FolderIcon from '@material-ui/icons/FolderOutlined'
import PropTypes from 'prop-types'
import Layout from './layout'

const FileItemNom = ({ name, icon }) => (
  <ListItem key={name} button style={{ borderTop: '1px solid black' }}>
    {icon && (<ListItemIcon>{icon}</ListItemIcon>)}
    <ListItemText primary={name} />
  </ListItem>
)
FileItemNom.propTypes = {
  name: PropTypes.string.isRequired,
  icon: PropTypes.node
}
const FileItem = React.memo(FileItemNom)

const Files = (props) => {
  const [error, setError] = useState('')
  const [files, setFiles] = useState(props.initialFiles)

  const { path } = useParams()
  const cleanPath = path && path.charAt(0) === '/' ? path.substring(1) : (path || '')
  const fileReqPath = !cleanPath || cleanPath.endsWith('/') ? cleanPath : cleanPath + '/'
  useEffect(() => {
    if (typeof window === 'undefined') return // No SSR.
    (async () => {
      const req = await fetch('/api/files/' + (cleanPath || ''))
      if (!req.ok) {
        setFiles([])
        setError((await req.json()).error)
      } else {
        setFiles(await req.json())
        setError('')
      }
    })()
  }, [cleanPath])
  const sortAlgorithm = (a, b) => {
    if (a.folder && !b.folder) return -1
    else if (b.folder && !a.folder) return 1
    else return a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1 // They are never equal.
  }

  return (
    <Layout>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {files && (
        <List>
            {files.sort(sortAlgorithm).map(file => {
              if (file.file) {
                return (
                  <a
                    style={{ textDecoration: 'none', color: 'black' }}
                    key={file.name} href={`/api/file/${fileReqPath}${file.name}`}
                  >
                    <FileItem name={file.name} icon={<FileIcon />} />
                  </a>
                )
              } else if (file.folder) {
                return (
                  <Link
                    style={{ textDecoration: 'none', color: 'black' }}
                    key={file.name} to={`/files/${fileReqPath}${file.name}`}
                  >
                    <FileItem name={file.name} icon={<FolderIcon />} />
                  </Link>
                )
              } else return <FileItem name={file.name} />
            })}
        </List>
      )}
    </Layout>
  )
}

Files.propTypes = {
  initialFiles: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    file: PropTypes.bool,
    folder: PropTypes.bool,
    symlink: PropTypes.bool
  }))
}

export default Files
