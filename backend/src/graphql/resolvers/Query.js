import Message from '../../models/Message';

const Query = {
    ping(){
        return "Arm";
    },
    // messages: async () => {
    //     return await Message.find()
    // }
}

export default Query;