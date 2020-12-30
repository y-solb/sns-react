import { createGlobalStyle} from "styled-components";
import reset from "styled-reset";

//외부에서 import하기 때문에 내보내기
export default createGlobalStyle`
    ${reset} 

        *{
            box-sizing:border-box;
        }
`;
// 