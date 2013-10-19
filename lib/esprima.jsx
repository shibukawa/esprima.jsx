/**
 * JSX wrapper for Esprima that is a high performance, standard-compliant ECMAScript parser.
 *
 * @author shibukawa
 * @see git@github.com:shibukawa/esprima.jsx.git
 */

native __fake__ class EsprimaBlockToken
{
    var type : string;
    var body : EsprimaToken[];
}

native __fake__ class EsprimaProgramToken extends EsprimaBlockToken
{
    var comments : EsprimaCommentToken[];
    var tokens : EsprimaSimpleToken[];
}

native __fake__ class EsprimaPropertyToken
{
    var type : string;
    var kind : string;
    var key : EsprimaSimpleToken;
    var value : EsprimaToken;
}

native __fake__ class EsprimaSimpleToken
{
    var type : string;
    var value : string;
    var name : string;
}

native __fake__ class EsprimaCommentToken
{
    var type : string;
    var value : string;
    var loc : EsprimaLineColumnLocation;
    var range : int[];
}

native __fake__ class EsprimaLineColumnLocation
{
    var start : EsprimaLocation;
    var end : EsprimaLocation;
}

native __fake__ class EsprimaLocation
{
    var line : int;
    var column : int;
}

native __fake__ class EsprimaIdentifierToken
{
    var type : string;
    var name : string;
}

native __fake__ class EsprimaExpressionToken
{
    var type : string;
}

native __fake__ class EsprimaOperatorToken extends EsprimaExpressionToken
{
    var left : EsprimaToken;
    var right: EsprimaToken;
    //var operator : string;
}

native __fake__ class EsprimaFunctionCallToken extends EsprimaExpressionToken
{
    var callee : EsprimaToken;
    var arguments : EsprimaToken[];
}

native __fake__ class EsprimaToken
{
    var type : string;
    var declarations: EsprimaToken[];
    var body: EsprimaBlockToken;
    var kind : string;
    var name : string;
    var computed : boolean;
    var each : boolean;
    var generator : boolean;
    var key : EsprimaToken;
    var value: EsprimaToken;
    var init : EsprimaToken;
    var test : EsprimaToken;
    var update : EsprimaToken;
    var id : EsprimaIdentifierToken;
    var discriminant : EsprimaToken;
    var consequent : EsprimaToken;
    var alternate : EsprimaToken;
    var expression : EsprimaExpressionToken;
    var object : EsprimaToken;
    var property: EsprimaToken;
    var properties : EsprimaPropertyToken[];
    var params : EsprimaIdentifierToken[];
    var defaults : EsprimaToken[];
    var cases : EsprimaToken[];
    var label : EsprimaToken;

    var raw : string;
    var loc : EsprimaLineColumnLocation;
    var range : int[];
}

class EsprimaOption
{
    var loc : boolean;
    var range : boolean;
    var raw : boolean;
    var tokens : boolean;
    var comment : boolean;
    var tolerant : boolean;

    function constructor(option : Map.<boolean>)
    {
        this.loc = false;
        this.range = false;
        this.raw = false;
        this.tokens = false;
        this.comment = false;
        this.tolerant = false;

        for (var key in option)
        {
            switch (key)
            {
            case 'loc':
                this.loc = option[key] as boolean;
                break;
            case 'range':
                this.range = option[key] as boolean;
                break;
            case 'raw':
                this.raw = option[key] as boolean;
                break;
            case 'tokens':
                this.tokens = option[key] as boolean;
                break;
            case 'comment':
                this.comment = option[key] as boolean;
                break;
            case 'tolerant':
                this.tolerant = option[key] as boolean;
                break;
            }
        }
    }
}

native class esprima {
    static function parse(src : string) : EsprimaProgramToken;
    static function parse(src : string, option : Map.<boolean>) : EsprimaProgramToken;
    static function parse(src : string, option : EsprimaOption) : EsprimaProgramToken;
} = "require('esprima')";
