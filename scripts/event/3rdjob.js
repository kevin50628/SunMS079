/* ==================
 脚本类型: 脚本
 版权：游戏盒团队     
 联系扣扣：297870163    609654666
 =====================
 */function init(){}function monsterValue(a,b){return 1}function setClassVars(a){var b,c,d;if(210==a.getJob()||220==a.getJob()||230==a.getJob())d=108010201,b=100040106,c=9001001;else if(110==a.getJob()||120==a.getJob()||130==a.getJob())d=108010301,b=105070001,c=9001E3;else if(410==a.getJob()||420==a.getJob())d=108010401,b=107000402,c=9001003;else if(310==a.getJob()||320==a.getJob())d=108010101,b=105040305,c=9001002;return[d,b,c]}function playerEntry(a,b){var c=setClassVars(b)[2],d=a.createInstanceMap(mapid);d.toggleDrops();b.changeMap(d,d.getPortal(0));c=em.getMonster(c);d.spawnMonsterOnGroudBelow(c,new java.awt.Point(200,20))}function playerDead(a,b){a.unregisterPlayer(b);a.dispose()}function playerDisconnected(a,b){return 0}function allMonstersDead(a){var b=new client.Item(4031059,0,1),c=a.getPlayers().get(0),d=setClassVars(c),e=d[2];a.getMapInstance(d[0]).spawnItemDrop(c,c,b,c.getPosition(),!0,!1);a.schedule("warpOut",12E4);a=em.getMonster(e);em.getChannelServer().broadcastPacket(tools.MaplePacketCreator.serverNotice(6,"[\u4e8b\u4ef6] "+c.getName()+" defeated "+a.getName()+"!"))}function cancelSchedule(){}function warpOut(a){for(var b=a.getPlayers().iterator();b.hasNext();){var c=b.next(),d=setClassVars(c)[1],d=em.getChannelServer().getMapFactory().getMap(d);c.changeMap(d,d.getPortal(0));a.unregisterPlayer(c)}a.dispose()}function leftParty(a,b){}function disbandParty(a,b){};