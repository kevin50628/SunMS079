var status=-1;function start(a,b,c){200<=qm.getPlayer().getLevel()&&5==(qm.getPlayer().getJob()/100|0)&&qm.forceStartQuest();qm.dispose()}function end(a,b,c){qm.canHold(1142013,1)&&!qm.haveItem(1142013,1)&&200<=qm.getPlayer().getLevel()&&5==(qm.getPlayer().getJob()/100|0)&&(qm.gainItem(1142013,1),qm.forceStartQuest(),qm.forceCompleteQuest());qm.dispose()};