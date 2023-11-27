import React, {useState} from "react";
import ChatPanel from "./ChatPanel";
import ChatToggle from "./ChatToggle";

const ChatContainer = ({commonsId}) => {
    const chatContainerStyle = {
        width: '550px',
        position: 'fixed',
        bottom: '100px',
        right: '20px',
      };

    const [isChatOpen, setIsChatOpen] = useState(false);

    const toggleChatWindow = () => {
        setIsChatOpen((prevState) => !prevState);
    };

    return (
        <div style={chatContainerStyle} data-testid="playpage-chat-div">
            {!!isChatOpen && <ChatPanel commonsId={commonsId}/>}
            <ChatToggle isChatOpen={isChatOpen} onClick={toggleChatWindow} />
        </div>
    );
};

export default ChatContainer;