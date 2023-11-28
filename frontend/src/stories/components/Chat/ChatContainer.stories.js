import React from 'react';
import { rest } from 'msw';
import ChatContainer from 'main/components/Chat/ChatContainer';
import {chatMessageFixtures} from 'fixtures/chatMessageFixtures';

export default {
    title: 'components/Chat/ChatContainer',
    component: ChatContainer
};

const Template = (args) => {
    return (
        <ChatContainer {...args} />
    )
};

export const Default = Template.bind({});

Default.args = {
    // Add your props here
};
export const OneMessage = Template.bind({});

OneMessage.args = {
    commonsId: 1,
};

OneMessage.parameters = {
    msw: [
        /* eslint-disable-next-line no-unused-vars */
        rest.get('/api/chat/get?page=0&size=10&commonsId=1', (req, res, ctx) => {
            return res(ctx.status(200),ctx.json({
                content: chatMessageFixtures.oneChatMessage,
                totalPages: 1,
            }));
        }),
        /* eslint-disable-next-line no-unused-vars */
        rest.get('/api/usercommons/all?commonsId=1', (req, res, ctx) => {
            return res(ctx.status(200),ctx.json(userCommonsFixtures.oneUserCommons));
        }),
    ]
};

export const ThreeMessages = Template.bind({});

ThreeMessages.args = {
    commonsId: 1,
};

ThreeMessages.parameters = {
    msw: [
        /* eslint-disable-next-line no-unused-vars */
        rest.get('/api/chat/get?page=0&size=10&commonsId=1', (req, res, ctx) => {
            return res(ctx.status(200),ctx.json({
                content: chatMessageFixtures.threeChatMessages,
                totalPages: 1,
            }));
        }),
        /* eslint-disable-next-line no-unused-vars */
        rest.get('/api/usercommons/all?commonsId=1', (req, res, ctx) => {
            return res(ctx.status(200),ctx.json(userCommonsFixtures.threeUserCommons));
        }),
    ]
};

export const TwelveMessages = Template.bind({});

TwelveMessages.args = {
    commonsId: 1,
};

TwelveMessages.parameters = {
    msw: [
        /* eslint-disable-next-line no-unused-vars */
        rest.get('/api/chat/get?page=0&size=10&commonsId=1', (req, res, ctx) => {
            return res(ctx.status(200),ctx.json({
                content: chatMessageFixtures.twelveChatMessages,
                totalPages: 2,
            }));
        }),
        /* eslint-disable-next-line no-unused-vars */
        rest.get('/api/usercommons/all?commonsId=1', (req, res, ctx) => {
            return res(ctx.status(200),ctx.json(userCommonsFixtures.tenUserCommons));
        }),
    ]
};
