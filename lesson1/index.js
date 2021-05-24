'use strict';

const Hapi = require('@hapi/hapi');
const Inert = require('@hapi/inert');
const Vision = require('@hapi/vision');
const HapiSwagger = require('hapi-swagger');
const Pack = require('./package');

const init = async () => {

    const server = await new Hapi.server({
        port: 3000,
        host: 'localhost'
    });
    const swaggerOptions = {
        info: {
            title: 'Game API Documentation',
            version: Pack.version,
        },
    };
    await server.register([
        Inert,
        Vision,
        {
            plugin: HapiSwagger,
            options: swaggerOptions
        }
    ]);

    server.route({
        method: 'GET',
        path: '/',
        options: {
            handler: (request, h) => {
                return '<p>GAME API<br><a href="/documentation">Documentation</a></p>';
            },
            tags: ['api']
        }
    });
    server.route({
        method: 'GET',
        path: '/healthz',
        options: {
            handler: (request, h) => {
                return { 'game-api': 'up' };
            },
            tags: ['api']
        }
    });
    server.route({
        method: 'GET',
        path: '/sony',
        options: {
            handler: (request, h) => {
                return h.redirect('/playstation');
            },
            tags: ['api']
        }
    });
    server.route({
        method: 'GET',
        path: '/microsoft',
        options: {
            handler: (request, h) => {
                return h.redirect('/xbox');
            },
            tags: ['api']
        }
    });
    server.route({
        method: 'GET',
        path: '/playstation',
        options: {
            handler: (request, h) => {
                return {
                    'Sony PlayStation 4': [
                        'Crash Bandicoot: N Sane Trilogy',
                        'Fallout 4',
                        'Final Fantasy XII: The Zodiac Age',
                        'Mass Effect Andromeda',
                        'The Outer Worlds',
                        'Spider-Man'
                    ],
                    'Sony PlayStation 3': [
                        'Active 2',
                        'Final Fantasy XIII',
                        'Guitar Hero III: Legends of Rock',
                        'Guitar Hero 5',
                        'Little Big Planet',
                        'Metal Gear Solid 4: Guns of the Patriots',
                        'Portal 2'
                    ],
                    'Sony PlayStation 2': [
                        'Arc the Lad: Twilight of the Spirits',
                        'The Bouncer',
                        'Breath of Fire: Dragon Quarter',
                        'Dance Dance Revolution Extreme',
                        'Devil May Cry',
                        'Devil May Cry 2',
                        'Final Fantasy X',
                        'Final Fantasy X-2',
                        'Final Fantasy XII',
                        'Front Mission 4',
                        'Gran Turismo 3 A-spec',
                        'Grand Theft Auto III',
                        'Grand Theft Auto: Vice City',
                        'Grand Theft Auto: San Andreas',
                        'Grand Theft Auto: Liberty City Stories',
                        'Grand Theft Auto: Vice City Stories',
                        'Guitar Hero',
                        'Guitar Hero II',
                        'Guitar Hero Encore: Rocks the 80s',
                        'Kingdom Hearts',
                        'Manhunt',
                        'Metal Gear Solid 2: Sons of Liberty',
                        'Metal Gear Solid 2: Substance',
                        'Metal Gear Solid 3: Snake Eater',
                        'Onimusha',
                        'Red Faction',
                        'Sega Genesis Collection',
                        'Tony Hawk\'s Pro Skater 3',
                        'Xenosaga: Episode I',
                        'Zone of the Enders',
                        'Zone of the Enders: The 2nd Runner'
                    ]
                };
            },
            tags: ['api']
        }
    });
    server.route({
        method: 'GET',
        path: '/xbox',
        options: {
            handler: (request, h) => {
                return {
                    'Microsoft Xbox Series X': [
                        'Assassin\'s Creed Valhalla',
                        'Crash Bandicoot 4',
                        'Mass Effect Legendary Edition',
                        'Minecraft',
                        'Rare Replay',
                        'Red Dead Redemption II',
                        'Titanfall 2'
                    ],
                    'Microsoft Xbox 360': [
                        'Assassin\'s Creed',
                        'Assassin\'s Creed II',
                        'Dragon Age Origins',
                        'Call of Duty: Modern Warfare 2',
                        'Call of Duty: Modern Warfare 3',
                        'The Elder Scrolls IV: Oblivion',
                        'The Elder Scrolls V: Skyrim',
                        'Fallout 3',
                        'Fallout New Vegas',
                        'Grand Theft Auto IV',
                        'Halo 3',
                        'Mass Effect',
                        'Mass Effect 2',
                        'Mass Effect 3',
                        'NCAA Football 10'
                    ]
                };
            },
            tags: ['api']
        }
    });
    server.route({
        method: 'GET',
        path: '/nintendo',
        options: {
            handler: (request, h) => {
                return {
                    'Nintendo Switch': [
                        'America\'s Greatest Game Shows: Wheel of Fortune & Jeopardy',
                        'Diablo III Eternal Collection',
                        'The Elder Scrolls V: Skyrim',
                        'Final Fantasy X/X2 HD Remaster',
                        'Final Fantasy XII: The Zodiac Age',
                        'Hyrule Warriors: Age of Calamity',
                        'Mario Kart 8 Deluxe',
                        'New Super Mario Bros. U Deluxe',
                        'Octopath Traveler',
                        'Sega Genesis Classics',
                        'Sonic Forces',
                        'Splatoon 2',
                        'Super Mario 3D All-Stars',
                        'Super Mario Odyssey',
                        'The Legend of Zelda: Breath of the Wild',
                        'The Legend of Zelda: Link\'s Awakening'
                    ],
                    'Nintendo Wii': [
                        'Dance Dance Revolution',
                        'The Godfather: Blackhand Edition',
                        'Just Dance',
                        'Just Dance Disney Party',
                        'The Legend of Zelda: Skyward Sword',
                        'Link\'s Crossbow Training',
                        'Mario Kart Wii',
                        'Mario Party 8',
                        'Lego Star Wars: The Complete Saga',
                        'Star Wars: The Force Unleashed',
                        'New Super Mario Bros. Wii',
                        'Super Mario Galaxy',
                        'Super Paper Mario',
                        'Super Smash Bros. Brawl',
                        'Wheel of Fortune',
                        'Wii Play',
                        'Wii Sports'
                    ]
                };
            },
            tags: ['api']
        }
    });

    await server.start();
    console.log('Server running on %s', server.info.uri);
};

process.on('unhandledRejection', (err) => {

    console.log(err);
    process.exit(1);
});

init();