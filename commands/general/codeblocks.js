const config = require('../../json/config.json')
;
module.exports = {
    name: 'codeblock',
    description: 'Denote a specific programming language for syntax highlighting',
    category: 'general',
    execute(message) {

        // Store user input in a variable
        let userInput = message.content.split(`${config.prefix}codeblock`).join("").trim();

        // Check if user use a valid format
        if (!userInput) return message.delete().then(message.channel.send('Which format do you want to use?'));

        message.delete(); // Delete message before sending code blocks

        if (message.content.startsWith(`${config.prefix}codeblock html`)){
            // HTML code blocks format
            message.channel.send('```html\n' + `${userInput}` + '```');
        }
        if (message.content.startsWith(`${config.prefix}codeblock css`)){
            // CSS code blocks format
            message.channel.send('```css\n' + `${userInput}` + '```');
        }
        if (message.content.startsWith(`${config.prefix}codeblock javascript`)){
            // Javascript code blocks format
            message.channel.send('```javascript\n' + `${userInput}` + '```');
        }
        if (message.content.startsWith(`${config.prefix}codeblock php`)){
            // Php code blocks format
            message.channel.send('```php\n' + `${userInput}` + '```');
        }
        if (message.content.startsWith(`${config.prefix}codeblock csharp`)){
            // C# code blocks format
            message.channel.send('```csharp\n' + `${userInput}` + '```');
        }
        if (message.content.startsWith(`${config.prefix}codeblock cpp`)){
            // C++ code blocks format
            message.channel.send('```cpp\n' + `${userInput}` + '```');
        }
        if (message.content.startsWith(`${config.prefix}codeblock bash`)){
            // Bash code blocks format
            message.channel.send('```bash\n' + `${userInput}` + '```');
        }
        if (message.content.startsWith(`${config.prefix}codeblock xml`)){
            // Xml code blocks format
            message.channel.send('```xml\n' + `${userInput}` + '```');
        }
        if (message.content.startsWith(`${config.prefix}codeblock markdown`)){
            // Markdown code blocks format
            message.channel.send('```markdown\n' + `${userInput}` + '```');
        }
        if (message.content.startsWith(`${config.prefix}codeblock ruby`)){
            // Ruby code blocks format
            message.channel.send('```ruby\n' + `${userInput}` + '```');
        }
        if (message.content.startsWith(`${config.prefix}codeblock go`)){
            // Go code blocks format
            message.channel.send('```go\n' + `${userInput}` + '```');
        }
        if (message.content.startsWith(`${config.prefix}codeblock json`)){
            // Json code blocks format
            message.channel.send('```json\n' + `${userInput}` + '```');
        }
        if (message.content.startsWith(`${config.prefix}codeblock lua`)){
            // Lua code blocks format
            message.channel.send('```lua\n' + `${userInput}` + '```');
        }
        if (message.content.startsWith(`${config.prefix}codeblock perl`)){
            // Perl code blocks format
            message.channel.send('```perl\n' + `${userInput}` + '```');
        }
        if (message.content.startsWith(`${config.prefix}codeblock python`)){
            // Python code blocks format
            message.channel.send('```python\n' + `${userInput}` + '```');
        }
        if (message.content.startsWith(`${config.prefix}codeblock scss`)){
            // SCSS code blocks format
            message.channel.send('```scss\n' + `${userInput}` + '```');
        }
    }
}