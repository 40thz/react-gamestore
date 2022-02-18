import React from 'react'
import { Label, Box, DropZone } from '@adminjs/design-system'
const Test = props => {
  const { property, record, onChange } = props

  const onUpload = files => {
    const newRecord = { ...record }
    const file = files.length && files[0]
    onChange('image', ['dsadas', 'dsadasasd', 'dasdassda'])
  }

  return (
    <Box>
      <Label>{property.label}</Label>
      <DropZone multiple={true} onChange={onUpload} />
    </Box>
  )
}

export default Test
