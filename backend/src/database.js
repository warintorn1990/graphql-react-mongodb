import mongoose from 'mongoose';


mongoose.connect("mongodb://localhost:27017/graphqlreactdb", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(db => {
    console.log("Database is connected");
});



