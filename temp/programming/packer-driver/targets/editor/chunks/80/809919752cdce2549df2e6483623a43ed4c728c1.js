System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, AudioSource, assetManager, AudioClip, callback, _dec, _class, _crd, ccclass, property, ts;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      AudioSource = _cc.AudioSource;
      assetManager = _cc.assetManager;
      AudioClip = _cc.AudioClip;
      callback = _cc.callback;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "54f71S3X4xJZ5dkhcjN3au7", "ts", undefined);

      __checkObsolete__(['_decorator', 'Component', 'AudioSource', 'Node', 'find', 'assetManager', 'AudioClip', 'callback']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("ts", ts = (_dec = ccclass('ts'), _dec(_class = class ts extends Component {
        constructor(...args) {
          super(...args);
          this.audioSource = void 0;
        }

        start() {
          //let btnNode = find('Canvas');
          //btnNode!.on(Node.EventType.TOUCH_START, this.playAudio, this);
          assetManager.loadRemote('http://100001.tj-game.zprod.cn/music_bg.mp3', {
            audioLoadMode: AudioClip.AudioType.DOM_AUDIO
          }, callback);
        }

        playAudio() {
          console.log('触摸播放音乐');
          this.node.getComponent(AudioSource).play();
        }

        update(deltaTime) {}

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=809919752cdce2549df2e6483623a43ed4c728c1.js.map