import React from 'react'

const ItemGrid = ({images}) => {
  const imagesPerColumn = Math.ceil(images.length / 3)

  const columns = Array.from({length: 3}, (_, columnIndex) =>
    images.slice(
      columnIndex * imagesPerColumn,
      (columnIndex + 1) * imagesPerColumn,
    ),
  )

  return (
    <div style={{display: 'flex'}}>
      {columns.map((column, columnIndex) => (
        <div key={columnIndex} style={{flex: 1, padding: '8px'}}>
          {column.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`test ${index}`}
              style={{width: '100%', marginBottom: '8px'}}
            />
          ))}
        </div>
      ))}
    </div>
  )
}

export default ItemGrid
