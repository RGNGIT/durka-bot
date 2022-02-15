class DurkaEventHandler {
    async messageNewRecorder(bot:VkBot) {
        bot.event('message_new', res => {
            
        });
    }
}

export default new DurkaEventHandler();