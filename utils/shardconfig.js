const moment = require("moment")
require("moment-duration-format")
moment.locale("pt-br")
const API = {}

API.time = function(s) {
    function pad(n, z) {
        z = z || 2;
        return ('00' + n).slice(-z);
    }
    var ms = s % 1000;
    s = (s - ms) / 1000;
    var secs = s % 60;
    s = (s - secs) / 60;
    var mins = s % 60;
    var hrs = (s - mins) / 60;

    var days = parseInt(Math.floor(hrs / 24));
    hrs = parseInt(hrs % 24);
    
    var meses = parseInt(Math.floor(days / 30));
    days = parseInt(days % 30);
    
    return (meses > 0 ? pad(meses) + ' meses, ' : "") + (days > 0 ? pad(days) + ' dias, ' : "") + (hrs > 0 ? pad(hrs) + ' horas, ' : "") + (mins > 0 ? pad(mins) + ' minutos e ' : "") + (pad(secs) + ' segundos')

}

API.time2 = function(s) {
    function pad(n, z) {
        z = z || 2;
        return ('00' + n).slice(-z);
    }
    var ms = s % 1000;
    s = (s - ms) / 1000;
    var secs = s % 60;
    s = (s - secs) / 60;
    var mins = s % 60;
    var hrs = (s - mins) / 60;

    var days = parseInt(Math.floor(hrs / 24));
    hrs = parseInt(hrs % 24);
    
    var meses = parseInt(Math.floor(days / 30));
    days = parseInt(days % 30);
    
    return (meses > 0 ? pad(meses) + 'm, ' : "") + (days > 0 ? pad(days) + 'd, ' : "") + (hrs > 0 ? pad(hrs) + 'h, ' : "") + (mins > 0 ? pad(mins) + 'm ' : "") + (pad(secs) + 's' )
}

API.badges = function(badges) {
    return (badges.join(' ').replace('HOUSE_BALANCE', '<:hypesquad_balance:556683254586015765>').replace('HOUSE_BRILLIANCE', '<:hypesquad_brilliance:556683174563020810>').replace('HOUSE_BRAVERY', '<:hypesquad_bravery:556683071529811983>').replace('BUGHUNTER_LEVEL_1', '<:bughunter:556682363120254979>').replace('BUGHUNTER_LEVEL_2', '<:bughunter_lvl2:771327778791882764>').replace('DISCORD_PARTNER', '<:partner2:767235399943979038>').replace('VERIFIED_BOT', '<:verified_bot:763819634369495063>').replace('EARLY_SUPPORTER', '<:earlysupporter:556682087579516968>').replace('HYPESQUAD_EVENTS', '<:hypesquadevents:556682499569221662>').replace('TEAM_USER', '<:stafftools:771327236950982696>').replace('DISCORD_EMPLOYEE', '<:stafftools:771327236950982696>').replace('SYSTEM', '<:stafftools:771327236950982696>').replace('EARLY_VERIFIED_DEVELOPER', '<:dev_verificado:769314927105146921>').replace('VERIFIED_DEVELOPER', ' ‍').replace('PARTNERED_SERVER_OWNER', ' ‍') || ' ‍')
}

API.moment = function(numero, formato) {
    return (moment(numero).format(formato))
}


module.exports = API