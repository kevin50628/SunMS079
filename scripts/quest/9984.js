/* ==================
 �ű�����:  ����	    
 �ű���Ȩ����Ϸ���Ŷ�
 ��ϵ�ۿۣ�297870163    609654666
 =====================
 */var status=-1;function end(a,b,c){-1==a?qm.dispose():(1==a?status++:status--,0==status?50>qm.getPlayer().getHp()?(qm.sendNext("\u90c1\u95f7\u7684\u5f88\u554a"),qm.dispose()):qm.sendNext("\u4f60\u5df2\u7ecf\u6536\u96c6\u597d#b50\u4e2a\u67ab\u53f6#k\u4e86\u5440\u3002\u4e0d\u9519\u3002\u4f60\u5f88\u60f3\u77e5\u9053\u628a\u67ab\u53f6\u542b\u5728\u5634\u91cc\u6709\u4ec0\u4e48\u7279\u6b8a\u7684\u7ed3\u679c\u5427\u3002\u6211\u73b0\u5728\u5c31\u544a\u8bc9\u4f60\u3002\u4e5f\u6ca1\u5565\u597d\u5904\u2026\u2026"):1==status?qm.sendNextPrev("\u5475\u5475\uff0c\u8bf4\u7b11\u7684\u3002\u600e\u4e48\u4f1a\u6ca1\u6709\u7528\u5462\u3002\u505a\u4e3a\u5956\u52b1\uff0c\u6211\u9001\u4f60\u4e00\u4efd\u793c\u7269\u3002\u5e0c\u671b\u4f60\u559c\u6b22\u3002\u867d\u7136\u4e0d\u662f\u4ec0\u4e48\u597d\u4e1c\u897f\uff0c\u4f46\u662f\u4f69\u5e26\u8d77\u6765\u4e5f\u662f\u6709\u5f88\u597d\u7684\u6548\u679c\u3002"):2==status?qm.sendNextPrev("\u8fd9\u662f\u5229\u7528\u4f60\u6240\u7ed9\u6211\u7684\u67ab\u53f6\u6240\u5236\u9020\u7684\u8033\u73af\u3002\u5e0c\u671b\u4f60\u80fd\u559c\u6b22~\uff01\r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0#\r\n#v1032035# 1 #t1032035# \r\n\r\n#fUI/UIWindow.img/QuestIcon/8/0# 5000 exp"):3==status&&(qm.gainExp(5E3),qm.gainItem(1032035,1),qm.gainItem(4001126,-50),qm.forceCompleteQuest(9984),qm.dispose()))};