var responses = {

    auth: {
        success: {
            "ResponseCode": 200,
            "Message": "Successful",
            "AuthenticatedUser": {
                "Name": "Joe Bloggs",
                "Agency": "San Francisco Agency Corp",
                "Login": "joe.bloggs@example.com",
                "ShowAdvisories": true,
                "IsMasterAccount": true,
                "Avatar": "/an/avatar/",
                "UserId": 1,
                "ClientId": 1,
                "ContactId": 1,
                "Sso": "an,sso,token"
            }
        },

        failure: {}
    },

    contacts: [
        {"$id": "1", "Initial": "C", "Contacts": [
            {"$id": "2", "ContactId": 8,  "ContactType": "AGENT",  "Name": "Cain Allan",      "PrimaryContact": {"$id": "3", "Type": "Telephone", "Value": "07977 585 665"}, "Avatar": "/images/avatars/default.jpg", "UserId": 13},
            {"$id": "4", "ContactId": 16, "ContactType": "CLIENT", "Name": "Chris Laythorpe", "PrimaryContact": {"$id": "5", "Type": "Telephone", "Value": "+447977559776"}, "Avatar": "/images/avatars/default.jpg", "UserId": null},
            {"$id": "6", "ContactId": 17, "ContactType": "CLIENT", "Name": "Chris Barker",    "PrimaryContact": null, "Avatar": "/images/avatars/talent/randomiser/2.jpg", "UserId": null}
        ]},
        {"$id": "7", "Initial": "D", "Contacts": [
            {"$id": "8", "ContactId": 13, "ContactType": "PHOTOGRAPHER", "Name": "Dan Carter", "PrimaryContact": null, "Avatar": "/images/avatars/default.jpg", "UserId": null}
        ]},
        {"$id": "9", "Initial": "I", "Contacts": [
            {"$id": "10", "ContactId": 21, "ContactType": "JOURNALIST", "Name": "Isabel Marchant", "PrimaryContact": {"$id": "11", "Type": "Telephone", "Value": "07871 828350"}, "Avatar": "/images/avatars/contacts/randomiser/6.jpg", "UserId": null}
        ]},
        {"$id": "12", "Initial": "J", "Contacts": [
            {"$id": "13", "ContactId": 15, "ContactType": "CLIENT", "Name": "James Tite",   "PrimaryContact": null, "Avatar": "/images/avatars/default.jpg", "UserId": null},
            {"$id": "14", "ContactId": 20, "ContactType": "AGENT",  "Name": "John Wyndham", "PrimaryContact": null, "Avatar": "/images/avatars/contacts/randomiser/7.jpg", "UserId": null}
        ]},
        {"$id": "15", "Initial": "R", "Contacts": [
            {"$id": "16", "ContactId": 19, "ContactType": "TRAVEL_AGENT", "Name": "Russell Jacob", "PrimaryContact": null, "Avatar": "/images/avatars/contacts/randomiser/7.jpg", "UserId": null}
        ]},
        {"$id": "17", "Initial": "S", "Contacts": [
            {"$id": "18", "ContactId": 10, "ContactType": "TRAVEL_AGENT", "Name": "Spencer Baldwin", "PrimaryContact": {"$id": "19", "Type": "Cell/Mobile", "Value": "+44 7977 558994"}, "Avatar": "/client/vault/00703528-04e8-4068-b7eb-72fa15c8de3b/contacts/6e8dc84f9734d7885f342817c91d68aca748d8c8_m.jpg", "UserId": null},
            {"$id": "20", "ContactId": 18, "ContactType": "AGENT",        "Name": "Simon Coutts",    "PrimaryContact": null, "Avatar": "/images/avatars/contacts/randomiser/4.jpg", "UserId": null}
        ]}
    ]
};