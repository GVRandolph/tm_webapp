import React, {Component} from "react";
import "./css/shareButton.css";
import clipboardOK from "./images/ClipboardOK.png";

class ShareButton extends Component{
    state = {
        copied: false,
        opened: false
    };

    copyToClipboard(){


        const el = document.createElement("textarea");
        el.value = this.props.text;
        document.body.appendChild(el);
        el.select();
        document.execCommand("copy");
        document.body.removeChild(el);
        this.setState({copied: true});

    }


    shareToFb(){

        let url = 'https://www.facebook.com/sharer.php?';
        let dynUrl = 'http://elyoukey.com/turingmachine/shareapp/?';
        let sequence = '';
        let seq = '';
        let seqArr = [];
        for(let r=0; r < this.props.finalTab.length ; r++ ){
            seq = '';
            for(let c=0; c < this.props.finalTab[r].length ; c++ ) {
                switch(this.props.finalTab[r][c]){
                    case 1:
                        seq += c+'1';
                        break;
                    case 2:
                        seq += c+'0';
                        break;
                }
            }
            seqArr.push(seq);
        }
        sequence = seqArr.join('_');

        dynUrl += 'pb='+this.props.game.hash.replace(/ /g,"");
        dynUrl += '&daily='+this.props.dailyText;
        dynUrl += '&n='+this.props.game.n;
        dynUrl += '&seq='+sequence;
        dynUrl += '&win='+this.props.winSolo;
        url += 'u='+encodeURIComponent(dynUrl);
        let pop= window.open(url , 'shareFB', 'height=400,menubar=no,width,400');
    }

    sharetoTwitter(){
        let url = 'https://twitter.com/intent/tweet?o=0';

        // text
        let text = this.props.socialTXT;
        text = encodeURIComponent(text);
        url += '&text='+text;

        // url
        let dynUrl = 'http://elyoukey.com/turingmachine/shareapp/?';
        let sequence = '';
        let seq = '';
        let seqArr = [];
        for(let r=0; r < this.props.finalTab.length ; r++ ){
            seq = '';
            for(let c=0; c < this.props.finalTab[r].length ; c++ ) {
                switch(this.props.finalTab[r][c]){
                    case 1:
                        seq += c+'1';
                        break;
                    case 2:
                        seq += c+'0';
                        break;
                }
            }
            seqArr.push(seq);
        }
        sequence = seqArr.join('_');

        dynUrl += 'pb='+this.props.game.hash.replace(/ /g,"");
        dynUrl += '&daily='+this.props.dailyText;
        dynUrl += '&n='+this.props.game.n;
        dynUrl += '&seq='+sequence;
        dynUrl += '&win='+this.props.winSolo;
        url += '&url='+encodeURIComponent(dynUrl);
        let pop= window.open(url , 'shareFB', 'height=400,menubar=no,width,400');
    }
    render(){
        let className = "copyButton " + ((this.state.copied)?"copied":" ");
        return(
            <div className="shareButton">
                <div
                    className={className}
                    onClick={()=>this.copyToClipboard()}>
                </div>
                <div
                className="fbButton"
                onClick={()=>this.shareToFb()}

                ></div>
                <div
                    className="twitterButton"
                    onClick={()=>this.sharetoTwitter()}
                />
            </div>

        );
    }
}
export default ShareButton;