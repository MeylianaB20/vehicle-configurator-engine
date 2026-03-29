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
            xd_grenade: {
                make: 'XD Wheels',
                name: 'XD Series Grenade',
                model: 'assets/models/wheels/rims/xd_grenade.glb',
                width: 0.5,
                od: 1,
            },
            xd_machete: {
                make: 'XD Wheels',
                name: 'XD Machete',
                model: 'assets/models/wheels/rims/xd_machete.glb',
                width: 0.5,
                od: 1,
            },
            level_8_strike_6: {
                make: 'Level 8',
                name: 'Level 8 Strike 6',
                model: 'assets/models/wheels/rims/level_8_strike_6.glb',
                width: 0.5,
                od: 1,
            },
            konig_countersteer: {
                make: 'Konig',
                name: 'Konig Countersteer',
                model: 'assets/models/wheels/rims/konig_countersteer.glb',
                width: 0.5,
                od: 1,
            },
            cragar_soft_8: {
                make: 'Crager',
                name: 'Cragar Soft 8',
                model: 'assets/models/wheels/rims/cragar_soft_8.glb',
                width: 0.5,
                od: 1,
            },
            moto_metal_mO951: {
                make: 'Moto Metal',
                name: 'Moto Metal MO951',
                model: 'assets/models/wheels/rims/moto_metal_mO951.glb',
                width: 0.5,
                od: 1,
            },
            ar_mojave: {
                make: 'American Racing',
                name: 'American Racing Mojave',
                model: 'assets/models/wheels/rims/ar_mojave.glb',
                width: 0.5,
                od: 1,
            },
            toyota_4runner_5thgen: {
                make: 'Toyota',
                name: 'Toyota 4Runner 5th gen',
                model: 'assets/models/wheels/rims/toyota_4runner.glb',
                width: 0.5,
                od: 1,
            },
            toyota_trd: {
                make: 'Toyota',
                name: 'Toyota TRD Pro',
                model: 'assets/models/wheels/rims/toyota_trd.glb',
                width: 0.5,
                od: 1,
            },
            ford_bronco: {
                make: 'Ford',
                name: 'Ford Bronco',
                model: 'assets/models/wheels/rims/ford_bronco.glb',
                width: 0.5,
                od: 1,
            },
        },
        tires: {
            nitto_mud_grappler: {
                make: 'Nitto',
                name: 'Nitto Mud Grappler',
                model: 'assets/models/wheels/tires/mud_grappler.glb',
                width: 0.32,
                od: 0.883,
                id: 0.48,
            },
            bfg_at: {
                make: 'BFGoodrich',
                name: 'BFGoodrich A/T',
                model: 'assets/models/wheels/tires/bfg_at.glb',
                width: 0.26,
                od: 0.895,
                id: 0.43,
            },
            bfg_km3: {
                make: 'BFGoodrich',
                name: 'BFGoodrich KM3',
                model: 'assets/models/wheels/tires/bfg_km3.glb',
                width: 0.267,
                od: 0.849,
                id: 0.48,
            },
            bfg_km2: {
                make: 'BFGoodrich',
                name: 'BFGoodrich KM2',
                model: 'assets/models/wheels/tires/bfg_km2.glb',
                width: 0.245,
                od: 0.837,
                id: 0.44,
            },
            maxxis_trepador: {
                make: 'Maxxis',
                name: 'Maxxis Trepador',
                model: 'assets/models/wheels/tires/maxxis_trepador.glb',
                width: 0.34,
                od: 0.92,
                id: 0.445,
            },
        },
    },
    containers: {
        container_1: {
            make: 'Cont',
            name: 'Container 1',
            model: 'assets/models/containers/con-1.glb',
        },
        container_2: {
            make: 'Contain',
            name: 'Container 2',
            model: 'assets/models/containers/open_box.glb',
        },
        container_3: {
            make: 'Container',
            name: 'Container 3',
            model: 'assets/models/containers/con-3.glb',
        },
    },
}

export default vehicleConfigs
