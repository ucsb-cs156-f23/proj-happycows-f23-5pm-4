const commonsPlusFixtures = {
    threeCommonsPlus: [
        {
            "commons": {
                "id": 1,
                "name": "com",
                "cowPrice": 1.0,
                "milkPrice": 1.0,
                "startingBalance": 10.0,
                "startingDate": "2022-11-22",
                "lastDate": "2023-12-31",
                "endingDate": null,
                "degradationRate": 0.01,
                "showLeaderboard": false,
                "capacityPerUser": 50,
                "carryingCapacity": 100,
            },
            "totalCows": 10,
            "totalUsers": 2,
            "effectiveCapacity": 100
        },
        {
            "commons":
            {
                "id": 2,
                "name": "Com2",
                "cowPrice": 1.0,
                "milkPrice": 2.0,
                "startingBalance": 10.0,
                "startingDate": "2022-11-22",
                "lastDate": "2024-05-03",
                "endingDate": null,
                "degradationRate": 0.01,
                "showLeaderboard": true,
                "capacityPerUser": 5,
                "carryingCapacity": 42,
            },
            "totalCows": 0,
            "totalUsers": 1,
            "effectiveCapacity": 42
        },
        {
            "commons":
            {
                "id": 3,
                "name": "Not DLG",
                "cowPrice": 10.0,
                "milkPrice": 3.0,
                "startingBalance": 74.0,
                "startingDate": "2022-11-26",
                "lastDate": "2036-01-01",
                "endingDate": null,
                "degradationRate": 5.0,
                "showLeaderboard": true,
                "capacityPerUser": 50,
                "carryingCapacity": 123,
            },
            "totalCows": 0,
            "totalUsers": 1,
            "effectiveCapacity": 123
        },

    ],
    oneCommonsPlus: [
        {
            "commons":
            {
                "id": 4,
                "name": "Test",
                "cowPrice": 10.0,
                "milkPrice": 1.0,
                "startingBalance": 100.0,
                "startingDate": "2022-11-11",
                "lastDate": "2024-01-01",
                "endingDate": null,
                "degradationRate": 3.0,
                "showLeaderboard": false,
                "capacityPerUser": 1,
                "carryingCapacity": 23,
            },
            "totalCows": 0,
            "totalUsers": 0,
            "effectiveCapacity": 23
        }
    ]
}

export default commonsPlusFixtures;
