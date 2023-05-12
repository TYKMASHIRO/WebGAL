export const jp = {
  // 通用
  common: {
    yes: 'はい',
    no: 'いいえ',
  },

  menu: {
    options: {
      title: '設定',
      pages: {
        system: {
          title: 'システム',
          options: {
            autoSpeed: {
              title: '自動再生速度',
              options: {
                slow: '遅い',
                medium: '基準',
                fast: '速い',
              },
            },
            language: {
              title: '言語',
            },
            resetData: {
              title: 'データの削除またに復元',
              options: {
                clearGameSave: '全てのアーカイブ削除',
                resetSettings: 'デフォルト設置を復元',
                clearAll: '全てのデータを削除',
              },
              dialogs: {
                clearGameSave: 'アーカイブをクリアしてもよろしいでしか',
                resetSettings: 'デフォルト設定を復元してもよろしいですか',
                clearAll: '全てのデータを削除してもよろしいですか',
              },
            },
            gameSave: {
              title: 'アーカイブとオプションの導入または導出',
              options: {
                export: 'アーカイブとオプションの導出',
                import: 'アーカイブとオプションの導入',
              },
              dialogs: {
                import: {
                  title: 'アーカイブとオプションを導入しますか',
                  tip: '導入アーカイブ',
                  error: 'アーカイブ解析に失败しました',
                },
              },
            },
          },
        },
        display: {
          title: '画面',
          options: {
            textSpeed: {
              title: 'テキスト表示速度',
              options: {
                slow: '遅い',
                medium: '基準',
                fast: '速い',
              },
            },
            textSize: {
              title: 'テキストサイズ',
              options: {
                small: '小',
                medium: '中',
                large: '大',
              },
            },
            textFont: {
              title: 'テキストフォント',
              options: {
                siYuanSimSun: '源ノ明朝',
                SimHei: '黒体',
              },
            },
            textPreview: {
              title: 'テキスト表示プレビュー',
              // todo
              text: '',
            },
          },
        },
        sound: {
          title: 'サウンド',
          options: {
            volumeMain: { title: 'マスターボリューム' },
            vocalVolume: { title: '声量' },
            bgmVolume: { title: 'BGMのボリューム' },
          },
        },
        // language: {
        //   title: '言語',
        //   options: {
        //   },
        // },
      },
    },
    saving: {
      title: 'アーカイブ',
    },
    loadSaving: {
      title: 'アーカイブをロード',
    },
    title: {
      title: '見出し',
    },
    exit: {
      title: '戻り',
    },
  },

  // todo
  title: {
    start: {
      title: '开始游戏',
      subtitle: 'START',
    },
    continue: {
      title: '继续游戏',
      subtitle: 'CONTINUE',
    },
    options: {
      title: '游戏选项',
      subtitle: 'OPTIONS',
    },
    load: {
      title: '读取存档',
      subtitle: 'LOAD',
    },
    extra: {
      title: '鉴赏模式',
      subtitle: 'EXTRA',
    },
  },

  gaming: {
    noSaving: '暂无存档',
    buttons: {
      hide: '隐藏',
      show: '显示',
      backlog: '回想',
      replay: '重播',
      auto: '自动',
      forward: '快进',
      quicklySave: '快速存档',
      quicklyLoad: '快速读档',
      save: '存档',
      load: '读档',
      options: '选项',
      title: '标题',
    },
  },
};
