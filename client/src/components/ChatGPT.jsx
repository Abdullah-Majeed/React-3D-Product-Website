import React from 'react'

import CustomButton from './CustomButton';

const ChatGPT = ({ message, setMessage, generatingMessage, handleChatSubmit, setActiveEditorTab }) => {
    const handleClose = () => {
        setMessage('');
        setActiveEditorTab('');
    }
    return (
        <div className="aipicker-container">
            <textarea
                placeholder="Ask ChatGPT..."
                rows={5}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="aipicker-textarea"
            />
            <div className="flex flex-wrap gap-3">
                {generatingMessage ? (
                    <CustomButton
                        type="outline"
                        title="Asking ChatGPT..."
                        customStyles="text-xs"
                    />
                ) : (
                    <>
                        <CustomButton
                            type="filled"
                            title="Ask"
                            handleClick={() => handleChatSubmit('chat')}
                            customStyles="text-xs"
                        />
                        <CustomButton
                            type="outline"
                            title="Clear"
                            handleClick={() => setMessage('')}
                            customStyles="text-xs"
                        />
                        <CustomButton
                            type="outline"
                            title="Close"
                            handleClick={handleClose}
                            customStyles="text-xs"
                        />
                    </>
                )}
            </div>
        </div>
    )
}

export default ChatGPT