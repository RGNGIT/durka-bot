class DurkaCommands {
    async getAllCommands(res : VkBotContext) {
        try {
            res.reply(
            `Перфикс дурка +
            дай команды - список команд
            иди нахуй - пошлет тебя нахуй в ответ`
            );
        } catch (e) {
            res.reply('');
        }
    }
    async sendToNahui(res : VkBotContext) {
        try {
            res.reply(`Сам иди нахуй`);
        } catch (e) {
            res.reply('');
        }
    }
    async generateAntonimSentense(sentense, res : VkBotContext) {
        
    }
}

export default new DurkaCommands();
