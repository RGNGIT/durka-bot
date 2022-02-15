class DurkaEventHandler {
    async messageNew(bot:VkBot) {
        bot.event('message_new', res => {
            
        });
    }
}

export default new DurkaEventHandler();