import "jasmine";
import { ContextBytes } from "../src/app/ContextBytes";
import { ContextJson } from "../src/app/ContextJson";
import { MyCustomSerializer } from "../src/main";

describe("CustomSerializer", () => {
    it("should serialize message to bytes", () => {

        let conext: ContextJson = {
            Message: '{}',
            Headers: null,
            Key: null,
            Offset: 0,
            Partition: 0,
            Timestamp: new Date(),
            Topic: 'Topic'
        };

        var serlr = new MyCustomSerializer();
        var outContext = serlr.serializeToBytes(conext, null);

        expect(outContext.Message.length).toBe(3);
    });
});

describe("CustomSerializer", () => {
    it("should deserialize message from bytes", () => {

        let conext: ContextBytes = {
            Message: [],
            Headers: null,
            Key: null,
            Offset: 0,
            Partition: 0,
            Timestamp: new Date(),
            Topic: 'Topic'
        };

        var serlr = new MyCustomSerializer();
        var outContext = serlr.deserializeToJson(conext, null);

        expect(outContext.Message.name).toBe('foo');
    });
});