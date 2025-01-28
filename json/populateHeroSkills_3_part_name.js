//DEVELOPER TODO - SET DAMAGE TYPE
let heroDamageType = 'Magic';



(function(console){
    console.save = function(data, filename){
        if(!data) {
            console.error('Console.save: No data')
            return;
        };
        if(!filename) filename = `${data.name.replaceAll(' ', '_')}.json`
        if(typeof data === "object"){
            data = JSON.stringify(data, undefined, 4)
        }
        var blob = new Blob([data], {type: 'text/json'}),
            e    = document.createEvent('MouseEvents'),
            a    = document.createElement('a')

        a.download = filename
        a.href = window.URL.createObjectURL(blob)
        a.dataset.downloadurl =  ['text/json', a.download, a.href].join(':')
        e.initMouseEvent('click', true, false, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null)
        a.dispatchEvent(e)
     }
 })(console)
 
 let hero = {
	"name": "",
    "level": "",
	"class": "",
    "damage_type": "",
	"faction": "",
	"description": "",
	"auto_attack_range": "",
	"skills": [
		{
			"ultimate": {
				"name": "",
				"unlocks": "",
				"cooldown": "",
				"range": "",
				"initial_energy": "",
				"description": "",
				"upgrades": []
			}
		},
		{
			"skill_1": {
				"name": "",
				"unlocks": "",
				"cooldown": "",
				"range": "",
				"description": "",
				"upgrades": []
			}
		},
		{
			"skill_2": {
				"name": "",
				"unlocks": "",
				"cooldown": "",
				"range": "",
				"description": "",
				"upgrades": []
			}
		},
		{
			"hero_focus": {
				"name": "",
				"unlocks": "",
				"cooldown": "",
				"range": "",
				"description": "",
				"upgrades": []
			}
		},
		{
			"ex_skill": {
				"name": "",
				"unlocks": "",
				"cooldown": "",
				"range": "",
				"description": "",
				"upgrades": []
			}
		},
		{
			"enhance_force": {
				"name": "",
				"unlocks": "",
				"cooldown": "",
				"affects": "",
				"description": ""
			}
		},
		{
			"season_skill": {
				"name": "",
				"unlocks": "",
				"cooldown": "",
				"range": "",
				"description": "",
				"upgrades": []
			}
		}
	]
}

let intro = ((document.querySelector('.character-intro h2')).innerText).split(' ');
hero.name = intro[0] + ' ' + intro[1] + ' ' + intro[2];
hero.level = intro[5].replace("\n", '');
hero.class = intro[9].replace("\n", '');
hero.damage_type = heroDamageType;
hero.faction = intro[15].replace("\n", '');
hero.auto_attack_range = intro[21].replace(".", '');
if(document.querySelector('.character-intro .char-intro p')){
    hero.description = document.querySelector('.character-intro .char-intro p').innerText;
};

