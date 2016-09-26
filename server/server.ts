import { secret } from './secret';
import {Member} from './iBnet';
import {MemberReduced} from './Reducer';

var RateLimiter = require('limiter').RateLimiter;
var limiter = new RateLimiter(100, 'second'); //limiter throttles the requests to 100/sec
var fs = require('fs');
var bnet = require('battlenet-api')(secret());

var newData: Member[] = [];
var requests = 0;

function getGuildMembers(guild, realm, region) {

    bnet.wow.guild.members(
        {
            origin: region,
            realm: realm,
            name: guild
        },
        (error, resp, body) => {
            if (error) console.log(error.message);
            else getMembers(resp.members);
        }
    );

}

function getMembers(members) {
    members
        .filter((members) => members.character.level === 110) //filter by 110s
        .forEach((members) => {
            limiter.removeTokens(1, function(){getMember(members.character.name);}); //get each members items
            requests++;
        });
}

function getMember(member: Member) {
    bnet.wow.character.aggregate({
        origin: 'us',
        realm: 'Hyjal',
        name: member,
        fields: ['items']
    }, getData);
}

function getData(error, resp: Member): void {
    var retry = 3;
    if (error) {
        if (retry > 0) return getData(error, resp); //recursively call, idk if this actually works
        else console.log(`Error: ${error.message}`);
    }
    else {
        console.log(`fetching ${resp.name}`);
        newData.push(new MemberReduced(resp.name, resp.items, resp.progression));
        requests--;
        if (requests === 0) saveData(JSON.stringify(newData));
    }
}

function saveData(data: string): void {
    fs.writeFile('guilddata.json', data, 'utf8', console.log('done'));
}

getGuildMembers('Regulatørs', 'Hyjal', 'us');