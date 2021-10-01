# Kafka Magic custom serializer starting project

Starting point to create your own custom serializer/deserializer for Kafka Magic using TypeScript.

To make it work with Kafka Magic your serializing/deserializing algorithm must be exposed as global KafkaMagicSerializer object:

```javascript
var KafkaMagicSerializer = {
    serializeToBytes: function (messageJson) {
        // can serialize message JSON to byte array
        return '{ "field1": "val1" }'
    },
    deserializeToJson: function (bytes) {
        // can deserialize message JSON from byte array
        return [65, 66, 67];
    }
};
```

This repository provides a starting point project, in case you want to write your custom Kafka Magic serializer in TypeScript.

Make sure you have typescript installed  `npm install -g typescript`.

Run `npm run build`. The output will be in the `./dist` folder.

