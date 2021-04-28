import React from 'react';
import NotificationsOffRoundedIcon from '@material-ui/icons/NotificationsOffRounded';
import PeopleAltRoundedIcon from '@material-ui/icons/PeopleAltRounded';
import EditLocationRoundedIcon from '@material-ui/icons/EditLocationRounded';
import SearchRoundedIcon from '@material-ui/icons/SearchRounded';
import SendRoundedIcon from '@material-ui/icons/SendRounded';
import HelpRoundedIcon from '@material-ui/icons/HelpRounded';


function ChatHeader() {
    return (
        <div className="chatHeader">
            <div className="chatHeader__left">
                <h3>
                    <span className="chatHeader__hash">
                        #
                    </span>
                    Test Channel Name
                </h3>
            </div>
            <div className="chatHeader__right">
                <NotificationsOffRoundedIcon />
                <PeopleAltRoundedIcon />
                <EditLocationRoundedIcon />

                <div className="chatHeader__search">
                    <input placeholder='search' />
                    <SearchRoundedIcon />
                </div>
                <SendRoundedIcon />
                <HelpRoundedIcon />
            </div>
        </div>
    )
}

export default ChatHeader
