import Message from '../../models/Message';

const Query = {
    ping(){
        return "Arm";
    },
    message: async () => {
        return await Message.find()
    }
}

export default Query;