import { _decorator, Component, AudioSource, Node,find,assetManager,AudioClip,callback} from 'cc';
const { ccclass, property } = _decorator;

@ccclass('ts')
export class ts extends Component {
	
	audioSource: AudioSource;
	
	
    start() {
		let btnNode = find('Canvas');
		btnNode!.on(Node.EventType.TOUCH_START, this.playAudio, this);
		
    }
	
	playAudio () {
		console.log('触摸播放音乐')
        this.node.getComponent(AudioSource).play();
		
		/* assetManager.loadRemote('http://100001.tj-game.zprod.cn/music_bg.mp3', {
		    audioLoadMode: AudioClip.AudioType.DOM_AUDIO,
		}, callback); */
		
    }
	
    update(deltaTime: number) {
        
    }
}

