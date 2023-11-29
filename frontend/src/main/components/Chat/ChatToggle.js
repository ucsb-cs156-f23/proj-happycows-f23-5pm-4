import { Button } from "react-bootstrap";

const ChatToggle = ({isChatOpen, onClick}) => {
    const chatButtonStyle = {
        width: '60px',
        height: '60px',
        borderRadius: '50%',
        color: 'black',
        position: 'fixed',
        bottom: '20px',
        right: '20px',
        fontSize: '24px',
        boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.75)',
    };

    return (
        <Button style={chatButtonStyle} onClick={onClick} data-testid="playpage-chat-toggle">
            {!!isChatOpen ? '🔻' : '💬'}
        </Button>
    );
};

export default ChatToggle;