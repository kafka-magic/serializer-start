// Entry point.

import { Deserializer } from "./app/deserializer";
import { Serializer } from "./app/serializer";

(global as any).KafkaMagicSerializer = {
    serializeToBytes: function (messageJson: string): number[] {
        // call an object that can serialize message JSON to byte array
        let serializer = new Serializer();
        return serializer.serializeToBytes(messageJson)
    },
    deserializeToJson: function (messageBytes: number[]): string {
        // call an object that can deserialize message JSON from byte array
        let deserializer = new Deserializer();
        return deserializer.deserializeToJson(messageBytes)
    }
};
