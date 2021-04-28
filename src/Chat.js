import React from 'react';
import "./chat.css";
import ChatHeader from './ChatHeader';
import "./ChatHeader.css"
import AddCircleRoundedIcon from '@material-ui/icons/AddCircleRounded';
import CardGiftcardRoundedIcon from '@material-ui/icons/CardGiftcardRounded';
import GifRoundedIcon from '@material-ui/icons/GifRounded';
import EmojiEmotionsRoundedIcon from '@material-ui/icons/EmojiEmotionsRounded';
import Message from "./Message";

function Chat() {
    return (
        <div className="chat">
            <ChatHeader />
            <div className="chat__messages">
                <Message />
                <Message />
                <Message />

            </div>

            <div className="chat__input">
                <AddCircleRoundedIcon fontSize="large" />
                <form>
                    <input placeholder={`Message #TESTCHANNEL`} />
                    <button className="chat__inputButton" type='submit'>
                        Send Message
                        </button>
                </form>

                <div className="chat__inputIcon">
                    <CardGiftcardRoundedIcon />
                    <GifRoundedIcon />
                    <EmojiEmotionsRoundedIcon />
                </div>
            </div>
        </div>
    )
}

export default Chat
