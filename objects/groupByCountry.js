/* Создать объект, группирующий массив по стране  */

const data = {
    Москва: {
        id: "Москва",
        geo: "Москва",
        country: "Россия",
        summary: {
            clicks: {
                value: 28438,
                prevValue: 24469,
            },
            impressions: {
                value: 1127577,
                prevValue: 1321235,
            },
            cpc: {
                value: 14.03,
                prevValue: 18.11,
            },
            conversions: {
                value: 1,
                prevValue: 12,
            },
            ctr: {
                value: 2.52,
                prevValue: 1.85,
            },
            cr: {
                value: 0,
                prevValue: 0.05,
            },
            cpa: {
                value: 399126.61,
                prevValue: 36920.08,
            },
            cost: {
                value: 399126.61,
                prevValue: 443040.94,
            },
        },
    },
    Троицк: {
        id: "Троицк",
        geo: "Троицк",
        country: "Россия",
        summary: {
            clicks: {
                value: 2,
                prevValue: 1,
            },
            impressions: {
                value: 12,
                prevValue: 884,
            },
            cpc: {
                value: 42.46,
                prevValue: 48,
            },
            conversions: {
                value: 0,
                prevValue: 0,
            },
            ctr: {
                value: 16.67,
                prevValue: 0.11,
            },
            cr: {
                value: 0,
                prevValue: 0,
            },
            cpa: {
                value: 0,
                prevValue: 0,
            },
            cost: {
                value: 84.92,
                prevValue: 48,
            },
        },
    },
    Щербинка: {
        id: "Щербинка",
        geo: "Щербинка",
        country: "Россия",
        summary: {
            clicks: {
                value: 2,
                prevValue: 0,
            },
            impressions: {
                value: 21,
                prevValue: 16,
            },
            cpc: {
                value: 22.65,
                prevValue: 0,
            },
            conversions: {
                value: 0,
                prevValue: 0,
            },
            ctr: {
                value: 9.52,
                prevValue: 0,
            },
            cr: {
                value: 0,
                prevValue: 0,
            },
            cpa: {
                value: 0,
                prevValue: 0,
            },
            cost: {
                value: 45.3,
                prevValue: 0,
            },
        },
    },
    Зеленоград: {
        id: "Зеленоград",
        geo: "Зеленоград",
        country: "Россия",
        summary: {
            clicks: {
                value: 2,
                prevValue: 3,
            },
            impressions: {
                value: 47,
                prevValue: 81,
            },
            cpc: {
                value: 22.86,
                prevValue: 20.33,
            },
            conversions: {
                value: 0,
                prevValue: 0,
            },
            ctr: {
                value: 4.26,
                prevValue: 3.7,
            },
            cr: {
                value: 0,
                prevValue: 0,
            },
            cpa: {
                value: 0,
                prevValue: 0,
            },
            cost: {
                value: 45.71,
                prevValue: 60.98,
            },
        },
    },
    "Свердловская область": {
        id: "Свердловская область",
        geo: "Свердловская область",
        country: "Россия",
        summary: {
            clicks: {
                value: 2095,
                prevValue: 1181,
            },
            impressions: {
                value: 90880,
                prevValue: 40621,
            },
            cpc: {
                value: 8.55,
                prevValue: 5.16,
            },
            conversions: {
                value: 0,
                prevValue: 0,
            },
            ctr: {
                value: 2.31,
                prevValue: 2.91,
            },
            cr: {
                value: 0,
                prevValue: 0,
            },
            cpa: {
                value: 0,
                prevValue: 0,
            },
            cost: {
                value: 17905.96,
                prevValue: 6089.24,
            },
        },
    },
    "Архангельская область": {
        id: "Архангельская область",
        geo: "Архангельская область",
        country: "Молдова",
        summary: {
            clicks: {
                value: 286,
                prevValue: 172,
            },
            impressions: {
                value: 15727,
                prevValue: 6431,
            },
            cpc: {
                value: 8.24,
                prevValue: 4.76,
            },
            conversions: {
                value: 0,
                prevValue: 0,
            },
            ctr: {
                value: 1.82,
                prevValue: 2.67,
            },
            cr: {
                value: 0,
                prevValue: 0,
            },
            cpa: {
                value: 0,
                prevValue: 0,
            },
            cost: {
                value: 2357.35,
                prevValue: 818.12,
            },
        },
    },
    "Новгородская область": {
        id: "Новгородская область",
        geo: "Новгородская область",
        country: "Молдова",
        summary: {
            clicks: {
                value: 77,
                prevValue: 36,
            },
            impressions: {
                value: 4746,
                prevValue: 2666,
            },
            cpc: {
                value: 9.09,
                prevValue: 9.1,
            },
            conversions: {
                value: 0,
                prevValue: 0,
            },
            ctr: {
                value: 1.62,
                prevValue: 1.35,
            },
            cr: {
                value: 0,
                prevValue: 0,
            },
            cpa: {
                value: 0,
                prevValue: 0,
            },
            cost: {
                value: 699.64,
                prevValue: 327.56,
            },
        },
    },
    "Воронежская область": {
        id: "Воронежская область",
        geo: "Воронежская область",
        country: "Молдова",
        summary: {
            clicks: {
                value: 966,
                prevValue: 487,
            },
            impressions: {
                value: 48978,
                prevValue: 19521,
            },
            cpc: {
                value: 8.84,
                prevValue: 5.34,
            },
            conversions: {
                value: 0,
                prevValue: 0,
            },
            ctr: {
                value: 1.97,
                prevValue: 2.49,
            },
            cr: {
                value: 0,
                prevValue: 0,
            },
            cpa: {
                value: 0,
                prevValue: 0,
            },
            cost: {
                value: 8539.45,
                prevValue: 2600.88,
            },
        },
    },
    "Астраханская область": {
        id: "Астраханская область",
        geo: "Астраханская область",
        country: "Молдова",
        summary: {
            clicks: {
                value: 541,
                prevValue: 388,
            },
            impressions: {
                value: 33656,
                prevValue: 18397,
            },
            cpc: {
                value: 8.81,
                prevValue: 5.15,
            },
            conversions: {
                value: 0,
                prevValue: 0,
            },
            ctr: {
                value: 1.61,
                prevValue: 2.11,
            },
            cr: {
                value: 0,
                prevValue: 0,
            },
            cpa: {
                value: 0,
                prevValue: 0,
            },
            cost: {
                value: 4768.54,
                prevValue: 2000.08,
            },
        },
    },
    "Республика Алтай": {
        id: "Республика Алтай",
        geo: "Республика Алтай",
        country: "Молдова",
        summary: {
            clicks: {
                value: 68,
                prevValue: 34,
            },
            impressions: {
                value: 5139,
                prevValue: 2207,
            },
            cpc: {
                value: 8.3,
                prevValue: 5.61,
            },
            conversions: {
                value: 0,
                prevValue: 0,
            },
            ctr: {
                value: 1.32,
                prevValue: 1.54,
            },
            cr: {
                value: 0,
                prevValue: 0,
            },
            cpa: {
                value: 0,
                prevValue: 0,
            },
            cost: {
                value: 564.69,
                prevValue: 190.68,
            },
        },
    },
    Бурятия: {
        id: "Бурятия",
        geo: "Бурятия",
        country: "Болгария",
        summary: {
            clicks: {
                value: 534,
                prevValue: 446,
            },
            impressions: {
                value: 37678,
                prevValue: 20104,
            },
            cpc: {
                value: 8.97,
                prevValue: 4.48,
            },
            conversions: {
                value: 0,
                prevValue: 0,
            },
            ctr: {
                value: 1.42,
                prevValue: 2.22,
            },
            cr: {
                value: 0,
                prevValue: 0,
            },
            cpa: {
                value: 0,
                prevValue: 0,
            },
            cost: {
                value: 4791,
                prevValue: 1997.11,
            },
        },
    },
    Чечня: {
        id: "Чечня",
        geo: "Чечня",
        country: "Грузия",
        summary: {
            clicks: {
                value: 198,
                prevValue: 161,
            },
            impressions: {
                value: 20828,
                prevValue: 10510,
            },
            cpc: {
                value: 10.03,
                prevValue: 5.69,
            },
            conversions: {
                value: 0,
                prevValue: 0,
            },
            ctr: {
                value: 0.95,
                prevValue: 1.53,
            },
            cr: {
                value: 0,
                prevValue: 0,
            },
            cpa: {
                value: 0,
                prevValue: 0,
            },
            cost: {
                value: 1986.82,
                prevValue: 915.83,
            },
        },
    },
    "Ямало-Ненецкий автономный округ": {
        id: "Ямало-Ненецкий автономный округ",
        geo: "Ямало-Ненецкий автономный округ",
        country: "Япония",
        summary: {
            clicks: {
                value: 350,
                prevValue: 178,
            },
            impressions: {
                value: 18177,
                prevValue: 7980,
            },
            cpc: {
                value: 8.57,
                prevValue: 5.34,
            },
            conversions: {
                value: 0,
                prevValue: 0,
            },
            ctr: {
                value: 1.93,
                prevValue: 2.23,
            },
            cr: {
                value: 0,
                prevValue: 0,
            },
            cpa: {
                value: 0,
                prevValue: 0,
            },
            cost: {
                value: 2999.95,
                prevValue: 950.48,
            },
        },
    },
};

