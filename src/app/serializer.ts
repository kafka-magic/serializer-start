export class Serializer{
    serializeToBytes(messageJson: string): number[] {
        
        // implement your serialising algorithm here

        let bytes: number[] = [];
        if (!!messageJson) {
            for (let i = 0; i < messageJson.length; i++) {
                bytes.push(+messageJson[i]);
            }
        }
        return bytes;
    }

}