import "test-case.jsx";
import "esprima.jsx";

class _Test extends TestCase
{
    function test_simple_parse() : void
    {
        var token = esprima.parse('var answer = 42');
        this.expect(token.type).toBe("Program");
        this.expect(token.body[0].type).toBe("VariableDeclaration");
    }

    function test_parse_token() : void
    {
        var option = new EsprimaOption({
            tokens: true
        });
        var tokens = esprima.parse('var answer = 42', option).tokens;
        this.expect(tokens[0].type).toBe('Keyword');
        this.expect(tokens[0].value).toBe('var');
    }
}
