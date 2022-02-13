class DurkaEventHandler {
    async messageNew(bot:VkBot) {
        let res = await bot.event('message_new'); // Ловим последнее событие message_new
        return res;
    }
    async userId(bot:VkBot) {
        let msg = await this.messageNew(bot); // Получить последнее сообщение
        
    }
}

export default new DurkaEventHandler();