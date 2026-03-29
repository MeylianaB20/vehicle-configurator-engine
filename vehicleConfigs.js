const vehicleConfigs = {
    defaults: {
        id: 'marv_sv',
        lift: 0,
        color: '#B91818',
        roughness: 0.6,
        addons: {},
        wheel_offset: 0,
        rim: 'toyota_4runner_5thgen',
        rim_color: 'silver',
        rim_color_secondary: 'silver',
        rim_diameter: 17,
        rim_width: 10,
        tire: 'bfg_at',
        tire_diameter: 32,
        spare: true,
        name: 'Marv (S)',
        container_color: '#B91818',
    },
    vehicles: {
        marv_sv: {
            name: 'Marv (S)',
            make: 'Marv',
            model: 'assets/models/vehicles/marv/sv/sv.glb',
            default_addons: {},
            addons: {
                box: {
                    name: 'Box',
                    color: '#B91818',
                    required: true,
                    options: {
                        container: {
                            name: 'Container',
                            model: 'assets/models/vehicles/marv/sv/container.glb',
                        },
                        flat: {
                            name: 'Flat',
                            model: 'assets/models/vehicles/marv/sv/flat.glb',
                        },
                        open_box: {
                            name: 'Open Box',
                            model: 'assets/models/vehicles/marv/sv/open_box.glb',
                        },
                    },
                },
            },
        },
        marv_mv: {
            name: 'Marv (M)',
            make: 'Marv',
            model: 'assets/models/vehicles/marv/mv/mv.glb',
            default_addons: {},
            addons: {
                box: {
                    name: 'Box',
                    color: '#B91818',
                    required: true,
                    options: {
                        container: {
                            name: 'Container',
                            model: 'assets/models/vehicles/marv/mv/container.glb',
                        },
                        flat: {
                            name: 'Flat',
                            model: 'assets/models/vehicles/marv/mv/flat.glb',
                        },
                        open_box: {
                            name: 'Open Box',
                            model: 'assets/models/vehicles/marv/mv/open_box.glb',
                        },
                    },
                },
            },
        },
        marv_lv: {
            name: 'Marv (L)',
            make: 'Marv',
            model: 'assets/models/vehicles/marv/lv/lv.glb',
            default_addons: {},
            addons: {
                box: {
                    name: 'Box',
                    color: '#B91818',
                    required: true,
                    options: {
                        container: {
                            name: 'Container',
                            model: 'assets/models/vehicles/marv/lv/container.glb',
                        },
                        flat: {
                            name: 'Flat',
                            model: 'assets/models/vehicles/marv/lv/flat.glb',
                        },
                        open_box: {
                            name: 'Open Box',
                            model: 'assets/models/vehicles/marv/lv/open_box.glb',
                        },
                    },
                },
            },
        },
    },
    wheels: {
        rims: {
            toyota_4runner_5thgen: {
                make: 'Toyota',
                name: 'Toyota 4Runner 5th gen',
                model: 'assets/models/wheels/rims/toyota_4runner.glb',
                width: 0.5,
                od: 1,
            },
        },
        tires: {
            bfg_at: {
                make: 'BFGoodrich',
                name: 'BFGoodrich A/T',
                model: 'assets/models/wheels/tires/bfg_at.glb',
                width: 0.26,
                od: 0.895,
                id: 0.43,
            },
        },
    },
}

export default vehicleConfigs
