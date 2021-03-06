/* ==================
 脚本类型: NPC	    
 脚本版权：游戏盒团队
 联系扣扣：297870163    609654666
 =====================
 */

var status;

function start() {
	status = -1;
	action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1)
        cm.dispose();
    else {
        if (mode == 1)
            status++;
        else
            status--;
             //map = cm.getPlayer().getMap();
			if (cm.haveItem(4031009)) {
				if (status == 0)
					cm.sendNext("噢,你是 #b汉斯#k介绍来的吗?")
				else if (status == 1)
					cm.sendNextPrev("所以你要证明你的实力吗?很好!");
				else if (status == 2)
					cm.sendNextPrev("我可以给你一次机会,请你把握.");
				else if (status == 3) {
					cm.startQuest(100007);
					cm.warp(108000200, 0);
					cm.removeAll(4031009);
					cm.removeAll(4031012);
					cm.removeAll(4031013);
					//cm.getPlayer().startMapTimeLimitTask(1200, map);
					cm.dispose();
				}
			} else {
				cm.sendOk("很抱歉,我需要 #b汉斯的信件#k 请去找汉斯拿取谢谢");
				cm.dispose();
			}
    }
}	