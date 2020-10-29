// Imports the Google Cloud client library
const textToSpeech = require('@google-cloud/text-to-speech');

// Import other required libraries
const fs = require('fs');
const util = require('util');

// Creates a client
const client = new textToSpeech.TextToSpeechClient();

module.exports = {
    name: 'tts',
    description: `tts`,
    category: 'owner',
    execute(message) {

        if (message.author.id !== '265896171384340480') {
            message.reply(`Sorry, you can't do that!`)
            return
        }

        // The text to synthesize
        const text = 'hello, world!';

        // Construct the request
        const request = {
            input: {text: text},
            // Select the language and SSML voice gender (optional)
            voice: {languageCode: 'en-US', ssmlGender: 'NEUTRAL'},
            // select the type of audio encoding
            audioConfig: {audioEncoding: 'MP3'},
        };

        // Performs the text-to-speech request
        const [response] = client.synthesizeSpeech(request);

        // Write the binary audio content to a local file
        const writeFile = util.promisify(fs.writeFile);

        writeFile('output.mp3', response.audioContent, 'binary');

        console.log('Audio content written to file: output.mp3');
    },
};