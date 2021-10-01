# Kafka Magic custom serializer starting project

Starting point to create your own custom serializer/deserializer for Kafka Magic using TypeScript.

To make it work with Kafka Magic your serializing/deserializing algorithm must be exposed as global KafkaMagicSerializer JavaScript object:

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

This repository provides a starting project, in case you want to write your custom Kafka Magic message serializer in TypeScript.

Make sure you have node typescript installed  `npm install -g typescript`.

Run `npm run build`. The output will be in the `./dist` folder.

