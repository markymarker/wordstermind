"use strict";

window.wordlist = [
'piano', 'yacht', 'words', 'house', 'testy',
'abate', 'crime', 'grump', 'grate', 'tasty',
'match', 'close', 'wrong', 'error', 'hasty',
'haunt', 'gaunt', 'watch', 'whats', 'updog'
];

// Not just five letters!
if(window.location.href.indexOf('?neato') >= 0){
	wordlist = wordlist.concat([
		'one', 'two', 'three', 'four', 'five',
		'six', 'seven', 'eight', 'nine', 'ten'
	]);
}

