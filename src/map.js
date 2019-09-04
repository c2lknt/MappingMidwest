/** @jsx jsx */
import { css, jsx } from '@emotion/core'
const Maps = props => (
    <div css={css`
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                z-index: -2;
                overflow: hidden;
            }`}>
        <iframe 
            title="Story Map page" 
            src={'https://newberrydis.github.io/mapsonly/' + props.content + '.html' } 
            css={css`
                border: 0;
                position: relative;
                width: 100%;
                height: 100%;
                z-index: -2;
            }`}/>
    </div>
)
export default Maps;