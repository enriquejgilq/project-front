import React, { useState } from 'react';
import { Button, IconButton, Modal } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
function CustomModal({ open, handleClose, message }) {
    const close = () => {
        handleClose()
    }
    return (
        <div>
            <Modal open={open} onClose={() => handleClose()} className='backdrop-blur-sm bg-white/30'>
                <div className="flex items-center justify-center h-full">
                    <div className=" bg-gradient-to-bl from-green-900 via-green-800 to-black w-96 h-96 md:w-300 md:h-300 p-4 rounded-lg">
                        <div className='flex bg-rebeccapurple justify-end'>
                            <IconButton onClick={close}>
                                <CloseIcon></CloseIcon>
                            </IconButton>
                        </div>
                        <div className="flex flex-col h-full flex-1 justify-around">
                            <h2 className="text-center">{message}</h2>
                            <div className="flex  justify-center">
                                <Button variant="contained" onClick={close}  >
                                    Aceptar
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </Modal>
        </div>
    )
}

export default CustomModal