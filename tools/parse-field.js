var Packet = require('./lib/packets/packet.js');
var Packets = require('./lib/packets/index.js');

var compileParser = require('./lib/compile_binary_parser.js')

function parse(s) {
  var raw = new Buffer(s, 'hex');
  var p = new Packet(0, raw, 0, raw.end);
  return new SAParser(p);
}

var fields = [];

function parseCcolumn(s) {
  var raw = new Buffer(s, 'hex');
  var p = new Packet(0, raw, 0, raw.end);
  var c  = new Packets.ColumnDefinition(p);
  fields.push(c);
  return c.inspect();
}

console.log(parseC('036465660000001a62696c6c696e675f69735f7069636b75705f6c6f636174696f6e000c3f0001000000030100000000'));
console.log(parseC('036465660d6e616d7368695f6465765f6165087368697070696e671373616c65735f6f726465725f61646472657373117368697070696e675f61646472657373310861646472657373310c2100fd020000fd0010000000'));
console.log(parseC('036465660d6e616d7368695f6465765f6165087368697070696e671373616c65735f6f726465725f616464726573731b7368697070696e675f666b5f7069636b75705f6c6f636174696f6e12666b5f7069636b75705f6c6f636174696f6e0c3f000a000000030000000000'));
console.log(parseC('036465660000001a62696c6c696e675f69735f7069636b75705f6c6f636174696f6e000c3f0001000000030100000000'));

var p = compileParser(fields, {}, { debug: true });

fields = [];

console.log(parseC('036465660000001a62696c6c696e675f69735f7069636b75705f6c6f636174696f6e000c3f0001000000088100000000'));
console.log(parseC('036465660d6e616d7368695f6465765f6165087368697070696e671373616c65735f6f726465725f61646472657373117368697070696e675f61646472657373310861646472657373310c2100fd020000fd0010000000'));
console.log(parseC('036465660d6e616d7368695f6465765f6165087368697070696e671373616c65735f6f726465725f616464726573731b7368697070696e675f666b5f7069636b75705f6c6f636174696f6e12666b5f7069636b75705f6c6f636174696f6e0c3f000a000000030000000000'));
console.log(parseC('036465660000001a62696c6c696e675f69735f7069636b75705f6c6f636174696f6e000c3f0001000000088100000000'));

var p = compileParser(fields, {}, { debug: true });