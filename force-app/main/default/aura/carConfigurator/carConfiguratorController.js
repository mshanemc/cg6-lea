({
    doInit : function(component, event, helper) {
        component.set('v.selectedVehicle', null);
        component.set('v.data', [
            {
                label: 'SUV',
                vehicles: [
                    {
                        label: 'XC90',
                        description: 'Experience uncluttered design with cutting-edge innovation creating a calming Scandinavian sanctuary.',
                        mpg: 29,
                        L100km: helper.mpgToL100km(29),
                        hp: '250-400',
                        kW: helper.hpTokW(250, 400),
                        img: 'https://cas.volvocars.com/image/vbsNext-v4/exterior/MY17_1617/256/10/52/61400/R118/_/TP03/_/_/_/_/SR03/_/_/JB07/T211/SideModelpage.jpg?bg=ffffff&market=us&fallback=1&w=375',
                        options: [{
                            engine: [
                                {
                                    name: 'T5 FWD',
                                    hp: 250,
                                    torque: '258',
                                    mpg: 29,
                                    L100km: helper.mpgToL100km(29),
                                    price: 46900
                                },
                                {
                                    name: 'T5 AWD',
                                    hp: 250,
                                    torque: '258',
                                    mpg: 28,
                                    L100km: helper.mpgToL100km(28),
                                    price: 49100
                                },
                                {
                                    name: 'T6 AWD',
                                    hp: 316,
                                    torque: '295',
                                    mpg: 27,
                                    L100km: helper.mpgToL100km(27),
                                    price: 54350
                                },
                                {
                                    name: 'T8 eAWD Plug-in Hybrid',
                                    hp: 400,
                                    torque: '472',
                                    mpg: 27,
                                    L100km: helper.mpgToL100km(27),
                                    price: 64950
                                }
                            ]
                        }]
                    },
                    {
                        label: 'XC60',
                        description: 'Dynamic, refined and intuitive – the Swedish SUV has evolved.',
                        mpg: 28,
                        L100km: helper.mpgToL100km(28),
                        hp: '250-400',
                        kW: helper.hpTokW(250, 400),
                        img: 'https://cas.volvocars.com/image/vbsNext-v4/exterior/MY18_1717/246/10/42/61400/R11B/_/TP02/_/_/_/_/SR03/_/_/JB09/T211/SideModelpage.jpg?bg=ffffff&market=us&fallback=1&w=375'
                    },
                    {
                        label: 'XC40',
                        description: 'Strong, contemporary style with a confident urban look, available in contrasting combinations.',
                        mpg: 33,
                        L100km: helper.mpgToL100km(33),
                        hp: '187-248',
                        kW: helper.hpTokW(187, 248),
                        img: 'https://cas.volvocars.com/image/vbsNext-v4/exterior/MY18_1746/536/AC/42/01900/R137/_/TP02/_/_/_/_/SR06/_/_/JB09/T210/SideModelpage.jpg?bg=ffffff&market=us&fallback=1&w=375'
                    }
                ]
            },
            {
                label: 'Crossover/Wagon',
                vehicles:[]
            },
            {
                label: 'Sedan',
                vehicles: [
                    {
                        label: 'S90',
                        description: 'Experience modern Scandinavian luxury. A luxurious sedan made by Sweden.',
                        mpg: 34,
                        L100km: helper.mpgToL100km(34),
                        hp: '250-400',
                        kW: helper.hpTokW(250, 400),
                        img: 'https://cas.volvocars.com/image/vbsNext-v4/exterior/MY17_1646/238/98/42/01900/R104/_/_/_/_/_/_/SR03/_/_/JB07/T211/SideModelpage.jpg?bg=ffffff&market=us&fallback=1&w=375'
                    },
                    {
                        label: 'S60',
                        description: 'Three impressive powertrains and all - around innovative and stylish features, there’s an S60 to fit your lifestyle.',
                        mpg: 36,
                        L100km: helper.mpgToL100km(36),
                        hp: '240-362',
                        kW: helper.hpTokW(240, 362),
                        img: 'https://cas.volvocars.com/image/vbsNext-v3/exterior/MY14_1320/134/26/36/61400/R14E/_/_/_/_/_/_/_/_/_/SideModelpage.jpg?bg=ffffff&market=us&fallback=1&w=375'
                    }
                ]
            },

        ]);
        component.set('v.markers', [
            {
                location: {
                    'City': 'The Woodlands',
                    'Country': 'USA',
                    'PostalCode': '77385',
                    'State': 'TX',
                    'Street': '16785 A Interstate 45 S'
                },
                title: 'Volvo Cars of the Woodlands'
            }
        ]);

    },

    tabChange : function(component, event) {
        var tab = event.getSource().get('v.id');
        component.set('v.vehicles', component.get('v.data').find(item => item.label === tab).vehicles);
    },

    vehicleSelect : function(component, event) {
        console.log(event);
        console.log(event.getSource());

        var vehicle = event.getSource().get('v.value');
        console.log(vehicle);
        component.set('v.selectedVehicle', vehicle);
        component.set('v.testDrive', false);
        component.set('v.vehicles', component.get('v.vehicles').find(item => item.label === vehicle));
    },

    testDrive : function(component) {
        component.set('v.now', new Date().toJSON());
        component.set('v.testDrive', true);
    },

    testDrive2: function () {
        // component.find('notifLib').showToast({
        //     "message": "Test drive scheduled!",
        // });

        $A.get("e.force:showToast").setParams({"type" : "info", "message" : "Thanks for scheduling a test drive!"}).fire();
    }
})


