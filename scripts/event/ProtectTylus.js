/* ==================
 脚本类型: 脚本
 版权：游戏盒团队     
 联系扣扣：297870163    609654666
 =====================
 */function init(){em.setProperty("state","0")}function setup(a,b){em.setProperty("state","1");a=em.newInstance("ProtectTylus");var c=a.setInstanceMap(921100300);c.killMonster(9300093);var d=em.getMonster(9300093);a.registerMonster(d);c.spawnMonsterOnGroundBelow(d,new java.awt.Point(-358,-86));a.startEventTimer(6E5);return a}function playerEntry(a,b){var c=a.getMapFactory().getMap(921100300);b.changeMap(c,c.getPortal(0))}function changedMap(a,b,c){921100300!=c&&playerExit(a,b)}function playerDisconnected(a,b){return 0}function scheduledTimeout(a){a.disposeIfPlayerBelow(100,921100301);em.setProperty("state","0")}function monsterValue(a,b){9300093==b&&allMonstersDead(a);return 1}function playerExit(a,b){a.unregisterPlayer(b);a.disposeIfPlayerBelow(0,0)&&em.setProperty("state","0")}function allMonstersDead(a){a.disposeIfPlayerBelow(100,211000001);em.setProperty("state","0")}function playerRevive(a,b){return!1}function clearPQ(a){}function leftParty(a,b){}function disbandParty(a){}function playerDead(a,b){}function cancelSchedule(){};