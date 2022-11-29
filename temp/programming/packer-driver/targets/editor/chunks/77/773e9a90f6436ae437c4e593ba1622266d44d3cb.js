System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, AudioSource, Node, _dec, _class, _crd, ccclass, property, ts;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      AudioSource = _cc.AudioSource;
      Node = _cc.Node;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "54f71S3X4xJZ5dkhcjN3au7", "ts", undefined);

      __checkObsolete__(['_decorator', 'Component', 'AudioSource', 'Node']);

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
          let btnNode = find('Main');
          btnNode.on(Node.EventType.TOUCH_START, this.playAudio, this);
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
//# sourceMappingURL=773e9a90f6436ae437c4e593ba1622266d44d3cb.js.map