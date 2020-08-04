import React, { FC, Fragment } from 'react'

export interface LoaderProps {
  isLoading: boolean
  className: string
  backgroundColor?: string
}

const Loader: FC<LoaderProps> = ({
  isLoading,
  children,
  className,
  backgroundColor,
}) => {
  return (
    <Fragment>
      {isLoading && (
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: backgroundColor || '#0000000',
            zIndex: 1000,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <div className={className}>{children}</div>
        </div>
      )}
    </Fragment>
  )
}

export default Loader
