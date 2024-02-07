// 简体中文

export default {
    // flashcard-modal.tsx
    DECKS: "卡组",
    DUE_CARDS: "到期卡片",
    NEW_CARDS: "新卡片",
    TOTAL_CARDS: "全部卡片",
    BACK: "返回",
    SKIP: "略过",
    EDIT_CARD: "编辑卡片",
    RESET_CARD_PROGRESS: "重置卡片",
    RESET: "重来",
    HARD: "较难",
    GOOD: "记得",
    EASY: "简单",
    SHOW_ANSWER: "显示答案",
    CARD_PROGRESS_RESET: "卡片已被重置。",
    SAVE: "储存",
    CANCEL: "取消",
    NO_INPUT: "没有提供输入。",
    CURRENT_EASE_HELP_TEXT: "目前掌握程度：",
    CURRENT_INTERVAL_HELP_TEXT: "目前间隔：",
    CARD_GENERATED_FROM: "生成自：${notePath}",
    OPEN_NOTE: "打开笔记",

    // main.ts
    OPEN_NOTE_FOR_REVIEW: "打开一个笔记开始复习",
    REVIEW_CARDS: "复习卡片",
    REVIEW_DIFFICULTY_FILE_MENU: "复习：${difficulty}",
    REVIEW_NOTE_DIFFICULTY_CMD: "标记为“${difficulty}”",
    REVIEW_ALL_CARDS: "复习所有笔记中的卡片",
    CRAM_ALL_CARDS: "选择要集中复习的卡组",
    REVIEW_CARDS_IN_NOTE: "复习此笔记中的卡片",
    CRAM_CARDS_IN_NOTE: "集中复习此笔记中的卡片",
    VIEW_STATS: "查看数据",
    STATUS_BAR: "复习: ${dueNotesCount} 笔记, ${dueFlashcardsCount} 卡片已到期",
    SYNC_TIME_TAKEN: "同步时间 ${t}ms",
    NOTE_IN_IGNORED_FOLDER: "笔记保存在已被忽略的路径中（检查设置选项）。",
    PLEASE_TAG_NOTE: "请将需要复习的笔记中加入正确的标签（检查设置选项）。",
    RESPONSE_RECEIVED: "反馈已收到",
    NO_DECK_EXISTS: "没有 ${deckName} 卡组",
    ALL_CAUGHT_UP: "都复习完啦，你真棒！\n去接触点新东西吧~",

    // scheduling.ts
    DAYS_STR_IVL: "${interval}天",
    MONTHS_STR_IVL: "${interval}月",
    YEARS_STR_IVL: "${interval}年",
    DAYS_STR_IVL_MOBILE: "${interval}天",
    MONTHS_STR_IVL_MOBILE: "${interval}月",
    YEARS_STR_IVL_MOBILE: "${interval}年",
    HOURS_STR_IVL: "${interval}小时",
    MINUTES_STR_IVL: "${interval}分钟",
    HOURS_STR_IVL_MOBILE: "${interval}时",
    MINUTES_STR_IVL_MOBILE: "${interval}分",

    // settings.ts
    SETTINGS_HEADER: "间隔重复插件 - 设置",
    CHECK_WIKI: '了解更多, 请点击<a href="${wiki_url}">wiki</a>.',
    FOLDERS_TO_IGNORE: "忽略此文件夹",
    FOLDERS_TO_IGNORE_DESC: "输入文件夹路径，用新建行分隔，例如：Templates Meta/Scripts",
    FLASHCARDS: "卡片",
    FLASHCARD_EASY_LABEL: "“简单”按钮文本",
    FLASHCARD_GOOD_LABEL: "“记得”按钮文本",
    FLASHCARD_HARD_LABEL: "“较难”按钮文本",
    FLASHCARD_EASY_DESC: "自定义“简单”按钮的标签",
    FLASHCARD_GOOD_DESC: "自定义“记得”按钮的标签",
    FLASHCARD_HARD_DESC: "自定义“较难”按钮的标签",
    FLASHCARD_TAGS: "卡片标签",
    FLASHCARD_TAGS_DESC: "输入标签，用空格或新建行分隔，例如：#flashcards #deck2 #deck3.",
    CONVERT_FOLDERS_TO_DECKS: "是否将文件夹内容转换为卡片组和子卡片组？",
    CONVERT_FOLDERS_TO_DECKS_DESC: "此选项为卡片标签选项的替代选项。",
    INLINE_SCHEDULING_COMMENTS: "是否将计划重复时间保存在卡片最后一行的同一行？",
    INLINE_SCHEDULING_COMMENTS_DESC: "HTML注释不再破坏列表格式",
    BURY_SIBLINGS_TILL_NEXT_DAY: "将关联卡片隐藏至下一天？",
    BURY_SIBLINGS_TILL_NEXT_DAY_DESC: "关联卡片是来自同一卡片的不同形式， 例如：完形填空卡片",
    SHOW_CARD_CONTEXT: "在卡片中显示上下文？",
    SHOW_CARD_CONTEXT_DESC: "例如：标题 > 副标题 > 小标题 > ... > 小标题",
    CARD_MODAL_HEIGHT_PERCENT: "卡片高度百分比",
    CARD_MODAL_SIZE_PERCENT_DESC: "请在移动端使用并需要浏览较大图片时设为100%",
    RESET_DEFAULT: "重置为默认",
    CARD_MODAL_WIDTH_PERCENT: "卡片宽度百分比",
    RANDOMIZE_CARD_ORDER: "复习时随机显示卡片？",
    REVIEW_CARD_ORDER_WITHIN_DECK: "复习时卡片组内的卡片排序",
    REVIEW_CARD_ORDER_NEW_FIRST_SEQUENTIAL: "卡片组内顺序 (全部新卡片优先)",
    REVIEW_CARD_ORDER_DUE_FIRST_SEQUENTIAL: "卡片组内顺序 (全部到期卡片优先)",
    REVIEW_CARD_ORDER_NEW_FIRST_RANDOM: "卡片组内乱序 (全部新卡片优先)",
    REVIEW_CARD_ORDER_DUE_FIRST_RANDOM: "卡片组内乱序 (全部到期卡片优先)",
    REVIEW_CARD_ORDER_RANDOM_DECK_AND_CARD: "卡片组及卡片都乱序",
    REVIEW_DECK_ORDER: "复习时卡片组的排序",
    REVIEW_DECK_ORDER_PREV_DECK_COMPLETE_SEQUENTIAL: "顺序 (在前一卡片组内卡片都复习完后)",
    REVIEW_DECK_ORDER_PREV_DECK_COMPLETE_RANDOM: "乱序 (在前一卡片组内卡片都复习完后)",
    REVIEW_DECK_ORDER_RANDOM_DECK_AND_CARD: "卡片组及卡片都乱序",
    DISABLE_CLOZE_CARDS: "不进行完形填空？",
    CONVERT_HIGHLIGHTS_TO_CLOZES: "将 ==高亮== 转换为完形填空？",
    CONVERT_BOLD_TEXT_TO_CLOZES: "将 **粗体** 转换为完形填空？",
    CONVERT_CURLY_BRACKETS_TO_CLOZES: "将 {{大括号}} 转换为完形填空？",
    INLINE_CARDS_SEPARATOR: "单行卡片的分隔符",
    FIX_SEPARATORS_MANUALLY_WARNING: "注意：更改此选项后你将需要自行更改已存在卡片的分隔符。",
    INLINE_REVERSED_CARDS_SEPARATOR: "单行翻转卡片的分隔符",
    MULTILINE_CARDS_SEPARATOR: "多行卡片的分隔符",
    MULTILINE_REVERSED_CARDS_SEPARATOR: "多行翻转卡片的分隔符",
    NOTES: "笔记",
    REVIEW_PANE_ON_STARTUP: "启动时开启笔记复习窗格",
    TAGS_TO_REVIEW: "复习标签",
    TAGS_TO_REVIEW_DESC: "输入标签，用空格或新建行分隔，例如：#review #tag2 #tag3.",
    OPEN_RANDOM_NOTE: "复习随机笔记",
    OPEN_RANDOM_NOTE_DESC: "关闭此选项，笔记将以重要度(PageRank)排序。",
    AUTO_NEXT_NOTE: "复习后自动打开下一个笔记",
    DISABLE_FILE_MENU_REVIEW_OPTIONS: "关闭文件选单中的复习选项 例如：复习：简单 记得 较难",
    DISABLE_FILE_MENU_REVIEW_OPTIONS_DESC:
        "关闭此选项后你可以使用快捷键开始复习。重新启动Obsidian使本选项生效。",
    MAX_N_DAYS_REVIEW_QUEUE: "右边栏中显示的最大天数",
    MIN_ONE_DAY: "天数最小值为1",
    VALID_NUMBER_WARNING: "请输入有效的数字。",
    UI_PREFERENCES: "用户界面首选项",
    INITIALLY_EXPAND_SUBDECKS_IN_TREE: "甲板树最初应显示为展开",
    INITIALLY_EXPAND_SUBDECKS_IN_TREE_DESC:
        "关闭此选项可折叠同一张卡片中的嵌套牌组。如果您的卡片属于同一文件中的许多套牌，则很有用。",
    ALGORITHM: "算法",
    CHECK_ALGORITHM_WIKI: '了解更多, 请点击<a href="${algo_url}">算法实现</a>.',
    BASE_EASE: "基础掌握程度",
    BASE_EASE_DESC: "最小值130，推荐值约250.",
    BASE_EASE_MIN_WARNING: "基础掌握程度的最小值为130。",
    LAPSE_INTERVAL_CHANGE: "将复习时标注为“较难”的卡片或笔记复习间隔缩短",
    LAPSE_INTERVAL_CHANGE_DESC: "新复习间隔 = 原复习间隔 * 间隔改变系数 / 100.",
    EASY_BONUS: "简单奖励",
    EASY_BONUS_DESC: "简单奖励设定“记得”和“简单”卡片或笔记的复习间隔差距（最小值100%）。",
    EASY_BONUS_MIN_WARNING: "简单奖励至少为100。",
    MAX_INTERVAL: "最大间隔（天）",
    MAX_INTERVAL_DESC: "设定复习的最大间隔时间（默认值100年）。",
    MAX_INTERVAL_MIN_WARNING: "最大间隔至少为1天",
    MAX_LINK_CONTRIB: "最大链接收益",
    MAX_LINK_CONTRIB_DESC: "链接笔记的加权掌握程度对原始掌握程度的最大贡献。",
    LOGGING: "记录中",
    DISPLAY_DEBUG_INFO: "在开发者控制台中显示调试信息？",

    DATA_LOC: "数据位置",
    DATA_LOC_DESC: "间隔重复数据项的文件的保存位置.",
    DATA_FOLDER: "`tracked_files.json`的文件夹",
    NEW_PER_DAY: "每天新增重复的数量",
    NEW_PER_DAY_DESC: "每天要添加到队列中的新（未重复过的）笔记的最大数量。设置为`-1`则无限制。",
    NEW_PER_DAY_NAN: "必须是整数",
    NEW_PER_DAY_NEG: "整数必须大于等于-1.",
    REPEAT_ITEMS: "重复错误",
    REPEAT_ITEMS_DESC: "错误项是否要一直重复复习，直到回答正确?",
    ALGORITHMS_CONFIRM:
        "切换算法可能导致日期排程重置，这个修改不可撤销，当重启软件或重新加载插件切换算法才会生效。你确定要切换算法么?",
    ALGORITHMS_DESC:
        '用于间隔重复的算法. 更多信息请查阅 <a href="https://github.com/martin-jw/obsidian-recall">算法</a>.',
    CONVERT_TRACKED_TO_DECK: "将复习笔记转换为卡牌组?",
    REVIEW_FLOATBAR: "复习悬浮栏",
    REVIEW_FLOATBAR_DESC:
        "当设置项“复习后自动打开下一个笔记”启用时，这个设置项启用才生效. 通过点击状态栏/侧边栏/命令进行复习时就会显示出来.",
    REVIEW_NOTE_DIRECTLY: "直接复习笔记?",
    REVIEW_NOTE_DIRECTLY_DESC: "复习笔记时, 不必选择标签（多个复习标签的情况）就直接打开笔记",
    INTERVAL_SHOWHIDE: "显示复习间隔",
    INTERVAL_SHOWHIDE_DESC: "是否在按键上显示复习间隔",
    REQUEST_RETENTION: "保留度",
    REQUEST_RETENTION_DESC: "在下次进行复习时，你期望能回想起答案的概率（百分比）",
    REVLOG_TAGS: "输出到日志的标签",
    REVLOG_TAGS_DESC:
        "用于输出到日志的标签, 卡片或笔记的标签（如#review #flashcards #tag1）都行。默认留空则不按标签区分，都正常输出到日志表格",

    FLASHCARD_AGAIN_LABEL: "重来 按钮文本",
    FLASHCARD_BLACKOUT_LABEL: "忘记 按钮文本",
    FLASHCARD_INCORRECT_LABEL: "猜错 按钮文本",
    "FLASHCARD_INCORRECT (EASY)_LABEL": "猜错（简单） 按钮文本",
    FLASHCARD_AGAIN_DESC: "自定义“重来”按钮的标签",
    FLASHCARD_BLACKOUT_DESC: "自定义“忘记”按钮的标签",
    FLASHCARD_INCORRECT_DESC: "自定义“猜错”按钮的标签",
    "FLASHCARD_INCORRECT (EASY)_DESC": "自定义“猜错（简单）”按钮的标签",
    UNTRACK_WITH_REVIEWTAG: "UntrackWithReviewTag",

    // sidebar.ts
    NOTES_REVIEW_QUEUE: "笔记复习序列",
    CLOSE: "临近",
    NEW: "新",
    YESTERDAY: "昨天",
    TODAY: "今天",
    TOMORROW: "明天",

    // stats-modal.tsx
    STATS_TITLE: "数据",
    MONTH: "月",
    QUARTER: "季",
    YEAR: "年",
    LIFETIME: "全部",
    FORECAST: "预期",
    FORECAST_DESC: "将要到期的卡片数量",
    SCHEDULED: "已排期",
    DAYS: "天",
    NUMBER_OF_CARDS: "卡片数量",
    REVIEWS_PER_DAY: "平均: 复习${avg} /天",
    INTERVALS: "间隔",
    INTERVALS_DESC: "到下一次复习的时间间隔",
    COUNT: "计数",
    INTERVALS_SUMMARY: "平均间隔时间: ${avg}, 最长间隔时间: ${longest}",
    EASES: "掌握程度",
    EASES_SUMMARY: "平均掌握程度: ${avgEase}",
    CARD_TYPES: "卡片类型",
    CARD_TYPES_DESC: "如有，将显示隐藏的卡片",
    CARD_TYPE_NEW: "新",
    CARD_TYPE_YOUNG: "较新",
    CARD_TYPE_MATURE: "熟悉",
    CARD_TYPES_SUMMARY: "总卡片数: ${totalCardsCount}",
    REVIEWED_TODAY: "今天复习情况",
    REVIEWED_TODAY_DESC: "今天已经复习的卡片/笔记的数量",
    NEW_LEARNED: "新学",
    DUE_REVIEWED: "复习",
    REVIEWED_TODAY_SUMMARY: "总复习数: ${totalreviewedCount}",
    DATE: "日期",
};
