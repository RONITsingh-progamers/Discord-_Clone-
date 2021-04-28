import React, { useEffect, useState } from 'react'
import './Sidebar.css';
import ExpandMoreRoundedIcon from '@material-ui/icons/ExpandMoreRounded';
import AddIcon from '@material-ui/icons/Add';
import SidebarChannel from './SidebarChannel';
import SignalCellularAltRoundedIcon from '@material-ui/icons/SignalCellularAltRounded';
import CallRoundedIcon from '@material-ui/icons/CallRounded';
import { Avatar } from '@material-ui/core';
import MicRoundedIcon from '@material-ui/icons/MicRounded';
import HeadsetRoundedIcon from '@material-ui/icons/HeadsetRounded';
import SettingsIcon from '@material-ui/icons/Settings';
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";
import db, { auth } from "./firebase";


function Sidebar() {
    const user = useSelector(selectUser);
    const [channels, setChannel] = useState([]);

    useEffect(() => {
        db.collection('channels').onSnapshot((snapshot) =>
            setChannel(
                snapshot.docs.map((doc) => ({
                    id: doc.id,
                    channel: doc.data(),
                }))
            )
        );
    }, []);

    const handleAddChannel = () => {
        const channelName = prompt("Enter  a new channel Name");

        if (channelName) {
            db.collection('channels').add({
                channelName: channelName,
            });
        }
    };

    return (
        <div className="sidebar">
            <div className="sidebar_top">
                <h3>Community Programer</h3>
                <ExpandMoreRoundedIcon />
            </div>
            <div className="sidebar__channels">
                <div className="sidebar__channelsHeaders">
                    <div className="sidebar__header">
                        <ExpandMoreRoundedIcon />
                        <h4>Text channels</h4>
                    </div>
                    <AddIcon onClick={handleAddChannel} className="sidebar__addChannel" />
                </div>
                <div className="sidebar__channelsList">
                    {channels.map(({id, channel}) => (
                        <SidebarChannel
                            key={id}
                            id={id}
                            channelName={channel.channelName}
                        />
                    ))}
                </div>
            </div>
            <div className="sidebar__voice">
                <SignalCellularAltRoundedIcon
                    className="sidebar__voiceIcon"
                    fontSize="large" />
                <div className="sidebar__voiceInfo">
                    <h3>Voice Connected</h3>
                    <p>Stream</p>
                </div>
                <div className="sidebar__voiceIcon">
                    <CallRoundedIcon className="call" />
                </div>
            </div>
            <div className="sidebar__profile">
                <Avatar onClick={() => auth.signOut()} src={user.photo} />
                <div className="sidebar__profileInfo">
                    <h3>Ronit singh</h3>
                    <p>#</p>
                </div>
                <div className="sidebar__profileIcon">
                    <MicRoundedIcon className="Mic" />
                    <HeadsetRoundedIcon className="Mic" />
                    <SettingsIcon className="Mic" />
                </div>
            </div>
        </div >
    )
}

export default Sidebar
