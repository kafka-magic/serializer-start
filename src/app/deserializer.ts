export class Deserializer {
    deserializeToJson(messageBytes: number[]): string {
        
        // implement your deserialising algorithm here

        return String.fromCharCode.apply(String, messageBytes).replace(/\0/g, '');
    }
}