import {test} from 'node:test';
import assert from 'node:assert/strict';
import {buildInquiry} from '../src/lib/inquiry.js';
test('summary preserves contact details and the selected service',()=>{
const body=buildInquiry({name:'A & B? # +',email:'visitor@example.com',service:'processing',role:'Professional partner',state:'MI'});
assert.ok(body.includes('Name: A & B? # +'));
assert.ok(body.includes('Email: visitor@example.com'));
assert.match(body,/Third-party loan processing/);
});
test('field newlines cannot add forged summary fields',()=>{
const body=buildInquiry({name:'A\r\nBcc: stranger@example.com',service:'residential'});
assert.ok(body.includes('Name: A  Bcc: stranger@example.com'));
assert.ok(!body.includes('\nBcc:'));
assert.match(body,/Residential services: Coming Soon/);
});
