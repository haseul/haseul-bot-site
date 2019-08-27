"use strict"

let LANGS = {
    "translation": {
        "af": {
        "name": "Afrikaans",
        "nativeName": "Afrikaans",
        "dir": "ltr"
        },
        "ar": {
        "name": "Arabic",
        "nativeName": "العربية",
        "dir": "rtl"
        },
        "bg": {
        "name": "Bulgarian",
        "nativeName": "Български",
        "dir": "ltr"
        },
        "bn": {
        "name": "Bangla",
        "nativeName": "বাংলা",
        "dir": "ltr"
        },
        "bs": {
        "name": "Bosnian",
        "nativeName": "bosanski (latinica)",
        "dir": "ltr"
        },
        "ca": {
        "name": "Catalan",
        "nativeName": "Català",
        "dir": "ltr"
        },
        "cs": {
        "name": "Czech",
        "nativeName": "Čeština",
        "dir": "ltr"
        },
        "cy": {
        "name": "Welsh",
        "nativeName": "Welsh",
        "dir": "ltr"
        },
        "da": {
        "name": "Danish",
        "nativeName": "Dansk",
        "dir": "ltr"
        },
        "de": {
        "name": "German",
        "nativeName": "Deutsch",
        "dir": "ltr"
        },
        "el": {
        "name": "Greek",
        "nativeName": "Ελληνικά",
        "dir": "ltr"
        },
        "en": {
        "name": "English",
        "nativeName": "English",
        "dir": "ltr"
        },
        "es": {
        "name": "Spanish",
        "nativeName": "Español",
        "dir": "ltr"
        },
        "et": {
        "name": "Estonian",
        "nativeName": "Eesti",
        "dir": "ltr"
        },
        "fa": {
        "name": "Persian",
        "nativeName": "Persian",
        "dir": "rtl"
        },
        "fi": {
        "name": "Finnish",
        "nativeName": "Suomi",
        "dir": "ltr"
        },
        "fil": {
        "name": "Filipino",
        "nativeName": "Filipino",
        "dir": "ltr"
        },
        "fj": {
        "name": "Fijian",
        "nativeName": "Fijian",
        "dir": "ltr"
        },
        "fr": {
        "name": "French",
        "nativeName": "Français",
        "dir": "ltr"
        },
        "he": {
        "name": "Hebrew",
        "nativeName": "עברית",
        "dir": "rtl"
        },
        "hi": {
        "name": "Hindi",
        "nativeName": "हिंदी",
        "dir": "ltr"
        },
        "hr": {
        "name": "Croatian",
        "nativeName": "Hrvatski",
        "dir": "ltr"
        },
        "ht": {
        "name": "Haitian Creole",
        "nativeName": "Haitian Creole",
        "dir": "ltr"
        },
        "hu": {
        "name": "Hungarian",
        "nativeName": "Magyar",
        "dir": "ltr"
        },
        "id": {
        "name": "Indonesian",
        "nativeName": "Indonesia",
        "dir": "ltr"
        },
        "is": {
        "name": "Icelandic",
        "nativeName": "Íslenska",
        "dir": "ltr"
        },
        "it": {
        "name": "Italian",
        "nativeName": "Italiano",
        "dir": "ltr"
        },
        "ja": {
        "name": "Japanese",
        "nativeName": "日本語",
        "dir": "ltr"
        },
        "ko": {
        "name": "Korean",
        "nativeName": "한국어",
        "dir": "ltr"
        },
        "lt": {
        "name": "Lithuanian",
        "nativeName": "Lietuvių",
        "dir": "ltr"
        },
        "lv": {
        "name": "Latvian",
        "nativeName": "Latviešu",
        "dir": "ltr"
        },
        "mg": {
        "name": "Malagasy",
        "nativeName": "Malagasy",
        "dir": "ltr"
        },
        "ms": {
        "name": "Malay",
        "nativeName": "Melayu",
        "dir": "ltr"
        },
        "mt": {
        "name": "Maltese",
        "nativeName": "Il-Malti",
        "dir": "ltr"
        },
        "mww": {
        "name": "Hmong Daw",
        "nativeName": "Hmong Daw",
        "dir": "ltr"
        },
        "nb": {
        "name": "Norwegian",
        "nativeName": "Norsk",
        "dir": "ltr"
        },
        "nl": {
        "name": "Dutch",
        "nativeName": "Nederlands",
        "dir": "ltr"
        },
        "otq": {
        "name": "Querétaro Otomi",
        "nativeName": "Querétaro Otomi",
        "dir": "ltr"
        },
        "pl": {
        "name": "Polish",
        "nativeName": "Polski",
        "dir": "ltr"
        },
        "pt": {
        "name": "Portuguese",
        "nativeName": "Português",
        "dir": "ltr"
        },
        "ro": {
        "name": "Romanian",
        "nativeName": "Română",
        "dir": "ltr"
        },
        "ru": {
        "name": "Russian",
        "nativeName": "Русский",
        "dir": "ltr"
        },
        "sk": {
        "name": "Slovak",
        "nativeName": "Slovenčina",
        "dir": "ltr"
        },
        "sl": {
        "name": "Slovenian",
        "nativeName": "Slovenščina",
        "dir": "ltr"
        },
        "sm": {
        "name": "Samoan",
        "nativeName": "Samoan",
        "dir": "ltr"
        },
        "sr-Cyrl": {
        "name": "Serbian (Cyrillic)",
        "nativeName": "srpski (ćirilica)",
        "dir": "ltr"
        },
        "sr-Latn": {
        "name": "Serbian (Latin)",
        "nativeName": "srpski (latinica)",
        "dir": "ltr"
        },
        "sv": {
        "name": "Swedish",
        "nativeName": "Svenska",
        "dir": "ltr"
        },
        "sw": {
        "name": "Kiswahili",
        "nativeName": "Kiswahili",
        "dir": "ltr"
        },
        "ta": {
        "name": "Tamil",
        "nativeName": "தமிழ்",
        "dir": "ltr"
        },
        "te": {
        "name": "Telugu",
        "nativeName": "తెలుగు",
        "dir": "ltr"
        },
        "th": {
        "name": "Thai",
        "nativeName": "ไทย",
        "dir": "ltr"
        },
        "tlh": {
        "name": "Klingon",
        "nativeName": "Klingon",
        "dir": "ltr"
        },
        "to": {
        "name": "Tongan",
        "nativeName": "lea fakatonga",
        "dir": "ltr"
        },
        "tr": {
        "name": "Turkish",
        "nativeName": "Türkçe",
        "dir": "ltr"
        },
        "ty": {
        "name": "Tahitian",
        "nativeName": "Tahitian",
        "dir": "ltr"
        },
        "uk": {
        "name": "Ukrainian",
        "nativeName": "Українська",
        "dir": "ltr"
        },
        "ur": {
        "name": "Urdu",
        "nativeName": "اردو",
        "dir": "rtl"
        },
        "vi": {
        "name": "Vietnamese",
        "nativeName": "Tiếng Việt",
        "dir": "ltr"
        },
        "yua": {
        "name": "Yucatec Maya",
        "nativeName": "Yucatec Maya",
        "dir": "ltr"
        },
        "yue": {
        "name": "Cantonese (Traditional)",
        "nativeName": "粵語 (繁體中文)",
        "dir": "ltr"
        },
        "zh-Hans": {
        "name": "Chinese Simplified",
        "nativeName": "简体中文",
        "dir": "ltr"
        },
        "zh-Hant": {
        "name": "Chinese Traditional",
        "nativeName": "繁體中文",
        "dir": "ltr"
        }
    },
    "transliteration": {
        "ar": {
        "name": "Arabic",
        "nativeName": "العربية",
        "scripts": [
            {
            "code": "Arab",
            "name": "Arabic",
            "nativeName": "العربية",
            "dir": "rtl",
            "toScripts": [
                {
                "code": "Latn",
                "name": "Latin",
                "nativeName": "اللاتينية",
                "dir": "ltr"
                }
            ]
            },
            {
            "code": "Latn",
            "name": "Latin",
            "nativeName": "اللاتينية",
            "dir": "ltr",
            "toScripts": [
                {
                "code": "Arab",
                "name": "Arabic",
                "nativeName": "العربية",
                "dir": "rtl"
                }
            ]
            }
        ]
        },
        "bn": {
        "name": "Bangla",
        "nativeName": "বাংলা",
        "scripts": [
            {
            "code": "Beng",
            "name": "Bengali",
            "nativeName": "Bengali",
            "dir": "ltr",
            "toScripts": [
                {
                "code": "Latn",
                "name": "Latin",
                "nativeName": "Latin",
                "dir": "ltr"
                }
            ]
            },
            {
            "code": "Latn",
            "name": "Latin",
            "nativeName": "Latin",
            "dir": "ltr",
            "toScripts": [
                {
                "code": "Beng",
                "name": "Bangla",
                "nativeName": "Bengali",
                "dir": "ltr"
                }
            ]
            }
        ]
        },
        "gu": {
        "name": "Gujarati",
        "nativeName": "ગુજરાતી",
        "scripts": [
            {
            "code": "Gujr",
            "name": "Gujarati",
            "nativeName": "Gujarati",
            "dir": "ltr",
            "toScripts": [
                {
                "code": "Latn",
                "name": "Latin",
                "nativeName": "Latin",
                "dir": "ltr"
                }
            ]
            },
            {
            "code": "Latn",
            "name": "Latin",
            "nativeName": "Latin",
            "dir": "ltr",
            "toScripts": [
                {
                "code": "Gujr",
                "name": "Gujarati",
                "nativeName": "Gujarati",
                "dir": "ltr"
                }
            ]
            }
        ]
        },
        "he": {
        "name": "Hebrew",
        "nativeName": "עברית",
        "scripts": [
            {
            "code": "Hebr",
            "name": "Hebrew",
            "nativeName": "עברית",
            "dir": "rtl",
            "toScripts": [
                {
                "code": "Latn",
                "name": "Latin",
                "nativeName": "לטינית",
                "dir": "ltr"
                }
            ]
            },
            {
            "code": "Latn",
            "name": "Latin",
            "nativeName": "לטינית",
            "dir": "ltr",
            "toScripts": [
                {
                "code": "Hebr",
                "name": "Hebrew",
                "nativeName": "עברית",
                "dir": "rtl"
                }
            ]
            }
        ]
        },
        "hi": {
        "name": "Hindi",
        "nativeName": "हिंदी",
        "scripts": [
            {
            "code": "Deva",
            "name": "Devanagari",
            "nativeName": "देवनागरी",
            "dir": "ltr",
            "toScripts": [
                {
                "code": "Latn",
                "name": "Latin",
                "nativeName": "लैटिन",
                "dir": "ltr"
                }
            ]
            },
            {
            "code": "Latn",
            "name": "Latin",
            "nativeName": "लैटिन",
            "dir": "ltr",
            "toScripts": [
                {
                "code": "Deva",
                "name": "Devanagari",
                "nativeName": "देवनागरी",
                "dir": "ltr"
                }
            ]
            }
        ]
        },
        "ja": {
        "name": "Japanese",
        "nativeName": "日本語",
        "scripts": [
            {
            "code": "Jpan",
            "name": "Japanese",
            "nativeName": "日本語",
            "dir": "ltr",
            "toScripts": [
                {
                "code": "Latn",
                "name": "Latin",
                "nativeName": "ラテン語",
                "dir": "ltr"
                }
            ]
            },
            {
            "code": "Latn",
            "name": "Latin",
            "nativeName": "ラテン語",
            "dir": "ltr",
            "toScripts": [
                {
                "code": "Jpan",
                "name": "Japanese",
                "nativeName": "日本語",
                "dir": "ltr"
                }
            ]
            }
        ]
        },
        "kn": {
        "name": "Kannada",
        "nativeName": "ಕನ್ನಡ",
        "scripts": [
            {
            "code": "Knda",
            "name": "Kannada",
            "nativeName": "Kannada",
            "dir": "ltr",
            "toScripts": [
                {
                "code": "Latn",
                "name": "Latin",
                "nativeName": "Latin",
                "dir": "ltr"
                }
            ]
            },
            {
            "code": "Latn",
            "name": "Latin",
            "nativeName": "Latin",
            "dir": "ltr",
            "toScripts": [
                {
                "code": "Knda",
                "name": "Kannada",
                "nativeName": "Kannada",
                "dir": "ltr"
                }
            ]
            }
        ]
        },
        "ml": {
        "name": "Malayalam",
        "nativeName": "മലയാളം",
        "scripts": [
            {
            "code": "Mlym",
            "name": "Malayalam",
            "nativeName": "Malayalam",
            "dir": "ltr",
            "toScripts": [
                {
                "code": "Latn",
                "name": "Latin",
                "nativeName": "Latin",
                "dir": "ltr"
                }
            ]
            },
            {
            "code": "Latn",
            "name": "Latin",
            "nativeName": "Latin",
            "dir": "ltr",
            "toScripts": [
                {
                "code": "Mlym",
                "name": "Malayalam",
                "nativeName": "Malayalam",
                "dir": "ltr"
                }
            ]
            }
        ]
        },
        "mr": {
        "name": "Marathi",
        "nativeName": "मराठी",
        "scripts": [
            {
            "code": "Deva",
            "name": "Devanagari",
            "nativeName": "Devanagari",
            "dir": "ltr",
            "toScripts": [
                {
                "code": "Latn",
                "name": "Latin",
                "nativeName": "Latin",
                "dir": "ltr"
                }
            ]
            },
            {
            "code": "Latn",
            "name": "Latin",
            "nativeName": "Latin",
            "dir": "ltr",
            "toScripts": [
                {
                "code": "Deva",
                "name": "Devanagari",
                "nativeName": "Devanagari",
                "dir": "ltr"
                }
            ]
            }
        ]
        },
        "or": {
        "name": "Oriya",
        "nativeName": "Oriya",
        "scripts": [
            {
            "code": "Orya",
            "name": "Oriya",
            "nativeName": "Oriya",
            "dir": "ltr",
            "toScripts": [
                {
                "code": "Latn",
                "name": "Latin",
                "nativeName": "Latin",
                "dir": "ltr"
                }
            ]
            },
            {
            "code": "Latn",
            "name": "Latin",
            "nativeName": "Latin",
            "dir": "ltr",
            "toScripts": [
                {
                "code": "Orya",
                "name": "Oriya",
                "nativeName": "Oriya",
                "dir": "ltr"
                }
            ]
            }
        ]
        },
        "pa": {
        "name": "Punjabi",
        "nativeName": "ਪੰਜਾਬੀ",
        "scripts": [
            {
            "code": "Guru",
            "name": "Gurmukhi",
            "nativeName": "Gurmukhi",
            "dir": "ltr",
            "toScripts": [
                {
                "code": "Latn",
                "name": "Latin",
                "nativeName": "Latin",
                "dir": "ltr"
                }
            ]
            },
            {
            "code": "Latn",
            "name": "Latin",
            "nativeName": "Latin",
            "dir": "ltr",
            "toScripts": [
                {
                "code": "Guru",
                "name": "Gurmukhi",
                "nativeName": "Gurmukhi",
                "dir": "ltr"
                }
            ]
            }
        ]
        },
        "sr-Cyrl": {
        "name": "Serbian (Cyrillic)",
        "nativeName": "srpski (ćirilica)",
        "scripts": [
            {
            "code": "Cyrl",
            "name": "Cyrillic",
            "nativeName": "Cyrillic",
            "dir": "ltr",
            "toScripts": [
                {
                "code": "Latn",
                "name": "Latin",
                "nativeName": "Latinski",
                "dir": "ltr"
                }
            ]
            }
        ]
        },
        "sr-Latn": {
        "name": "Serbian (Latin)",
        "nativeName": "srpski (latinica)",
        "scripts": [
            {
            "code": "Latn",
            "name": "Latin",
            "nativeName": "Latinski",
            "dir": "ltr",
            "toScripts": [
                {
                "code": "Cyrl",
                "name": "Cyrillic",
                "nativeName": "Ćirilica",
                "dir": "ltr"
                }
            ]
            }
        ]
        },
        "ta": {
        "name": "Tamil",
        "nativeName": "தமிழ்",
        "scripts": [
            {
            "code": "Taml",
            "name": "Tamil",
            "nativeName": "Tamil",
            "dir": "ltr",
            "toScripts": [
                {
                "code": "Latn",
                "name": "Latin",
                "nativeName": "Latin",
                "dir": "ltr"
                }
            ]
            },
            {
            "code": "Latn",
            "name": "Latin",
            "nativeName": "Latin",
            "dir": "ltr",
            "toScripts": [
                {
                "code": "Taml",
                "name": "Tamil",
                "nativeName": "Tamil",
                "dir": "ltr"
                }
            ]
            }
        ]
        },
        "te": {
        "name": "Telugu",
        "nativeName": "తెలుగు",
        "scripts": [
            {
            "code": "Telu",
            "name": "Telugu",
            "nativeName": "Telugu",
            "dir": "ltr",
            "toScripts": [
                {
                "code": "Latn",
                "name": "Latin",
                "nativeName": "Latin",
                "dir": "ltr"
                }
            ]
            },
            {
            "code": "Latn",
            "name": "Latin",
            "nativeName": "Latin",
            "dir": "ltr",
            "toScripts": [
                {
                "code": "Telu",
                "name": "Telugu",
                "nativeName": "Telugu",
                "dir": "ltr"
                }
            ]
            }
        ]
        },
        "th": {
        "name": "Thai",
        "nativeName": "ไทย",
        "scripts": [
            {
            "code": "Thai",
            "name": "Thai",
            "nativeName": "ภาษาไทย",
            "dir": "ltr",
            "toScripts": [
                {
                "code": "Latn",
                "name": "Latin",
                "nativeName": "ละติน",
                "dir": "ltr"
                }
            ]
            },
            {
            "code": "Latn",
            "name": "Latin",
            "nativeName": "ละติน",
            "dir": "ltr",
            "toScripts": [
                {
                "code": "Thai",
                "name": "Thai",
                "nativeName": "ภาษาไทย",
                "dir": "ltr"
                }
            ]
            }
        ]
        },
        "zh-Hans": {
        "name": "Chinese Simplified",
        "nativeName": "简体中文",
        "scripts": [
            {
            "code": "Hans",
            "name": "Simplified",
            "nativeName": "简体汉语",
            "dir": "ltr",
            "toScripts": [
                {
                "code": "Latn",
                "name": "Latin",
                "nativeName": "拉丁语",
                "dir": "ltr"
                },
                {
                "code": "Hant",
                "name": "Hat",
                "nativeName": "传统",
                "dir": "ltr"
                }
            ]
            },
            {
            "code": "Latn",
            "name": "Latin",
            "nativeName": "拉丁语",
            "dir": "ltr",
            "toScripts": [
                {
                "code": "Hans",
                "name": "Han",
                "nativeName": "简体汉语",
                "dir": "ltr"
                },
                {
                "code": "Hant",
                "name": "Hat",
                "nativeName": "传统",
                "dir": "ltr"
                }
            ]
            }
        ]
        },
        "zh-Hant": {
        "name": "Chinese Traditional",
        "nativeName": "繁體中文",
        "scripts": [
            {
            "code": "Hant",
            "name": "Traditional",
            "nativeName": "傳統",
            "dir": "ltr",
            "toScripts": [
                {
                "code": "Latn",
                "name": "Latin",
                "nativeName": "拉丁语",
                "dir": "ltr"
                },
                {
                "code": "Hans",
                "name": "Han",
                "nativeName": "简体汉语",
                "dir": "ltr"
                }
            ]
            },
            {
            "code": "Latn",
            "name": "Latin",
            "nativeName": "拉丁文",
            "dir": "ltr",
            "toScripts": [
                {
                "code": "Hans",
                "name": "Han",
                "nativeName": "简体汉语",
                "dir": "ltr"
                },
                {
                "code": "Hant",
                "name": "Hat",
                "nativeName": "传统",
                "dir": "ltr"
                }
            ]
            }
        ]
        }
    },
    "dictionary": {
        "af": {
        "name": "Afrikaans",
        "nativeName": "Afrikaans",
        "dir": "ltr",
        "translations": [
            {
            "name": "English",
            "nativeName": "English",
            "dir": "ltr",
            "code": "en"
            }
        ]
        },
        "ar": {
        "name": "Arabic",
        "nativeName": "العربية",
        "dir": "rtl",
        "translations": [
            {
            "name": "English",
            "nativeName": "English",
            "dir": "ltr",
            "code": "en"
            }
        ]
        },
        "bg": {
        "name": "Bulgarian",
        "nativeName": "Български",
        "dir": "ltr",
        "translations": [
            {
            "name": "English",
            "nativeName": "English",
            "dir": "ltr",
            "code": "en"
            }
        ]
        },
        "bn": {
        "name": "Bangla",
        "nativeName": "বাংলা",
        "dir": "ltr",
        "translations": [
            {
            "name": "English",
            "nativeName": "English",
            "dir": "ltr",
            "code": "en"
            }
        ]
        },
        "bs": {
        "name": "Bosnian (Latin)",
        "nativeName": "bosanski (latinica)",
        "dir": "ltr",
        "translations": [
            {
            "name": "English",
            "nativeName": "English",
            "dir": "ltr",
            "code": "en"
            }
        ]
        },
        "ca": {
        "name": "Catalan",
        "nativeName": "Català",
        "dir": "ltr",
        "translations": [
            {
            "name": "English",
            "nativeName": "English",
            "dir": "ltr",
            "code": "en"
            }
        ]
        },
        "cs": {
        "name": "Czech",
        "nativeName": "Čeština",
        "dir": "ltr",
        "translations": [
            {
            "name": "English",
            "nativeName": "English",
            "dir": "ltr",
            "code": "en"
            }
        ]
        },
        "cy": {
        "name": "Welsh",
        "nativeName": "Welsh",
        "dir": "ltr",
        "translations": [
            {
            "name": "English",
            "nativeName": "English",
            "dir": "ltr",
            "code": "en"
            }
        ]
        },
        "da": {
        "name": "Danish",
        "nativeName": "Dansk",
        "dir": "ltr",
        "translations": [
            {
            "name": "English",
            "nativeName": "English",
            "dir": "ltr",
            "code": "en"
            }
        ]
        },
        "de": {
        "name": "German",
        "nativeName": "Deutsch",
        "dir": "ltr",
        "translations": [
            {
            "name": "English",
            "nativeName": "English",
            "dir": "ltr",
            "code": "en"
            }
        ]
        },
        "el": {
        "name": "Greek",
        "nativeName": "Ελληνικά",
        "dir": "ltr",
        "translations": [
            {
            "name": "English",
            "nativeName": "English",
            "dir": "ltr",
            "code": "en"
            }
        ]
        },
        "en": {
        "name": "English",
        "nativeName": "English",
        "dir": "ltr",
        "translations": [
            {
            "name": "Afrikaans",
            "nativeName": "Afrikaans",
            "dir": "ltr",
            "code": "af"
            },
            {
            "name": "Arabic",
            "nativeName": "العربية",
            "dir": "rtl",
            "code": "ar"
            },
            {
            "name": "Bulgarian",
            "nativeName": "Български",
            "dir": "ltr",
            "code": "bg"
            },
            {
            "name": "Bangla",
            "nativeName": "বাংলা",
            "dir": "ltr",
            "code": "bn"
            },
            {
            "name": "Bosnian (Latin)",
            "nativeName": "bosanski (latinica)",
            "dir": "ltr",
            "code": "bs"
            },
            {
            "name": "Catalan",
            "nativeName": "Català",
            "dir": "ltr",
            "code": "ca"
            },
            {
            "name": "Chinese Simplified",
            "nativeName": "简体中文",
            "dir": "ltr",
            "code": "zh-Hans"
            },
            {
            "name": "Czech",
            "nativeName": "Čeština",
            "dir": "ltr",
            "code": "cs"
            },
            {
            "name": "Welsh",
            "nativeName": "Welsh",
            "dir": "ltr",
            "code": "cy"
            },
            {
            "name": "Danish",
            "nativeName": "Dansk",
            "dir": "ltr",
            "code": "da"
            },
            {
            "name": "German",
            "nativeName": "Deutsch",
            "dir": "ltr",
            "code": "de"
            },
            {
            "name": "Greek",
            "nativeName": "Ελληνικά",
            "dir": "ltr",
            "code": "el"
            },
            {
            "name": "Spanish",
            "nativeName": "Español",
            "dir": "ltr",
            "code": "es"
            },
            {
            "name": "Estonian",
            "nativeName": "Eesti",
            "dir": "ltr",
            "code": "et"
            },
            {
            "name": "Persian",
            "nativeName": "Persian",
            "dir": "rtl",
            "code": "fa"
            },
            {
            "name": "Finnish",
            "nativeName": "Suomi",
            "dir": "ltr",
            "code": "fi"
            },
            {
            "name": "Faroese",
            "nativeName": "Haitian Creole",
            "dir": "ltr",
            "code": "ht"
            },
            {
            "name": "French",
            "nativeName": "Français",
            "dir": "ltr",
            "code": "fr"
            },
            {
            "name": "Hebrew",
            "nativeName": "עברית",
            "dir": "rtl",
            "code": "he"
            },
            {
            "name": "Hindi",
            "nativeName": "हिंदी",
            "dir": "ltr",
            "code": "hi"
            },
            {
            "name": "Croatian",
            "nativeName": "Hrvatski",
            "dir": "ltr",
            "code": "hr"
            },
            {
            "name": "Hungarian",
            "nativeName": "Magyar",
            "dir": "ltr",
            "code": "hu"
            },
            {
            "name": "Indonesian",
            "nativeName": "Indonesia",
            "dir": "ltr",
            "code": "id"
            },
            {
            "name": "Icelandic",
            "nativeName": "Íslenska",
            "dir": "ltr",
            "code": "is"
            },
            {
            "name": "Italian",
            "nativeName": "Italiano",
            "dir": "ltr",
            "code": "it"
            },
            {
            "name": "Japanese",
            "nativeName": "日本語",
            "dir": "ltr",
            "code": "ja"
            },
            {
            "name": "Korean",
            "nativeName": "한국어",
            "dir": "ltr",
            "code": "ko"
            },
            {
            "name": "Lithuanian",
            "nativeName": "Lietuvių",
            "dir": "ltr",
            "code": "lt"
            },
            {
            "name": "Latvian",
            "nativeName": "Latviešu",
            "dir": "ltr",
            "code": "lv"
            },
            {
            "name": "Maltese",
            "nativeName": "Il-Malti",
            "dir": "ltr",
            "code": "mt"
            },
            {
            "name": "Malay",
            "nativeName": "Melayu",
            "dir": "ltr",
            "code": "ms"
            },
            {
            "name": "Hmong Daw",
            "nativeName": "Hmong Daw",
            "dir": "ltr",
            "code": "mww"
            },
            {
            "name": "Dutch",
            "nativeName": "Nederlands",
            "dir": "ltr",
            "code": "nl"
            },
            {
            "name": "Norwegian",
            "nativeName": "Norsk",
            "dir": "ltr",
            "code": "nb"
            },
            {
            "name": "Polish",
            "nativeName": "Polski",
            "dir": "ltr",
            "code": "pl"
            },
            {
            "name": "Portuguese",
            "nativeName": "Português",
            "dir": "ltr",
            "code": "pt"
            },
            {
            "name": "Romanian",
            "nativeName": "Română",
            "dir": "ltr",
            "code": "ro"
            },
            {
            "name": "Russian",
            "nativeName": "Русский",
            "dir": "ltr",
            "code": "ru"
            },
            {
            "name": "Slovak",
            "nativeName": "Slovenčina",
            "dir": "ltr",
            "code": "sk"
            },
            {
            "name": "Slovenian",
            "nativeName": "Slovenščina",
            "dir": "ltr",
            "code": "sl"
            },
            {
            "name": "Serbian (Latin)",
            "nativeName": "srpski (latinica)",
            "dir": "ltr",
            "code": "sr-Latn"
            },
            {
            "name": "Swedish",
            "nativeName": "Svenska",
            "dir": "ltr",
            "code": "sv"
            },
            {
            "name": "Kiswahili",
            "nativeName": "Kiswahili",
            "dir": "ltr",
            "code": "sw"
            },
            {
            "name": "Tamil",
            "nativeName": "தமிழ்",
            "dir": "ltr",
            "code": "ta"
            },
            {
            "name": "Thai",
            "nativeName": "ไทย",
            "dir": "ltr",
            "code": "th"
            },
            {
            "name": "Klingon",
            "nativeName": "Klingon",
            "dir": "ltr",
            "code": "tlh"
            },
            {
            "name": "Turkish",
            "nativeName": "Türkçe",
            "dir": "ltr",
            "code": "tr"
            },
            {
            "name": "Ukrainian",
            "nativeName": "Українська",
            "dir": "ltr",
            "code": "uk"
            },
            {
            "name": "Urdu",
            "nativeName": "اردو",
            "dir": "rtl",
            "code": "ur"
            },
            {
            "name": "Vietnamese",
            "nativeName": "Tiếng Việt",
            "dir": "ltr",
            "code": "vi"
            }
        ]
        },
        "es": {
        "name": "Spanish",
        "nativeName": "Español",
        "dir": "ltr",
        "translations": [
            {
            "name": "English",
            "nativeName": "English",
            "dir": "ltr",
            "code": "en"
            }
        ]
        },
        "et": {
        "name": "Estonian",
        "nativeName": "Eesti",
        "dir": "ltr",
        "translations": [
            {
            "name": "English",
            "nativeName": "English",
            "dir": "ltr",
            "code": "en"
            }
        ]
        },
        "fa": {
        "name": "Persian",
        "nativeName": "Persian",
        "dir": "rtl",
        "translations": [
            {
            "name": "English",
            "nativeName": "English",
            "dir": "ltr",
            "code": "en"
            }
        ]
        },
        "fi": {
        "name": "Finnish",
        "nativeName": "Suomi",
        "dir": "ltr",
        "translations": [
            {
            "name": "English",
            "nativeName": "English",
            "dir": "ltr",
            "code": "en"
            }
        ]
        },
        "fr": {
        "name": "French",
        "nativeName": "Français",
        "dir": "ltr",
        "translations": [
            {
            "name": "English",
            "nativeName": "English",
            "dir": "ltr",
            "code": "en"
            }
        ]
        },
        "he": {
        "name": "Hebrew",
        "nativeName": "עברית",
        "dir": "rtl",
        "translations": [
            {
            "name": "English",
            "nativeName": "English",
            "dir": "ltr",
            "code": "en"
            }
        ]
        },
        "hi": {
        "name": "Hindi",
        "nativeName": "हिंदी",
        "dir": "ltr",
        "translations": [
            {
            "name": "English",
            "nativeName": "English",
            "dir": "ltr",
            "code": "en"
            }
        ]
        },
        "hr": {
        "name": "Croatian",
        "nativeName": "Hrvatski",
        "dir": "ltr",
        "translations": [
            {
            "name": "English",
            "nativeName": "English",
            "dir": "ltr",
            "code": "en"
            }
        ]
        },
        "ht": {
        "name": "Faroese",
        "nativeName": "Haitian Creole",
        "dir": "ltr",
        "translations": [
            {
            "name": "English",
            "nativeName": "English",
            "dir": "ltr",
            "code": "en"
            }
        ]
        },
        "hu": {
        "name": "Hungarian",
        "nativeName": "Magyar",
        "dir": "ltr",
        "translations": [
            {
            "name": "English",
            "nativeName": "English",
            "dir": "ltr",
            "code": "en"
            }
        ]
        },
        "id": {
        "name": "Indonesian",
        "nativeName": "Indonesia",
        "dir": "ltr",
        "translations": [
            {
            "name": "English",
            "nativeName": "English",
            "dir": "ltr",
            "code": "en"
            }
        ]
        },
        "is": {
        "name": "Icelandic",
        "nativeName": "Íslenska",
        "dir": "ltr",
        "translations": [
            {
            "name": "English",
            "nativeName": "English",
            "dir": "ltr",
            "code": "en"
            }
        ]
        },
        "it": {
        "name": "Italian",
        "nativeName": "Italiano",
        "dir": "ltr",
        "translations": [
            {
            "name": "English",
            "nativeName": "English",
            "dir": "ltr",
            "code": "en"
            }
        ]
        },
        "ja": {
        "name": "Japanese",
        "nativeName": "日本語",
        "dir": "ltr",
        "translations": [
            {
            "name": "English",
            "nativeName": "English",
            "dir": "ltr",
            "code": "en"
            }
        ]
        },
        "ko": {
        "name": "Korean",
        "nativeName": "한국어",
        "dir": "ltr",
        "translations": [
            {
            "name": "English",
            "nativeName": "English",
            "dir": "ltr",
            "code": "en"
            }
        ]
        },
        "lt": {
        "name": "Lithuanian",
        "nativeName": "Lietuvių",
        "dir": "ltr",
        "translations": [
            {
            "name": "English",
            "nativeName": "English",
            "dir": "ltr",
            "code": "en"
            }
        ]
        },
        "lv": {
        "name": "Latvian",
        "nativeName": "Latviešu",
        "dir": "ltr",
        "translations": [
            {
            "name": "English",
            "nativeName": "English",
            "dir": "ltr",
            "code": "en"
            }
        ]
        },
        "ms": {
        "name": "Malay",
        "nativeName": "Melayu",
        "dir": "ltr",
        "translations": [
            {
            "name": "English",
            "nativeName": "English",
            "dir": "ltr",
            "code": "en"
            }
        ]
        },
        "mt": {
        "name": "Maltese",
        "nativeName": "Il-Malti",
        "dir": "ltr",
        "translations": [
            {
            "name": "English",
            "nativeName": "English",
            "dir": "ltr",
            "code": "en"
            }
        ]
        },
        "mww": {
        "name": "Hmong Daw",
        "nativeName": "Hmong Daw",
        "dir": "ltr",
        "translations": [
            {
            "name": "English",
            "nativeName": "English",
            "dir": "ltr",
            "code": "en"
            }
        ]
        },
        "nb": {
        "name": "Norwegian",
        "nativeName": "Norsk",
        "dir": "ltr",
        "translations": [
            {
            "name": "English",
            "nativeName": "English",
            "dir": "ltr",
            "code": "en"
            }
        ]
        },
        "nl": {
        "name": "Dutch",
        "nativeName": "Nederlands",
        "dir": "ltr",
        "translations": [
            {
            "name": "English",
            "nativeName": "English",
            "dir": "ltr",
            "code": "en"
            }
        ]
        },
        "pl": {
        "name": "Polish",
        "nativeName": "Polski",
        "dir": "ltr",
        "translations": [
            {
            "name": "English",
            "nativeName": "English",
            "dir": "ltr",
            "code": "en"
            }
        ]
        },
        "pt": {
        "name": "Portuguese",
        "nativeName": "Português",
        "dir": "ltr",
        "translations": [
            {
            "name": "English",
            "nativeName": "English",
            "dir": "ltr",
            "code": "en"
            }
        ]
        },
        "ro": {
        "name": "Romanian",
        "nativeName": "Română",
        "dir": "ltr",
        "translations": [
            {
            "name": "English",
            "nativeName": "English",
            "dir": "ltr",
            "code": "en"
            }
        ]
        },
        "ru": {
        "name": "Russian",
        "nativeName": "Русский",
        "dir": "ltr",
        "translations": [
            {
            "name": "English",
            "nativeName": "English",
            "dir": "ltr",
            "code": "en"
            }
        ]
        },
        "sk": {
        "name": "Slovak",
        "nativeName": "Slovenčina",
        "dir": "ltr",
        "translations": [
            {
            "name": "English",
            "nativeName": "English",
            "dir": "ltr",
            "code": "en"
            }
        ]
        },
        "sl": {
        "name": "Slovenian",
        "nativeName": "Slovenščina",
        "dir": "ltr",
        "translations": [
            {
            "name": "English",
            "nativeName": "English",
            "dir": "ltr",
            "code": "en"
            }
        ]
        },
        "sr-Latn": {
        "name": "Serbian (Latin)",
        "nativeName": "srpski (latinica)",
        "dir": "ltr",
        "translations": [
            {
            "name": "English",
            "nativeName": "English",
            "dir": "ltr",
            "code": "en"
            }
        ]
        },
        "sv": {
        "name": "Swedish",
        "nativeName": "Svenska",
        "dir": "ltr",
        "translations": [
            {
            "name": "English",
            "nativeName": "English",
            "dir": "ltr",
            "code": "en"
            }
        ]
        },
        "sw": {
        "name": "Kiswahili",
        "nativeName": "Kiswahili",
        "dir": "ltr",
        "translations": [
            {
            "name": "English",
            "nativeName": "English",
            "dir": "ltr",
            "code": "en"
            }
        ]
        },
        "ta": {
        "name": "Tamil",
        "nativeName": "தமிழ்",
        "dir": "ltr",
        "translations": [
            {
            "name": "English",
            "nativeName": "English",
            "dir": "ltr",
            "code": "en"
            }
        ]
        },
        "th": {
        "name": "Thai",
        "nativeName": "ไทย",
        "dir": "ltr",
        "translations": [
            {
            "name": "English",
            "nativeName": "English",
            "dir": "ltr",
            "code": "en"
            }
        ]
        },
        "tlh": {
        "name": "Klingon",
        "nativeName": "Klingon",
        "dir": "ltr",
        "translations": [
            {
            "name": "English",
            "nativeName": "English",
            "dir": "ltr",
            "code": "en"
            }
        ]
        },
        "tr": {
        "name": "Turkish",
        "nativeName": "Türkçe",
        "dir": "ltr",
        "translations": [
            {
            "name": "English",
            "nativeName": "English",
            "dir": "ltr",
            "code": "en"
            }
        ]
        },
        "uk": {
        "name": "Ukrainian",
        "nativeName": "Українська",
        "dir": "ltr",
        "translations": [
            {
            "name": "English",
            "nativeName": "English",
            "dir": "ltr",
            "code": "en"
            }
        ]
        },
        "ur": {
        "name": "Urdu",
        "nativeName": "اردو",
        "dir": "rtl",
        "translations": [
            {
            "name": "English",
            "nativeName": "English",
            "dir": "ltr",
            "code": "en"
            }
        ]
        },
        "vi": {
        "name": "Vietnamese",
        "nativeName": "Tiếng Việt",
        "dir": "ltr",
        "translations": [
            {
            "name": "English",
            "nativeName": "English",
            "dir": "ltr",
            "code": "en"
            }
        ]
        },
        "zh-Hans": {
        "name": "Chinese Simplified",
        "nativeName": "简体中文",
        "dir": "ltr",
        "translations": [
            {
            "name": "English",
            "nativeName": "English",
            "dir": "ltr",
            "code": "en"
            }
        ]
        }
    }
};

for (let prop in LANGS.translation) {
    delete LANGS.translation[prop]['dir'];
    delete LANGS.translation[prop]["toScripts"];
}
let syntaxLangs = JSON.stringify(LANGS.translation, (key, val) => key == "dir" || key == "toScripts" ? null : val, 4).replace(/((?:}\s*?,|^\s*{)\s*?")(.+?)("\s*?:)/g, "$1<span style=\"color:#ff3860;\">$2</span>$3").replace(/([{,]\s*?")(.+?)("\s*?:)/g, "$1<span style=\"color:#7358d3;\">$2</span>$3").replace(/(:\s*?")(.+?)("\s*?[},])/g, "$1<span style=\"color:#3273dc;\">$2</span>$3");
let langsElem = document.createElement("pre");
langsElem.className = "code";
langsElem.innerHTML = syntaxLangs;
document.body.appendChild(langsElem);
