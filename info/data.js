var rooms = [
    {
        "hallId" : 1,
        'hallType' : 'Banquet/wedding Style',
        'capacity' : 80,
        'amenities' : ["A/C", "chairs", "table", "Power Backup"],
        "cost" : 8000
    },
    {
        "hallId" : 2,
        'hallType' : 'Board Meeting Style',
        'capacity' : 20,
        'amenities' : ["A/C", "chairs", "table", "Power Backup", "Projectors"],
        "cost" : 6000
    },
    {
        "hallId" : 3,
        'hallType' : 'Hollow square Style',
        'capacity' : 40,
        'amenities' : ["A/C", "chairs", "table", "Power Backup"],
        "cost" : 7500
    },
    {
        "hallId" : 4,
        'hallType' : 'Lecture/Training Style',
        'capacity' : 25,
        'amenities' : ["A/C", "chairs", "table", "Power Backup", "Projector"],
        "cost" : 5000
    },
    {
        "hallId" : 5,
        'hallType' : 'Class Room Style',
        'capacity' : 20,
        'amenities' : ["A/C", "chairs", "table", "Power Backup", "Projector"],
        "cost" : 9000
    },
    {
        "hallId" : 6,
        'hallType' : 'T Shape',
        'capacity' : 20,
        'amenities' : ["A/C", "chairs", "table", "Power Backup", "Projector"],
        "cost" : 6500
    },
    {
        "hallId" : 7,
        'hallType' : 'Theater Style',
        'capacity' : 35,
        'amenities' : ["A/C", "chairs", "table", "Power Backup", "Projector"],
        "cost" : 6500
    },
    {
        "hallId" : 8,
        'hallType' : 'U shape',
        'capacity' : 30,
        'amenities' : ["A/C", "chairs", "table", "Power Backup", "Projector"],
        "cost" : 8000
    }
];

var booking = [
    {
        "customerName" : "customer1",
        "Date" : "YYYY-MM-DD",
        "startTime" : "HH-MM-SS",
        "endTime" : "HH-MM-SS",
        "RoomId" : 3
    },
    {
        "customerName" : "customer2",
        "Date" : "YYYY-MM-DD",
        "startTime" : "HH-MM-SS",
        "endTime" : "HH-MM-SS",
        "RoomId" : 6
    },
    {
        "customerName" : "customer3",
        "Date" : "YYYY-MM-DD",
        "startTime" : "HH-MM-SS",
        "endTime" : "HH-MM-SS",
        "RoomId" : 1
    }
];

var booked = [
    {
        "roomName" : "Banquet Style" ,
        "BookingStatus" : true ,
        "customerName" : "Prateek",
        "date" : "2020-10-19",
        "startTime" : "10-00-00" ,
        "endTime" : "14-00-00"
    },
    {
        "roomName" : "Hollow square Style" ,
        "BookingStatus" : true ,
        "customerName" : "Anirudh",
        "date" : "2020-11-08",
        "startTime" : "14-30-00" ,
        "endTime" : "16-30-00"
    },
    {
        "roomName" : "T Shape" ,
        "BookingStatus" : true ,
        "customerName" : "Kuldeep",
        "date" : "2021-02-03",
        "startTime" : "10-00-00" ,
        "endTime" : "16-00-00"
    }
]

var customer = [
    {
        "customerName" : "Kuldeep",
        "roomName" : "T Shape",
        "date" : "2021-02-03",
        "startTime" : "10-00-00" ,
        "endTime" : "16-00-00"
    },
    {
        "customerName" : "Prateek",
        "roomName" : "Banquet Style",
        "date" : "2020-10-19",
        "startTime" : "10-00-00" ,
        "endTime" : "14-00-00"
    },
    {
        "customerName" : "Anirudh",
        "roomName" : "Hallow Square Style",
        "date" : "2020-11-08",
        "startTime" : "14-30-00" ,
        "endTime" : "16-30-00"
    }
    

]

module.exports = {rooms, booking, booked, customer};