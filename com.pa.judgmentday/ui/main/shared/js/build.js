
function BuildHotkeyModel() {
    var self = this;

    self.SpecIdToGridMap = ko.observable(
        {
            "/pa/units/land/control_module/control_module.json": ["utility", 1],
            "/pa/units/land/radar_adv/radar_adv.json": ["utility", 2],
            "/pa/units/land/energy_plant_adv/energy_plant_adv.json": ["utility", 3],
            "/pa/units/land/metal_extractor_adv/metal_extractor_adv.json": ["utility", 4],
            "/pa/units/orbital/delta_v_engine/delta_v_engine.json": ["utility", 6],
            "/pa/units/land/radar/radar.json": ["utility", 7],          
            "/pa/units/land/energy_plant/energy_plant.json": ["utility", 8],
            "/pa/units/land/metal_extractor/metal_extractor.json": ["utility", 9],
            "/pa/units/land/land_barrier/land_barrier.json": ["utility", 10],
            "/pa/units/land/teleporter/teleporter.json": ["utility", 11],
            "/pa/units/orbital/deep_space_radar/deep_space_radar.json": ["utility", 12],
            "/pa/units/land/energy_storage/energy_storage.json": ["utility", 13],
            "/pa/units/land/metal_storage/metal_storage.json": ["utility", 14],
                              
            "/pa/units/sea/naval_factory_adv/naval_factory_adv.json": ["factory", 6],           
            "/pa/units/air/air_factory_adv/air_factory_adv.json": ["factory", 7],
            "/pa/units/land/bot_factory_adv/bot_factory_adv.json": ["factory", 8],
            "/pa/units/land/vehicle_factory_adv/vehicle_factory_adv.json": ["factory", 9],
            "/pa/units/orbital/orbital_launcher/orbital_launcher.json": ["factory", 10],
            "/pa/units/sea/naval_factory/naval_factory.json": ["factory", 11],       
            "/pa/units/air/air_factory/air_factory.json": ["factory", 12],
            "/pa/units/land/bot_factory/bot_factory.json": ["factory", 13],
            "/pa/units/land/vehicle_factory/vehicle_factory.json": ["factory", 14],
            "/pa/units/land/unit_cannon/unit_cannon.json": ["factory", 0],

            "/pa/units/land/laser_defense_adv/laser_defense_adv.json": ["combat", 0],                   
            "/pa/units/land/tactical_missile_launcher/tactical_missile_launcher.json": ["combat", 2],
            "/pa/units/land/laser_defense/laser_defense.json": ["combat", 5],
            "/pa/units/land/air_defense_adv/air_defense_adv.json": ["combat", 6],       
            "/pa/units/land/artillery_long/artillery_long.json": ["combat", 7],
            "/pa/units/sea/torpedo_launcher_adv/torpedo_launcher_adv.json": ["combat", 8],
            "/pa/units/land/nuke_launcher/nuke_launcher.json": ["combat", 4],
            "/pa/units/land/anti_nuke_launcher/anti_nuke_launcher.json": ["combat", 9],
            "/pa/units/land/laser_defense_single/laser_defense_single.json": ["combat", 10],
            "/pa/units/land/air_defense/air_defense.json": ["combat", 11],       
            "/pa/units/land/artillery_short/artillery_short.json": ["combat", 12],
            "/pa/units/sea/torpedo_launcher/torpedo_launcher.json": ["combat", 13],
            "/pa/units/orbital/ion_defense/ion_defense.json": ["combat", 14],
            

            "/pa/units/land/fabrication_vehicle_adv/fabrication_vehicle_adv.json": ["vehicle", 13],
            "/pa/units/land/tank_heavy_armor/tank_heavy_armor.json": ["vehicle", 12],
            "/pa/units/land/tank_heavy_mortar/tank_heavy_mortar.json": ["vehicle", 14],
            "/pa/units/land/fabrication_vehicle/fabrication_vehicle.json": ["vehicle", 10],                        
            "/pa/units/land/tank_light_laser/tank_light_laser.json": ["vehicle", 11],
    

            "/pa/units/land/fabrication_bot_adv/fabrication_bot_adv.json": ["bot", 13],   
            "/pa/units/land/bot_bomb/bot_bomb.json": ["bot", 12],
            "/pa/units/land/fabrication_bot/fabrication_bot.json": ["bot", 10],     
            "/pa/units/land/assault_bot/assault_bot.json": ["bot", 11],
            "/pa/units/land/bot_tactical_missile/bot_tactical_missile.json": ["bot", 14],
			"/pa/units/land/assault_bot_adv/assault_bot_adv.json": ["bot", 9],
     
	 
            "/pa/units/orbital/orbital_fabrication_bot/orbital_fabrication_bot.json": ["orbital", 10],
            "/pa/units/orbital/radar_satellite/radar_satellite.json": ["orbital", 11],
            "/pa/units/orbital/orbital_lander/orbital_lander.json": ["orbital", 12],
            "/pa/units/orbital/orbital_fighter/orbital_fighter.json": ["orbital", 13],
            "/pa/units/orbital/orbital_laser/orbital_laser.json": ["orbital", 14],
			
            "/pa/units/orbital/radar_satellite_adv/radar_satellite_adv.json": ["orbitalBase", 8],
            "/pa/units/orbital/solar_array/solar_array.json": ["orbitalBase", 6],
            "/pa/units/orbital/defense_satellite/defense_satellite.json": ["orbitalBase", 9],           
            "/pa/units/orbital/orbital_factory/orbital_factory.json": ["orbitalBase", 7],
            "/pa/units/orbital/mining_platform/mining_platform.json": ["orbitalBase", 5],
			
                      
            "/pa/units/air/fabrication_aircraft_adv/fabrication_aircraft_adv.json": ["air", 13],
            "/pa/units/air/bomber_adv/bomber_adv.json": ["air", 14],        
            "/pa/units/air/fabrication_aircraft/fabrication_aircraft.json": ["air", 10],
            "/pa/units/air/fighter/fighter.json": ["air", 12],
            "/pa/units/air/gunship/gunship.json": ["air", 11],

            "/pa/units/sea/fabrication_ship_adv/fabrication_ship_adv.json": ["sea", 13],
            "/pa/units/sea/nuclear_sub/nuclear_sub.json": ["sea", 14],
            "/pa/units/sea/fabrication_ship/fabrication_ship.json": ["sea", 10],
            "/pa/units/sea/frigate/frigate.json": ["sea", 11],
            "/pa/units/sea/sea_scout/sea_scout.json": ["sea", 12],
            

            "/pa/units/land/land_mine/land_mine.json": ["combat", 1],
			
            "/pa/units/land/anti_nuke_launcher/anti_nuke_launcher_ammo.json": ["antiammo", 13],
			
            "/pa/units/land/tactical_missile_launcher/tactical_missile_launcher_cruise_ammo.json": ["ammo", 10],
            "/pa/units/land/tactical_missile_launcher/tactical_missile_launcher_ammo.json": ["ammo", 11],
            "/pa/units/land/nuke_launcher/nuke_launcher_base_ammo.json": ["ammo", 12],
            "/pa/units/land/nuke_launcher/nuke_launcher_ammo.json": ["ammo", 13],
        }
    );
};
