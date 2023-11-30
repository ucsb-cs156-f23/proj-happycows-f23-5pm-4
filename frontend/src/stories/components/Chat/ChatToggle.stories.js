import React from 'react';
import ChatToggle from 'main/components/Chat/ChatToggle';

export default {
    title: 'components/Chat/ChatToggle',
    component: ChatToggle
};

const Template = (args) => {
    return (
        <ChatToggle {...args} />
    )
};

export const Default = Template.bind({});

Default.args = {
    // Add props here
};