const groupByCountry = () => {
    // console.log(data);

    const gbd = {};
    Object.values(data).forEach((element) => {
        console.log("element", element);
        console.log("element.country", element.country);

        if (element.country in gbd) {
            gbd[element.country] = {
                clicks: gbd[element.country].clicks + element.summary.clicks.value,
                impressions: gbd[element.country].impressions +
                    element.summary.impressions.value,
                conversions: gbd[element.country].conversions +
                    element.summary.conversions.value,
                cost: gbd[element.country].cost + element.summary.cost.value,
            };
        } else {
            gbd[element.country] = {
                clicks: element.summary.clicks.value,
                impressions: element.summary.impressions.value,
                conversions: element.summary.conversions.value,
                cost: element.summary.cost.value,
            };
        }
    });
    console.log("gbd", gbd);
    return gbd;
};

groupByCountry();

/*"Ярославская область": {
        "id": "Ярославская область",
        "geo": "Ярославская область",
        "summary": {
            "clicks": {
                "value": 399,
                "prevValue": 196
            },
            "impressions": {
                "value": 18008,
                "prevValue": 7806
            },
            "cpc": {
                "value": 8.36,
                "prevValue": 5.32
            },
            "conversions": {
                "value": 0,
                "prevValue": 0
            },
            "ctr": {
                "value": 2.22,
                "prevValue": 2.51
            },
            "cr": {
                "value": 0,
                "prevValue": 0
            },
            "cpa": {
                "value": 0,
                "prevValue": 0
            },
            "cost": {
                "value": 3337.06,
                "prevValue": 1042.62
            }
        }
    },
    "Волгоградская область": {
        "id": "Волгоградская область",
        "geo": "Волгоградская область",
        "summary": {
            "clicks": {
                "value": 1082,
                "prevValue": 713
            },
            "impressions": {
                "value": 57681,
                "prevValue": 29786
            },
            "cpc": {
                "value": 8.8,
                "prevValue": 5.21
            },
            "conversions": {
                "value": 0,
                "prevValue": 0
            },
            "ctr": {
                "value": 1.88,
                "prevValue": 2.39
            },
            "cr": {
                "value": 0,
                "prevValue": 0
            },
            "cpa": {
                "value": 0,
                "prevValue": 0
            },
            "cost": {
                "value": 9517.36,
                "prevValue": 3718.21
            }
        }
    },
    "Удмуртия": {
        "id": "Удмуртия",
        "geo": "Удмуртия",
        "summary": {
            "clicks": {
                "value": 561,
                "prevValue": 304
            },
            "impressions": {
                "value": 33641,
                "prevValue": 13246
            },
            "cpc": {
                "value": 8.92,
                "prevValue": 5.71
            },
            "conversions": {
                "value": 0,
                "prevValue": 0
            },
            "ctr": {
                "value": 1.67,
                "prevValue": 2.3
            },
            "cr": {
                "value": 0,
                "prevValue": 0
            },
            "cpa": {
                "value": 0,
                "prevValue": 0
            },
            "cost": {
                "value": 5002.8,
                "prevValue": 1734.37
            }
        }
    },
    "Чувашия": {
        "id": "Чувашия",
        "geo": "Чувашия",
        "summary": {
            "clicks": {
                "value": 1161,
                "prevValue": 577
            },
            "impressions": {
                "value": 71174,
                "prevValue": 26917
            },
            "cpc": {
                "value": 8.57,
                "prevValue": 5.04
            },
            "conversions": {
                "value": 0,
                "prevValue": 0
            },
            "ctr": {
                "value": 1.63,
                "prevValue": 2.14
            },
            "cr": {
                "value": 0,
                "prevValue": 0
            },
            "cpa": {
                "value": 0,
                "prevValue": 0
            },
            "cost": {
                "value": 9948.47,
                "prevValue": 2909.25
            }
        }
    },
    "Самарская область": {
        "id": "Самарская область",
        "geo": "Самарская область",
        "summary": {
            "clicks": {
                "value": 1562,
                "prevValue": 923
            },
            "impressions": {
                "value": 72710,
                "prevValue": 33776
            },
            "cpc": {
                "value": 8.9,
                "prevValue": 5.15
            },
            "conversions": {
                "value": 0,
                "prevValue": 0
            },
            "ctr": {
                "value": 2.15,
                "prevValue": 2.73
            },
            "cr": {
                "value": 0,
                "prevValue": 0
            },
            "cpa": {
                "value": 0,
                "prevValue": 0
            },
            "cost": {
                "value": 13909.58,
                "prevValue": 4755.28
            }
        }
    },
    "Дагестан": {
        "id": "Дагестан",
        "geo": "Дагестан",
        "summary": {
            "clicks": {
                "value": 997,
                "prevValue": 877
            },
            "impressions": {
                "value": 85937,
                "prevValue": 50860
            },
            "cpc": {
                "value": 9.1,
                "prevValue": 5.5
            },
            "conversions": {
                "value": 0,
                "prevValue": 0
            },
            "ctr": {
                "value": 1.16,
                "prevValue": 1.72
            },
            "cr": {
                "value": 0,
                "prevValue": 0
            },
            "cpa": {
                "value": 0,
                "prevValue": 0
            },
            "cost": {
                "value": 9073.65,
                "prevValue": 4822.7
            }
        }
    },
    "Ростовская область": {
        "id": "Ростовская область",
        "geo": "Ростовская область",
        "summary": {
            "clicks": {
                "value": 2081,
                "prevValue": 1522
            },
            "impressions": {
                "value": 97302,
                "prevValue": 53283
            },
            "cpc": {
                "value": 8.52,
                "prevValue": 4.78
            },
            "conversions": {
                "value": 0,
                "prevValue": 0
            },
            "ctr": {
                "value": 2.14,
                "prevValue": 2.86
            },
            "cr": {
                "value": 0,
                "prevValue": 0
            },
            "cpa": {
                "value": 0,
                "prevValue": 0
            },
            "cost": {
                "value": 17736.18,
                "prevValue": 7273.46
            }
        }
    },
    "Краснодарский край": {
        "id": "Краснодарский край",
        "geo": "Краснодарский край",
        "summary": {
            "clicks": {
                "value": 2952,
                "prevValue": 2337
            },
            "impressions": {
                "value": 147099,
                "prevValue": 91890
            },
            "cpc": {
                "value": 8.35,
                "prevValue": 5.68
            },
            "conversions": {
                "value": 0,
                "prevValue": 0
            },
            "ctr": {
                "value": 2.01,
                "prevValue": 2.54
            },
            "cr": {
                "value": 0,
                "prevValue": 0
            },
            "cpa": {
                "value": 0,
                "prevValue": 0
            },
            "cost": {
                "value": 24645.66,
                "prevValue": 13270.56
            }
        }
    },
    "Пензенская область": {
        "id": "Пензенская область",
        "geo": "Пензенская область",
        "summary": {
            "clicks": {
                "value": 692,
                "prevValue": 401
            },
            "impressions": {
                "value": 36011,
                "prevValue": 16908
            },
            "cpc": {
                "value": 8.97,
                "prevValue": 5.13
            },
            "conversions": {
                "value": 0,
                "prevValue": 0
            },
            "ctr": {
                "value": 1.92,
                "prevValue": 2.37
            },
            "cr": {
                "value": 0,
                "prevValue": 0
            },
            "cpa": {
                "value": 0,
                "prevValue": 0
            },
            "cost": {
                "value": 6208.29,
                "prevValue": 2055.75
            }
        }
    },
    "Ненецкий автономный округ": {
        "id": "Ненецкий автономный округ",
        "geo": "Ненецкий автономный округ",
        "summary": {
            "clicks": {
                "value": 15,
                "prevValue": 14
            },
            "impressions": {
                "value": 951,
                "prevValue": 521
            },
            "cpc": {
                "value": 8.5,
                "prevValue": 3.56
            },
            "conversions": {
                "value": 0,
                "prevValue": 0
            },
            "ctr": {
                "value": 1.58,
                "prevValue": 2.69
            },
            "cr": {
                "value": 0,
                "prevValue": 0
            },
            "cpa": {
                "value": 0,
                "prevValue": 0
            },
            "cost": {
                "value": 127.47,
                "prevValue": 49.79
            }
        }
    },
    "Чукотский автономный округ": {
        "id": "Чукотский автономный округ",
        "geo": "Чукотский автономный округ",
        "summary": {
            "clicks": {
                "value": 10,
                "prevValue": 5
            },
            "impressions": {
                "value": 882,
                "prevValue": 333
            },
            "cpc": {
                "value": 8.87,
                "prevValue": 5.98
            },
            "conversions": {
                "value": 0,
                "prevValue": 0
            },
            "ctr": {
                "value": 1.13,
                "prevValue": 1.5
            },
            "cr": {
                "value": 0,
                "prevValue": 0
            },
            "cpa": {
                "value": 0,
                "prevValue": 0
            },
            "cost": {
                "value": 88.66,
                "prevValue": 29.92
            }
        }
    },
    "Московская область": {
        "id": "Московская область",
        "geo": "Московская область",
        "summary": {
            "clicks": {
                "value": 1245,
                "prevValue": 504
            },
            "impressions": {
                "value": 44775,
                "prevValue": 14754
            },
            "cpc": {
                "value": 8.5,
                "prevValue": 4.96
            },
            "conversions": {
                "value": 0,
                "prevValue": 0
            },
            "ctr": {
                "value": 2.78,
                "prevValue": 3.42
            },
            "cr": {
                "value": 0,
                "prevValue": 0
            },
            "cpa": {
                "value": 0,
                "prevValue": 0
            },
            "cost": {
                "value": 10576.96,
                "prevValue": 2500.08
            }
        }
    },
    "Курганская область": {
        "id": "Курганская область",
        "geo": "Курганская область",
        "summary": {
            "clicks": {
                "value": 259,
                "prevValue": 177
            },
            "impressions": {
                "value": 15168,
                "prevValue": 7098
            },
            "cpc": {
                "value": 8.83,
                "prevValue": 4.78
            },
            "conversions": {
                "value": 0,
                "prevValue": 0
            },
            "ctr": {
                "value": 1.71,
                "prevValue": 2.49
            },
            "cr": {
                "value": 0,
                "prevValue": 0
            },
            "cpa": {
                "value": 0,
                "prevValue": 0
            },
            "cost": {
                "value": 2287.59,
                "prevValue": 846.6
            }
        }
    },
    "Орловская область": {
        "id": "Орловская область",
        "geo": "Орловская область",
        "summary": {
            "clicks": {
                "value": 208,
                "prevValue": 116
            },
            "impressions": {
                "value": 11689,
                "prevValue": 5222
            },
            "cpc": {
                "value": 8.97,
                "prevValue": 5.4
            },
            "conversions": {
                "value": 0,
                "prevValue": 0
            },
            "ctr": {
                "value": 1.78,
                "prevValue": 2.22
            },
            "cr": {
                "value": 0,
                "prevValue": 0
            },
            "cpa": {
                "value": 0,
                "prevValue": 0
            },
            "cost": {
                "value": 1864.98,
                "prevValue": 626.63
            }
        }
    },
    "Республика Саха": {
        "id": "Республика Саха",
        "geo": "Республика Саха",
        "summary": {
            "clicks": {
                "value": 876,
                "prevValue": 784
            },
            "impressions": {
                "value": 62948,
                "prevValue": 41951
            },
            "cpc": {
                "value": 8.44,
                "prevValue": 4.84
            },
            "conversions": {
                "value": 0,
                "prevValue": 0
            },
            "ctr": {
                "value": 1.39,
                "prevValue": 1.87
            },
            "cr": {
                "value": 0,
                "prevValue": 0
            },
            "cpa": {
                "value": 0,
                "prevValue": 0
            },
            "cost": {
                "value": 7395.88,
                "prevValue": 3796.83
            }
        }
    },
    "Марий Эл": {
        "id": "Марий Эл",
        "geo": "Марий Эл",
        "summary": {
            "clicks": {
                "value": 267,
                "prevValue": 160
            },
            "impressions": {
                "value": 18664,
                "prevValue": 7981
            },
            "cpc": {
                "value": 9.35,
                "prevValue": 5.15
            },
            "conversions": {
                "value": 0,
                "prevValue": 0
            },
            "ctr": {
                "value": 1.43,
                "prevValue": 2
            },
            "cr": {
                "value": 0,
                "prevValue": 0
            },
            "cpa": {
                "value": 0,
                "prevValue": 0
            },
            "cost": {
                "value": 2496.05,
                "prevValue": 824.53
            }
        }
    },
    "Ивановская область": {
        "id": "Ивановская область",
        "geo": "Ивановская область",
        "summary": {
            "clicks": {
                "value": 288,
                "prevValue": 167
            },
            "impressions": {
                "value": 16037,
                "prevValue": 6806
            },
            "cpc": {
                "value": 9.12,
                "prevValue": 4.93
            },
            "conversions": {
                "value": 0,
                "prevValue": 0
            },
            "ctr": {
                "value": 1.8,
                "prevValue": 2.45
            },
            "cr": {
                "value": 0,
                "prevValue": 0
            },
            "cpa": {
                "value": 0,
                "prevValue": 0
            },
            "cost": {
                "value": 2627.66,
                "prevValue": 823.09
            }
        }
    },
    "Мордовия": {
        "id": "Мордовия",
        "geo": "Мордовия",
        "summary": {
            "clicks": {
                "value": 319,
                "prevValue": 140
            },
            "impressions": {
                "value": 17302,
                "prevValue": 7382
            },
            "cpc": {
                "value": 8.53,
                "prevValue": 5.75
            },
            "conversions": {
                "value": 0,
                "prevValue": 0
            },
            "ctr": {
                "value": 1.84,
                "prevValue": 1.9
            },
            "cr": {
                "value": 0,
                "prevValue": 0
            },
            "cpa": {
                "value": 0,
                "prevValue": 0
            },
            "cost": {
                "value": 2720.2,
                "prevValue": 805.54
            }
        }
    },
    "Алтайский край": {
        "id": "Алтайский край",
        "geo": "Алтайский край",
        "summary": {
            "clicks": {
                "value": 1251,
                "prevValue": 779
            },
            "impressions": {
                "value": 68720,
                "prevValue": 33814
            },
            "cpc": {
                "value": 8.4,
                "prevValue": 5.14
            },
            "conversions": {
                "value": 0,
                "prevValue": 0
            },
            "ctr": {
                "value": 1.82,
                "prevValue": 2.3
            },
            "cr": {
                "value": 0,
                "prevValue": 0
            },
            "cpa": {
                "value": 0,
                "prevValue": 0
            },
            "cost": {
                "value": 10502.96,
                "prevValue": 4005.86
            }
        }
    },
    "Костромская область": {
        "id": "Костромская область",
        "geo": "Костромская область",
        "summary": {
            "clicks": {
                "value": 138,
                "prevValue": 78
            },
            "impressions": {
                "value": 8665,
                "prevValue": 3944
            },
            "cpc": {
                "value": 10.1,
                "prevValue": 6.47
            },
            "conversions": {
                "value": 0,
                "prevValue": 0
            },
            "ctr": {
                "value": 1.59,
                "prevValue": 1.98
            },
            "cr": {
                "value": 0,
                "prevValue": 0
            },
            "cpa": {
                "value": 0,
                "prevValue": 0
            },
            "cost": {
                "value": 1393.69,
                "prevValue": 504.65
            }
        }
    },
    "Башкортостан": {
        "id": "Башкортостан",
        "geo": "Башкортостан",
        "summary": {
            "clicks": {
                "value": 2286,
                "prevValue": 1383
            },
            "impressions": {
                "value": 124510,
                "prevValue": 59446
            },
            "cpc": {
                "value": 8.57,
                "prevValue": 5.2
            },
            "conversions": {
                "value": 0,
                "prevValue": 0
            },
            "ctr": {
                "value": 1.84,
                "prevValue": 2.33
            },
            "cr": {
                "value": 0,
                "prevValue": 0
            },
            "cpa": {
                "value": 0,
                "prevValue": 0
            },
            "cost": {
                "value": 19599.47,
                "prevValue": 7195.72
            }
        }
    },
    "Тверская область": {
        "id": "Тверская область",
        "geo": "Тверская область",
        "summary": {
            "clicks": {
                "value": 282,
                "prevValue": 145
            },
            "impressions": {
                "value": 14780,
                "prevValue": 6283
            },
            "cpc": {
                "value": 8.91,
                "prevValue": 5.67
            },
            "conversions": {
                "value": 0,
                "prevValue": 0
            },
            "ctr": {
                "value": 1.91,
                "prevValue": 2.31
            },
            "cr": {
                "value": 0,
                "prevValue": 0
            },
            "cpa": {
                "value": 0,
                "prevValue": 0
            },
            "cost": {
                "value": 2511.63,
                "prevValue": 822.1
            }
        }
    },
    "Владимирская область": {
        "id": "Владимирская область",
        "geo": "Владимирская область",
        "summary": {
            "clicks": {
                "value": 466,
                "prevValue": 229
            },
            "impressions": {
                "value": 24524,
                "prevValue": 9986
            },
            "cpc": {
                "value": 8.54,
                "prevValue": 5.44
            },
            "conversions": {
                "value": 0,
                "prevValue": 0
            },
            "ctr": {
                "value": 1.9,
                "prevValue": 2.29
            },
            "cr": {
                "value": 0,
                "prevValue": 0
            },
            "cpa": {
                "value": 0,
                "prevValue": 0
            },
            "cost": {
                "value": 3980.81,
                "prevValue": 1245.31
            }
        }
    },
    "Кировская область": {
        "id": "Кировская область",
        "geo": "Кировская область",
        "summary": {
            "clicks": {
                "value": 339,
                "prevValue": 238
            },
            "impressions": {
                "value": 19220,
                "prevValue": 9149
            },
            "cpc": {
                "value": 9.74,
                "prevValue": 4.74
            },
            "conversions": {
                "value": 0,
                "prevValue": 0
            },
            "ctr": {
                "value": 1.76,
                "prevValue": 2.6
            },
            "cr": {
                "value": 0,
                "prevValue": 0
            },
            "cpa": {
                "value": 0,
                "prevValue": 0
            },
            "cost": {
                "value": 3302.2,
                "prevValue": 1128.37
            }
        }
    },
    "Калининградская область": {
        "id": "Калининградская область",
        "geo": "Калининградская область",
        "summary": {
            "clicks": {
                "value": 732,
                "prevValue": 544
            },
            "impressions": {
                "value": 31932,
                "prevValue": 18028
            },
            "cpc": {
                "value": 9.18,
                "prevValue": 5.16
            },
            "conversions": {
                "value": 0,
                "prevValue": 0
            },
            "ctr": {
                "value": 2.29,
                "prevValue": 3.02
            },
            "cr": {
                "value": 0,
                "prevValue": 0
            },
            "cpa": {
                "value": 0,
                "prevValue": 0
            },
            "cost": {
                "value": 6716.25,
                "prevValue": 2806.41
            }
        }
    },
    "Тюменская область": {
        "id": "Тюменская область",
        "geo": "Тюменская область",
        "summary": {
            "clicks": {
                "value": 817,
                "prevValue": 461
            },
            "impressions": {
                "value": 39275,
                "prevValue": 16482
            },
            "cpc": {
                "value": 8.98,
                "prevValue": 5.04
            },
            "conversions": {
                "value": 0,
                "prevValue": 0
            },
            "ctr": {
                "value": 2.08,
                "prevValue": 2.8
            },
            "cr": {
                "value": 0,
                "prevValue": 0
            },
            "cpa": {
                "value": 0,
                "prevValue": 0
            },
            "cost": {
                "value": 7336.87,
                "prevValue": 2323.55
            }
        }
    },
    "Оренбургская область": {
        "id": "Оренбургская область",
        "geo": "Оренбургская область",
        "summary": {
            "clicks": {
                "value": 880,
                "prevValue": 597
            },
            "impressions": {
                "value": 54544,
                "prevValue": 27009
            },
            "cpc": {
                "value": 8.78,
                "prevValue": 4.99
            },
            "conversions": {
                "value": 0,
                "prevValue": 0
            },
            "ctr": {
                "value": 1.61,
                "prevValue": 2.21
            },
            "cr": {
                "value": 0,
                "prevValue": 0
            },
            "cpa": {
                "value": 0,
                "prevValue": 0
            },
            "cost": {
                "value": 7724.45,
                "prevValue": 2981.23
            }
        }
    },
    "Северная Осетия - Алания": {
        "id": "Северная Осетия - Алания",
        "geo": "Северная Осетия - Алания",
        "summary": {
            "clicks": {
                "value": 499,
                "prevValue": 467
            },
            "impressions": {
                "value": 39714,
                "prevValue": 25355
            },
            "cpc": {
                "value": 9.86,
                "prevValue": 5.47
            },
            "conversions": {
                "value": 0,
                "prevValue": 0
            },
            "ctr": {
                "value": 1.26,
                "prevValue": 1.84
            },
            "cr": {
                "value": 0,
                "prevValue": 0
            },
            "cpa": {
                "value": 0,
                "prevValue": 0
            },
            "cost": {
                "value": 4920.49,
                "prevValue": 2554
            }
        }
    },
    "Ульяновская область": {
        "id": "Ульяновская область",
        "geo": "Ульяновская область",
        "summary": {
            "clicks": {
                "value": 689,
                "prevValue": 450
            },
            "impressions": {
                "value": 37425,
                "prevValue": 19393
            },
            "cpc": {
                "value": 9.22,
                "prevValue": 5.41
            },
            "conversions": {
                "value": 0,
                "prevValue": 0
            },
            "ctr": {
                "value": 1.84,
                "prevValue": 2.32
            },
            "cr": {
                "value": 0,
                "prevValue": 0
            },
            "cpa": {
                "value": 0,
                "prevValue": 0
            },
            "cost": {
                "value": 6353.99,
                "prevValue": 2436.4
            }
        }
    },
    "Томская область": {
        "id": "Томская область",
        "geo": "Томская область",
        "summary": {
            "clicks": {
                "value": 704,
                "prevValue": 537
            },
            "impressions": {
                "value": 37280,
                "prevValue": 18555
            },
            "cpc": {
                "value": 8.68,
                "prevValue": 4.65
            },
            "conversions": {
                "value": 0,
                "prevValue": 0
            },
            "ctr": {
                "value": 1.89,
                "prevValue": 2.89
            },
            "cr": {
                "value": 0,
                "prevValue": 0
            },
            "cpa": {
                "value": 0,
                "prevValue": 0
            },
            "cost": {
                "value": 6111.29,
                "prevValue": 2496.84
            }
        }
    },
    "Кабардино-Балкария": {
        "id": "Кабардино-Балкария",
        "geo": "Кабардино-Балкария",
        "summary": {
            "clicks": {
                "value": 449,
                "prevValue": 350
            },
            "impressions": {
                "value": 31730,
                "prevValue": 20060
            },
            "cpc": {
                "value": 8.78,
                "prevValue": 5.83
            },
            "conversions": {
                "value": 0,
                "prevValue": 0
            },
            "ctr": {
                "value": 1.42,
                "prevValue": 1.74
            },
            "cr": {
                "value": 0,
                "prevValue": 0
            },
            "cpa": {
                "value": 0,
                "prevValue": 0
            },
            "cost": {
                "value": 3944.35,
                "prevValue": 2041.48
            }
        }
    },
    "Кемеровская область": {
        "id": "Кемеровская область",
        "geo": "Кемеровская область",
        "summary": {
            "clicks": {
                "value": 1410,
                "prevValue": 875
            },
            "impressions": {
                "value": 73064,
                "prevValue": 34329
            },
            "cpc": {
                "value": 8.88,
                "prevValue": 5.16
            },
            "conversions": {
                "value": 0,
                "prevValue": 0
            },
            "ctr": {
                "value": 1.93,
                "prevValue": 2.55
            },
            "cr": {
                "value": 0,
                "prevValue": 0
            },
            "cpa": {
                "value": 0,
                "prevValue": 0
            },
            "cost": {
                "value": 12527.71,
                "prevValue": 4518.9
            }
        }
    },
    "Ингушетия": {
        "id": "Ингушетия",
        "geo": "Ингушетия",
        "summary": {
            "clicks": {
                "value": 40,
                "prevValue": 38
            },
            "impressions": {
                "value": 5779,
                "prevValue": 2871
            },
            "cpc": {
                "value": 9.12,
                "prevValue": 4.73
            },
            "conversions": {
                "value": 0,
                "prevValue": 0
            },
            "ctr": {
                "value": 0.69,
                "prevValue": 1.32
            },
            "cr": {
                "value": 0,
                "prevValue": 0
            },
            "cpa": {
                "value": 0,
                "prevValue": 0
            },
            "cost": {
                "value": 364.92,
                "prevValue": 179.6
            }
        }
    },
    "Ленинградская область": {
        "id": "Ленинградская область",
        "geo": "Ленинградская область",
        "summary": {
            "clicks": {
                "value": 232,
                "prevValue": 115
            },
            "impressions": {
                "value": 8917,
                "prevValue": 3977
            },
            "cpc": {
                "value": 7.5,
                "prevValue": 5.27
            },
            "conversions": {
                "value": 0,
                "prevValue": 0
            },
            "ctr": {
                "value": 2.6,
                "prevValue": 2.89
            },
            "cr": {
                "value": 0,
                "prevValue": 0
            },
            "cpa": {
                "value": 0,
                "prevValue": 0
            },
            "cost": {
                "value": 1739.26,
                "prevValue": 605.55
            }
        }
    },
    "Ханты-Мансийский автономный округ": {
        "id": "Ханты-Мансийский автономный округ",
        "geo": "Ханты-Мансийский автономный округ",
        "summary": {
            "clicks": {
                "value": 1070,
                "prevValue": 590
            },
            "impressions": {
                "value": 54004,
                "prevValue": 22393
            },
            "cpc": {
                "value": 8.6,
                "prevValue": 4.88
            },
            "conversions": {
                "value": 0,
                "prevValue": 0
            },
            "ctr": {
                "value": 1.98,
                "prevValue": 2.63
            },
            "cr": {
                "value": 0,
                "prevValue": 0
            },
            "cpa": {
                "value": 0,
                "prevValue": 0
            },
            "cost": {
                "value": 9204.46,
                "prevValue": 2876.51
            }
        }
    },
    "Еврейская автономная область": {
        "id": "Еврейская автономная область",
        "geo": "Еврейская автономная область",
        "summary": {
            "clicks": {
                "value": 92,
                "prevValue": 71
            },
            "impressions": {
                "value": 6359,
                "prevValue": 3552
            },
            "cpc": {
                "value": 8.79,
                "prevValue": 4.79
            },
            "conversions": {
                "value": 0,
                "prevValue": 0
            },
            "ctr": {
                "value": 1.45,
                "prevValue": 2
            },
            "cr": {
                "value": 0,
                "prevValue": 0
            },
            "cpa": {
                "value": 0,
                "prevValue": 0
            },
            "cost": {
                "value": 808.61,
                "prevValue": 340.21
            }
        }
    },
    "Татарстан": {
        "id": "Татарстан",
        "geo": "Татарстан",
        "summary": {
            "clicks": {
                "value": 3048,
                "prevValue": 2147
            },
            "impressions": {
                "value": 164756,
                "prevValue": 81372
            },
            "cpc": {
                "value": 8.83,
                "prevValue": 4.77
            },
            "conversions": {
                "value": 0,
                "prevValue": 0
            },
            "ctr": {
                "value": 1.85,
                "prevValue": 2.64
            },
            "cr": {
                "value": 0,
                "prevValue": 0
            },
            "cpa": {
                "value": 0,
                "prevValue": 0
            },
            "cost": {
                "value": 26904.75,
                "prevValue": 10238.62
            }
        }
    },
    "Магаданская область": {
        "id": "Магаданская область",
        "geo": "Магаданская область",
        "summary": {
            "clicks": {
                "value": 94,
                "prevValue": 90
            },
            "impressions": {
                "value": 5278,
                "prevValue": 3161
            },
            "cpc": {
                "value": 8.88,
                "prevValue": 4.42
            },
            "conversions": {
                "value": 0,
                "prevValue": 0
            },
            "ctr": {
                "value": 1.78,
                "prevValue": 2.85
            },
            "cr": {
                "value": 0,
                "prevValue": 0
            },
            "cpa": {
                "value": 0,
                "prevValue": 0
            },
            "cost": {
                "value": 834.98,
                "prevValue": 397.65
            }
        }
    },
    "Карачаево-Черкесия": {
        "id": "Карачаево-Черкесия",
        "geo": "Карачаево-Черкесия",
        "summary": {
            "clicks": {
                "value": 381,
                "prevValue": 293
            },
            "impressions": {
                "value": 26738,
                "prevValue": 15424
            },
            "cpc": {
                "value": 9.28,
                "prevValue": 5.09
            },
            "conversions": {
                "value": 0,
                "prevValue": 0
            },
            "ctr": {
                "value": 1.42,
                "prevValue": 1.9
            },
            "cr": {
                "value": 0,
                "prevValue": 0
            },
            "cpa": {
                "value": 0,
                "prevValue": 0
            },
            "cost": {
                "value": 3535.01,
                "prevValue": 1492.31
            }
        }
    },
    "Неизвестный": {
        "id": "Неизвестный",
        "geo": "Неизвестный",
        "summary": {
            "clicks": {
                "value": 0,
                "prevValue": 0
            },
            "impressions": {
                "value": 46,
                "prevValue": 10
            },
            "cpc": {
                "value": 0,
                "prevValue": 0
            },
            "conversions": {
                "value": 0,
                "prevValue": 0
            },
            "ctr": {
                "value": 0,
                "prevValue": 0
            },
            "cr": {
                "value": 0,
                "prevValue": 0
            },
            "cpa": {
                "value": 0,
                "prevValue": 0
            },
            "cost": {
                "value": 5.18,
                "prevValue": 0.73
            }
        }
    },
    "Тува": {
        "id": "Тува",
        "geo": "Тува",
        "summary": {
            "clicks": {
                "value": 113,
                "prevValue": 84
            },
            "impressions": {
                "value": 12175,
                "prevValue": 5083
            },
            "cpc": {
                "value": 10.35,
                "prevValue": 4.78
            },
            "conversions": {
                "value": 0,
                "prevValue": 0
            },
            "ctr": {
                "value": 0.93,
                "prevValue": 1.65
            },
            "cr": {
                "value": 0,
                "prevValue": 0
            },
            "cpa": {
                "value": 0,
                "prevValue": 0
            },
            "cost": {
                "value": 1170.06,
                "prevValue": 401.58
            }
        }
    },
    "Липецкая область": {
        "id": "Липецкая область",
        "geo": "Липецкая область",
        "summary": {
            "clicks": {
                "value": 479,
                "prevValue": 229
            },
            "impressions": {
                "value": 26718,
                "prevValue": 10835
            },
            "cpc": {
                "value": 8.42,
                "prevValue": 5.9
            },
            "conversions": {
                "value": 0,
                "prevValue": 0
            },
            "ctr": {
                "value": 1.79,
                "prevValue": 2.11
            },
            "cr": {
                "value": 0,
                "prevValue": 0
            },
            "cpa": {
                "value": 0,
                "prevValue": 0
            },
            "cost": {
                "value": 4034.43,
                "prevValue": 1351.08
            }
        }
    },
    "Нижегородская область": {
        "id": "Нижегородская область",
        "geo": "Нижегородская область",
        "summary": {
            "clicks": {
                "value": 933,
                "prevValue": 598
            },
            "impressions": {
                "value": 44318,
                "prevValue": 21284
            },
            "cpc": {
                "value": 8.95,
                "prevValue": 5.04
            },
            "conversions": {
                "value": 0,
                "prevValue": 0
            },
            "ctr": {
                "value": 2.11,
                "prevValue": 2.81
            },
            "cr": {
                "value": 0,
                "prevValue": 0
            },
            "cpa": {
                "value": 0,
                "prevValue": 0
            },
            "cost": {
                "value": 8351.66,
                "prevValue": 3011.41
            }
        }
    },
    "Пермский край": {
        "id": "Пермский край",
        "geo": "Пермский край",
        "summary": {
            "clicks": {
                "value": 917,
                "prevValue": 569
            },
            "impressions": {
                "value": 44159,
                "prevValue": 20015
            },
            "cpc": {
                "value": 8.72,
                "prevValue": 4.55
            },
            "conversions": {
                "value": 0,
                "prevValue": 0
            },
            "ctr": {
                "value": 2.08,
                "prevValue": 2.84
            },
            "cr": {
                "value": 0,
                "prevValue": 0
            },
            "cpa": {
                "value": 0,
                "prevValue": 0
            },
            "cost": {
                "value": 7998.35,
                "prevValue": 2587.45
            }
        }
    },
    "Приморский край": {
        "id": "Приморский край",
        "geo": "Приморский край",
        "summary": {
            "clicks": {
                "value": 1686,
                "prevValue": 1365
            },
            "impressions": {
                "value": 92213,
                "prevValue": 54512
            },
            "cpc": {
                "value": 8.55,
                "prevValue": 4.93
            },
            "conversions": {
                "value": 0,
                "prevValue": 0
            },
            "ctr": {
                "value": 1.83,
                "prevValue": 2.5
            },
            "cr": {
                "value": 0,
                "prevValue": 0
            },
            "cpa": {
                "value": 0,
                "prevValue": 0
            },
            "cost": {
                "value": 14422.7,
                "prevValue": 6732.39
            }
        }
    },
    "Курская область": {
        "id": "Курская область",
        "geo": "Курская область",
        "summary": {
            "clicks": {
                "value": 294,
                "prevValue": 171
            },
            "impressions": {
                "value": 17384,
                "prevValue": 7712
            },
            "cpc": {
                "value": 8.83,
                "prevValue": 5.49
            },
            "conversions": {
                "value": 0,
                "prevValue": 0
            },
            "ctr": {
                "value": 1.69,
                "prevValue": 2.22
            },
            "cr": {
                "value": 0,
                "prevValue": 0
            },
            "cpa": {
                "value": 0,
                "prevValue": 0
            },
            "cost": {
                "value": 2597.07,
                "prevValue": 939.23
            }
        }
    },
    "Калужская область": {
        "id": "Калужская область",
        "geo": "Калужская область",
        "summary": {
            "clicks": {
                "value": 371,
                "prevValue": 182
            },
            "impressions": {
                "value": 16815,
                "prevValue": 7676
            },
            "cpc": {
                "value": 8.31,
                "prevValue": 5.64
            },
            "conversions": {
                "value": 0,
                "prevValue": 0
            },
            "ctr": {
                "value": 2.21,
                "prevValue": 2.37
            },
            "cr": {
                "value": 0,
                "prevValue": 0
            },
            "cpa": {
                "value": 0,
                "prevValue": 0
            },
            "cost": {
                "value": 3083.3,
                "prevValue": 1026.85
            }
        }
    },
    "Республика Коми": {
        "id": "Республика Коми",
        "geo": "Республика Коми",
        "summary": {
            "clicks": {
                "value": 180,
                "prevValue": 118
            },
            "impressions": {
                "value": 9768,
                "prevValue": 4624
            },
            "cpc": {
                "value": 9.17,
                "prevValue": 4.99
            },
            "conversions": {
                "value": 0,
                "prevValue": 0
            },
            "ctr": {
                "value": 1.84,
                "prevValue": 2.55
            },
            "cr": {
                "value": 0,
                "prevValue": 0
            },
            "cpa": {
                "value": 0,
                "prevValue": 0
            },
            "cost": {
                "value": 1649.74,
                "prevValue": 588.36
            }
        }
    },
    "Тамбовская область": {
        "id": "Тамбовская область",
        "geo": "Тамбовская область",
        "summary": {
            "clicks": {
                "value": 286,
                "prevValue": 186
            },
            "impressions": {
                "value": 17703,
                "prevValue": 7576
            },
            "cpc": {
                "value": 8.68,
                "prevValue": 4.5
            },
            "conversions": {
                "value": 0,
                "prevValue": 0
            },
            "ctr": {
                "value": 1.62,
                "prevValue": 2.46
            },
            "cr": {
                "value": 0,
                "prevValue": 0
            },
            "cpa": {
                "value": 0,
                "prevValue": 0
            },
            "cost": {
                "value": 2482.82,
                "prevValue": 836.76
            }
        }
    },
    "Красноярский край": {
        "id": "Красноярский край",
        "geo": "Красноярский край",
        "summary": {
            "clicks": {
                "value": 1665,
                "prevValue": 1073
            },
            "impressions": {
                "value": 81306,
                "prevValue": 38943
            },
            "cpc": {
                "value": 8.53,
                "prevValue": 4.81
            },
            "conversions": {
                "value": 0,
                "prevValue": 0
            },
            "ctr": {
                "value": 2.05,
                "prevValue": 2.76
            },
            "cr": {
                "value": 0,
                "prevValue": 0
            },
            "cpa": {
                "value": 0,
                "prevValue": 0
            },
            "cost": {
                "value": 14207.56,
                "prevValue": 5160.01
            }
        }
    },
    "Псковская область": {
        "id": "Псковская область",
        "geo": "Псковская область",
        "summary": {
            "clicks": {
                "value": 115,
                "prevValue": 70
            },
            "impressions": {
                "value": 7694,
                "prevValue": 21545
            },
            "cpc": {
                "value": 8.99,
                "prevValue": 19
            },
            "conversions": {
                "value": 0,
                "prevValue": 0
            },
            "ctr": {
                "value": 1.49,
                "prevValue": 0.32
            },
            "cr": {
                "value": 0,
                "prevValue": 0
            },
            "cpa": {
                "value": 0,
                "prevValue": 0
            },
            "cost": {
                "value": 1034.13,
                "prevValue": 1330.16
            }
        }
    },
    "Челябинская область": {
        "id": "Челябинская область",
        "geo": "Челябинская область",
        "summary": {
            "clicks": {
                "value": 1256,
                "prevValue": 801
            },
            "impressions": {
                "value": 60652,
                "prevValue": 30658
            },
            "cpc": {
                "value": 8.52,
                "prevValue": 5.3
            },
            "conversions": {
                "value": 0,
                "prevValue": 0
            },
            "ctr": {
                "value": 2.07,
                "prevValue": 2.61
            },
            "cr": {
                "value": 0,
                "prevValue": 0
            },
            "cpa": {
                "value": 0,
                "prevValue": 0
            },
            "cost": {
                "value": 10699.23,
                "prevValue": 4247.59
            }
        }
    },
    "Сахалинская область": {
        "id": "Сахалинская область",
        "geo": "Сахалинская область",
        "summary": {
            "clicks": {
                "value": 414,
                "prevValue": 238
            },
            "impressions": {
                "value": 21857,
                "prevValue": 9986
            },
            "cpc": {
                "value": 8.93,
                "prevValue": 5.27
            },
            "conversions": {
                "value": 0,
                "prevValue": 0
            },
            "ctr": {
                "value": 1.89,
                "prevValue": 2.38
            },
            "cr": {
                "value": 0,
                "prevValue": 0
            },
            "cpa": {
                "value": 0,
                "prevValue": 0
            },
            "cost": {
                "value": 3697.65,
                "prevValue": 1254.62
            }
        }
    },
    "Рязанская область": {
        "id": "Рязанская область",
        "geo": "Рязанская область",
        "summary": {
            "clicks": {
                "value": 465,
                "prevValue": 220
            },
            "impressions": {
                "value": 21658,
                "prevValue": 9487
            },
            "cpc": {
                "value": 8.25,
                "prevValue": 5.28
            },
            "conversions": {
                "value": 0,
                "prevValue": 0
            },
            "ctr": {
                "value": 2.15,
                "prevValue": 2.32
            },
            "cr": {
                "value": 0,
                "prevValue": 0
            },
            "cpa": {
                "value": 0,
                "prevValue": 0
            },
            "cost": {
                "value": 3837.88,
                "prevValue": 1160.72
            }
        }
    },
    "Вологодская область": {
        "id": "Вологодская область",
        "geo": "Вологодская область",
        "summary": {
            "clicks": {
                "value": 313,
                "prevValue": 158
            },
            "impressions": {
                "value": 15797,
                "prevValue": 6561
            },
            "cpc": {
                "value": 7.93,
                "prevValue": 5.08
            },
            "conversions": {
                "value": 0,
                "prevValue": 0
            },
            "ctr": {
                "value": 1.98,
                "prevValue": 2.41
            },
            "cr": {
                "value": 0,
                "prevValue": 0
            },
            "cpa": {
                "value": 0,
                "prevValue": 0
            },
            "cost": {
                "value": 2482.9,
                "prevValue": 803.02
            }
        }
    },
    "Забайкальский край": {
        "id": "Забайкальский край",
        "geo": "Забайкальский край",
        "summary": {
            "clicks": {
                "value": 486,
                "prevValue": 368
            },
            "impressions": {
                "value": 31012,
                "prevValue": 25278
            },
            "cpc": {
                "value": 8.93,
                "prevValue": 5.94
            },
            "conversions": {
                "value": 0,
                "prevValue": 0
            },
            "ctr": {
                "value": 1.57,
                "prevValue": 1.46
            },
            "cr": {
                "value": 0,
                "prevValue": 0
            },
            "cpa": {
                "value": 0,
                "prevValue": 0
            },
            "cost": {
                "value": 4341.68,
                "prevValue": 2187.29
            }
        }
    },
    "Амурская область": {
        "id": "Амурская область",
        "geo": "Амурская область",
        "summary": {
            "clicks": {
                "value": 645,
                "prevValue": 497
            },
            "impressions": {
                "value": 43844,
                "prevValue": 25854
            },
            "cpc": {
                "value": 9.52,
                "prevValue": 5.44
            },
            "conversions": {
                "value": 0,
                "prevValue": 0
            },
            "ctr": {
                "value": 1.47,
                "prevValue": 1.92
            },
            "cr": {
                "value": 0,
                "prevValue": 0
            },
            "cpa": {
                "value": 0,
                "prevValue": 0
            },
            "cost": {
                "value": 6142.27,
                "prevValue": 2702.34
            }
        }
    },
    "Тульская область": {
        "id": "Тульская область",
        "geo": "Тульская область",
        "summary": {
            "clicks": {
                "value": 467,
                "prevValue": 271
            },
            "impressions": {
                "value": 21878,
                "prevValue": 10103
            },
            "cpc": {
                "value": 9.06,
                "prevValue": 5.3
            },
            "conversions": {
                "value": 0,
                "prevValue": 0
            },
            "ctr": {
                "value": 2.13,
                "prevValue": 2.68
            },
            "cr": {
                "value": 0,
                "prevValue": 0
            },
            "cpa": {
                "value": 0,
                "prevValue": 0
            },
            "cost": {
                "value": 4229.68,
                "prevValue": 1435.24
            }
        }
    },
    "Ставропольский край": {
        "id": "Ставропольский край",
        "geo": "Ставропольский край",
        "summary": {
            "clicks": {
                "value": 1234,
                "prevValue": 1089
            },
            "impressions": {
                "value": 76946,
                "prevValue": 48358
            },
            "cpc": {
                "value": 9.09,
                "prevValue": 5.39
            },
            "conversions": {
                "value": 0,
                "prevValue": 0
            },
            "ctr": {
                "value": 1.6,
                "prevValue": 2.25
            },
            "cr": {
                "value": 0,
                "prevValue": 0
            },
            "cpa": {
                "value": 0,
                "prevValue": 0
            },
            "cost": {
                "value": 11219.68,
                "prevValue": 5864.55
            }
        }
    },
    "Санкт-Петербург": {
        "id": "Санкт-Петербург",
        "geo": "Санкт-Петербург",
        "summary": {
            "clicks": {
                "value": 3428,
                "prevValue": 2170
            },
            "impressions": {
                "value": 103118,
                "prevValue": 208740
            },
            "cpc": {
                "value": 7.4,
                "prevValue": 8.84
            },
            "conversions": {
                "value": 0,
                "prevValue": 0
            },
            "ctr": {
                "value": 3.32,
                "prevValue": 1.04
            },
            "cr": {
                "value": 0,
                "prevValue": 0
            },
            "cpa": {
                "value": 0,
                "prevValue": 0
            },
            "cost": {
                "value": 25361.73,
                "prevValue": 19180.47
            }
        }
    },
    "Смоленская область": {
        "id": "Смоленская область",
        "geo": "Смоленская область",
        "summary": {
            "clicks": {
                "value": 161,
                "prevValue": 141
            },
            "impressions": {
                "value": 9707,
                "prevValue": 22584
            },
            "cpc": {
                "value": 9.79,
                "prevValue": 10.58
            },
            "conversions": {
                "value": 0,
                "prevValue": 0
            },
            "ctr": {
                "value": 1.66,
                "prevValue": 0.62
            },
            "cr": {
                "value": 0,
                "prevValue": 0
            },
            "cpa": {
                "value": 0,
                "prevValue": 0
            },
            "cost": {
                "value": 1575.65,
                "prevValue": 1492.4
            }
        }
    },
    "Саратовская область": {
        "id": "Саратовская область",
        "geo": "Саратовская область",
        "summary": {
            "clicks": {
                "value": 1138,
                "prevValue": 827
            },
            "impressions": {
                "value": 62582,
                "prevValue": 33034
            },
            "cpc": {
                "value": 9.26,
                "prevValue": 4.94
            },
            "conversions": {
                "value": 0,
                "prevValue": 0
            },
            "ctr": {
                "value": 1.82,
                "prevValue": 2.5
            },
            "cr": {
                "value": 0,
                "prevValue": 0
            },
            "cpa": {
                "value": 0,
                "prevValue": 0
            },
            "cost": {
                "value": 10537.92,
                "prevValue": 4082.88
            }
        }
    },
    "Хабаровский край": {
        "id": "Хабаровский край",
        "geo": "Хабаровский край",
        "summary": {
            "clicks": {
                "value": 1379,
                "prevValue": 954
            },
            "impressions": {
                "value": 72069,
                "prevValue": 36877
            },
            "cpc": {
                "value": 9.06,
                "prevValue": 5
            },
            "conversions": {
                "value": 0,
                "prevValue": 0
            },
            "ctr": {
                "value": 1.91,
                "prevValue": 2.59
            },
            "cr": {
                "value": 0,
                "prevValue": 0
            },
            "cpa": {
                "value": 0,
                "prevValue": 0
            },
            "cost": {
                "value": 12491.62,
                "prevValue": 4774.6
            }
        }
    },
    "Мурманская область": {
        "id": "Мурманская область",
        "geo": "Мурманская область",
        "summary": {
            "clicks": {
                "value": 210,
                "prevValue": 149
            },
            "impressions": {
                "value": 10225,
                "prevValue": 5369
            },
            "cpc": {
                "value": 9.05,
                "prevValue": 5.03
            },
            "conversions": {
                "value": 0,
                "prevValue": 0
            },
            "ctr": {
                "value": 2.05,
                "prevValue": 2.78
            },
            "cr": {
                "value": 0,
                "prevValue": 0
            },
            "cpa": {
                "value": 0,
                "prevValue": 0
            },
            "cost": {
                "value": 1900.45,
                "prevValue": 749.36
            }
        }
    },
    "Белгородская область": {
        "id": "Белгородская область",
        "geo": "Белгородская область",
        "summary": {
            "clicks": {
                "value": 411,
                "prevValue": 244
            },
            "impressions": {
                "value": 25178,
                "prevValue": 12203
            },
            "cpc": {
                "value": 9.75,
                "prevValue": 6.09
            },
            "conversions": {
                "value": 0,
                "prevValue": 0
            },
            "ctr": {
                "value": 1.63,
                "prevValue": 2
            },
            "cr": {
                "value": 0,
                "prevValue": 0
            },
            "cpa": {
                "value": 0,
                "prevValue": 0
            },
            "cost": {
                "value": 4009.12,
                "prevValue": 1484.99
            }
        }
    },
    "Калмыкия": {
        "id": "Калмыкия",
        "geo": "Калмыкия",
        "summary": {
            "clicks": {
                "value": 204,
                "prevValue": 172
            },
            "impressions": {
                "value": 14852,
                "prevValue": 8632
            },
            "cpc": {
                "value": 8.86,
                "prevValue": 4.47
            },
            "conversions": {
                "value": 0,
                "prevValue": 0
            },
            "ctr": {
                "value": 1.37,
                "prevValue": 1.99
            },
            "cr": {
                "value": 0,
                "prevValue": 0
            },
            "cpa": {
                "value": 0,
                "prevValue": 0
            },
            "cost": {
                "value": 1808.2,
                "prevValue": 769.2
            }
        }
    },
    "Камчатский край": {
        "id": "Камчатский край",
        "geo": "Камчатский край",
        "summary": {
            "clicks": {
                "value": 244,
                "prevValue": 189
            },
            "impressions": {
                "value": 14029,
                "prevValue": 7918
            },
            "cpc": {
                "value": 9.42,
                "prevValue": 4.9
            },
            "conversions": {
                "value": 0,
                "prevValue": 0
            },
            "ctr": {
                "value": 1.74,
                "prevValue": 2.39
            },
            "cr": {
                "value": 0,
                "prevValue": 0
            },
            "cpa": {
                "value": 0,
                "prevValue": 0
            },
            "cost": {
                "value": 2297.98,
                "prevValue": 926.7
            }
        }
    },
    "Брянская область": {
        "id": "Брянская область",
        "geo": "Брянская область",
        "summary": {
            "clicks": {
                "value": 382,
                "prevValue": 208
            },
            "impressions": {
                "value": 20188,
                "prevValue": 8404
            },
            "cpc": {
                "value": 9.07,
                "prevValue": 5.1
            },
            "conversions": {
                "value": 0,
                "prevValue": 0
            },
            "ctr": {
                "value": 1.89,
                "prevValue": 2.48
            },
            "cr": {
                "value": 0,
                "prevValue": 0
            },
            "cpa": {
                "value": 0,
                "prevValue": 0
            },
            "cost": {
                "value": 3463.3,
                "prevValue": 1060.3
            }
        }
    },
    "Омская область": {
        "id": "Омская область",
        "geo": "Омская область",
        "summary": {
            "clicks": {
                "value": 926,
                "prevValue": 783
            },
            "impressions": {
                "value": 44059,
                "prevValue": 23537
            },
            "cpc": {
                "value": 8.15,
                "prevValue": 4.03
            },
            "conversions": {
                "value": 0,
                "prevValue": 0
            },
            "ctr": {
                "value": 2.1,
                "prevValue": 3.33
            },
            "cr": {
                "value": 0,
                "prevValue": 0
            },
            "cpa": {
                "value": 0,
                "prevValue": 0
            },
            "cost": {
                "value": 7544.91,
                "prevValue": 3159.19
            }
        }
    },
    "Хакасия": {
        "id": "Хакасия",
        "geo": "Хакасия",
        "summary": {
            "clicks": {
                "value": 253,
                "prevValue": 128
            },
            "impressions": {
                "value": 15501,
                "prevValue": 6562
            },
            "cpc": {
                "value": 8.51,
                "prevValue": 5.64
            },
            "conversions": {
                "value": 0,
                "prevValue": 0
            },
            "ctr": {
                "value": 1.63,
                "prevValue": 1.95
            },
            "cr": {
                "value": 0,
                "prevValue": 0
            },
            "cpa": {
                "value": 0,
                "prevValue": 0
            },
            "cost": {
                "value": 2152.45,
                "prevValue": 722.38
            }
        }
    },
    "Иркутская обл.": {
        "id": "Иркутская обл.",
        "geo": "Иркутская обл.",
        "summary": {
            "clicks": {
                "value": 1332,
                "prevValue": 975
            },
            "impressions": {
                "value": 75164,
                "prevValue": 38258
            },
            "cpc": {
                "value": 8.76,
                "prevValue": 4.86
            },
            "conversions": {
                "value": 0,
                "prevValue": 0
            },
            "ctr": {
                "value": 1.77,
                "prevValue": 2.55
            },
            "cr": {
                "value": 0,
                "prevValue": 0
            },
            "cpa": {
                "value": 0,
                "prevValue": 0
            },
            "cost": {
                "value": 11662.92,
                "prevValue": 4736.24
            }
        }
    },
    "Адыгея": {
        "id": "Адыгея",
        "geo": "Адыгея",
        "summary": {
            "clicks": {
                "value": 163,
                "prevValue": 151
            },
            "impressions": {
                "value": 11038,
                "prevValue": 7363
            },
            "cpc": {
                "value": 9.39,
                "prevValue": 5.58
            },
            "conversions": {
                "value": 0,
                "prevValue": 0
            },
            "ctr": {
                "value": 1.48,
                "prevValue": 2.05
            },
            "cr": {
                "value": 0,
                "prevValue": 0
            },
            "cpa": {
                "value": 0,
                "prevValue": 0
            },
            "cost": {
                "value": 1530.54,
                "prevValue": 842.38
            }
        }
    },
    "Республика Карелия": {
        "id": "Республика Карелия",
        "geo": "Республика Карелия",
        "summary": {
            "clicks": {
                "value": 187,
                "prevValue": 86
            },
            "impressions": {
                "value": 8108,
                "prevValue": 3423
            },
            "cpc": {
                "value": 6.95,
                "prevValue": 5.29
            },
            "conversions": {
                "value": 0,
                "prevValue": 0
            },
            "ctr": {
                "value": 2.31,
                "prevValue": 2.51
            },
            "cr": {
                "value": 0,
                "prevValue": 0
            },
            "cpa": {
                "value": 0,
                "prevValue": 0
            },
            "cost": {
                "value": 1299.32,
                "prevValue": 455.22
            }
        }
    },
    "Новосибирская область": {
        "id": "Новосибирская область",
        "geo": "Новосибирская область",
        "summary": {
            "clicks": {
                "value": 1683,
                "prevValue": 1219
            },
            "impressions": {
                "value": 74631,
                "prevValue": 38121
            },
            "cpc": {
                "value": 8.69,
                "prevValue": 5
            },
            "conversions": {
                "value": 0,
                "prevValue": 0
            },
            "ctr": {
                "value": 2.26,
                "prevValue": 3.2
            },
            "cr": {
                "value": 0,
                "prevValue": 0
            },
            "cpa": {
                "value": 0,
                "prevValue": 0
            },
            "cost": {
                "value": 14621.45,
                "prevValue": 6090.37
            }
        }
    }*/
