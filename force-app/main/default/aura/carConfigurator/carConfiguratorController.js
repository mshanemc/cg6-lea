({
    doInit : function(component) {
        component.set('v.selectedVehicle', null);
        component.set('v.data', [
            {
                label: 'SUV',
                vehicles: [
                    {
                        label: 'XC90',
                        description: 'Experience uncluttered design with cutting-edge innovation creating a calming Scandinavian sanctuary.',
                        mpg: 29,
                        hp: '250-400',
                        img: 'https://cas.volvocars.com/image/vbsNext-v4/exterior/MY17_1617/256/10/52/61400/R118/_/TP03/_/_/_/_/SR03/_/_/JB07/T211/SideModelpage.jpg?bg=ffffff&market=us&fallback=1&w=375'
                    },
                    {
                        label: 'XC60',
                        description: 'Dynamic, refined and intuitive – the Swedish SUV has evolved.',
                        mpg: 28,
                        hp: '250-400',
                        img: 'https://cas.volvocars.com/image/vbsNext-v4/exterior/MY18_1717/246/10/42/61400/R11B/_/TP02/_/_/_/_/SR03/_/_/JB09/T211/SideModelpage.jpg?bg=ffffff&market=us&fallback=1&w=375'
                    },
                    {
                        label: 'XC40',
                        description: 'Strong, contemporary style with a confident urban look, available in contrasting combinations.',
                        mpg: 33,
                        hp: '187-248',
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
                        hp: '250-400',
                        img: 'https://cas.volvocars.com/image/vbsNext-v4/exterior/MY17_1646/238/98/42/01900/R104/_/_/_/_/_/_/SR03/_/_/JB07/T211/SideModelpage.jpg?bg=ffffff&market=us&fallback=1&w=375'
                    },
                    {
                        label: 'S60',
                        description: 'Three impressive powertrains and all - around innovative and stylish features, there’s an S60 to fit your lifestyle.',
                        mpg: 36,
                        hp: '240-362',
                        img: 'https://cas.volvocars.com/image/vbsNext-v3/exterior/MY14_1320/134/26/36/61400/R14E/_/_/_/_/_/_/_/_/_/SideModelpage.jpg?bg=ffffff&market=us&fallback=1&w=375'
                    }
                ]
            },

        ]);

    },

    tabChange : function(component, event) {
        var tab = event.getSource().get('v.id');
        component.set('v.vehicles', component.get('v.data').find(item => item.label === tab).vehicles);
    },

    vehicleSelect : function(component, event, helper) {
        var vehicle = event.getSource().get('v.value');
        console.log(vehicle);
        component.set('v.selectedVehicle', vehicle);
        component.set('v.vehicles', component.get('v.vehicles').find(item => item.label === vehicle));
    },
})


