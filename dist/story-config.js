window.DAHUANG_STORY_CONFIG = {
  "chapters": [
    {
      "name": "这一世从何处醒来",
      "text": {
        "normal": "你睁眼时，手心攥着一小片温热的铜锈。\n\n窗外不是同一个清晨。有人在西陵废墙下哭，有人在雷泽雾里点灯，也有人把一盏药炉搬到你床前。\n\n{{status}}\n\n这一世先从哪里开始，会决定谁最早看见你。"
      },
      "choices": [
        {
          "text": "在西陵废墙下醒来，扶起第一个哭哑的孩子",
          "to": "greatCouncil",
          "effects": {
            "virtue": 8,
            "memory": 1,
            "years": -1
          },
          "setPath": "天机营",
          "log": "孩子的手印沾在天机盾背面。你还不知道他的名字，却已经知道这一世不能只顾修行。"
        },
        {
          "text": "在江南药庐醒来，闻见药炉里混着血腥气",
          "to": "iceHeart",
          "effects": {
            "virtue": 6,
            "iceLedger": 1,
            "years": -1
          },
          "setPath": "冰心堂",
          "log": "清时把药账翻到最后一页。一个三年前死在西陵的人，被写成明日午时入炉。"
        },
        {
          "text": "在雷泽沉船边醒来，屏住呼吸等雾里脚步过去",
          "to": "shadow",
          "effects": {
            "karma": 3,
            "shadowTrust": 1,
            "memory": 1
          },
          "setPath": "魍魉",
          "log": "夜哭没有回头，只把一枚六翼令丢进水里。令牌没有沉，反而映出你的脸。"
        },
        {
          "text": "在云麓观星台醒来，接住一片带盐痕的残页",
          "to": "jadeClue",
          "effects": {
            "fragments": 1,
            "qi": 12,
            "moFeiyunProof": 1,
            "years": -1
          },
          "talentToQi": true,
          "setPath": "云麓仙居",
          "log": "星图尽头不是九天，而是一片被抹去名字的海。莫非云在页角夹了一根白羽。"
        },
        {
          "text": "在弈剑雨亭醒来，听见剑匣里有第二个人的呼吸",
          "to": "tribulation",
          "effects": {
            "swordHeart": 1,
            "qingyangTrace": 1,
            "qi": 10
          },
          "talentToQi": true,
          "setPath": "弈剑听雨阁",
          "log": "雨水从剑匣缝里往上流。弈剑客说：从黄泉到碧落，我只是路过人间。"
        },
        {
          "text": "在翎羽山林醒来，拆开机关鸟腹中的东海盐晶",
          "to": "jadeClue",
          "effects": {
            "inkContract": 1,
            "fragments": 1,
            "qi": 8
          },
          "talentToQi": true,
          "setPath": "翎羽山庄",
          "log": "遗墨把机关鸟递给你，鸟腹里滚出一粒盐晶，晶面刻着你的上一世生辰。"
        },
        {
          "text": "在荒火旧营醒来，摸到试锋石裂缝里的黑羽",
          "to": "copperGate",
          "effects": {
            "fireOath": 1,
            "qi": 18,
            "karma": 5,
            "years": -1
          },
          "setPath": "荒火教",
          "log": "彤把长刀插进地里，问你火是用来开路，还是用来烧尽挡路的人。"
        },
        {
          "text": "在青丘边境醒来，看书生把最后一块干粮递给孩子",
          "to": "foxRoad",
          "effects": {
            "foxBond": 1,
            "virtue": 7,
            "memory": 1
          },
          "setPath": "青丘客",
          "log": "书生皱着眉，像是不明白自己为什么停下。火光里，九道白影一闪即逝。"
        },
        {
          "text": "在北溟雪线醒来，替玄晖挡住第一道追魂符",
          "to": "northSea",
          "requires": {
            "karmaMax": 45
          },
          "effects": {
            "xuanhuiBond": 2,
            "sunCinders": 1,
            "virtue": 4,
            "years": -1
          },
          "setPath": "北溟客",
          "log": "追魂符落在雪上不燃。玄晖看了你很久，说：你认错人了，我只是路过。"
        },
        {
          "text": "在幽都井口醒来，划掉轮回簿上写错的死期",
          "to": "hell",
          "requires": {
            "karmaMin": 20
          },
          "effects": {
            "memory": 2,
            "karma": -5,
            "years": -1
          },
          "setPath": "幽都照影",
          "log": "判官没有锁链，只把灯推到你面前。灯里照出的是你上一世没救走的人。"
        }
      ]
    },
    {
      "name": "八门入局",
      "text": {
        "normal": "十二岁到十六岁之间，你终于被大荒某一扇门接住。\n\n门规、药账、剑匣、星图、邪影、暗网、机关鸟、试锋石，都把你的名字写进不同的册子。\n\n{{status}}\n\n入门不是归宿，只是第一笔因果。"
      },
      "choices": [
        {
          "text": "接过天机营残盾，把孩子手印刻进军册",
          "to": "greatCouncil",
          "effects": {
            "virtue": 10,
            "fragments": 1,
            "years": -1
          },
          "setPath": "天机营",
          "log": "营官说军册只记战功。你把盾背翻给他看，满厅忽然没人说话。"
        },
        {
          "text": "把冰心药账翻到黑页，逼长老说出入炉二字",
          "to": "iceHeart",
          "effects": {
            "iceLedger": 2,
            "virtue": 8,
            "karma": 3,
            "fragments": 1
          },
          "setPath": "冰心堂",
          "log": "清时的寒霜爬上账页。被写进死册的活人，正在门外排队取药。"
        },
        {
          "text": "接下弈剑客三剑，换他开旧阵眼",
          "to": "tribulation",
          "effects": {
            "swordHeart": 2,
            "qingyangTrace": 1,
            "qi": 22,
            "years": -1
          },
          "talentToQi": true,
          "setPath": "弈剑听雨阁",
          "log": "第三剑没有落在你身上，而是斩开雨幕。阵眼下露出四字：青阳降居。"
        },
        {
          "text": "帮云麓弟子藏起白羽，先保住莫非云证词",
          "to": "jadeClue",
          "effects": {
            "moFeiyunProof": 2,
            "virtue": 6,
            "fragments": 1
          },
          "setPath": "云麓仙居",
          "log": "莫非云把白羽压在残页上。羽尖指向的不是太虚，是云麓一枚旧私印。"
        },
        {
          "text": "入太虚镜室，让邪影先照你自己的脸",
          "to": "heartDemon",
          "effects": {
            "shadowTrust": 1,
            "memory": 1,
            "karma": -2
          },
          "setPath": "太虚观",
          "log": "镜中邪影没有扑来，只学你的声音问：若被污名的是你，你还信门规吗？"
        },
        {
          "text": "在雷泽沉船下取回六翼令，不问夜哭血脉",
          "to": "shadow",
          "effects": {
            "shadowTrust": 2,
            "karma": 4,
            "fragments": 1
          },
          "setPath": "魍魉",
          "log": "长老们在岸上争血统。你潜进水底，只看见令牌旁有一道替人挡刀的旧痕。"
        },
        {
          "text": "替遗墨修复剑炉机关，让机关鸟飞向东海",
          "to": "jadeClue",
          "effects": {
            "inkContract": 2,
            "fragments": 1,
            "qi": 10,
            "years": -1
          },
          "talentToQi": true,
          "setPath": "翎羽山庄",
          "log": "机关鸟起飞前回头看了遗墨一眼，像一个不善告别的人。"
        },
        {
          "text": "陪彤劈开试锋石，拒绝放出荧惑殿里的邪靡",
          "to": "copperGate",
          "effects": {
            "fireOath": 2,
            "virtue": 5,
            "qi": 20,
            "karma": 2
          },
          "setPath": "荒火教",
          "log": "石裂三寸，地底传来笑声。彤握紧刀柄，说这把火还不到交给疯子的时候。"
        },
        {
          "text": "让令狐九尾做天机编外斥候，别拆穿他的狐尾",
          "to": "foxRoad",
          "effects": {
            "foxBond": 2,
            "virtue": 8,
            "memory": 1
          },
          "setPath": "天机营",
          "log": "他把尾影藏进袖里，偏偏在妖魔冲阵时忘了藏。九道狐火照亮盾墙。"
        },
        {
          "text": "偷读玄华名剑录残页，把剑名记进识海",
          "to": "tribulation",
          "requires": {
            "memoryMin": 1
          },
          "effects": {
            "swordHeart": 1,
            "fragments": 1,
            "karma": 2
          },
          "setPath": "弈剑听雨阁",
          "log": "残页割破手指。血落在上邪二字旁，纸页里传来黄泉水声。"
        }
      ]
    },
    {
      "name": "人间有故人",
      "text": {
        "normal": "第一次下山，你发现每个传闻背后都有一个活人。\n\n书生袖中藏着九尾，药童掌心结着寒霜，魔女桌上放着旧药瓶，北溟旅人把手伸进火里。\n\n{{status}}\n\n你可以利用他们，也可以先听他们把话说完。"
      },
      "choices": [
        {
          "text": "把魂灯还给清时，让他先救敌将再审情报",
          "to": "iceHeart",
          "requires": {
            "iceLedgerMin": 1
          },
          "effects": {
            "iceLedger": 1,
            "virtue": 14,
            "karma": -4,
            "years": -1
          },
          "log": "清时没有道谢。他只是把毒针收回袖中，替敌将把断气接了回来。"
        },
        {
          "text": "把莫非云的白羽交给冷喻，而不是交给诸门",
          "to": "jadeClue",
          "requires": {
            "moFeiyunProofMin": 1
          },
          "effects": {
            "moFeiyunProof": 1,
            "shadowTrust": 1,
            "virtue": 8,
            "karma": -3
          },
          "log": "冷喻没有哭。她把白羽压在旧药瓶下，瓶底云麓私印终于露出来。"
        },
        {
          "text": "陪令狐九尾守一夜城门，看他学会害怕",
          "to": "foxRoad",
          "requires": {
            "foxBondMin": 1
          },
          "effects": {
            "foxBond": 2,
            "virtue": 10,
            "years": -1
          },
          "log": "天快亮时，他问你：若我今日怕死，还算不算懂了人间感情？"
        },
        {
          "text": "替玄晖把手从火里拉出来，别问他是不是神子",
          "to": "northSea",
          "effects": {
            "xuanhuiBond": 2,
            "sunCinders": 1,
            "virtue": 5
          },
          "log": "火没有烧他，却把你的掌心烫出一圈残日。他低声说：神子也会冷。"
        },
        {
          "text": "与夜哭分一张暗杀名单，划掉孩子和药师的名字",
          "to": "shadow",
          "requires": {
            "shadowTrustMin": 1
          },
          "effects": {
            "shadowTrust": 2,
            "virtue": 6,
            "karma": 2,
            "fragments": 1
          },
          "log": "夜哭看着那两道墨痕，第一次说：影子不是谁都杀。"
        },
        {
          "text": "让遗墨机关鸟带走难民，而不是追踪神域使者",
          "to": "jadeClue",
          "requires": {
            "inkContractMin": 1
          },
          "effects": {
            "inkContract": 2,
            "virtue": 12,
            "fragments": 1,
            "years": -1
          },
          "log": "机关鸟载不动所有人。遗墨拆下自己的剑炉，把第二只鸟拼到天亮。"
        },
        {
          "text": "陪彤封住荧惑殿，把邪靡的笑声锁回地底",
          "to": "copperGate",
          "requires": {
            "fireOathMin": 1
          },
          "effects": {
            "fireOath": 2,
            "virtue": 8,
            "qi": 18,
            "karma": -2
          },
          "talentToQi": true,
          "log": "彤背对殿门站了很久。她说荒火可以输，但不能把人间交给一场疯火。"
        },
        {
          "text": "跟弈剑客走到黄泉渡口，问他为何总说路过",
          "to": "hell",
          "requires": {
            "swordHeartMin": 2
          },
          "effects": {
            "swordHeart": 2,
            "qingyangTrace": 1,
            "memory": 1
          },
          "log": "他擦剑的手停了一下：因为停得太久，就会以为黄泉和碧落都比人间重要。"
        },
        {
          "text": "把冷喻旧案写进云麓星图，逼观星台亮出私印",
          "to": "greatCouncil",
          "requires": {
            "moFeiyunProofMin": 2
          },
          "effects": {
            "moFeiyunProof": 1,
            "virtue": 10,
            "karma": 4,
            "fragments": 1
          },
          "log": "星图亮起时，云麓长老先拔剑斩镜。你看见他怕的不是魔女，是证词。"
        },
        {
          "text": "在北溟雪夜听玄晖讲射日之后",
          "to": "northSea",
          "requires": {
            "xuanhuiBondMin": 2
          },
          "effects": {
            "xuanhuiBond": 2,
            "sunCinders": 2,
            "memory": 1,
            "years": -1
          },
          "log": "他说十日坠落时，他才知道贵为神明也会被写进别人的命数。"
        },
        {
          "text": "用记忆点记住所有人的名字，而不是只记线索",
          "to": "death",
          "requires": {
            "memoryMin": 4,
            "virtueMin": 70
          },
          "effects": {
            "memory": 2,
            "virtue": 6,
            "years": -99
          },
          "log": "这一世你没有走到铜门前。但下一世，你会更早认出他们。"
        }
      ]
    },
    {
      "name": "玄华名剑录",
      "text": {
        "normal": "弈剑旧阁的雨下了三日。\n\n剑匣自己开了一线，里面不是剑光，而是一卷被虫蛀穿的《玄华名剑录》。每一页都贴着一段人命。\n\n{{status}}\n\n从黄泉到碧落，有些剑只是在路过人间时出了鞘。"
      },
      "choices": [
        {
          "text": "翻开朱曦素影页，追问弈剑从何而来",
          "to": "tribulation",
          "requires": {
            "swordHeartMin": 1
          },
          "effects": {
            "swordHeart": 1,
            "qingyangTrace": 1,
            "qi": 18
          },
          "talentToQi": true,
          "log": "创派之剑没有剑鸣，只有广成子旧印。黄帝帝师四字，被雨水泡得发白。"
        },
        {
          "text": "拓下轩辕剑残纹，查黄帝为何飞升东海",
          "to": "jadeClue",
          "requires": {
            "qingyangTraceMin": 1
          },
          "effects": {
            "qingyangTrace": 2,
            "fragments": 1,
            "qi": 12,
            "years": -1
          },
          "talentToQi": true,
          "log": "残纹尽头接着东海潮声。少昊的名字在水里一闪，像被谁故意抹去。"
        },
        {
          "text": "借天策剑立约，让天机和冰心先互认账册",
          "to": "greatCouncil",
          "requires": {
            "iceLedgerMin": 1
          },
          "effects": {
            "virtue": 12,
            "fragments": 1,
            "iceLedger": 1
          },
          "log": "剑没有出鞘，只横在两本册子之间。先低头的是拿军令的人。"
        },
        {
          "text": "追查黑玄剑，看看玉玑子把谁写成棋子",
          "to": "heartDemon",
          "effects": {
            "fragments": 1,
            "karma": 8,
            "memory": 1
          },
          "log": "黑玄剑影里没有狂笑，只有一张排满名字的棋盘。最边上，是你的字迹。"
        },
        {
          "text": "拾起上邪残锋，听见七夜离开人间那一夜",
          "to": "hell",
          "effects": {
            "memory": 1,
            "karma": 5,
            "fragments": 1
          },
          "log": "残锋贴近耳边时，黄泉水忽然涨潮。有人抱剑发誓，终有一日踏破九黎。"
        },
        {
          "text": "用桃木剑斩开邪影污名，不许诸门再称冷喻为天生魔女",
          "to": "jadeClue",
          "requires": {
            "moFeiyunProofMin": 2
          },
          "effects": {
            "virtue": 14,
            "shadowTrust": 1,
            "fragments": 1
          },
          "log": "桃木剑轻得像玩具，却斩断了药瓶上的假封条。满厅没有一个人敢笑。"
        },
        {
          "text": "读墨罂剑页，查情毒如何从云麓流进太虚",
          "to": "iceHeart",
          "effects": {
            "moFeiyunProof": 1,
            "iceLedger": 1,
            "karma": 3,
            "fragments": 1
          },
          "log": "情毒二字下压着两枚印：一枚云麓，一枚太虚。莫非云的白羽夹在中间。"
        },
        {
          "text": "让七星龙渊照见九天祭席，不急着拔剑",
          "to": "ascend",
          "requires": {
            "swordHeartMin": 3,
            "qingyangTraceMin": 2
          },
          "effects": {
            "swordHeart": 2,
            "fragments": 1,
            "karma": 4
          },
          "log": "龙渊映出的不是神座，是一排空名。每个空名旁都放着一盏人间魂灯。"
        },
        {
          "text": "试铸朱天炎狱剑，确认九天神剑是否全是仿品",
          "to": "copperGate",
          "requires": {
            "realmMin": 2
          },
          "effects": {
            "qi": 24,
            "fragments": 1,
            "karma": 8,
            "years": -1
          },
          "talentToQi": true,
          "log": "火里浮出的神纹歪了一笔。弈剑客笑了：仿得这么急，看来九天也会怕。"
        },
        {
          "text": "拒绝夺剑，只把名剑录抄给下一世的自己",
          "to": "death",
          "requires": {
            "yearsMin": 1
          },
          "effects": {
            "memory": 3,
            "swordHeart": 1,
            "fragments": 1,
            "years": -99
          },
          "log": "你合上剑录时，听见剑匣里那第二道呼吸终于平稳下来。"
        }
      ]
    },
    {
      "name": "北溟与东海",
      "text": {
        "normal": "北溟雪线尽头，潮声从冰下传来。\n\n玄晖的脚印里有金乌灰，东海残碑上有少昊旧名，幽都门前却只挂着一盏不肯灭的灯。\n\n{{status}}\n\n这一幕开始，神话不再是书上的旧事。"
      },
      "choices": [
        {
          "text": "把青阳痕带到东海残碑前，问少昊为何禅让颛顼",
          "to": "jadeClue",
          "requires": {
            "qingyangTraceMin": 3
          },
          "effects": {
            "qingyangTrace": 2,
            "fragments": 2,
            "years": -1
          },
          "log": "残碑没有回答，只把黄帝飞升那日的潮声还给你。"
        },
        {
          "text": "陪玄晖去幽都门前等颛顼开门",
          "to": "hell",
          "requires": {
            "xuanhuiBondMin": 4
          },
          "effects": {
            "xuanhuiBond": 2,
            "sunCinders": 1,
            "memory": 1,
            "karma": -4
          },
          "log": "门没有开。玄晖站到雪停，仍没有低头。你第一次觉得沉默也是一种拒绝。"
        },
        {
          "text": "把上邪残锋交给幽都判官，换轮回簿一页",
          "to": "hell",
          "requires": {
            "karmaMin": 25
          },
          "effects": {
            "memory": 2,
            "karma": -8,
            "fragments": 1
          },
          "log": "判官收下残锋，却没有笑。他说黄泉不缺恨，缺的是肯认账的人。"
        },
        {
          "text": "让金乌灰落在东海潮宫，照出十日坠落的座次",
          "to": "heartDemon",
          "requires": {
            "sunCindersMin": 3
          },
          "effects": {
            "sunCinders": 2,
            "fragments": 1,
            "karma": 8
          },
          "log": "潮宫地面亮起十个空圈。玄晖只看第一个，像看一张早被烧掉的家谱。"
        },
        {
          "text": "请令狐九尾带青丘狐火护送凡人过雪线",
          "to": "foxRoad",
          "requires": {
            "foxBondMin": 2
          },
          "effects": {
            "foxBond": 1,
            "virtue": 16,
            "karma": -4,
            "years": -1
          },
          "log": "狐火不烫，落在孩子肩上像一小片春天。九尾却冻得脸色发白。"
        },
        {
          "text": "让夜哭潜入幽都边市，查谁改过你的死期",
          "to": "shadow",
          "requires": {
            "shadowTrustMin": 3
          },
          "effects": {
            "shadowTrust": 1,
            "memory": 2,
            "karma": 6,
            "fragments": 1
          },
          "log": "夜哭回来时袖口结霜。他只带回一句话：你的死期，不止被改过一次。"
        },
        {
          "text": "借荒火战阵撬开铜门外环，但先撤走城外凡人",
          "to": "copperGate",
          "requires": {
            "fireOathMin": 2,
            "virtueMin": 60
          },
          "effects": {
            "fireOath": 1,
            "qi": 32,
            "virtue": 8,
            "karma": 6,
            "fragments": 1
          },
          "talentToQi": true,
          "log": "火线绕城三匝，没有烧到一间民屋。彤看着你，终于点头。"
        },
        {
          "text": "让遗墨机关鸟飞入九天门缝，带回祭席名单",
          "to": "ascend",
          "requires": {
            "inkContractMin": 3
          },
          "effects": {
            "inkContract": 1,
            "fragments": 2,
            "karma": 5
          },
          "log": "机关鸟只回来半只。残翼里夹着一张名单，第一行写着：无名人间。"
        },
        {
          "text": "用冰心魂灯照东海侍童，问神域祭品是否自愿",
          "to": "iceHeart",
          "requires": {
            "iceLedgerMin": 3,
            "virtueMin": 65
          },
          "effects": {
            "iceLedger": 1,
            "virtue": 12,
            "karma": -6,
            "fragments": 1
          },
          "log": "侍童哭得很小声。他说自愿两个字，是神使替他写的。"
        },
        {
          "text": "闭关炼化盐晶与残日，硬推境界去看飞升真假",
          "to": "tribulation",
          "requires": {
            "realmMin": 3
          },
          "effects": {
            "qi": 42,
            "karma": 6,
            "years": -2
          },
          "talentToQi": true,
          "log": "丹田里一半潮声，一半日火。雷云压下时，你听见九天有人翻页。"
        }
      ]
    },
    {
      "name": "三界旧契",
      "text": {
        "normal": "你把证据摆在水镜前：药账、白羽、六翼令、青阳痕、上邪残锋、金乌烬。\n\n镜中先映出黄泉，再映出碧落，最后映出你这一世救过又没救成的人。\n\n{{status}}\n\n三界都在问你，要不要继续把人间当路。"
      },
      "choices": [
        {
          "text": "把药账、白羽、六翼令一起按在水镜上",
          "to": "greatCouncil",
          "requires": {
            "iceLedgerMin": 2,
            "moFeiyunProofMin": 2,
            "shadowTrustMin": 2
          },
          "effects": {
            "virtue": 18,
            "karma": -8,
            "fragments": 1
          },
          "log": "水镜没有碎。碎的是三位长老脸上的镇定。"
        },
        {
          "text": "请弈剑客以七星龙渊斩开黄泉到碧落的路影",
          "to": "breakWheel",
          "requires": {
            "swordHeartMin": 5,
            "qingyangTraceMin": 4,
            "fragmentsMin": 4
          },
          "effects": {
            "virtue": 15,
            "memory": 2,
            "fragments": 1
          },
          "log": "剑光落下时，黄泉和碧落同时后退一步。人间第一次不在中间。"
        },
        {
          "text": "公开九天仿剑证据，逼神使承认祭席不是荣耀",
          "to": "ascend",
          "requires": {
            "fragmentsMin": 4
          },
          "effects": {
            "karma": 6,
            "virtue": 8,
            "memory": 1
          },
          "log": "神使说不出话。因为朱天炎狱剑上的错纹，和他腰间那把一模一样。"
        },
        {
          "text": "让玄晖亲手烧掉东皇归位诏，不替他做选择",
          "to": "northSea",
          "requires": {
            "xuanhuiBondMin": 6,
            "sunCindersMin": 5
          },
          "effects": {
            "xuanhuiBond": 2,
            "sunCinders": 1,
            "virtue": 12,
            "karma": -4
          },
          "log": "诏书烧得很慢。玄晖看着火，像终于确认自己不是另一件法器。"
        },
        {
          "text": "把冷喻旧案交给太虚与云麓共审，不准任何一派灭口",
          "to": "greatCouncil",
          "requires": {
            "moFeiyunProofMin": 3,
            "virtueMin": 60
          },
          "effects": {
            "virtue": 14,
            "karma": -5,
            "fragments": 1
          },
          "log": "莫非云站在堂下，声音不高，却每个字都像白羽落在刀锋上。"
        },
        {
          "text": "用魍魉暗网散布假祭名，引出真正改簿之人",
          "to": "shadow",
          "requires": {
            "shadowTrustMin": 3,
            "karmaMax": 60
          },
          "effects": {
            "karma": 8,
            "fragments": 2,
            "memory": 1
          },
          "log": "假名传出去一夜，三界各有一盏灯灭。夜哭说，鱼上钩了。"
        },
        {
          "text": "以天策剑重立诸门证词，先救人再问罪",
          "to": "greatCouncil",
          "requires": {
            "virtueMin": 75
          },
          "effects": {
            "virtue": 20,
            "karma": -6,
            "fragments": 1
          },
          "log": "有人不服，有人沉默。可城外伤者被抬进来时，所有争吵都短了一截。"
        },
        {
          "text": "让心魔代你入梦九天，但回来后先审自己",
          "to": "heartDemon",
          "requires": {
            "karmaMin": 35
          },
          "effects": {
            "memory": 2,
            "karma": 10,
            "fragments": 1
          },
          "log": "心魔带回祭席，也带回一张和你相同的脸。你让它坐下，把灯点亮。"
        },
        {
          "text": "若因果已压过道心，主动入幽都照见本心",
          "to": "hell",
          "requires": {
            "karmaMin": 65
          },
          "effects": {
            "memory": 2,
            "karma": -12
          },
          "log": "幽都没有惩罚你，只让你把每个被你省略的人名重新念一遍。"
        },
        {
          "text": "寿元将尽，把所有证据封进轮回记忆",
          "to": "death",
          "requires": {
            "yearsMin": 1
          },
          "effects": {
            "memory": 4,
            "fragments": 1,
            "years": -99
          },
          "log": "这一世你没赢。但下一世睁眼前，你已经听见铜门里有人开始害怕。"
        }
      ]
    },
    {
      "name": "天命收束",
      "text": {
        "normal": "铜门前没有风。\n\n诸门站在你身后，幽都在门下沉默，九天祭席上亮着一排名字，其中有你的，也有你这一世认识过的所有人。\n\n道德越稳，越有人愿意替你作证；因果越重，幽都越早照见你。现在该结账了。"
      },
      "choices": [
        {
          "text": "以诸门证词重订三界旧契：人间不是路",
          "to": "breakWheel",
          "requires": {
            "fragmentsMin": 6,
            "virtueMin": 80
          },
          "effects": {
            "virtue": 20,
            "memory": 2
          },
          "log": "铜门前的地面裂开，却没有吞人。黄泉和碧落第一次各退回自己的边界。"
        },
        {
          "text": "带玄晖与金乌烬上前，写下神子也有选择命运的权利",
          "to": "breakWheel",
          "requires": {
            "xuanhuiBondMin": 7,
            "sunCindersMin": 6,
            "virtueMin": 70
          },
          "effects": {
            "virtue": 18,
            "fragments": 1,
            "memory": 2
          },
          "log": "玄晖没有登回神座。他把最后一缕金乌火放进人间共同守着的灯里。"
        },
        {
          "text": "请弈剑客出最后一剑：黄泉碧落皆路过",
          "to": "breakWheel",
          "requires": {
            "swordHeartMin": 6,
            "qingyangTraceMin": 5,
            "fragmentsMin": 5
          },
          "effects": {
            "virtue": 15,
            "memory": 3
          },
          "log": "剑光没有斩神，也没有斩鬼，只斩断那条把人间写成通路的旧线。"
        },
        {
          "text": "以高德行登九天，公开祭席后的旧账",
          "to": "ascend",
          "requires": {
            "realmMin": 5,
            "virtueMin": 90,
            "karmaMax": 45
          }
        },
        {
          "text": "带着因果强行飞升，赌九天不敢拒你",
          "to": "ascend",
          "requires": {
            "realmMin": 6,
            "karmaMin": 45
          },
          "effects": {
            "karma": 18,
            "qi": 40
          },
          "talentToQi": true,
          "log": "九天门开了。可门内第一张祭席，正好空着你的名字。"
        },
        {
          "text": "强迫玄晖归位东皇，以十日之火焚开天门",
          "to": "ascend",
          "requires": {
            "sunCindersMin": 6,
            "karmaMin": 35
          },
          "effects": {
            "qi": 60,
            "karma": 24,
            "xuanhuiBond": -3
          },
          "talentToQi": true,
          "log": "十日同升，天门大开。可你分不清那是飞升，还是又一次把他献上祭席。"
        },
        {
          "text": "牺牲本世修为，换诸门凡人全数撤离",
          "to": "death",
          "requires": {
            "virtueMin": 100
          },
          "effects": {
            "memory": 3,
            "fragments": 1,
            "qi": -80,
            "years": -99
          },
          "log": "你把胜利留给别人，把答案留给下一世。"
        },
        {
          "text": "若因果压过道心，入幽都重走人间",
          "to": "hell",
          "requires": {
            "karmaMin": 65
          }
        },
        {
          "text": "什么都不争，只把真相刻进轮回记忆",
          "to": "death",
          "effects": {
            "memory": 2,
            "fragments": 1,
            "years": -99
          },
          "log": "你选择下一世再来，但不是空手而来。"
        },
        {
          "text": "以八门派、幽都、青丘、东海共证，结束献祭式轮回",
          "to": "breakWheel",
          "requires": {
            "fragmentsMin": 7,
            "virtueMin": 75,
            "xuanhuiBondMin": 5,
            "swordHeartMin": 4
          },
          "effects": {
            "virtue": 24,
            "memory": 3,
            "karma": -10
          },
          "log": "不是你一个人推开铜门。所有被当成路的人，都在这一刻向前一步。"
        }
      ]
    }
  ],
  "statusLines": {
    "highKarma": "你的因果太重，灯影总比人影多半寸；若再强行登天，幽都会先让你把名字念完。",
    "highVirtue": "你救过的人开始替你作证。诸门仍有私心，但已经没人敢说众生只是数字。",
    "normal": "你还没有赢得所有人的信任。有人愿意听你说一句，也有人已经把手按在剑上。"
  },
  "artPools": {
    "birth": [
      "assets/xiling-ruins.webp",
      "assets/underworld-ledger.webp",
      "assets/fox-road.webp"
    ],
    "greatCouncil": [
      "assets/great-council.webp",
      "assets/sect-new-pact.webp"
    ],
    "iceHeart": [
      "assets/iceheart-hall.webp",
      "assets/sect-new-pact.webp"
    ],
    "shadow": [
      "assets/leize-shadow.webp",
      "assets/cold-shadow.webp"
    ],
    "foxRoad": [
      "assets/fox-road.webp",
      "assets/xiling-ruins.webp"
    ],
    "jadeClue": [
      "assets/east-sea-tide-palace.webp",
      "assets/copper-gate.webp",
      "assets/sect-new-pact.webp"
    ],
    "copperGate": [
      "assets/copper-gate.webp",
      "assets/east-sea-godrealm.webp",
      "assets/tribulation.webp"
    ],
    "northSea": [
      "assets/beiming-pact.webp",
      "assets/beiming-road.webp",
      "assets/xuanhui-beiming.webp"
    ],
    "tribulation": [
      "assets/tribulation.webp",
      "assets/great-council.webp"
    ],
    "heartDemon": [
      "assets/heart-trial.webp",
      "assets/underworld-ledger.webp",
      "assets/xuanhui-beiming.webp"
    ],
    "hell": [
      "assets/underworld-ledger.webp",
      "assets/hell-rebirth.webp",
      "assets/xuanhui-beiming.webp"
    ],
    "ascend": [
      "assets/true-ascend.webp",
      "assets/east-sea-tide-palace.webp"
    ],
    "breakWheel": [
      "assets/copper-gate.webp",
      "assets/sect-new-pact.webp",
      "assets/true-ascend.webp"
    ],
    "afterBreak": [
      "assets/sect-new-pact.webp",
      "assets/beiming-pact.webp",
      "assets/east-sea-tide-palace.webp"
    ],
    "trueEnding": [
      "assets/true-ascend.webp"
    ],
    "sacrifice": [
      "assets/copper-gate.webp"
    ],
    "death": [
      "assets/xiling-ruins.webp",
      "assets/underworld-ledger.webp"
    ],
    "memoryArchive": [
      "assets/copper-gate.webp",
      "assets/underworld-ledger.webp"
    ],
    "sect": [
      "assets/xiling-ruins.webp"
    ]
  }
};
