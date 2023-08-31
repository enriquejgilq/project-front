import React, { useState } from 'react';
import { Button, IconButton, Modal } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

function GalleryModal({ open, handleclose, img, message }) {
    return (
        <div>
            <Modal open={open} onClose={() => handleclose()} className='backdrop-blur-sm bg-white/30'>
                <div className="flex items-center justify-center h-full">
                    <div className=" bg-gradient-to-bl from-green-900 via-green-800 to-black w-auto h-96 md:w-auto md:h-auto p-4 rounded-lg">
                        <div className='flex bg-rebeccapurple justify-end'>
                            <IconButton onClick={handleclose}>
                                <CloseIcon></CloseIcon>
                            </IconButton>
                        </div>
                        <div className="flex flex-col h-full flex-1 justify-around">
                            <h2 className="text-center">{message}</h2>
                            <img
                                className=" rounded-lg object-scale-down h-80 w-96 "
                                src={img}
                                alt={img} />
                            <div className="flex  justify-center">
                                <Button variant="contained" onClick={handleclose}  >
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

export default GalleryModal