/** @jsxImportSource @emotion/react */

import Snapchat from '../../../../assets/snapchat.png'
import Facebook from '../../../../assets/facebook.png'
import X from '../../../../assets/x.png'

import { socialsStyle, socialsImgBoxStyle, socialsTextStyle } from './styles';

const Socials = () => {
    return (
        <div css={socialsStyle} >
            <p css={socialsTextStyle}>Найдите нас:</p>
            <div css={socialsImgBoxStyle}>
                <a href="http://#" target="_blank" rel="noopener noreferrer">
                    <img src={Snapchat} alt="Snapchat" />
                </a>
                <a href="http://#" target="_blank" rel="noopener noreferrer">
                    <img src={Facebook} alt="Facebook" />
                </a>
                <a href="http://#" target="_blank" rel="noopener noreferrer">
                    <img src={X} alt="X" />
                </a>
            </div>
        </div>
    )
}
export default Socials;