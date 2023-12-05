import React, {useState} from "react";
import ChatPanel from "./ChatPanel";
import ChatToggle from "./ChatToggle";
import { useCurrentUser } from "main/utils/currentUser";

const ChatContainer = ({commonsId}) => {
    const { data: currentUser } = useCurrentUser();

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
            {!!isChatOpen && <ChatPanel commonsId={commonsId} currentUser={currentUser}/>}
            <ChatToggle isChatOpen={isChatOpen} onClick={toggleChatWindow} />
        </div>
    );
};

export default ChatContainer;