let skills = document.querySelectorAll('.skills');
let skills1 = skills[0].querySelectorAll('.col');
for(let skill of skills1){
    if(skill.querySelector('.skill-icon').innerText === 'Ultimate'){
        hero.skills[0].ultimate.name = skill.querySelector('.skill-name').innerText;
        hero.skills[0].ultimate.unlocks = skill.querySelector('.skill-type').innerText;

        dets = skill.querySelectorAll('.additional-information p');
        hero.skills[0].ultimate.cooldown = dets[0].querySelector('span').innerText;
        hero.skills[0].ultimate.range = dets[1].querySelector('span').innerText;
        hero.skills[0].ultimate.initial_energy = dets[2].querySelector('span').innerText;



        hero.skills[0].ultimate.description = ((skill.querySelector('.skill-description').innerHTML).replace('<p>', '')).replace('</p>', '');
        //Potentially use innerText instead
        
        let ups = skill.querySelectorAll('.skill-upgrades p');
        for(let upgrade of ups){
            let upObj = {"unlocks": '', "upgrade": ''};
            upObj.unlocks = (upgrade.querySelector('span').innerText).replaceAll(':', '');
            upObj.upgrade = (upgrade.innerText).substring(((upgrade.innerText).indexOf(':') + 2));
            hero.skills[0].ultimate.upgrades.push(upObj);
        };
    } else if(skill.querySelector('.skill-icon').innerText === 'Skill I'){
        hero.skills[1].skill_1.name = skill.querySelector('.skill-name').innerText;
        hero.skills[1].skill_1.unlocks = skill.querySelector('.skill-type').innerText;

        dets = skill.querySelectorAll('.additional-information p');
        hero.skills[1].skill_1.cooldown = dets[0].querySelector('span').innerText;
        hero.skills[1].skill_1.range = dets[1].querySelector('span').innerText;

        hero.skills[1].skill_1.description = ((skill.querySelector('.skill-description').innerHTML).replace('<p>', '')).replace('</p>', '');
        //Potentially use innerText instead
        
        let ups = skill.querySelectorAll('.skill-upgrades p');
        for(let upgrade of ups){
            let upObj = {"unlocks": '', "upgrade": ''};
            upObj.unlocks = (upgrade.querySelector('span').innerText).replaceAll(':', '');
            upObj.upgrade = (upgrade.innerText).substring(((upgrade.innerText).indexOf(':') + 2));
            hero.skills[1].skill_1.upgrades.push(upObj);
        };
    } else if(skill.querySelector('.skill-icon').innerText === 'Skill II'){
        hero.skills[2].skill_2.name = skill.querySelector('.skill-name').innerText;
        hero.skills[2].skill_2.unlocks = skill.querySelector('.skill-type').innerText;

        dets = skill.querySelectorAll('.additional-information p');
        hero.skills[2].skill_2.cooldown = dets[0].querySelector('span').innerText;
        hero.skills[2].skill_2.range = dets[1].querySelector('span').innerText;

        hero.skills[2].skill_2.description = ((skill.querySelector('.skill-description').innerHTML).replace('<p>', '')).replace('</p>', '');
        //Potentially use innerText instead
        
        let ups = skill.querySelectorAll('.skill-upgrades p');
        for(let upgrade of ups){
            let upObj = {"unlocks": '', "upgrade": ''};
            upObj.unlocks = (upgrade.querySelector('span').innerText).replaceAll(':', '');
            upObj.upgrade = (upgrade.innerText).substring(((upgrade.innerText).indexOf(':') + 2));
            hero.skills[2].skill_2.upgrades.push(upObj);
        };
    } else if(skill.querySelector('.skill-icon').innerText === 'Hero Focus'){
        hero.skills[3].hero_focus.name = skill.querySelector('.skill-name').innerText;
        hero.skills[3].hero_focus.unlocks = skill.querySelector('.skill-type').innerText;

        dets = skill.querySelectorAll('.additional-information p');
        hero.skills[3].hero_focus.cooldown = dets[0].querySelector('span').innerText;
        hero.skills[3].hero_focus.range = dets[1].querySelector('span').innerText;

        hero.skills[3].hero_focus.description = ((skill.querySelector('.skill-description').innerHTML).replace('<p>', '')).replace('</p>', '');
        //Potentially use innerText instead
        
        let ups = skill.querySelectorAll('.skill-upgrades p');
        for(let upgrade of ups){
            let upObj = {"unlocks": '', "upgrade": ''};
            upObj.unlocks = (upgrade.querySelector('span').innerText).replaceAll(':', '');
            upObj.upgrade = (upgrade.innerText).substring(((upgrade.innerText).indexOf(':') + 2));
            hero.skills[3].hero_focus.upgrades.push(upObj);
        };
    } else if(skill.querySelector('.skill-icon').innerText === 'EX. Skill'){
        hero.skills[4].ex_skill.name = skill.querySelector('.skill-name').innerText;
        hero.skills[4].ex_skill.unlocks = skill.querySelector('.skill-type').innerText;

        dets = skill.querySelectorAll('.additional-information p');
        hero.skills[4].ex_skill.cooldown = dets[0].querySelector('span').innerText;
        hero.skills[4].ex_skill.range = dets[1].querySelector('span').innerText;

        hero.skills[4].ex_skill.description = ((skill.querySelector('.skill-description').innerHTML).replace('<p>', '')).replace('</p>', '');
        //Potentially use innerText instead
        
        let ups = skill.querySelectorAll('.skill-upgrades p');
        for(let upgrade of ups){
            let upObj = {"unlocks": '', "upgrade": ''};
            upObj.unlocks = (upgrade.querySelector('span').innerText).replaceAll(':', '');
            upObj.upgrade = (upgrade.innerText).substring(((upgrade.innerText).indexOf(':') + 2));
            hero.skills[4].ex_skill.upgrades.push(upObj);
        };
    } else if(skill.querySelector('.skill-icon').innerText === 'Enhance Force'){
        hero.skills[5].enhance_force.name = skill.querySelector('.skill-name').innerText;
        hero.skills[5].enhance_force.unlocks = skill.querySelector('.skill-type').innerText;

        dets = skill.querySelectorAll('.additional-information p');
        hero.skills[5].enhance_force.cooldown = '-';
        hero.skills[5].enhance_force.affects = dets[0].querySelector('span').innerText;

        hero.skills[5].enhance_force.description = ((skill.querySelector('.skill-description').innerHTML).replace('<p>', '')).replace('</p>', '');
        //Potentially use innerText instead
    }
}
let skills2 = skills[1].querySelectorAll('.col');
for(let skill of skills2){
    if(skill.querySelector('.skill-icon').innerText === 'Season Skill'){
        hero.skills[6].season_skill.name = skill.querySelector('.skill-name').innerText;
        hero.skills[6].season_skill.unlocks = skill.querySelector('.skill-type').innerText;

        dets = skill.querySelectorAll('.additional-information p');
        hero.skills[6].season_skill.range = dets[0].querySelector('span').innerText;

        hero.skills[6].season_skill.description = ((skill.querySelector('.skill-description').innerHTML).replace('<p>', '')).replace('</p>', '');
        //Potentially use innerText instead
        
        let ups = skill.querySelectorAll('.skill-upgrades p');
        for(let upgrade of ups){
            let upObj = {"unlocks": '', "upgrade": ''};
            upObj.unlocks = (upgrade.querySelector('span').innerText).replaceAll(':', '');
            upObj.upgrade = (upgrade.innerText).substring(((upgrade.innerText).indexOf(':') + 2));
            hero.skills[6].season_skill.upgrades.push(upObj);
        };
    }
}
console.log(hero);
console.save(hero);