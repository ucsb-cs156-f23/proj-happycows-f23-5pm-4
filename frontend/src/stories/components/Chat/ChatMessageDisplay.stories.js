import React from 'react';
import ChatMessageDisplay from 'main/components/Chat/ChatMessageDisplay';
import { chatMessageFixtures } from 'fixtures/chatMessageFixtures';
import { currentUserFixtures } from 'fixtures/currentUserFixtures';

export default {
    title: 'components/Chat/ChatMessageDisplay',
    component: ChatMessageDisplay
};

const Template = (args) => {
    return (
        <ChatMessageDisplay {...args} />
    )
};

export const Empty = Template.bind({});

Empty.args = {
    message: [],
    currentUser: currentUserFixtures.adminUser,
};

export const OneMessage = Template.bind({});

OneMessage.args = {
    message: {...chatMessageFixtures.oneChatMessage[0], username: "John Doe"},
    currentUser: currentUserFixtures.adminUser,
};

export const OneMessageNoUser = Template.bind({});

OneMessageNoUser.args = {
    message: chatMessageFixtures.oneChatMessage[0],
    currentUser: currentUserFixtures.adminUser,
};
