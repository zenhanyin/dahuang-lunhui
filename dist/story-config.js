window.DAHUANG_STORY_CONFIG = {
  "chapters": [
    {
      "name": "雷后入局",
      "text": {
        "normal": "雷劫散后，西陵旧议厅的水镜忽然亮起。天机营把铜门裂纹拓在镜中，冰心堂带来城外疫民名单，魍魉长老只问一句：上一世，是谁把这道裂纹藏起来的？\n\n{{status}}\n\n这一幕的关键不再是“去哪”，而是你要先处理哪一个真实冲突。"
      },
      "choices": [
        {
          "text": "逼问魍魉长老：上一世谁藏起裂纹",
          "to": "shadow",
          "effects": {
            "karma": 4,
            "fragments": 1
          },
          "log": "魍魉席后一阵沉默。有人终于承认，铜门裂纹不是第一次出现。"
        },
        {
          "text": "先救城外疫民，换冰心堂公开药账",
          "to": "iceHeart",
          "effects": {
            "virtue": 12,
            "years": -1
          },
          "log": "药账里夹着一枚旧印，印文正与铜门边缘吻合。"
        },
        {
          "text": "让遗墨机关鸟拓下水镜裂纹",
          "to": "jadeClue",
          "effects": {
            "fragments": 1,
            "qi": 10
          },
          "talentToQi": true,
          "log": "机关鸟飞回时，爪上多了一粒东海盐晶。"
        }
      ]
    },
    {
      "name": "诸门相疑",
      "text": {
        "normal": "你已把第一条线索摆上桌面。遗墨的机关鸟落在梁上，吐出一片带盐痕的天书残页；冷喣没有看残页，只看你腰间的天命碎片。\n\n{{status}}\n\n现在故事开始分岔：公开残页会迫使诸门站队，私查北溟会更接近幽都旧约，强入铜门则可能让心魔提前醒来。"
      },
      "choices": [
        {
          "text": "公开天书残页，迫诸门当场站队",
          "to": "greatCouncil",
          "effects": {
            "virtue": 8,
            "karma": 3
          },
          "log": "诸门终于不再谈风骨，只开始谈各自欠下的债。"
        },
        {
          "text": "夜入北溟，追玄晶留下的幽都旧约",
          "to": "northSea",
          "effects": {
            "fragments": 1,
            "years": -1
          },
          "log": "北溟风雪里，你听见幽都并不承认自己是地狱。"
        },
        {
          "text": "独自贴近铜门，听清门内喊出的名字",
          "to": "copperGate",
          "effects": {
            "qi": 16,
            "karma": 8
          },
          "talentToQi": true,
          "log": "铜门没有打开，只把你的倒影换成了上一世的样子。"
        }
      ]
    },
    {
      "name": "铜门显影",
      "text": {
        "normal": "铜门裂纹终于回应了你。水镜里先是北溟雪，再是东海神域的潮声，最后映出九天登神大典上一排没有名字的祭席。\n\n{{status}}\n\n这一幕已经接近终局。你可以补齐真相，也可以直接用修为撕开天门；若因果继续压上来，幽都会先替你作答。"
      },
      "choices": [
        {
          "text": "入镜阵审问心魔，先定自己的底线",
          "to": "heartDemon",
          "requires": {
            "karmaMin": 20
          },
          "effects": {
            "memory": 1
          },
          "log": "心魔没有退散，只把最锋利的问题留给你。"
        },
        {
          "text": "闭关冲境，用金丹火推开九天门缝",
          "to": "tribulation",
          "requires": {
            "realmMax": 4
          },
          "effects": {
            "qi": 34,
            "years": -2
          },
          "talentToQi": true,
          "log": "你把残页、药账、裂纹一并压入丹田，雷云再次聚拢。"
        },
        {
          "text": "以碎片拼合旧约，提前重订绝地天通",
          "to": "breakWheel",
          "requires": {
            "fragmentsMin": 4,
            "realmMin": 3
          }
        },
        {
          "text": "登九天，直接问神明旧账",
          "to": "ascend",
          "requires": {
            "realmMin": 5
          }
        }
      ]
    },
    {
      "name": "天命收束",
      "text": {
        "normal": "本世的线索已经收束：诸门的旧账、幽都的误读、铜门的裂纹、九天的祭席，都指向同一个问题。\n\n力量足够时，你可以登九天；碎片足够时，你可以重订绝地天通；若因果压过道心，幽都会把你送回人间重走。"
      },
      "choices": [
        {
          "text": "以诸门新约重封铜门",
          "to": "breakWheel",
          "requires": {
            "fragmentsMin": 4,
            "virtueMin": 60
          }
        },
        {
          "text": "登九天，看清祭席后的名字",
          "to": "ascend",
          "requires": {
            "realmMin": 5
          }
        },
        {
          "text": "因果压身，先入幽都照见本心",
          "to": "hell",
          "requires": {
            "karmaMin": 55
          }
        },
        {
          "text": "寿元将尽，把本世线索交给下一世",
          "to": "death"
        }
      ]
    }
  ],
  "statusLines": {
    "highKarma": "你的因果太重，魍魉席后的影子始终盯着你的手。",
    "highVirtue": "你的名声已足以压住半座议厅，但真正的信任仍要靠下一步换来。",
    "normal": "你尚未赢得所有人的信任，诸门只肯给你一次说明的机会。"
  }
};
