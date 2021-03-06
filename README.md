# Kafka Magic custom serializer starting TypeScript project

Starting point to create your own custom serializer/deserializer for Kafka Magic tool.

You must create a class implementing `MagicSerializer` interface. Choose a descriptive name for the class, users will be selecting it from the dropdown.

Your code can look something like this:

```typescript
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
```

Clone this repository. Run `npm i`, then `npm run build`. The output will be in the `./dist` folder. You will place this output file to a folder where KafkaMagic app can find it, then specify the path to that folder and the name of your class in the app cluster connection configuration page.

To execute unit tests run `npm test`.

