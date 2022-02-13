import BackendService from './http/backend';
import DurkaCommandService from './bot/commands';
import DurkaEventHandlerService from './bot/event-handler';
import express from 'express';
import cmd from './const/req';
import VkBot from 'node-vk-bot-api';

require('dotenv').config();

const bot = new VkBot(process.env.TOKEN);
const app = express();

// Бот

bot.command(cmd.Activation + cmd.Commands, async (res : VkBotContext) => {
    await DurkaCommandService.getAllCommands(res);
});

bot.command(cmd.Activation + cmd.SendToNahui, async (res : VkBotContext) => {
    await DurkaCommandService.sendToNahui(res);
});

// Бэк

app.post(cmd.Handshake, async (req, res) => {
    await BackendService.handShake(req, res);
});

app.listen(80, () => {
    console.log("Launched");
});
bot.startPolling();
