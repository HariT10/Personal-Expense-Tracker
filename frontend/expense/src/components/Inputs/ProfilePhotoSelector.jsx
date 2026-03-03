import React from 'react';

import { useRef, useState } from 'react';

import {LuUser, LuUpload, LuTrash} from 'react-icons/lu';

const ProfilePhotoSelector = ({image, setImage}) => {

    const inputRef = useRef(null);
    const [previewUrl, setPreviewUrl] = useState(null);

    const handleImageChange = (event) => {
        const file = event.target.files[0];
        if(file){
            setImage(file);
            const preview = URL.createObjectURL(file);
            setPreviewUrl(preview);
        }
    };

    const handleRemoveImage = () => {
        setImage(null);
        setPreviewUrl(null);
    };

    const onChooseFile = () => {
        inputRef.current.click();
    }

    return (
        <div className="flex justify-center mb-6">

            <input
                type="file"
                accept="image/*"
                ref={inputRef}
                onChange={handleImageChange}
                className="hidden"
            />

            {!image ? (
                <div className="flex flex-col items-center gap-2">
                    <div className="w-20 h-20 flex items-center justify-center bg-slate-100 rounded-full relative ring-2 ring-slate-200">

                        <LuUser className="text-3xl text-slate-400" />

                        <button
                            type="button"
                            onClick={onChooseFile}
                            className="w-7 h-7 flex items-center justify-center bg-primary text-white rounded-full absolute bottom-0 right-0 shadow-md hover:scale-110 transition-transform"
                        >
                            <LuUpload size={14} />
                        </button>

                    </div>
                    <p className="text-xs text-slate-400">Upload photo</p>
                </div>

            ) : (

                <div className="flex flex-col items-center gap-2">
                    <div className="relative">
                        <img
                            src={previewUrl}
                            alt="Profile Preview"
                            className="w-20 h-20 rounded-full object-cover ring-2 ring-primary"
                        />

                        <button
                            type="button"
                            onClick={handleRemoveImage}
                            className="w-7 h-7 flex items-center justify-center bg-red-500 text-white rounded-full absolute bottom-0 right-0 shadow-md hover:scale-110 transition-transform"
                        >
                            <LuTrash size={14} />
                        </button>
                    </div>
                    <p className="text-xs text-slate-400">Change photo</p>
                </div>

            )}

        </div>
    )
}

export default ProfilePhotoSelector;s