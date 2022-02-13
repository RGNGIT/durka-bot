import backend from './http/backend';
import dc from './bot/commands';
import express from 'express';
import c from './const';
import VkBot from 'node-vk-bot-api';

require('dotenv').config();

const bot = new VkBot(process.env.TOKEN);
const app = express();

// Бот

bot.command(c.Activation + c.Commands, async (res : VkBotContext) => {
    await dc.getAllCommands(res);
});

bot.command(c.Activation + c.SendToNahui, async (res : VkBotContext) => {
    await dc.sendToNahui(res);
});

// Бэк

app.post(c.Handshake, async (req, res) => {
    await backend.handShake(req, res);
});

app.listen(80, () => {
    console.log("Launched");
});
bot.startPolling();
