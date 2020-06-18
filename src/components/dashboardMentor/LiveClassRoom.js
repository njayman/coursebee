import React, { Component } from 'react'
export default class CiveClassRoom extends Component {
    componentDidMount() {
        console.log(this.props.match.params.topic)
        const domain = 'meet.jit.si';
        const options = {
            roomName: 'CoursebeeJitsiMeetAPIExample',
            width: '1080px',
            height: '800px',
            configOverwrite: {
                disableInviteFunctions: true
            },
            interfaceConfigOverwrite: {
                HIDE_INVITE_MORE_HEADER: true,
                TOOLBAR_BUTTONS: [
                    'microphone', 'camera', 'closedcaptions', 'desktop', 'fullscreen',
                    'fodeviceselection', 'hangup', 'profile', 'chat', 'recording',
                    'livestreaming', 'etherpad', 'settings', 'raisehand',
                    'videoquality', 'filmstrip', 'feedback', 'stats', 'shortcuts',
                    'tileview', 'videobackgroundblur', 'download', 'help', 'mute-everyone', 'security'
                ]
            },
            parentNode: document.querySelector('#meet')
        };
        new window.JitsiMeetExternalAPI(domain, options);
        document.querySelector('.navbar-fixed').style.display = "none";
        document.querySelector('.page-footer').style.display = "none";
    }
    componentWillUnmount(){
        document.querySelector('.navbar-fixed').style.display = "block";
        document.querySelector('.page-footer').style.display = "block";
    }
    render() {
        return (
            <div className="container">
                <div style={{display:'flex',width: '100%'}} id='meet'>

                </div>
            </div>
        )
    }
}