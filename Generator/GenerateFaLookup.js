const fs = require('fs');
const path = require('path');

const sourceFile = __dirname + '/../Font-Awesome/metadata/icons.json';
const targetFile = __dirname + '/../FaLookup.g.cs';

const padUnicode = str => str.padStart(4, '0');

fs.readFile(sourceFile, { encoding: 'utf-8' }, (err, json) => {

    if (!err) {

        let awesome = JSON.parse(json);

        let cs = ` 
            using System.Collections.Generic;

            namespace AW.FontAwesome.WPF { 
                
                public static class FaLookup { \r\n\r\n `


        cs += 'public static readonly Dictionary<string, char> Regular = new Dictionary<string, char>()\r\n';
        cs += '{\r\n';

        for (var key in awesome) {
            if ('regular' in awesome[key].svg)
                cs += '{"' + key + '",  \'\\u' + padUnicode(awesome[key].unicode) + '\'},\r\n';
        }

        cs += '};\r\n';


        cs += 'public static readonly Dictionary<string, char> Solid = new Dictionary<string, char>() \r\n';
        cs += '{\r\n';

        for (var key in awesome) {
            if ('solid' in awesome[key].svg)
                cs += '{"' + key + '",  \'\\u' + padUnicode(awesome[key].unicode) + '\'},\r\n';
        }

        cs += '};\r\n';


        cs += 'public static readonly Dictionary<string, char> Brands = new Dictionary<string, char>() \r\n';
        cs += '{\r\n';

        for (var key in awesome) {
            if ('brands' in awesome[key].svg)
                cs += '{"' + key + '",  \'\\u' + padUnicode(awesome[key].unicode) + '\'},\r\n';
        }

        cs += '};\r\n';

        cs += `
                }   
            }
        `;

        fs.writeFile(targetFile, cs, err => {
            if (err)
                console.log(err);
        });
    }
    else {
        console.log(err);
    }
});