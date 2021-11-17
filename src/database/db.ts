import { Mongoose } from "mongoose";
import { MpathPlugin } from 'mongoose-mpath';

const LocationSchema = new Mongoose.Schema({name: String});
LocationSchema.plugin(MpathPlugin);

const LocationModel = Mongoose.model('Location', LocationSchema);

const europe = new LocationModel({name: 'europe'});
const sweden = new LocationModel({name: 'sweden', parent: europe});
const stockholm = new LocationModel({name: 'stockholm', parent: sweden});

await europe.save();
await sweden.save();
await stockholm.save();
