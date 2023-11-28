import React from 'react';
import { Stack } from 'react-bootstrap';
import ChatMessageCreate from 'main/components/Chat/ChatMessageCreate';
import ChatDisplay from 'main/components/Chat/ChatDisplay';

const ChatPanel = ({ commonsId, currentUser}) => {
  return (
    <Stack gap={2} style={{ backgroundColor: 'white' }} data-testid="ChatPanel" > 
      <ChatDisplay commonsId={commonsId} currentUser={currentUser} />
      <ChatMessageCreate commonsId={commonsId} />
    </Stack>
  );
};

export default ChatPanel;