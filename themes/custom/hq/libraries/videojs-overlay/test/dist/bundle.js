/*! @name videojs-overlay @version 2.1.4 @license Apache-2.0 */
(function (videojs,QUnit,sinon) {
	'use strict';

	videojs = videojs && videojs.hasOwnProperty('default') ? videojs['default'] : videojs;
	QUnit = QUnit && QUnit.hasOwnProperty('default') ? QUnit['default'] : QUnit;
	sinon = sinon && sinon.hasOwnProperty('default') ? sinon['default'] : sinon;

	var commonjsGlobal = typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

	var empty = {};

	var empty$1 = /*#__PURE__*/Object.freeze({
		default: empty
	});

	var minDoc = ( empty$1 && empty ) || empty$1;

	var topLevel = typeof commonjsGlobal !== 'undefined' ? commonjsGlobal :
	    typeof window !== 'undefined' ? window : {};


	var doccy;

	if (typeof document !== 'undefined') {
	    doccy = document;
	} else {
	    doccy = topLevel['__GLOBAL_DOCUMENT_CACHE@4'];

	    if (!doccy) {
	        doccy = topLevel['__GLOBAL_DOCUMENT_CACHE@4'] = minDoc;
	    }
	}

	var document_1 = doccy;

	function _inheritsLoose(subClass, superClass) {
	  subClass.prototype = Object.create(superClass.prototype);
	  subClass.prototype.constructor = subClass;
	  subClass.__proto__ = superClass;
	}

	function _assertThisInitialized(self) {
	  if (self === void 0) {
	    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	  }

	  return self;
	}

	var win;

	if (typeof window !== "undefined") {
	    win = window;
	} else if (typeof commonjsGlobal !== "undefined") {
	    win = commonjsGlobal;
	} else if (typeof self !== "undefined"){
	    win = self;
	} else {
	    win = {};
	}

	var window_1 = win;

	var version = "2.1.4";

	var cov_1b8ekuqb3b = function () {
	  var path = '/Users/bcasey/Projects/videojs-overlay/src/plugin.js',
	      hash = 'b3c43471e109ecb3b3c0a5cce94c6af912594920',
	      Function = function () {}.constructor,
	      global = new Function('return this')(),
	      gcv = '__coverage__',
	      coverageData = {
	    path: '/Users/bcasey/Projects/videojs-overlay/src/plugin.js',
	    statementMap: {
	      '0': {
	        start: {
	          line: 5,
	          column: 17
	        },
	        end: {
	          line: 16,
	          column: 1
	        }
	      },
	      '1': {
	        start: {
	          line: 18,
	          column: 18
	        },
	        end: {
	          line: 18,
	          column: 51
	        }
	      },
	      '2': {
	        start: {
	          line: 20,
	          column: 12
	        },
	        end: {
	          line: 20,
	          column: 34
	        }
	      },
	      '3': {
	        start: {
	          line: 21,
	          column: 23
	        },
	        end: {
	          line: 21,
	          column: 63
	        }
	      },
	      '4': {
	        start: {
	          line: 33,
	          column: 17
	        },
	        end: {
	          line: 33,
	          column: 54
	        }
	      },
	      '5': {
	        start: {
	          line: 33,
	          column: 22
	        },
	        end: {
	          line: 33,
	          column: 54
	        }
	      },
	      '6': {
	        start: {
	          line: 42,
	          column: 24
	        },
	        end: {
	          line: 42,
	          column: 71
	        }
	      },
	      '7': {
	        start: {
	          line: 42,
	          column: 29
	        },
	        end: {
	          line: 42,
	          column: 71
	        }
	      },
	      '8': {
	        start: {
	          line: 53,
	          column: 4
	        },
	        end: {
	          line: 53,
	          column: 27
	        }
	      },
	      '9': {
	        start: {
	          line: 55,
	          column: 4
	        },
	        end: {
	          line: 67,
	          column: 7
	        }
	      },
	      '10': {
	        start: {
	          line: 56,
	          column: 20
	        },
	        end: {
	          line: 56,
	          column: 38
	        }
	      },
	      '11': {
	        start: {
	          line: 58,
	          column: 6
	        },
	        end: {
	          line: 66,
	          column: 7
	        }
	      },
	      '12': {
	        start: {
	          line: 59,
	          column: 8
	        },
	        end: {
	          line: 59,
	          column: 44
	        }
	      },
	      '13': {
	        start: {
	          line: 60,
	          column: 13
	        },
	        end: {
	          line: 66,
	          column: 7
	        }
	      },
	      '14': {
	        start: {
	          line: 61,
	          column: 8
	        },
	        end: {
	          line: 61,
	          column: 37
	        }
	      },
	      '15': {
	        start: {
	          line: 64,
	          column: 13
	        },
	        end: {
	          line: 66,
	          column: 7
	        }
	      },
	      '16': {
	        start: {
	          line: 65,
	          column: 8
	        },
	        end: {
	          line: 65,
	          column: 77
	        }
	      },
	      '17': {
	        start: {
	          line: 76,
	          column: 4
	        },
	        end: {
	          line: 78,
	          column: 7
	        }
	      },
	      '18': {
	        start: {
	          line: 77,
	          column: 6
	        },
	        end: {
	          line: 77,
	          column: 64
	        }
	      },
	      '19': {
	        start: {
	          line: 77,
	          column: 26
	        },
	        end: {
	          line: 77,
	          column: 63
	        }
	      },
	      '20': {
	        start: {
	          line: 82,
	          column: 4
	        },
	        end: {
	          line: 84,
	          column: 5
	        }
	      },
	      '21': {
	        start: {
	          line: 83,
	          column: 6
	        },
	        end: {
	          line: 83,
	          column: 58
	        }
	      },
	      '22': {
	        start: {
	          line: 86,
	          column: 4
	        },
	        end: {
	          line: 86,
	          column: 121
	        }
	      },
	      '23': {
	        start: {
	          line: 88,
	          column: 4
	        },
	        end: {
	          line: 88,
	          column: 16
	        }
	      },
	      '24': {
	        start: {
	          line: 92,
	          column: 20
	        },
	        end: {
	          line: 92,
	          column: 33
	        }
	      },
	      '25': {
	        start: {
	          line: 93,
	          column: 20
	        },
	        end: {
	          line: 93,
	          column: 35
	        }
	      },
	      '26': {
	        start: {
	          line: 95,
	          column: 23
	        },
	        end: {
	          line: 95,
	          column: 102
	        }
	      },
	      '27': {
	        start: {
	          line: 96,
	          column: 15
	        },
	        end: {
	          line: 104,
	          column: 6
	        }
	      },
	      '28': {
	        start: {
	          line: 106,
	          column: 4
	        },
	        end: {
	          line: 112,
	          column: 5
	        }
	      },
	      '29': {
	        start: {
	          line: 107,
	          column: 6
	        },
	        end: {
	          line: 107,
	          column: 29
	        }
	      },
	      '30': {
	        start: {
	          line: 108,
	          column: 11
	        },
	        end: {
	          line: 112,
	          column: 5
	        }
	      },
	      '31': {
	        start: {
	          line: 109,
	          column: 6
	        },
	        end: {
	          line: 109,
	          column: 30
	        }
	      },
	      '32': {
	        start: {
	          line: 111,
	          column: 6
	        },
	        end: {
	          line: 111,
	          column: 37
	        }
	      },
	      '33': {
	        start: {
	          line: 114,
	          column: 4
	        },
	        end: {
	          line: 114,
	          column: 14
	        }
	      },
	      '34': {
	        start: {
	          line: 123,
	          column: 4
	        },
	        end: {
	          line: 125,
	          column: 5
	        }
	      },
	      '35': {
	        start: {
	          line: 124,
	          column: 6
	        },
	        end: {
	          line: 124,
	          column: 13
	        }
	      },
	      '36': {
	        start: {
	          line: 127,
	          column: 16
	        },
	        end: {
	          line: 127,
	          column: 27
	        }
	      },
	      '37': {
	        start: {
	          line: 128,
	          column: 13
	        },
	        end: {
	          line: 128,
	          column: 16
	        }
	      },
	      '38': {
	        start: {
	          line: 131,
	          column: 4
	        },
	        end: {
	          line: 133,
	          column: 5
	        }
	      },
	      '39': {
	        start: {
	          line: 132,
	          column: 6
	        },
	        end: {
	          line: 132,
	          column: 29
	        }
	      },
	      '40': {
	        start: {
	          line: 135,
	          column: 4
	        },
	        end: {
	          line: 135,
	          column: 47
	        }
	      },
	      '41': {
	        start: {
	          line: 144,
	          column: 4
	        },
	        end: {
	          line: 144,
	          column: 17
	        }
	      },
	      '42': {
	        start: {
	          line: 146,
	          column: 4
	        },
	        end: {
	          line: 146,
	          column: 25
	        }
	      },
	      '43': {
	        start: {
	          line: 147,
	          column: 4
	        },
	        end: {
	          line: 147,
	          column: 68
	        }
	      },
	      '44': {
	        start: {
	          line: 150,
	          column: 4
	        },
	        end: {
	          line: 153,
	          column: 5
	        }
	      },
	      '45': {
	        start: {
	          line: 151,
	          column: 6
	        },
	        end: {
	          line: 151,
	          column: 70
	        }
	      },
	      '46': {
	        start: {
	          line: 152,
	          column: 6
	        },
	        end: {
	          line: 152,
	          column: 65
	        }
	      },
	      '47': {
	        start: {
	          line: 155,
	          column: 4
	        },
	        end: {
	          line: 155,
	          column: 66
	        }
	      },
	      '48': {
	        start: {
	          line: 157,
	          column: 4
	        },
	        end: {
	          line: 157,
	          column: 16
	        }
	      },
	      '49': {
	        start: {
	          line: 170,
	          column: 16
	        },
	        end: {
	          line: 170,
	          column: 33
	        }
	      },
	      '50': {
	        start: {
	          line: 172,
	          column: 4
	        },
	        end: {
	          line: 172,
	          column: 56
	        }
	      },
	      '51': {
	        start: {
	          line: 181,
	          column: 4
	        },
	        end: {
	          line: 181,
	          column: 17
	        }
	      },
	      '52': {
	        start: {
	          line: 182,
	          column: 4
	        },
	        end: {
	          line: 182,
	          column: 67
	        }
	      },
	      '53': {
	        start: {
	          line: 183,
	          column: 4
	        },
	        end: {
	          line: 183,
	          column: 24
	        }
	      },
	      '54': {
	        start: {
	          line: 184,
	          column: 4
	        },
	        end: {
	          line: 184,
	          column: 72
	        }
	      },
	      '55': {
	        start: {
	          line: 187,
	          column: 4
	        },
	        end: {
	          line: 190,
	          column: 5
	        }
	      },
	      '56': {
	        start: {
	          line: 188,
	          column: 6
	        },
	        end: {
	          line: 188,
	          column: 66
	        }
	      },
	      '57': {
	        start: {
	          line: 189,
	          column: 6
	        },
	        end: {
	          line: 189,
	          column: 64
	        }
	      },
	      '58': {
	        start: {
	          line: 192,
	          column: 4
	        },
	        end: {
	          line: 192,
	          column: 16
	        }
	      },
	      '59': {
	        start: {
	          line: 205,
	          column: 18
	        },
	        end: {
	          line: 205,
	          column: 37
	        }
	      },
	      '60': {
	        start: {
	          line: 206,
	          column: 16
	        },
	        end: {
	          line: 206,
	          column: 33
	        }
	      },
	      '61': {
	        start: {
	          line: 208,
	          column: 4
	        },
	        end: {
	          line: 225,
	          column: 5
	        }
	      },
	      '62': {
	        start: {
	          line: 210,
	          column: 6
	        },
	        end: {
	          line: 218,
	          column: 7
	        }
	      },
	      '63': {
	        start: {
	          line: 211,
	          column: 8
	        },
	        end: {
	          line: 211,
	          column: 43
	        }
	      },
	      '64': {
	        start: {
	          line: 215,
	          column: 13
	        },
	        end: {
	          line: 218,
	          column: 7
	        }
	      },
	      '65': {
	        start: {
	          line: 216,
	          column: 8
	        },
	        end: {
	          line: 216,
	          column: 39
	        }
	      },
	      '66': {
	        start: {
	          line: 217,
	          column: 8
	        },
	        end: {
	          line: 217,
	          column: 29
	        }
	      },
	      '67': {
	        start: {
	          line: 224,
	          column: 6
	        },
	        end: {
	          line: 224,
	          column: 40
	        }
	      },
	      '68': {
	        start: {
	          line: 227,
	          column: 4
	        },
	        end: {
	          line: 227,
	          column: 26
	        }
	      },
	      '69': {
	        start: {
	          line: 236,
	          column: 17
	        },
	        end: {
	          line: 236,
	          column: 44
	        }
	      },
	      '70': {
	        start: {
	          line: 238,
	          column: 4
	        },
	        end: {
	          line: 240,
	          column: 5
	        }
	      },
	      '71': {
	        start: {
	          line: 239,
	          column: 6
	        },
	        end: {
	          line: 239,
	          column: 18
	        }
	      },
	      '72': {
	        start: {
	          line: 249,
	          column: 17
	        },
	        end: {
	          line: 249,
	          column: 44
	        }
	      },
	      '73': {
	        start: {
	          line: 251,
	          column: 4
	        },
	        end: {
	          line: 253,
	          column: 5
	        }
	      },
	      '74': {
	        start: {
	          line: 252,
	          column: 6
	        },
	        end: {
	          line: 252,
	          column: 18
	        }
	      },
	      '75': {
	        start: {
	          line: 263,
	          column: 17
	        },
	        end: {
	          line: 263,
	          column: 44
	        }
	      },
	      '76': {
	        start: {
	          line: 264,
	          column: 21
	        },
	        end: {
	          line: 264,
	          column: 39
	        }
	      },
	      '77': {
	        start: {
	          line: 265,
	          column: 18
	        },
	        end: {
	          line: 265,
	          column: 37
	        }
	      },
	      '78': {
	        start: {
	          line: 266,
	          column: 16
	        },
	        end: {
	          line: 266,
	          column: 33
	        }
	      },
	      '79': {
	        start: {
	          line: 269,
	          column: 4
	        },
	        end: {
	          line: 289,
	          column: 5
	        }
	      },
	      '80': {
	        start: {
	          line: 270,
	          column: 6
	        },
	        end: {
	          line: 270,
	          column: 36
	        }
	      },
	      '81': {
	        start: {
	          line: 275,
	          column: 6
	        },
	        end: {
	          line: 288,
	          column: 7
	        }
	      },
	      '82': {
	        start: {
	          line: 276,
	          column: 8
	        },
	        end: {
	          line: 276,
	          column: 92
	        }
	      },
	      '83': {
	        start: {
	          line: 277,
	          column: 8
	        },
	        end: {
	          line: 277,
	          column: 40
	        }
	      },
	      '84': {
	        start: {
	          line: 278,
	          column: 8
	        },
	        end: {
	          line: 278,
	          column: 20
	        }
	      },
	      '85': {
	        start: {
	          line: 284,
	          column: 13
	        },
	        end: {
	          line: 288,
	          column: 7
	        }
	      },
	      '86': {
	        start: {
	          line: 285,
	          column: 8
	        },
	        end: {
	          line: 285,
	          column: 111
	        }
	      },
	      '87': {
	        start: {
	          line: 286,
	          column: 8
	        },
	        end: {
	          line: 286,
	          column: 40
	        }
	      },
	      '88': {
	        start: {
	          line: 287,
	          column: 8
	        },
	        end: {
	          line: 287,
	          column: 20
	        }
	      },
	      '89': {
	        start: {
	          line: 291,
	          column: 4
	        },
	        end: {
	          line: 291,
	          column: 30
	        }
	      },
	      '90': {
	        start: {
	          line: 295,
	          column: 0
	        },
	        end: {
	          line: 295,
	          column: 46
	        }
	      },
	      '91': {
	        start: {
	          line: 303,
	          column: 15
	        },
	        end: {
	          line: 357,
	          column: 1
	        }
	      },
	      '92': {
	        start: {
	          line: 304,
	          column: 19
	        },
	        end: {
	          line: 304,
	          column: 58
	        }
	      },
	      '93': {
	        start: {
	          line: 307,
	          column: 2
	        },
	        end: {
	          line: 315,
	          column: 3
	        }
	      },
	      '94': {
	        start: {
	          line: 308,
	          column: 4
	        },
	        end: {
	          line: 314,
	          column: 7
	        }
	      },
	      '95': {
	        start: {
	          line: 309,
	          column: 6
	        },
	        end: {
	          line: 309,
	          column: 32
	        }
	      },
	      '96': {
	        start: {
	          line: 310,
	          column: 6
	        },
	        end: {
	          line: 312,
	          column: 7
	        }
	      },
	      '97': {
	        start: {
	          line: 311,
	          column: 8
	        },
	        end: {
	          line: 311,
	          column: 45
	        }
	      },
	      '98': {
	        start: {
	          line: 313,
	          column: 6
	        },
	        end: {
	          line: 313,
	          column: 24
	        }
	      },
	      '99': {
	        start: {
	          line: 317,
	          column: 19
	        },
	        end: {
	          line: 317,
	          column: 36
	        }
	      },
	      '100': {
	        start: {
	          line: 321,
	          column: 2
	        },
	        end: {
	          line: 321,
	          column: 27
	        }
	      },
	      '101': {
	        start: {
	          line: 323,
	          column: 2
	        },
	        end: {
	          line: 356,
	          column: 5
	        }
	      },
	      '102': {
	        start: {
	          line: 324,
	          column: 25
	        },
	        end: {
	          line: 324,
	          column: 58
	        }
	      },
	      '103': {
	        start: {
	          line: 325,
	          column: 31
	        },
	        end: {
	          line: 325,
	          column: 126
	        }
	      },
	      '104': {
	        start: {
	          line: 327,
	          column: 4
	        },
	        end: {
	          line: 329,
	          column: 5
	        }
	      },
	      '105': {
	        start: {
	          line: 328,
	          column: 6
	        },
	        end: {
	          line: 328,
	          column: 52
	        }
	      },
	      '106': {
	        start: {
	          line: 331,
	          column: 4
	        },
	        end: {
	          line: 347,
	          column: 5
	        }
	      },
	      '107': {
	        start: {
	          line: 332,
	          column: 27
	        },
	        end: {
	          line: 332,
	          column: 56
	        }
	      },
	      '108': {
	        start: {
	          line: 334,
	          column: 6
	        },
	        end: {
	          line: 336,
	          column: 7
	        }
	      },
	      '109': {
	        start: {
	          line: 335,
	          column: 8
	        },
	        end: {
	          line: 335,
	          column: 83
	        }
	      },
	      '110': {
	        start: {
	          line: 338,
	          column: 6
	        },
	        end: {
	          line: 346,
	          column: 7
	        }
	      },
	      '111': {
	        start: {
	          line: 339,
	          column: 32
	        },
	        end: {
	          line: 339,
	          column: 81
	        }
	      },
	      '112': {
	        start: {
	          line: 341,
	          column: 8
	        },
	        end: {
	          line: 344,
	          column: 10
	        }
	      },
	      '113': {
	        start: {
	          line: 345,
	          column: 8
	        },
	        end: {
	          line: 345,
	          column: 31
	        }
	      },
	      '114': {
	        start: {
	          line: 349,
	          column: 24
	        },
	        end: {
	          line: 349,
	          column: 62
	        }
	      },
	      '115': {
	        start: {
	          line: 351,
	          column: 4
	        },
	        end: {
	          line: 354,
	          column: 6
	        }
	      },
	      '116': {
	        start: {
	          line: 355,
	          column: 4
	        },
	        end: {
	          line: 355,
	          column: 23
	        }
	      },
	      '117': {
	        start: {
	          line: 359,
	          column: 0
	        },
	        end: {
	          line: 359,
	          column: 25
	        }
	      },
	      '118': {
	        start: {
	          line: 361,
	          column: 0
	        },
	        end: {
	          line: 361,
	          column: 34
	        }
	      }
	    },
	    fnMap: {
	      '0': {
	        name: '(anonymous_0)',
	        decl: {
	          start: {
	            line: 33,
	            column: 17
	          },
	          end: {
	            line: 33,
	            column: 18
	          }
	        },
	        loc: {
	          start: {
	            line: 33,
	            column: 22
	          },
	          end: {
	            line: 33,
	            column: 54
	          }
	        },
	        line: 33
	      },
	      '1': {
	        name: '(anonymous_1)',
	        decl: {
	          start: {
	            line: 42,
	            column: 24
	          },
	          end: {
	            line: 42,
	            column: 25
	          }
	        },
	        loc: {
	          start: {
	            line: 42,
	            column: 29
	          },
	          end: {
	            line: 42,
	            column: 71
	          }
	        },
	        line: 42
	      },
	      '2': {
	        name: '(anonymous_2)',
	        decl: {
	          start: {
	            line: 52,
	            column: 2
	          },
	          end: {
	            line: 52,
	            column: 3
	          }
	        },
	        loc: {
	          start: {
	            line: 52,
	            column: 31
	          },
	          end: {
	            line: 89,
	            column: 3
	          }
	        },
	        line: 52
	      },
	      '3': {
	        name: '(anonymous_3)',
	        decl: {
	          start: {
	            line: 55,
	            column: 29
	          },
	          end: {
	            line: 55,
	            column: 30
	          }
	        },
	        loc: {
	          start: {
	            line: 55,
	            column: 36
	          },
	          end: {
	            line: 67,
	            column: 5
	          }
	        },
	        line: 55
	      },
	      '4': {
	        name: '(anonymous_4)',
	        decl: {
	          start: {
	            line: 76,
	            column: 66
	          },
	          end: {
	            line: 76,
	            column: 67
	          }
	        },
	        loc: {
	          start: {
	            line: 76,
	            column: 74
	          },
	          end: {
	            line: 78,
	            column: 5
	          }
	        },
	        line: 76
	      },
	      '5': {
	        name: '(anonymous_5)',
	        decl: {
	          start: {
	            line: 77,
	            column: 19
	          },
	          end: {
	            line: 77,
	            column: 20
	          }
	        },
	        loc: {
	          start: {
	            line: 77,
	            column: 26
	          },
	          end: {
	            line: 77,
	            column: 63
	          }
	        },
	        line: 77
	      },
	      '6': {
	        name: '(anonymous_6)',
	        decl: {
	          start: {
	            line: 91,
	            column: 2
	          },
	          end: {
	            line: 91,
	            column: 3
	          }
	        },
	        loc: {
	          start: {
	            line: 91,
	            column: 13
	          },
	          end: {
	            line: 115,
	            column: 3
	          }
	        },
	        line: 91
	      },
	      '7': {
	        name: '(anonymous_7)',
	        decl: {
	          start: {
	            line: 122,
	            column: 2
	          },
	          end: {
	            line: 122,
	            column: 3
	          }
	        },
	        loc: {
	          start: {
	            line: 122,
	            column: 17
	          },
	          end: {
	            line: 136,
	            column: 3
	          }
	        },
	        line: 122
	      },
	      '8': {
	        name: '(anonymous_8)',
	        decl: {
	          start: {
	            line: 143,
	            column: 2
	          },
	          end: {
	            line: 143,
	            column: 3
	          }
	        },
	        loc: {
	          start: {
	            line: 143,
	            column: 9
	          },
	          end: {
	            line: 158,
	            column: 3
	          }
	        },
	        line: 143
	      },
	      '9': {
	        name: '(anonymous_9)',
	        decl: {
	          start: {
	            line: 169,
	            column: 2
	          },
	          end: {
	            line: 169,
	            column: 3
	          }
	        },
	        loc: {
	          start: {
	            line: 169,
	            column: 26
	          },
	          end: {
	            line: 173,
	            column: 3
	          }
	        },
	        line: 169
	      },
	      '10': {
	        name: '(anonymous_10)',
	        decl: {
	          start: {
	            line: 180,
	            column: 2
	          },
	          end: {
	            line: 180,
	            column: 3
	          }
	        },
	        loc: {
	          start: {
	            line: 180,
	            column: 9
	          },
	          end: {
	            line: 193,
	            column: 3
	          }
	        },
	        line: 180
	      },
	      '11': {
	        name: '(anonymous_11)',
	        decl: {
	          start: {
	            line: 204,
	            column: 2
	          },
	          end: {
	            line: 204,
	            column: 3
	          }
	        },
	        loc: {
	          start: {
	            line: 204,
	            column: 26
	          },
	          end: {
	            line: 228,
	            column: 3
	          }
	        },
	        line: 204
	      },
	      '12': {
	        name: '(anonymous_12)',
	        decl: {
	          start: {
	            line: 235,
	            column: 2
	          },
	          end: {
	            line: 235,
	            column: 3
	          }
	        },
	        loc: {
	          start: {
	            line: 235,
	            column: 20
	          },
	          end: {
	            line: 241,
	            column: 3
	          }
	        },
	        line: 235
	      },
	      '13': {
	        name: '(anonymous_13)',
	        decl: {
	          start: {
	            line: 248,
	            column: 2
	          },
	          end: {
	            line: 248,
	            column: 3
	          }
	        },
	        loc: {
	          start: {
	            line: 248,
	            column: 18
	          },
	          end: {
	            line: 254,
	            column: 3
	          }
	        },
	        line: 248
	      },
	      '14': {
	        name: '(anonymous_14)',
	        decl: {
	          start: {
	            line: 262,
	            column: 2
	          },
	          end: {
	            line: 262,
	            column: 3
	          }
	        },
	        loc: {
	          start: {
	            line: 262,
	            column: 21
	          },
	          end: {
	            line: 292,
	            column: 3
	          }
	        },
	        line: 262
	      },
	      '15': {
	        name: '(anonymous_15)',
	        decl: {
	          start: {
	            line: 303,
	            column: 15
	          },
	          end: {
	            line: 303,
	            column: 16
	          }
	        },
	        loc: {
	          start: {
	            line: 303,
	            column: 33
	          },
	          end: {
	            line: 357,
	            column: 1
	          }
	        },
	        line: 303
	      },
	      '16': {
	        name: '(anonymous_16)',
	        decl: {
	          start: {
	            line: 308,
	            column: 27
	          },
	          end: {
	            line: 308,
	            column: 28
	          }
	        },
	        loc: {
	          start: {
	            line: 308,
	            column: 38
	          },
	          end: {
	            line: 314,
	            column: 5
	          }
	        },
	        line: 308
	      },
	      '17': {
	        name: '(anonymous_17)',
	        decl: {
	          start: {
	            line: 323,
	            column: 32
	          },
	          end: {
	            line: 323,
	            column: 33
	          }
	        },
	        loc: {
	          start: {
	            line: 323,
	            column: 37
	          },
	          end: {
	            line: 356,
	            column: 3
	          }
	        },
	        line: 323
	      }
	    },
	    branchMap: {
	      '0': {
	        loc: {
	          start: {
	            line: 20,
	            column: 12
	          },
	          end: {
	            line: 20,
	            column: 34
	          }
	        },
	        type: 'binary-expr',
	        locations: [{
	          start: {
	            line: 20,
	            column: 12
	          },
	          end: {
	            line: 20,
	            column: 23
	          }
	        }, {
	          start: {
	            line: 20,
	            column: 27
	          },
	          end: {
	            line: 20,
	            column: 34
	          }
	        }],
	        line: 20
	      },
	      '1': {
	        loc: {
	          start: {
	            line: 21,
	            column: 23
	          },
	          end: {
	            line: 21,
	            column: 63
	          }
	        },
	        type: 'binary-expr',
	        locations: [{
	          start: {
	            line: 21,
	            column: 23
	          },
	          end: {
	            line: 21,
	            column: 45
	          }
	        }, {
	          start: {
	            line: 21,
	            column: 49
	          },
	          end: {
	            line: 21,
	            column: 63
	          }
	        }],
	        line: 21
	      },
	      '2': {
	        loc: {
	          start: {
	            line: 33,
	            column: 22
	          },
	          end: {
	            line: 33,
	            column: 54
	          }
	        },
	        type: 'binary-expr',
	        locations: [{
	          start: {
	            line: 33,
	            column: 22
	          },
	          end: {
	            line: 33,
	            column: 43
	          }
	        }, {
	          start: {
	            line: 33,
	            column: 47
	          },
	          end: {
	            line: 33,
	            column: 54
	          }
	        }],
	        line: 33
	      },
	      '3': {
	        loc: {
	          start: {
	            line: 42,
	            column: 29
	          },
	          end: {
	            line: 42,
	            column: 71
	          }
	        },
	        type: 'binary-expr',
	        locations: [{
	          start: {
	            line: 42,
	            column: 29
	          },
	          end: {
	            line: 42,
	            column: 50
	          }
	        }, {
	          start: {
	            line: 42,
	            column: 54
	          },
	          end: {
	            line: 42,
	            column: 71
	          }
	        }],
	        line: 42
	      },
	      '4': {
	        loc: {
	          start: {
	            line: 58,
	            column: 6
	          },
	          end: {
	            line: 66,
	            column: 7
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 58,
	            column: 6
	          },
	          end: {
	            line: 66,
	            column: 7
	          }
	        }, {
	          start: {
	            line: 58,
	            column: 6
	          },
	          end: {
	            line: 66,
	            column: 7
	          }
	        }],
	        line: 58
	      },
	      '5': {
	        loc: {
	          start: {
	            line: 60,
	            column: 13
	          },
	          end: {
	            line: 66,
	            column: 7
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 60,
	            column: 13
	          },
	          end: {
	            line: 66,
	            column: 7
	          }
	        }, {
	          start: {
	            line: 60,
	            column: 13
	          },
	          end: {
	            line: 66,
	            column: 7
	          }
	        }],
	        line: 60
	      },
	      '6': {
	        loc: {
	          start: {
	            line: 64,
	            column: 13
	          },
	          end: {
	            line: 66,
	            column: 7
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 64,
	            column: 13
	          },
	          end: {
	            line: 66,
	            column: 7
	          }
	        }, {
	          start: {
	            line: 64,
	            column: 13
	          },
	          end: {
	            line: 66,
	            column: 7
	          }
	        }],
	        line: 64
	      },
	      '7': {
	        loc: {
	          start: {
	            line: 82,
	            column: 4
	          },
	          end: {
	            line: 84,
	            column: 5
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 82,
	            column: 4
	          },
	          end: {
	            line: 84,
	            column: 5
	          }
	        }, {
	          start: {
	            line: 82,
	            column: 4
	          },
	          end: {
	            line: 84,
	            column: 5
	          }
	        }],
	        line: 82
	      },
	      '8': {
	        loc: {
	          start: {
	            line: 86,
	            column: 79
	          },
	          end: {
	            line: 86,
	            column: 106
	          }
	        },
	        type: 'binary-expr',
	        locations: [{
	          start: {
	            line: 86,
	            column: 79
	          },
	          end: {
	            line: 86,
	            column: 93
	          }
	        }, {
	          start: {
	            line: 86,
	            column: 97
	          },
	          end: {
	            line: 86,
	            column: 106
	          }
	        }],
	        line: 86
	      },
	      '9': {
	        loc: {
	          start: {
	            line: 95,
	            column: 23
	          },
	          end: {
	            line: 95,
	            column: 102
	          }
	        },
	        type: 'cond-expr',
	        locations: [{
	          start: {
	            line: 95,
	            column: 48
	          },
	          end: {
	            line: 95,
	            column: 72
	          }
	        }, {
	          start: {
	            line: 95,
	            column: 75
	          },
	          end: {
	            line: 95,
	            column: 102
	          }
	        }],
	        line: 95
	      },
	      '10': {
	        loc: {
	          start: {
	            line: 106,
	            column: 4
	          },
	          end: {
	            line: 112,
	            column: 5
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 106,
	            column: 4
	          },
	          end: {
	            line: 112,
	            column: 5
	          }
	        }, {
	          start: {
	            line: 106,
	            column: 4
	          },
	          end: {
	            line: 112,
	            column: 5
	          }
	        }],
	        line: 106
	      },
	      '11': {
	        loc: {
	          start: {
	            line: 108,
	            column: 11
	          },
	          end: {
	            line: 112,
	            column: 5
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 108,
	            column: 11
	          },
	          end: {
	            line: 112,
	            column: 5
	          }
	        }, {
	          start: {
	            line: 108,
	            column: 11
	          },
	          end: {
	            line: 112,
	            column: 5
	          }
	        }],
	        line: 108
	      },
	      '12': {
	        loc: {
	          start: {
	            line: 123,
	            column: 4
	          },
	          end: {
	            line: 125,
	            column: 5
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 123,
	            column: 4
	          },
	          end: {
	            line: 125,
	            column: 5
	          }
	        }, {
	          start: {
	            line: 123,
	            column: 4
	          },
	          end: {
	            line: 125,
	            column: 5
	          }
	        }],
	        line: 123
	      },
	      '13': {
	        loc: {
	          start: {
	            line: 131,
	            column: 4
	          },
	          end: {
	            line: 133,
	            column: 5
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 131,
	            column: 4
	          },
	          end: {
	            line: 133,
	            column: 5
	          }
	        }, {
	          start: {
	            line: 131,
	            column: 4
	          },
	          end: {
	            line: 133,
	            column: 5
	          }
	        }],
	        line: 131
	      },
	      '14': {
	        loc: {
	          start: {
	            line: 131,
	            column: 8
	          },
	          end: {
	            line: 131,
	            column: 73
	          }
	        },
	        type: 'binary-expr',
	        locations: [{
	          start: {
	            line: 131,
	            column: 8
	          },
	          end: {
	            line: 131,
	            column: 35
	          }
	        }, {
	          start: {
	            line: 131,
	            column: 39
	          },
	          end: {
	            line: 131,
	            column: 73
	          }
	        }],
	        line: 131
	      },
	      '15': {
	        loc: {
	          start: {
	            line: 150,
	            column: 4
	          },
	          end: {
	            line: 153,
	            column: 5
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 150,
	            column: 4
	          },
	          end: {
	            line: 153,
	            column: 5
	          }
	        }, {
	          start: {
	            line: 150,
	            column: 4
	          },
	          end: {
	            line: 153,
	            column: 5
	          }
	        }],
	        line: 150
	      },
	      '16': {
	        loc: {
	          start: {
	            line: 172,
	            column: 11
	          },
	          end: {
	            line: 172,
	            column: 55
	          }
	        },
	        type: 'cond-expr',
	        locations: [{
	          start: {
	            line: 172,
	            column: 28
	          },
	          end: {
	            line: 172,
	            column: 39
	          }
	        }, {
	          start: {
	            line: 172,
	            column: 43
	          },
	          end: {
	            line: 172,
	            column: 55
	          }
	        }],
	        line: 172
	      },
	      '17': {
	        loc: {
	          start: {
	            line: 187,
	            column: 4
	          },
	          end: {
	            line: 190,
	            column: 5
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 187,
	            column: 4
	          },
	          end: {
	            line: 190,
	            column: 5
	          }
	        }, {
	          start: {
	            line: 187,
	            column: 4
	          },
	          end: {
	            line: 190,
	            column: 5
	          }
	        }],
	        line: 187
	      },
	      '18': {
	        loc: {
	          start: {
	            line: 208,
	            column: 4
	          },
	          end: {
	            line: 225,
	            column: 5
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 208,
	            column: 4
	          },
	          end: {
	            line: 225,
	            column: 5
	          }
	        }, {
	          start: {
	            line: 208,
	            column: 4
	          },
	          end: {
	            line: 225,
	            column: 5
	          }
	        }],
	        line: 208
	      },
	      '19': {
	        loc: {
	          start: {
	            line: 210,
	            column: 6
	          },
	          end: {
	            line: 218,
	            column: 7
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 210,
	            column: 6
	          },
	          end: {
	            line: 218,
	            column: 7
	          }
	        }, {
	          start: {
	            line: 210,
	            column: 6
	          },
	          end: {
	            line: 218,
	            column: 7
	          }
	        }],
	        line: 210
	      },
	      '20': {
	        loc: {
	          start: {
	            line: 211,
	            column: 15
	          },
	          end: {
	            line: 211,
	            column: 42
	          }
	        },
	        type: 'binary-expr',
	        locations: [{
	          start: {
	            line: 211,
	            column: 15
	          },
	          end: {
	            line: 211,
	            column: 28
	          }
	        }, {
	          start: {
	            line: 211,
	            column: 32
	          },
	          end: {
	            line: 211,
	            column: 42
	          }
	        }],
	        line: 211
	      },
	      '21': {
	        loc: {
	          start: {
	            line: 215,
	            column: 13
	          },
	          end: {
	            line: 218,
	            column: 7
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 215,
	            column: 13
	          },
	          end: {
	            line: 218,
	            column: 7
	          }
	        }, {
	          start: {
	            line: 215,
	            column: 13
	          },
	          end: {
	            line: 218,
	            column: 7
	          }
	        }],
	        line: 215
	      },
	      '22': {
	        loc: {
	          start: {
	            line: 238,
	            column: 4
	          },
	          end: {
	            line: 240,
	            column: 5
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 238,
	            column: 4
	          },
	          end: {
	            line: 240,
	            column: 5
	          }
	        }, {
	          start: {
	            line: 238,
	            column: 4
	          },
	          end: {
	            line: 240,
	            column: 5
	          }
	        }],
	        line: 238
	      },
	      '23': {
	        loc: {
	          start: {
	            line: 251,
	            column: 4
	          },
	          end: {
	            line: 253,
	            column: 5
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 251,
	            column: 4
	          },
	          end: {
	            line: 253,
	            column: 5
	          }
	        }, {
	          start: {
	            line: 251,
	            column: 4
	          },
	          end: {
	            line: 253,
	            column: 5
	          }
	        }],
	        line: 251
	      },
	      '24': {
	        loc: {
	          start: {
	            line: 269,
	            column: 4
	          },
	          end: {
	            line: 289,
	            column: 5
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 269,
	            column: 4
	          },
	          end: {
	            line: 289,
	            column: 5
	          }
	        }, {
	          start: {
	            line: 269,
	            column: 4
	          },
	          end: {
	            line: 289,
	            column: 5
	          }
	        }],
	        line: 269
	      },
	      '25': {
	        loc: {
	          start: {
	            line: 275,
	            column: 6
	          },
	          end: {
	            line: 288,
	            column: 7
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 275,
	            column: 6
	          },
	          end: {
	            line: 288,
	            column: 7
	          }
	        }, {
	          start: {
	            line: 275,
	            column: 6
	          },
	          end: {
	            line: 288,
	            column: 7
	          }
	        }],
	        line: 275
	      },
	      '26': {
	        loc: {
	          start: {
	            line: 275,
	            column: 10
	          },
	          end: {
	            line: 275,
	            column: 50
	          }
	        },
	        type: 'binary-expr',
	        locations: [{
	          start: {
	            line: 275,
	            column: 10
	          },
	          end: {
	            line: 275,
	            column: 23
	          }
	        }, {
	          start: {
	            line: 275,
	            column: 27
	          },
	          end: {
	            line: 275,
	            column: 50
	          }
	        }],
	        line: 275
	      },
	      '27': {
	        loc: {
	          start: {
	            line: 284,
	            column: 13
	          },
	          end: {
	            line: 288,
	            column: 7
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 284,
	            column: 13
	          },
	          end: {
	            line: 288,
	            column: 7
	          }
	        }, {
	          start: {
	            line: 284,
	            column: 13
	          },
	          end: {
	            line: 288,
	            column: 7
	          }
	        }],
	        line: 284
	      },
	      '28': {
	        loc: {
	          start: {
	            line: 284,
	            column: 17
	          },
	          end: {
	            line: 284,
	            column: 53
	          }
	        },
	        type: 'binary-expr',
	        locations: [{
	          start: {
	            line: 284,
	            column: 17
	          },
	          end: {
	            line: 284,
	            column: 37
	          }
	        }, {
	          start: {
	            line: 284,
	            column: 41
	          },
	          end: {
	            line: 284,
	            column: 53
	          }
	        }],
	        line: 284
	      },
	      '29': {
	        loc: {
	          start: {
	            line: 307,
	            column: 2
	          },
	          end: {
	            line: 315,
	            column: 3
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 307,
	            column: 2
	          },
	          end: {
	            line: 315,
	            column: 3
	          }
	        }, {
	          start: {
	            line: 307,
	            column: 2
	          },
	          end: {
	            line: 315,
	            column: 3
	          }
	        }],
	        line: 307
	      },
	      '30': {
	        loc: {
	          start: {
	            line: 310,
	            column: 6
	          },
	          end: {
	            line: 312,
	            column: 7
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 310,
	            column: 6
	          },
	          end: {
	            line: 312,
	            column: 7
	          }
	        }, {
	          start: {
	            line: 310,
	            column: 6
	          },
	          end: {
	            line: 312,
	            column: 7
	          }
	        }],
	        line: 310
	      },
	      '31': {
	        loc: {
	          start: {
	            line: 325,
	            column: 31
	          },
	          end: {
	            line: 325,
	            column: 126
	          }
	        },
	        type: 'binary-expr',
	        locations: [{
	          start: {
	            line: 325,
	            column: 31
	          },
	          end: {
	            line: 325,
	            column: 82
	          }
	        }, {
	          start: {
	            line: 325,
	            column: 86
	          },
	          end: {
	            line: 325,
	            column: 126
	          }
	        }],
	        line: 325
	      },
	      '32': {
	        loc: {
	          start: {
	            line: 327,
	            column: 4
	          },
	          end: {
	            line: 329,
	            column: 5
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 327,
	            column: 4
	          },
	          end: {
	            line: 329,
	            column: 5
	          }
	        }, {
	          start: {
	            line: 327,
	            column: 4
	          },
	          end: {
	            line: 329,
	            column: 5
	          }
	        }],
	        line: 327
	      },
	      '33': {
	        loc: {
	          start: {
	            line: 327,
	            column: 8
	          },
	          end: {
	            line: 327,
	            column: 44
	          }
	        },
	        type: 'binary-expr',
	        locations: [{
	          start: {
	            line: 327,
	            column: 8
	          },
	          end: {
	            line: 327,
	            column: 24
	          }
	        }, {
	          start: {
	            line: 327,
	            column: 28
	          },
	          end: {
	            line: 327,
	            column: 44
	          }
	        }],
	        line: 327
	      },
	      '34': {
	        loc: {
	          start: {
	            line: 331,
	            column: 4
	          },
	          end: {
	            line: 347,
	            column: 5
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 331,
	            column: 4
	          },
	          end: {
	            line: 347,
	            column: 5
	          }
	        }, {
	          start: {
	            line: 331,
	            column: 4
	          },
	          end: {
	            line: 347,
	            column: 5
	          }
	        }],
	        line: 331
	      },
	      '35': {
	        loc: {
	          start: {
	            line: 331,
	            column: 8
	          },
	          end: {
	            line: 331,
	            column: 73
	          }
	        },
	        type: 'binary-expr',
	        locations: [{
	          start: {
	            line: 331,
	            column: 8
	          },
	          end: {
	            line: 331,
	            column: 26
	          }
	        }, {
	          start: {
	            line: 331,
	            column: 30
	          },
	          end: {
	            line: 331,
	            column: 73
	          }
	        }],
	        line: 331
	      },
	      '36': {
	        loc: {
	          start: {
	            line: 334,
	            column: 6
	          },
	          end: {
	            line: 336,
	            column: 7
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 334,
	            column: 6
	          },
	          end: {
	            line: 336,
	            column: 7
	          }
	        }, {
	          start: {
	            line: 334,
	            column: 6
	          },
	          end: {
	            line: 336,
	            column: 7
	          }
	        }],
	        line: 334
	      },
	      '37': {
	        loc: {
	          start: {
	            line: 338,
	            column: 6
	          },
	          end: {
	            line: 346,
	            column: 7
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 338,
	            column: 6
	          },
	          end: {
	            line: 346,
	            column: 7
	          }
	        }, {
	          start: {
	            line: 338,
	            column: 6
	          },
	          end: {
	            line: 346,
	            column: 7
	          }
	        }],
	        line: 338
	      }
	    },
	    s: {
	      '0': 0,
	      '1': 0,
	      '2': 0,
	      '3': 0,
	      '4': 0,
	      '5': 0,
	      '6': 0,
	      '7': 0,
	      '8': 0,
	      '9': 0,
	      '10': 0,
	      '11': 0,
	      '12': 0,
	      '13': 0,
	      '14': 0,
	      '15': 0,
	      '16': 0,
	      '17': 0,
	      '18': 0,
	      '19': 0,
	      '20': 0,
	      '21': 0,
	      '22': 0,
	      '23': 0,
	      '24': 0,
	      '25': 0,
	      '26': 0,
	      '27': 0,
	      '28': 0,
	      '29': 0,
	      '30': 0,
	      '31': 0,
	      '32': 0,
	      '33': 0,
	      '34': 0,
	      '35': 0,
	      '36': 0,
	      '37': 0,
	      '38': 0,
	      '39': 0,
	      '40': 0,
	      '41': 0,
	      '42': 0,
	      '43': 0,
	      '44': 0,
	      '45': 0,
	      '46': 0,
	      '47': 0,
	      '48': 0,
	      '49': 0,
	      '50': 0,
	      '51': 0,
	      '52': 0,
	      '53': 0,
	      '54': 0,
	      '55': 0,
	      '56': 0,
	      '57': 0,
	      '58': 0,
	      '59': 0,
	      '60': 0,
	      '61': 0,
	      '62': 0,
	      '63': 0,
	      '64': 0,
	      '65': 0,
	      '66': 0,
	      '67': 0,
	      '68': 0,
	      '69': 0,
	      '70': 0,
	      '71': 0,
	      '72': 0,
	      '73': 0,
	      '74': 0,
	      '75': 0,
	      '76': 0,
	      '77': 0,
	      '78': 0,
	      '79': 0,
	      '80': 0,
	      '81': 0,
	      '82': 0,
	      '83': 0,
	      '84': 0,
	      '85': 0,
	      '86': 0,
	      '87': 0,
	      '88': 0,
	      '89': 0,
	      '90': 0,
	      '91': 0,
	      '92': 0,
	      '93': 0,
	      '94': 0,
	      '95': 0,
	      '96': 0,
	      '97': 0,
	      '98': 0,
	      '99': 0,
	      '100': 0,
	      '101': 0,
	      '102': 0,
	      '103': 0,
	      '104': 0,
	      '105': 0,
	      '106': 0,
	      '107': 0,
	      '108': 0,
	      '109': 0,
	      '110': 0,
	      '111': 0,
	      '112': 0,
	      '113': 0,
	      '114': 0,
	      '115': 0,
	      '116': 0,
	      '117': 0,
	      '118': 0
	    },
	    f: {
	      '0': 0,
	      '1': 0,
	      '2': 0,
	      '3': 0,
	      '4': 0,
	      '5': 0,
	      '6': 0,
	      '7': 0,
	      '8': 0,
	      '9': 0,
	      '10': 0,
	      '11': 0,
	      '12': 0,
	      '13': 0,
	      '14': 0,
	      '15': 0,
	      '16': 0,
	      '17': 0
	    },
	    b: {
	      '0': [0, 0],
	      '1': [0, 0],
	      '2': [0, 0],
	      '3': [0, 0],
	      '4': [0, 0],
	      '5': [0, 0],
	      '6': [0, 0],
	      '7': [0, 0],
	      '8': [0, 0],
	      '9': [0, 0],
	      '10': [0, 0],
	      '11': [0, 0],
	      '12': [0, 0],
	      '13': [0, 0],
	      '14': [0, 0],
	      '15': [0, 0],
	      '16': [0, 0],
	      '17': [0, 0],
	      '18': [0, 0],
	      '19': [0, 0],
	      '20': [0, 0],
	      '21': [0, 0],
	      '22': [0, 0],
	      '23': [0, 0],
	      '24': [0, 0],
	      '25': [0, 0],
	      '26': [0, 0],
	      '27': [0, 0],
	      '28': [0, 0],
	      '29': [0, 0],
	      '30': [0, 0],
	      '31': [0, 0],
	      '32': [0, 0],
	      '33': [0, 0],
	      '34': [0, 0],
	      '35': [0, 0],
	      '36': [0, 0],
	      '37': [0, 0]
	    },
	    _coverageSchema: '332fd63041d2c1bcb487cc26dd0d5f7d97098a6c'
	  },
	      coverage = global[gcv] || (global[gcv] = {});

	  if (coverage[path] && coverage[path].hash === hash) {
	    return coverage[path];
	  }

	  coverageData.hash = hash;
	  return coverage[path] = coverageData;
	}();
	var defaults = (cov_1b8ekuqb3b.s[0]++, {
	  align: 'top-left',
	  class: '',
	  content: 'This overlay will show up while the video is playing',
	  debug: false,
	  showBackground: true,
	  attachToControlBar: false,
	  overlays: [{
	    start: 'playing',
	    end: 'paused'
	  }]
	});
	var Component = (cov_1b8ekuqb3b.s[1]++, videojs.getComponent('Component'));
	var dom = (cov_1b8ekuqb3b.s[2]++, (cov_1b8ekuqb3b.b[0][0]++, videojs.dom) || (cov_1b8ekuqb3b.b[0][1]++, videojs));
	var registerPlugin = (cov_1b8ekuqb3b.s[3]++, (cov_1b8ekuqb3b.b[1][0]++, videojs.registerPlugin) || (cov_1b8ekuqb3b.b[1][1]++, videojs.plugin));
	cov_1b8ekuqb3b.s[4]++;

	var isNumber = function isNumber(n) {
	  cov_1b8ekuqb3b.f[0]++;
	  cov_1b8ekuqb3b.s[5]++;
	  return (cov_1b8ekuqb3b.b[2][0]++, typeof n === 'number') && (cov_1b8ekuqb3b.b[2][1]++, n === n);
	};

	cov_1b8ekuqb3b.s[6]++;

	var hasNoWhitespace = function hasNoWhitespace(s) {
	  cov_1b8ekuqb3b.f[1]++;
	  cov_1b8ekuqb3b.s[7]++;
	  return (cov_1b8ekuqb3b.b[3][0]++, typeof s === 'string') && (cov_1b8ekuqb3b.b[3][1]++, /^\S+$/.test(s));
	};

	var Overlay =
	/*#__PURE__*/
	function (_Component) {
	  _inheritsLoose(Overlay, _Component);

	  function Overlay(player, options) {
	    var _this;

	    cov_1b8ekuqb3b.f[2]++;
	    cov_1b8ekuqb3b.s[8]++;
	    _this = _Component.call(this, player, options) || this;
	    cov_1b8ekuqb3b.s[9]++;
	    ['start', 'end'].forEach(function (key) {
	      cov_1b8ekuqb3b.f[3]++;
	      var value = (cov_1b8ekuqb3b.s[10]++, _this.options_[key]);
	      cov_1b8ekuqb3b.s[11]++;

	      if (isNumber(value)) {
	        cov_1b8ekuqb3b.b[4][0]++;
	        cov_1b8ekuqb3b.s[12]++;
	        _this[key + 'Event_'] = 'timeupdate';
	      } else {
	        cov_1b8ekuqb3b.b[4][1]++;
	        cov_1b8ekuqb3b.s[13]++;

	        if (hasNoWhitespace(value)) {
	          cov_1b8ekuqb3b.b[5][0]++;
	          cov_1b8ekuqb3b.s[14]++;
	          _this[key + 'Event_'] = value;
	        } else {
	          cov_1b8ekuqb3b.b[5][1]++;
	          cov_1b8ekuqb3b.s[15]++;

	          if (key === 'start') {
	            cov_1b8ekuqb3b.b[6][0]++;
	            cov_1b8ekuqb3b.s[16]++;
	            throw new Error('invalid "start" option; expected number or string');
	          } else {
	            cov_1b8ekuqb3b.b[6][1]++;
	          }
	        }
	      }
	    });
	    cov_1b8ekuqb3b.s[17]++;
	    ['endListener_', 'rewindListener_', 'startListener_'].forEach(function (name$$1) {
	      cov_1b8ekuqb3b.f[4]++;
	      cov_1b8ekuqb3b.s[18]++;

	      _this[name$$1] = function (e) {
	        cov_1b8ekuqb3b.f[5]++;
	        cov_1b8ekuqb3b.s[19]++;
	        return Overlay.prototype[name$$1].call(_assertThisInitialized(_assertThisInitialized(_this)), e);
	      };
	    });
	    cov_1b8ekuqb3b.s[20]++;

	    if (_this.startEvent_ === 'timeupdate') {
	      cov_1b8ekuqb3b.b[7][0]++;
	      cov_1b8ekuqb3b.s[21]++;

	      _this.on(player, 'timeupdate', _this.rewindListener_);
	    } else {
	      cov_1b8ekuqb3b.b[7][1]++;
	    }

	    cov_1b8ekuqb3b.s[22]++;

	    _this.debug("created, listening to \"" + _this.startEvent_ + "\" for \"start\" and \"" + ((cov_1b8ekuqb3b.b[8][0]++, _this.endEvent_) || (cov_1b8ekuqb3b.b[8][1]++, 'nothing')) + "\" for \"end\"");

	    cov_1b8ekuqb3b.s[23]++;

	    _this.hide();

	    return _this;
	  }

	  var _proto = Overlay.prototype;

	  _proto.createEl = function createEl() {
	    cov_1b8ekuqb3b.f[6]++;
	    var options = (cov_1b8ekuqb3b.s[24]++, this.options_);
	    var content = (cov_1b8ekuqb3b.s[25]++, options.content);
	    var background = (cov_1b8ekuqb3b.s[26]++, options.showBackground ? (cov_1b8ekuqb3b.b[9][0]++, 'vjs-overlay-background') : (cov_1b8ekuqb3b.b[9][1]++, 'vjs-overlay-no-background'));
	    var el = (cov_1b8ekuqb3b.s[27]++, dom.createEl('div', {
	      className: "\n        vjs-overlay\n        vjs-overlay-" + options.align + "\n        " + options.class + "\n        " + background + "\n        vjs-hidden\n      "
	    }));
	    cov_1b8ekuqb3b.s[28]++;

	    if (typeof content === 'string') {
	      cov_1b8ekuqb3b.b[10][0]++;
	      cov_1b8ekuqb3b.s[29]++;
	      el.innerHTML = content;
	    } else {
	      cov_1b8ekuqb3b.b[10][1]++;
	      cov_1b8ekuqb3b.s[30]++;

	      if (content instanceof window_1.DocumentFragment) {
	        cov_1b8ekuqb3b.b[11][0]++;
	        cov_1b8ekuqb3b.s[31]++;
	        el.appendChild(content);
	      } else {
	        cov_1b8ekuqb3b.b[11][1]++;
	        cov_1b8ekuqb3b.s[32]++;
	        dom.appendContent(el, content);
	      }
	    }

	    cov_1b8ekuqb3b.s[33]++;
	    return el;
	  };

	  _proto.debug = function debug() {
	    cov_1b8ekuqb3b.f[7]++;
	    cov_1b8ekuqb3b.s[34]++;

	    if (!this.options_.debug) {
	      cov_1b8ekuqb3b.b[12][0]++;
	      cov_1b8ekuqb3b.s[35]++;
	      return;
	    } else {
	      cov_1b8ekuqb3b.b[12][1]++;
	    }

	    var log = (cov_1b8ekuqb3b.s[36]++, videojs.log);
	    var fn = (cov_1b8ekuqb3b.s[37]++, log);
	    cov_1b8ekuqb3b.s[38]++;

	    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    if ((cov_1b8ekuqb3b.b[14][0]++, log.hasOwnProperty(args[0])) && (cov_1b8ekuqb3b.b[14][1]++, typeof log[args[0]] === 'function')) {
	      cov_1b8ekuqb3b.b[13][0]++;
	      cov_1b8ekuqb3b.s[39]++;
	      fn = log[args.shift()];
	    } else {
	      cov_1b8ekuqb3b.b[13][1]++;
	    }

	    cov_1b8ekuqb3b.s[40]++;
	    fn.apply(void 0, ["overlay#" + this.id() + ": "].concat(args));
	  };

	  _proto.hide = function hide() {
	    cov_1b8ekuqb3b.f[8]++;
	    cov_1b8ekuqb3b.s[41]++;

	    _Component.prototype.hide.call(this);

	    cov_1b8ekuqb3b.s[42]++;
	    this.debug('hidden');
	    cov_1b8ekuqb3b.s[43]++;
	    this.debug("bound `startListener_` to \"" + this.startEvent_ + "\"");
	    cov_1b8ekuqb3b.s[44]++;

	    if (this.endEvent_) {
	      cov_1b8ekuqb3b.b[15][0]++;
	      cov_1b8ekuqb3b.s[45]++;
	      this.debug("unbound `endListener_` from \"" + this.endEvent_ + "\"");
	      cov_1b8ekuqb3b.s[46]++;
	      this.off(this.player(), this.endEvent_, this.endListener_);
	    } else {
	      cov_1b8ekuqb3b.b[15][1]++;
	    }

	    cov_1b8ekuqb3b.s[47]++;
	    this.on(this.player(), this.startEvent_, this.startListener_);
	    cov_1b8ekuqb3b.s[48]++;
	    return this;
	  };

	  _proto.shouldHide_ = function shouldHide_(time, type) {
	    cov_1b8ekuqb3b.f[9]++;
	    var end = (cov_1b8ekuqb3b.s[49]++, this.options_.end);
	    cov_1b8ekuqb3b.s[50]++;
	    return isNumber(end) ? (cov_1b8ekuqb3b.b[16][0]++, time >= end) : (cov_1b8ekuqb3b.b[16][1]++, end === type);
	  };

	  _proto.show = function show() {
	    cov_1b8ekuqb3b.f[10]++;
	    cov_1b8ekuqb3b.s[51]++;

	    _Component.prototype.show.call(this);

	    cov_1b8ekuqb3b.s[52]++;
	    this.off(this.player(), this.startEvent_, this.startListener_);
	    cov_1b8ekuqb3b.s[53]++;
	    this.debug('shown');
	    cov_1b8ekuqb3b.s[54]++;
	    this.debug("unbound `startListener_` from \"" + this.startEvent_ + "\"");
	    cov_1b8ekuqb3b.s[55]++;

	    if (this.endEvent_) {
	      cov_1b8ekuqb3b.b[17][0]++;
	      cov_1b8ekuqb3b.s[56]++;
	      this.debug("bound `endListener_` to \"" + this.endEvent_ + "\"");
	      cov_1b8ekuqb3b.s[57]++;
	      this.on(this.player(), this.endEvent_, this.endListener_);
	    } else {
	      cov_1b8ekuqb3b.b[17][1]++;
	    }

	    cov_1b8ekuqb3b.s[58]++;
	    return this;
	  };

	  _proto.shouldShow_ = function shouldShow_(time, type) {
	    cov_1b8ekuqb3b.f[11]++;
	    var start = (cov_1b8ekuqb3b.s[59]++, this.options_.start);
	    var end = (cov_1b8ekuqb3b.s[60]++, this.options_.end);
	    cov_1b8ekuqb3b.s[61]++;

	    if (isNumber(start)) {
	      cov_1b8ekuqb3b.b[18][0]++;
	      cov_1b8ekuqb3b.s[62]++;

	      if (isNumber(end)) {
	        cov_1b8ekuqb3b.b[19][0]++;
	        cov_1b8ekuqb3b.s[63]++;
	        return (cov_1b8ekuqb3b.b[20][0]++, time >= start) && (cov_1b8ekuqb3b.b[20][1]++, time < end);
	      } else {
	        cov_1b8ekuqb3b.b[19][1]++;
	        cov_1b8ekuqb3b.s[64]++;

	        if (!this.hasShownSinceSeek_) {
	          cov_1b8ekuqb3b.b[21][0]++;
	          cov_1b8ekuqb3b.s[65]++;
	          this.hasShownSinceSeek_ = true;
	          cov_1b8ekuqb3b.s[66]++;
	          return time >= start;
	        } else {
	          cov_1b8ekuqb3b.b[21][1]++;
	        }
	      }

	      cov_1b8ekuqb3b.s[67]++;
	      return Math.floor(time) === start;
	    } else {
	      cov_1b8ekuqb3b.b[18][1]++;
	    }

	    cov_1b8ekuqb3b.s[68]++;
	    return start === type;
	  };

	  _proto.startListener_ = function startListener_(e) {
	    cov_1b8ekuqb3b.f[12]++;
	    var time = (cov_1b8ekuqb3b.s[69]++, this.player().currentTime());
	    cov_1b8ekuqb3b.s[70]++;

	    if (this.shouldShow_(time, e.type)) {
	      cov_1b8ekuqb3b.b[22][0]++;
	      cov_1b8ekuqb3b.s[71]++;
	      this.show();
	    } else {
	      cov_1b8ekuqb3b.b[22][1]++;
	    }
	  };

	  _proto.endListener_ = function endListener_(e) {
	    cov_1b8ekuqb3b.f[13]++;
	    var time = (cov_1b8ekuqb3b.s[72]++, this.player().currentTime());
	    cov_1b8ekuqb3b.s[73]++;

	    if (this.shouldHide_(time, e.type)) {
	      cov_1b8ekuqb3b.b[23][0]++;
	      cov_1b8ekuqb3b.s[74]++;
	      this.hide();
	    } else {
	      cov_1b8ekuqb3b.b[23][1]++;
	    }
	  };

	  _proto.rewindListener_ = function rewindListener_(e) {
	    cov_1b8ekuqb3b.f[14]++;
	    var time = (cov_1b8ekuqb3b.s[75]++, this.player().currentTime());
	    var previous = (cov_1b8ekuqb3b.s[76]++, this.previousTime_);
	    var start = (cov_1b8ekuqb3b.s[77]++, this.options_.start);
	    var end = (cov_1b8ekuqb3b.s[78]++, this.options_.end);
	    cov_1b8ekuqb3b.s[79]++;

	    if (time < previous) {
	      cov_1b8ekuqb3b.b[24][0]++;
	      cov_1b8ekuqb3b.s[80]++;
	      this.debug('rewind detected');
	      cov_1b8ekuqb3b.s[81]++;

	      if ((cov_1b8ekuqb3b.b[26][0]++, isNumber(end)) && (cov_1b8ekuqb3b.b[26][1]++, !this.shouldShow_(time))) {
	        cov_1b8ekuqb3b.b[25][0]++;
	        cov_1b8ekuqb3b.s[82]++;
	        this.debug("hiding; " + end + " is an integer and overlay should not show at this time");
	        cov_1b8ekuqb3b.s[83]++;
	        this.hasShownSinceSeek_ = false;
	        cov_1b8ekuqb3b.s[84]++;
	        this.hide();
	      } else {
	        cov_1b8ekuqb3b.b[25][1]++;
	        cov_1b8ekuqb3b.s[85]++;

	        if ((cov_1b8ekuqb3b.b[28][0]++, hasNoWhitespace(end)) && (cov_1b8ekuqb3b.b[28][1]++, time < start)) {
	          cov_1b8ekuqb3b.b[27][0]++;
	          cov_1b8ekuqb3b.s[86]++;
	          this.debug("hiding; show point (" + start + ") is before now (" + time + ") and end point (" + end + ") is an event");
	          cov_1b8ekuqb3b.s[87]++;
	          this.hasShownSinceSeek_ = false;
	          cov_1b8ekuqb3b.s[88]++;
	          this.hide();
	        } else {
	          cov_1b8ekuqb3b.b[27][1]++;
	        }
	      }
	    } else {
	      cov_1b8ekuqb3b.b[24][1]++;
	    }

	    cov_1b8ekuqb3b.s[89]++;
	    this.previousTime_ = time;
	  };

	  return Overlay;
	}(Component);

	cov_1b8ekuqb3b.s[90]++;
	videojs.registerComponent('Overlay', Overlay);
	cov_1b8ekuqb3b.s[91]++;

	var plugin = function plugin(options) {
	  var _this2 = this;

	  cov_1b8ekuqb3b.f[15]++;
	  var settings = (cov_1b8ekuqb3b.s[92]++, videojs.mergeOptions(defaults, options));
	  cov_1b8ekuqb3b.s[93]++;

	  if (Array.isArray(this.overlays_)) {
	    cov_1b8ekuqb3b.b[29][0]++;
	    cov_1b8ekuqb3b.s[94]++;
	    this.overlays_.forEach(function (overlay) {
	      cov_1b8ekuqb3b.f[16]++;
	      cov_1b8ekuqb3b.s[95]++;

	      _this2.removeChild(overlay);

	      cov_1b8ekuqb3b.s[96]++;

	      if (_this2.controlBar) {
	        cov_1b8ekuqb3b.b[30][0]++;
	        cov_1b8ekuqb3b.s[97]++;

	        _this2.controlBar.removeChild(overlay);
	      } else {
	        cov_1b8ekuqb3b.b[30][1]++;
	      }

	      cov_1b8ekuqb3b.s[98]++;
	      overlay.dispose();
	    });
	  } else {
	    cov_1b8ekuqb3b.b[29][1]++;
	  }

	  var overlays = (cov_1b8ekuqb3b.s[99]++, settings.overlays);
	  cov_1b8ekuqb3b.s[100]++;
	  delete settings.overlays;
	  cov_1b8ekuqb3b.s[101]++;
	  this.overlays_ = overlays.map(function (o) {
	    cov_1b8ekuqb3b.f[17]++;
	    var mergeOptions = (cov_1b8ekuqb3b.s[102]++, videojs.mergeOptions(settings, o));
	    var attachToControlBar = (cov_1b8ekuqb3b.s[103]++, (cov_1b8ekuqb3b.b[31][0]++, typeof mergeOptions.attachToControlBar === 'string') || (cov_1b8ekuqb3b.b[31][1]++, mergeOptions.attachToControlBar === true));
	    cov_1b8ekuqb3b.s[104]++;

	    if ((cov_1b8ekuqb3b.b[33][0]++, !_this2.controls()) || (cov_1b8ekuqb3b.b[33][1]++, !_this2.controlBar)) {
	      cov_1b8ekuqb3b.b[32][0]++;
	      cov_1b8ekuqb3b.s[105]++;
	      return _this2.addChild('overlay', mergeOptions);
	    } else {
	      cov_1b8ekuqb3b.b[32][1]++;
	    }

	    cov_1b8ekuqb3b.s[106]++;

	    if ((cov_1b8ekuqb3b.b[35][0]++, attachToControlBar) && (cov_1b8ekuqb3b.b[35][1]++, mergeOptions.align.indexOf('bottom') !== -1)) {
	      cov_1b8ekuqb3b.b[34][0]++;
	      var referenceChild = (cov_1b8ekuqb3b.s[107]++, _this2.controlBar.children()[0]);
	      cov_1b8ekuqb3b.s[108]++;

	      if (_this2.controlBar.getChild(mergeOptions.attachToControlBar) !== undefined) {
	        cov_1b8ekuqb3b.b[36][0]++;
	        cov_1b8ekuqb3b.s[109]++;
	        referenceChild = _this2.controlBar.getChild(mergeOptions.attachToControlBar);
	      } else {
	        cov_1b8ekuqb3b.b[36][1]++;
	      }

	      cov_1b8ekuqb3b.s[110]++;

	      if (referenceChild) {
	        cov_1b8ekuqb3b.b[37][0]++;
	        var controlBarChild = (cov_1b8ekuqb3b.s[111]++, _this2.controlBar.addChild('overlay', mergeOptions));
	        cov_1b8ekuqb3b.s[112]++;

	        _this2.controlBar.el().insertBefore(controlBarChild.el(), referenceChild.el());

	        cov_1b8ekuqb3b.s[113]++;
	        return controlBarChild;
	      } else {
	        cov_1b8ekuqb3b.b[37][1]++;
	      }
	    } else {
	      cov_1b8ekuqb3b.b[34][1]++;
	    }

	    var playerChild = (cov_1b8ekuqb3b.s[114]++, _this2.addChild('overlay', mergeOptions));
	    cov_1b8ekuqb3b.s[115]++;

	    _this2.el().insertBefore(playerChild.el(), _this2.controlBar.el());

	    cov_1b8ekuqb3b.s[116]++;
	    return playerChild;
	  });
	};

	cov_1b8ekuqb3b.s[117]++;
	plugin.VERSION = version;
	cov_1b8ekuqb3b.s[118]++;
	registerPlugin('overlay', plugin);

	var Player = videojs.getComponent('Player');
	var dom$1 = videojs.dom || videojs;
	QUnit.test('the environment is sane', function (assert) {
	  assert.strictEqual(typeof Array.isArray, 'function', 'es5 exists');
	  assert.strictEqual(typeof sinon, 'object', 'sinon exists');
	  assert.strictEqual(typeof videojs, 'function', 'videojs exists');
	  assert.strictEqual(typeof plugin, 'function', 'plugin is a function');
	});
	QUnit.module('videojs-overlay', {
	  beforeEach: function beforeEach() {
	    var _this = this;

	    // Mock the environment's timers because certain things - particularly
	    // player readiness - are asynchronous in video.js 5. This MUST come
	    // before any player is created; otherwise, timers could get created
	    // with the actual timer methods!
	    this.clock = sinon.useFakeTimers();
	    this.fixture = document_1.getElementById('qunit-fixture');
	    this.video = document_1.createElement('video');
	    this.video.controls = true;
	    this.fixture.appendChild(this.video);
	    this.player = videojs(this.video); // Simulate the video element playing to a specific time and stub
	    // the `currentTime` method of the player to return this.

	    this.currentTime = 0;

	    this.player.currentTime = function () {
	      return _this.currentTime;
	    };

	    this.updateTime = function (seconds) {
	      _this.currentTime = seconds;

	      _this.player.trigger('timeupdate');
	    };

	    this.assertOverlayCount = function (assert, expected) {
	      var overlays = Array.prototype.filter.call(_this.player.$$('.vjs-overlay'), function (el) {
	        return !dom$1.hasClass(el, 'vjs-hidden');
	      });
	      var actual = overlays ? overlays.length : 0;
	      var one = expected === 1;
	      var msg = expected + " overlay" + (one ? '' : 's') + " exist" + (one ? 's' : '');
	      assert.strictEqual(actual, expected, msg);
	    };
	  },
	  afterEach: function afterEach() {
	    this.player.dispose();
	    this.clock.restore();
	  }
	});
	QUnit.test('registers itself with video.js', function (assert) {
	  assert.expect(2);
	  assert.strictEqual(typeof Player.prototype.overlay, 'function', 'videojs-overlay plugin was registered');
	  assert.ok(videojs.getComponent('Overlay'), 'the Overlay component was registered');
	});
	QUnit.test('does not display overlays when none are configured', function (assert) {
	  assert.expect(1);
	  this.player.overlay({
	    overlays: []
	  });
	  this.assertOverlayCount(assert, 0);
	});
	QUnit.test('can be triggered and dismissed by events', function (assert) {
	  assert.expect(3);
	  this.player.overlay({
	    overlays: [{
	      start: 'custom-start',
	      end: 'custom-end'
	    }]
	  });
	  this.assertOverlayCount(assert, 0);
	  this.player.trigger('custom-start');
	  this.assertOverlayCount(assert, 1);
	  this.player.trigger('custom-end');
	  this.assertOverlayCount(assert, 0);
	});
	QUnit.test('can be triggered for time intervals', function (assert) {
	  assert.expect(7);
	  this.player.overlay({
	    overlays: [{
	      start: 5,
	      end: 10
	    }]
	  });
	  this.updateTime(4);
	  this.assertOverlayCount(assert, 0);
	  this.updateTime(5);
	  this.assertOverlayCount(assert, 1);
	  this.updateTime(7.5);
	  this.assertOverlayCount(assert, 1);
	  this.updateTime(10);
	  this.assertOverlayCount(assert, 0);
	  this.updateTime(11);
	  this.assertOverlayCount(assert, 0);
	  this.updateTime(6);
	  this.assertOverlayCount(assert, 1);
	  this.updateTime(12);
	  this.assertOverlayCount(assert, 0);
	});
	QUnit.test('shows multiple overlays simultaneously', function (assert) {
	  assert.expect(4);
	  this.player.overlay({
	    overlays: [{
	      start: 3,
	      end: 10
	    }, {
	      start: 'playing',
	      end: 'ended'
	    }]
	  });
	  this.updateTime(4);
	  this.assertOverlayCount(assert, 1);
	  this.player.trigger('playing');
	  this.assertOverlayCount(assert, 2);
	  this.player.trigger('ended');
	  this.assertOverlayCount(assert, 1);
	  this.updateTime(11);
	  this.assertOverlayCount(assert, 0);
	});
	QUnit.test('the content of overlays can be specified as an HTML string', function (assert) {
	  assert.expect(1);
	  var innerHTML = '<p>overlay <a href="#">text</a></p>';
	  this.player.overlay({
	    content: innerHTML,
	    overlays: [{
	      start: 'playing',
	      end: 'ended'
	    }]
	  });
	  this.player.trigger('playing');
	  assert.strictEqual(this.player.$('.vjs-overlay').innerHTML, innerHTML, 'innerHTML matched');
	});
	QUnit.test('an element can be used as the content of overlays', function (assert) {
	  assert.expect(1);
	  var content = document_1.createElement('p');
	  content.innerHTML = 'this is some text';
	  this.player.overlay({
	    content: content,
	    overlays: [{
	      start: 5,
	      end: 10
	    }]
	  });
	  this.updateTime(5);
	  assert.strictEqual(this.player.$('.vjs-overlay p'), content, 'sets the content element');
	});
	QUnit.test('a DocumentFragment can be used as the content of overlays', function (assert) {
	  assert.expect(1);
	  var fragment = document_1.createDocumentFragment();
	  var br = document_1.createElement('br');
	  fragment.appendChild(br);
	  this.player.overlay({
	    content: fragment,
	    overlays: [{
	      start: 'showoverlay',
	      end: 'hideoverlay'
	    }]
	  });
	  this.player.trigger('showoverlay');
	  assert.strictEqual(this.player.$('.vjs-overlay br'), br, 'sets the content fragment');
	});
	QUnit.test('allows content to be specified per overlay', function (assert) {
	  assert.expect(5);
	  var text = '<b>some text</b>';
	  var html = '<p>overlay <a href="#">text</a></p>';
	  var element = document_1.createElement('i');
	  var fragment = document_1.createDocumentFragment();
	  fragment.appendChild(document_1.createElement('img'));
	  this.player.overlay({
	    content: text,
	    overlays: [{
	      start: 0,
	      end: 1
	    }, {
	      content: html,
	      start: 0,
	      end: 1
	    }, {
	      content: element,
	      start: 0,
	      end: 1
	    }, {
	      content: fragment,
	      start: 0,
	      end: 1
	    }]
	  });
	  this.updateTime(0);
	  this.assertOverlayCount(assert, 4);
	  assert.strictEqual(this.player.$$('.vjs-overlay b').length, 1, 'shows a default overlay');
	  assert.strictEqual(this.player.$$('.vjs-overlay p').length, 1, 'shows an HTML string');
	  assert.strictEqual(this.player.$$('.vjs-overlay i').length, 1, 'shows a DOM element');
	  assert.strictEqual(this.player.$$('.vjs-overlay img').length, 1, 'shows a document fragment');
	});
	QUnit.test('allows css class to be specified per overlay', function (assert) {
	  assert.expect(3);
	  var text = '<b>some text</b>';
	  var fragment = document_1.createDocumentFragment();
	  fragment.appendChild(document_1.createElement('img'));
	  this.player.overlay({
	    content: text,
	    overlays: [{
	      class: 'first-class-overlay',
	      start: 0,
	      end: 1
	    }, {
	      class: 'second-class-overlay',
	      start: 0,
	      end: 1
	    }, {
	      start: 0,
	      end: 1
	    }]
	  });
	  this.updateTime(0);
	  this.assertOverlayCount(assert, 3);
	  assert.strictEqual(this.player.$$('.first-class-overlay').length, 1, 'shows an overlay with a custom class');
	  assert.strictEqual(this.player.$$('.second-class-overlay').length, 1, 'shows an overlay with a different custom class');
	});
	QUnit.test('does not double add overlays that are triggered twice', function (assert) {
	  assert.expect(1);
	  this.player.overlay({
	    overlays: [{
	      start: 'start',
	      end: 'end'
	    }]
	  });
	  this.player.trigger('start');
	  this.player.trigger('start');
	  this.assertOverlayCount(assert, 1);
	});
	QUnit.test('does not double remove overlays that are triggered twice', function (assert) {
	  assert.expect(1);
	  this.player.overlay({
	    overlays: [{
	      start: 'start',
	      end: 'end'
	    }]
	  });
	  this.player.trigger('start');
	  this.player.trigger('end');
	  this.player.trigger('end');
	  this.assertOverlayCount(assert, 0);
	});
	QUnit.test('displays overlays that mix event and playback time triggers', function (assert) {
	  assert.expect(4);
	  this.player.overlay({
	    overlays: [{
	      start: 'start',
	      end: 10
	    }, {
	      start: 5,
	      end: 'end'
	    }]
	  });
	  this.player.trigger('start');
	  this.assertOverlayCount(assert, 1);
	  this.updateTime(6);
	  this.assertOverlayCount(assert, 2);
	  this.updateTime(10);
	  this.assertOverlayCount(assert, 1);
	  this.player.trigger('end');
	  this.assertOverlayCount(assert, 0);
	});
	QUnit.test('shows mixed trigger overlays once per seek', function (assert) {
	  assert.expect(6);
	  this.player.overlay({
	    overlays: [{
	      start: 1,
	      end: 'pause'
	    }]
	  });
	  this.updateTime(1);
	  this.assertOverlayCount(assert, 1);
	  this.player.trigger('pause');
	  this.assertOverlayCount(assert, 0);
	  this.updateTime(2);
	  this.assertOverlayCount(assert, 0);
	  this.updateTime(1);
	  this.assertOverlayCount(assert, 1);
	  this.player.trigger('pause');
	  this.assertOverlayCount(assert, 0);
	  this.updateTime(2);
	  this.assertOverlayCount(assert, 0);
	});
	QUnit.test('applies simple alignment class names', function (assert) {
	  assert.expect(4);
	  this.player.overlay({
	    overlays: [{
	      start: 'start',
	      align: 'top'
	    }, {
	      start: 'start',
	      align: 'left'
	    }, {
	      start: 'start',
	      align: 'right'
	    }, {
	      start: 'start',
	      align: 'bottom'
	    }]
	  });
	  this.player.trigger('start');
	  assert.ok(this.player.$('.vjs-overlay.vjs-overlay-top'), 'applies top class');
	  assert.ok(this.player.$('.vjs-overlay.vjs-overlay-right'), 'applies right class');
	  assert.ok(this.player.$('.vjs-overlay.vjs-overlay-bottom'), 'applies bottom class');
	  assert.ok(this.player.$('.vjs-overlay.vjs-overlay-left'), 'applies left class');
	});
	QUnit.test('applies compound alignment class names', function (assert) {
	  assert.expect(4);
	  this.player.overlay({
	    overlays: [{
	      start: 'start',
	      align: 'top-left'
	    }, {
	      start: 'start',
	      align: 'top-right'
	    }, {
	      start: 'start',
	      align: 'bottom-left'
	    }, {
	      start: 'start',
	      align: 'bottom-right'
	    }]
	  });
	  this.player.trigger('start');
	  assert.ok(this.player.$('.vjs-overlay.vjs-overlay-top-left'), 'applies top class');
	  assert.ok(this.player.$('.vjs-overlay.vjs-overlay-top-right'), 'applies right class');
	  assert.ok(this.player.$('.vjs-overlay.vjs-overlay-bottom-left'), 'applies bottom class');
	  assert.ok(this.player.$('.vjs-overlay.vjs-overlay-bottom-right'), 'applies left class');
	});
	QUnit.test('removes time based overlays if the user seeks backward', function (assert) {
	  assert.expect(2);
	  this.player.overlay({
	    overlays: [{
	      start: 5,
	      end: 10
	    }]
	  });
	  this.updateTime(6);
	  this.assertOverlayCount(assert, 1);
	  this.updateTime(4);
	  this.assertOverlayCount(assert, 0);
	});
	QUnit.test('applies background styling when showBackground is true', function (assert) {
	  assert.expect(1);
	  this.player.overlay({
	    overlays: [{
	      start: 'start',
	      showBackground: true
	    }]
	  });
	  this.player.trigger('start');
	  assert.ok(this.player.$('.vjs-overlay.vjs-overlay-background'), 'applies background styling');
	});
	QUnit.test('doesn\'t apply background when showBackground is false', function (assert) {
	  assert.expect(1);
	  this.player.overlay({
	    overlays: [{
	      start: 'start',
	      showBackground: false
	    }]
	  });
	  this.player.trigger('start');
	  assert.notOk(this.player.$('.vjs-overlay.vjs-overlay-background'), 'does not apply background styling');
	});
	QUnit.test('attaches bottom aligned overlays to the controlBar', function (assert) {
	  assert.expect(4);
	  this.player.overlay({
	    attachToControlBar: true,
	    overlays: [{
	      start: 'start',
	      align: 'bottom-left'
	    }, {
	      start: 'start',
	      align: 'bottom'
	    }, {
	      start: 'start',
	      align: 'bottom-right'
	    }, {
	      start: 'start',
	      align: 'top-right'
	    }]
	  });
	  this.player.trigger('start');
	  assert.ok(this.player.controlBar.$('.vjs-overlay.vjs-overlay-bottom-left'), 'bottom-left attaches to control bar');
	  assert.ok(this.player.controlBar.$('.vjs-overlay.vjs-overlay-bottom'), 'bottom attaches to control bar');
	  assert.ok(this.player.controlBar.$('.vjs-overlay.vjs-overlay-bottom-right'), 'bottom-right attaches to control bar');
	  assert.notOk(this.player.controlBar.$('.vjs-overlay.vjs-overlay-top-right'), 'top-right is not attached to control bar');
	});
	QUnit.test('attach only to player when attachToControlbar is false', function (assert) {
	  assert.expect(2);
	  this.player.overlay({
	    attachToControlBar: false,
	    overlays: [{
	      start: 'start',
	      align: 'bottom-left'
	    }, {
	      start: 'start',
	      align: 'bottom'
	    }]
	  });
	  assert.notOk(this.player.controlBar.$('.vjs-overlay.vjs-overlay-bottom-left'), 'bottom-left is not attached to control bar');
	  assert.notOk(this.player.controlBar.$('.vjs-overlay.vjs-overlay-bottom'), 'bottom is not attached to control bar');
	});
	QUnit.test('can deinitialize the plugin on reinitialization', function (assert) {
	  assert.expect(3);
	  this.player.overlay({
	    attachToControlBar: true,
	    overlays: [{
	      start: 'start',
	      align: 'bottom-left'
	    }, {
	      start: 'start',
	      align: 'top-right'
	    }]
	  });
	  this.player.overlay({
	    overlays: [{
	      start: 'start',
	      align: 'top-left'
	    }]
	  });
	  assert.notOk(this.player.$('.vjs-overlay.vjs-overlay-bottom-left'), 'previous bottom-left aligned overlay removed');
	  assert.notOk(this.player.$('.vjs-overlay.vjs-overlay-top-right'), 'previous top-right aligned overlay removed');
	  assert.ok(this.player.$('.vjs-overlay.vjs-overlay-top-left'), 'new top-left overlay added');
	});
	QUnit.test('attach bottom overlay as first child when attachToControlBar is invalid component', function (assert) {
	  assert.expect(1);
	  this.player.overlay({
	    attachToControlBar: 'InvalidComponent',
	    overlays: [{
	      start: 'start',
	      align: 'bottom'
	    }]
	  });
	  this.player.trigger('start');
	  assert.equal(this.player.$('.vjs-overlay.vjs-overlay-bottom'), this.player.controlBar.el().firstChild, 'bottom attaches as first child of controlBar');
	});
	QUnit.test('attach top overlay as previous sibling when attachToControlBar is invalid component', function (assert) {
	  assert.expect(1);
	  this.player.overlay({
	    attachToControlBar: 'InvalidComponent',
	    overlays: [{
	      start: 'start',
	      align: 'top'
	    }]
	  });
	  this.player.trigger('start');
	  assert.equal(this.player.$('.vjs-overlay.vjs-overlay-top'), this.player.controlBar.el().previousSibling, 'top attaches as previous sibiling of controlBar');
	});
	QUnit.test('attach overlays when attachToControlBar is true', function (assert) {
	  assert.expect(4);
	  this.player.overlay({
	    attachToControlBar: true,
	    overlays: [{
	      start: 'start',
	      align: 'bottom'
	    }]
	  });
	  this.player.trigger('start');
	  assert.equal(this.player.controlBar.$('.vjs-overlay.vjs-overlay-bottom'), this.player.controlBar.el().firstChild, 'bottom attaches as first child of control bar');
	  this.player.overlay({
	    attachToControlBar: true,
	    overlays: [{
	      start: 'start',
	      align: 'top'
	    }]
	  });
	  this.player.trigger('start');
	  assert.equal(this.player.$('.vjs-overlay.vjs-overlay-top'), this.player.controlBar.el().previousSibling, 'top attaches as previous sibiling of controlBar');
	  this.player.overlay({
	    attachToControlBar: 'RemainingTimeDisplay',
	    overlays: [{
	      start: 'start',
	      align: 'bottom'
	    }]
	  });
	  this.player.trigger('start');
	  assert.equal(this.player.controlBar.$('.vjs-overlay.vjs-overlay-bottom'), this.player.controlBar.remainingTimeDisplay.el().previousSibling, 'bottom attaches as previous sibiling of attachToControlBar component');
	  this.player.overlay({
	    attachToControlBar: 'RemainingTimeDisplay',
	    overlays: [{
	      start: 'start',
	      align: 'top'
	    }]
	  });
	  this.player.trigger('start');
	  assert.equal(this.player.$('.vjs-overlay.vjs-overlay-top'), this.player.controlBar.el().previousSibling, 'top attaches as previous sibiling of controlBar when using attachToControlBar component');
	});
	QUnit.test('attach overlays as last child when no controls are present', function (assert) {
	  assert.expect(2);
	  this.player.controls(false);
	  this.player.overlay({
	    overlays: [{
	      start: 'start',
	      align: 'bottom'
	    }]
	  });
	  this.player.trigger('start');
	  assert.equal(this.player.$('.vjs-overlay.vjs-overlay-bottom'), this.player.el().lastChild, 'bottom attaches as last child of player');
	  this.player.overlay({
	    overlays: [{
	      start: 'start',
	      align: 'top'
	    }]
	  });
	  this.player.trigger('start');
	  assert.equal(this.player.$('.vjs-overlay.vjs-overlay-top'), this.player.el().lastChild, 'top attaches as last child of player');
	});

}(videojs,QUnit,sinon));
