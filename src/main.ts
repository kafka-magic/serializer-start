import { ContextBytes, GetSchemaCallback } from "./app/ContextBytes";
import { ContextJson } from "./app/ContextJson";
import { MagicSerializer } from "./app/MagicSerializer";

export class MyCustomSerializer implements MagicSerializer {
    
    serializeToBytes(context: ContextJson, schema: string): ContextBytes {
        // ... serialize message to bytes here ...
        let serializedMessageBytes = [60,61,62];
        // ...

        // populate result context fields
        let result: ContextBytes = {
            Message: serializedMessageBytes,
            Headers: context.Headers,
            Key: null,
            Offset: context.Offset,
            Partition: context.Partition,
            Timestamp: context.Timestamp,
            Topic: context.Topic
        };
        return result;
    }
    
    deserializeToJson(context: ContextBytes, getSchema: GetSchemaCallback): ContextJson {
        // ... deserialize message from bytes here ...
        let deserializedMessageObj = {"name":"foo"};
        // ...

        // populate result context fields
        let result: ContextJson = {
            Message: deserializedMessageObj,
            Headers: context.Headers,
            Key: null,
            Offset: context.Offset,
            Partition: context.Partition,
            Timestamp: context.Timestamp,
            Topic: context.Topic
        };
        return result;
    };
}