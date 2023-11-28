import { Card } from 'react-bootstrap';

const ChatMessageDisplay = ({ message, currentUser }) => {
  const username = message?.username || "Anonymous";
  const isCurrentUser = message?.userId === currentUser?.root.user.id;

  const formattedTimestamp = message?.timestamp ? message.timestamp.replace('T', ' ').split('.')[0] : '';

  const testId = `ChatMessageDisplay-${message?.id}`;

  return (
    <Card data-testid={testId} style={{ border: 'none' }}>
      <Card.Body>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Card.Title data-testid={`${testId}-User`} style={{ margin: 0, fontWeight: isCurrentUser ? '600' : '400' }}>
            {username} 
          </Card.Title>
          <Card.Subtitle data-testid={`${testId}-Date`} style={{ margin: 0 }}>
            {formattedTimestamp}
          </Card.Subtitle>
        </div>
        <Card.Text data-testid={`${testId}-Message`}>{message?.message}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default ChatMessageDisplay;